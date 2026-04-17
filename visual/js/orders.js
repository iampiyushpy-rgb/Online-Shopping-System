document.addEventListener('DOMContentLoaded', () => {
    const ordersContainer = document.getElementById('ordersContainer');
    const orderCountBadge = document.getElementById('orderCountBadge');

    function renderOrders(orders) {
        if (!orders || orders.length === 0) {
            ordersContainer.innerHTML = `
                <div class="empty-orders" data-aos="fade-up">
                    <i class="bi bi-box2-heart"></i>
                    <h2 class="fw-bold text-dark mt-4" style="font-family: 'Lora', serif;">No Orders Found</h2>
                    <p class="text-secondary mt-3 fs-5">You haven't placed any orders yet. Discover our fresh selections!</p>
                    <a href="../../index.html" class="btn btn-primary px-5 py-3 mt-4 rounded-pill fw-bold shadow-lg" style="background:#5A8A5A;border:none;font-size:1.1rem;transition: transform 0.2s;">Start Shopping</a>
                </div>
            `;
            if (orderCountBadge) orderCountBadge.innerText = '0 Orders';
            return;
        }

        if (orderCountBadge) {
            orderCountBadge.innerText = `${orders.length} Order${orders.length > 1 ? 's' : ''}`;
        }
        ordersContainer.innerHTML = '';

        orders.sort((a, b) => new Date(b.date) - new Date(a.date));

        orders.forEach((order, index) => {
            const dateObj = new Date(order.date);
            const dateString = dateObj.toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });

            let itemsHTML = '';
            if (Array.isArray(order.items)) {
                order.items.forEach(item => {
                    const imgUrl = item.image || item.img || '../assets/placeholder.jpg';
                    const price = item.price ? (String(item.price).includes('₹') ? item.price : `₹${item.price}`) : 'N/A';
                    itemsHTML += `
                        <div class="config-item">
                            <img src="${imgUrl}" alt="${item.name}" class="order-item-img shadow-sm bg-white">
                            <div class="flex-grow-1">
                                <h6 class="mb-1 fw-bold text-dark fs-6">${item.name}</h6>
                                <p class="mb-0 text-secondary fw-medium" style="font-size:0.9rem;">Qty: <span class="bg-light px-2 py-1 rounded text-dark ms-1 shadow-sm">${item.quantity || 1}</span></p>
                            </div>
                            <div class="text-end ms-2">
                                <span class="fw-bold fs-5 text-dark" style="color:#5A8A5A !important;">${price}</span>
                            </div>
                        </div>
                    `;
                });
            }

            const status = order.status || 'Processing';
            let icon = 'bi-clock-history';
            if (status === 'Shipped') icon = 'bi-truck';
            if (status === 'Delivered') icon = 'bi-check2-circle';

            const orderHTML = `
                <div class="order-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="order-header">
                        <div class="d-flex align-items-center flex-wrap gap-4">
                            <div class="d-flex flex-column">
                                <span class="text-muted small fw-bold text-uppercase mb-1" style="letter-spacing:1px;font-size:0.75rem;">Date Placed</span>
                                <span class="fs-6 fw-bold text-dark">${dateString}</span>
                            </div>
                            <div class="d-none d-md-block" style="width: 1px; height: 40px; background: #e0e0e0;"></div>
                            <div class="d-flex flex-column">
                                <span class="text-muted small fw-bold text-uppercase mb-1" style="letter-spacing:1px;font-size:0.75rem;">Total Amount</span>
                                <span class="fs-5 fw-bold" style="color:#5A8A5A;">${order.total || '₹0.00'}</span>
                            </div>
                            <div class="d-none d-md-block" style="width: 1px; height: 40px; background: #e0e0e0;"></div>
                            <div class="d-flex flex-column">
                                <span class="text-muted small fw-bold text-uppercase mb-1" style="letter-spacing:1px;font-size:0.75rem;">Order ID</span>
                                <span class="font-monospace text-secondary fs-6">#ORD-${(order.id || Math.floor(Math.random()*10000)).toString().padStart(5, '0')}</span>
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-end mt-3 mt-md-0">
                            <span class="order-status status-${status} shadow-sm border border-white"><i class="bi ${icon} me-2 fs-5"></i>${status}</span>
                        </div>
                    </div>
                    <div class="order-body">
                        <h5 class="fw-bold text-dark mb-4" style="font-family: 'Lora', serif;">Package Items</h5>
                        <div class="order-item-list">
                            ${itemsHTML}
                        </div>
                        <div class="mt-5 pt-3 border-top d-flex justify-content-between align-items-center flex-wrap gap-3">
                            <a href="#" class="text-decoration-none fw-bold" style="color:#5A8A5A;transition: color 0.2s;"><i class="bi bi-question-circle me-1"></i> Need help with this order?</a>
                            <div class="d-flex gap-3">
                                <button class="track-btn"><i class="bi bi-geo-alt me-2"></i>Track Package</button>
                                <button class="btn rounded-pill px-4 fw-bold shadow-sm" style="background:#5A8A5A;color:white;border:none;transition: transform 0.2s;"><i class="bi bi-arrow-repeat me-2"></i>Buy Again</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            ordersContainer.insertAdjacentHTML('beforeend', orderHTML);
        });
    }

    function fetchOrders() {
        const checkDB = indexedDB.open('PBSSDOrderDB', 1);
        
        checkDB.onsuccess = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('orders')) {
                renderOrders([]);
                db.close();
                return;
            }
            const tx = db.transaction(['orders'], 'readonly');
            const store = tx.objectStore('orders');
            const getReq = store.getAll();
            
            getReq.onsuccess = () => {
                renderOrders(getReq.result || []);
            };
            getReq.onerror = () => {
                renderOrders([]);
            };
            
            tx.oncomplete = () => {
                db.close();
            };
        };

        checkDB.onerror = () => {
            renderOrders([]);
        };
    }

    setTimeout(fetchOrders, 400); // small delay to show loader
});
