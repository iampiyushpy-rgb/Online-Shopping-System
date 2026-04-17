document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sellerRegistrationForm');
    const submitBtn = document.getElementById('sellerSubmitBtn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            submitBtn.disabled = true;
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Processing...';

            const sellerName = document.getElementById('sellerName').value.trim();
            const shopName = document.getElementById('shopName').value.trim();
            const email = document.getElementById('sellerEmail').value.trim();
            const password = document.getElementById('sellerPassword').value;
            const aadharNumber = document.getElementById('aadharNumber').value.trim();
            const gstNumber = document.getElementById('gstNumber').value.trim();
            const contactInfo = document.getElementById('contactInfo').value.trim();
            const shopLocation = document.getElementById('shopLocation').value.trim();
            
            const photoInput = document.getElementById('sellerPhoto');
            let photoBase64 = null;

            if (photoInput.files && photoInput.files[0]) {
                try {
                    photoBase64 = await readFileAsDataURL(photoInput.files[0]);
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error reading photo',
                        text: 'Please try uploading the photo again.'
                    });
                    resetBtn(submitBtn, originalBtnText);
                    return;
                }
            }

            const sellerData = {
                id: 'SLLR_' + Date.now().toString(),
                sellerName,
                shopName,
                email,
                password,
                aadharNumber,
                gstNumber,
                contactInfo,
                shopLocation,
                sellerPhoto: photoBase64,
                registeredAt: new Date().toISOString(),
                status: 'Pending Verification'
            };

            const request = indexedDB.open('PBSSDSellerDB', 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('sellers')) {
                    db.createObjectStore('sellers', { keyPath: 'id' });
                }
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(['sellers'], 'readwrite');
                const store = transaction.objectStore('sellers');

                const addRequest = store.add(sellerData);

                addRequest.onsuccess = () => {
                    localStorage.setItem('pbssd_seller', JSON.stringify({
                        id: sellerData.id,
                        sellerName: sellerData.sellerName,
                        shopName: sellerData.shopName
                    }));
                    
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful!',
                        text: 'Welcome aboard! Redirecting you to your seller dashboard...',
                        confirmButtonColor: '#5A8A5A',
                        timer: 2000,
                        showConfirmButton: false
                    }).then(() => {
                        window.location.href = 'seller_dashboard.html';
                    });
                    
                    form.reset();
                    resetBtn(submitBtn, originalBtnText);
                };

                addRequest.onerror = () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Submission Failed',
                        text: 'There was an issue saving your application. Please try again.',
                        confirmButtonColor: '#e11d48'
                    });
                    resetBtn(submitBtn, originalBtnText);
                };
                
                transaction.oncomplete = () => {
                    db.close();
                };
            };

            request.onerror = () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Database Error',
                    text: 'Unable to connect to the local database.',
                    confirmButtonColor: '#e11d48'
                });
                resetBtn(submitBtn, originalBtnText);
            };
        });
    }

    // Seller Login Form Execution
    const loginForm = document.getElementById('sellerLoginForm');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            loginSubmitBtn.disabled = true;
            const originalLoginText = loginSubmitBtn.innerText;
            loginSubmitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Logging in...';
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPass').value;
            
            const request = indexedDB.open('PBSSDSellerDB', 1);
            
            request.onsuccess = (event) => {
                const db = event.target.result;
                
                // Safety check if database was just created but no data
                if (!db.objectStoreNames.contains('sellers')) {
                    loginFailed('No registered sellers found.');
                    db.close();
                    return;
                }
                
                const tx = db.transaction(['sellers'], 'readonly');
                const store = tx.objectStore('sellers');
                const getAllReq = store.getAll();
                
                getAllReq.onsuccess = () => {
                    const sellers = getAllReq.result || [];
                    const matchedSeller = sellers.find(s => s.email === email && s.password === password);
                    
                    if (matchedSeller) {
                        localStorage.setItem('pbssd_seller', JSON.stringify({
                            id: matchedSeller.id,
                            sellerName: matchedSeller.sellerName,
                            shopName: matchedSeller.shopName
                        }));
                        
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful!',
                            text: 'Redirecting to your dashboard...',
                            confirmButtonColor: '#5A8A5A',
                            timer: 1500,
                            showConfirmButton: false
                        }).then(() => {
                            window.location.href = 'seller_dashboard.html';
                        });
                    } else {
                        loginFailed('Invalid email address or password.');
                    }
                };
                
                getAllReq.onerror = () => {
                    loginFailed('Error verifying credentials.');
                };
                
                tx.oncomplete = () => db.close();
            };
            
            request.onerror = () => loginFailed('Database connection failed.');
        });
    }

    function loginFailed(msg) {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: msg,
            confirmButtonColor: '#e11d48'
        });
        loginSubmitBtn.disabled = false;
        loginSubmitBtn.innerText = 'Login';
    }

    function resetBtn(btn, text) {
        btn.disabled = false;
        btn.innerText = text;
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
