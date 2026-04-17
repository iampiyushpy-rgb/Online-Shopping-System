document.addEventListener('DOMContentLoaded', () => {
    // Session Verification
    const sessionText = localStorage.getItem('pbssd_seller');
    if (!sessionText) {
        window.location.href = 'seller.html';
        return;
    }

    const sellerInfo = JSON.parse(sessionText);

    // Populate Sidebar
    document.getElementById('sd_shopName').innerText = sellerInfo.shopName || 'Shop';
    document.getElementById('sd_sellerName').innerText = sellerInfo.sellerName || 'Seller';
    
    // Fetch photo from IndexedDB to avoid localStorage quota issues
    const dbReq = indexedDB.open('PBSSDSellerDB', 1);
    dbReq.onsuccess = (e) => {
        const db = e.target.result;
        if (db.objectStoreNames.contains('sellers')) {
            const tx = db.transaction(['sellers'], 'readonly');
            const store = tx.objectStore('sellers');
            const getStoreReq = store.get(sellerInfo.id);
            getStoreReq.onsuccess = () => {
                const fullSeller = getStoreReq.result;
                if (fullSeller && fullSeller.sellerPhoto) {
                    document.getElementById('sd_sellerPhoto').style.backgroundImage = `url('${fullSeller.sellerPhoto}')`;
                }
            };
        }
    };

    // Logout
    document.getElementById('btn-logout').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('pbssd_seller');
        window.location.href = 'seller.html';
    });

    // Menus
    const menuAddProduct = document.getElementById('menu-add-product');
    const menuMyProducts = document.getElementById('menu-my-products');
    const secAddProduct = document.getElementById('section-add-product');
    const secMyProducts = document.getElementById('section-my-products');
    const pageTitle = document.getElementById('page-title');

    menuAddProduct.addEventListener('click', (e) => {
        e.preventDefault();
        pageTitle.innerText = "Add New Product";
        menuAddProduct.classList.add('active-menu');
        menuAddProduct.classList.remove('text-dark');
        menuMyProducts.classList.remove('active-menu');
        menuMyProducts.classList.add('text-dark');
        secAddProduct.classList.remove('d-none');
        secMyProducts.classList.add('d-none');
    });

    menuMyProducts.addEventListener('click', (e) => {
        e.preventDefault();
        pageTitle.innerText = "My Products";
        menuMyProducts.classList.add('active-menu');
        menuMyProducts.classList.remove('text-dark');
        menuAddProduct.classList.remove('active-menu');
        menuAddProduct.classList.add('text-dark');
        secMyProducts.classList.remove('d-none');
        secAddProduct.classList.add('d-none');
        loadProducts(); // Load dynamically
    });

    // Form submission
    const addProductForm = document.getElementById('addProductForm');
    const submitBtn = document.getElementById('prodSubmitBtn');

    if (addProductForm) {
        addProductForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            submitBtn.disabled = true;
            const originalText = submitBtn.innerText;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Saving...';

            const name = document.getElementById('prodName').value.trim();
            const category = document.getElementById('prodCategory').value;
            const price = parseFloat(document.getElementById('prodPrice').value);
            const stock = parseInt(document.getElementById('prodStock').value);
            const photoInput = document.getElementById('prodImage');

            let photoBase64 = null;
            if (photoInput.files && photoInput.files[0]) {
                photoBase64 = await readFileAsDataURL(photoInput.files[0]);
            }

            const productData = {
                id: 'PROD_' + Date.now().toString(),
                sellerId: sellerInfo.id,
                shopName: sellerInfo.shopName,
                name,
                category,
                price,
                stock,
                image: photoBase64,
                addedAt: new Date().toISOString()
            };

            const request = indexedDB.open('PBSSDProductDB', 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('products')) {
                    const store = db.createObjectStore('products', { keyPath: 'id' });
                    store.createIndex('sellerId', 'sellerId', { unique: false });
                }
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                const tx = db.transaction(['products'], 'readwrite');
                const store = tx.objectStore('products');
                
                const addReq = store.add(productData);

                addReq.onsuccess = () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product Listed!',
                        text: `Your product '${name}' is now active and live on our marketplace.`,
                        confirmButtonColor: '#5A8A5A'
                    });
                    addProductForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                };

                addReq.onerror = () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to list product',
                        text: 'An internal error occurred while trying to save to local IndexedDB.'
                    });
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                };

                tx.oncomplete = () => db.close();
            };
            
            request.onerror = () => {
                Swal.fire({ icon: 'error', title: 'Database Connectivity Error' });
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            };
        });
    }

    function loadProducts() {
        const checkDB = indexedDB.open('PBSSDProductDB', 1);
        
        checkDB.onsuccess = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('products')) {
                renderTable([]);
                db.close();
                return;
            }
            
            const tx = db.transaction(['products'], 'readonly');
            const store = tx.objectStore('products');
            const index = store.index('sellerId');
            const getReq = index.getAll(sellerInfo.id);

            getReq.onsuccess = () => renderTable(getReq.result || []);
            getReq.onerror = () => renderTable([]);
            tx.oncomplete = () => db.close();
        };

        checkDB.onerror = () => renderTable([]);
    }

    function renderTable(products) {
        const tbody = document.getElementById('myProductsTableBody');
        const emptyState = document.getElementById('emptyProducts');

        if (!products || products.length === 0) {
            tbody.innerHTML = '';
            emptyState.classList.remove('d-none');
            return;
        }

        emptyState.classList.add('d-none');
        
        // Sort descending by date
        products.sort((a,b) => new Date(b.addedAt) - new Date(a.addedAt));

        tbody.innerHTML = products.map(p => `
            <tr>
                <td><img src="${p.image || '../assets/placeholder.jpg'}" class="prod-preview-img shadow-sm" alt="product"></td>
                <td class="fw-bold text-dark fs-6">${p.name}</td>
                <td><span class="badge bg-secondary rounded-pill px-3 py-2">${p.category}</span></td>
                <td class="fw-bold color-nature fs-6">₹${p.price.toFixed(2)}</td>
                <td><span class="badge badge-stock rounded-pill">${p.stock} in stock</span></td>
                <td><span class="badge bg-success px-3 py-2 rounded-pill"><i class="bi bi-check-circle me-1"></i>Active</span></td>
            </tr>
        `).join('');
    }

    function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }
});
