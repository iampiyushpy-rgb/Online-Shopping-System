document.addEventListener('DOMContentLoaded', () => {
    const ordersContainer = document.getElementById('ordersContainer');
    const orderCountBadge = document.getElementById('orderCountBadge');

    function renderOrders(orders) {
        if (!orders || orders.length === 0) {
            ordersContainer.innerHTML = `
                <div class="empty-orders shadow-sm">
                    <i class="bi bi-bag-x"></i>
                    <h4 class="fw-bold">No Orders Found</h4>
                    <p class="text-secondary mt-3">You haven't placed any orders yet. Discover our fresh selections!</p>
                    <a href="../../index.html" class="btn btn-primary px-5 py-3 mt-4 rounded-pill fw-bold" style="background:#5A8A5A;border:none;">Start Shopping</a>
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

        orders.forEach(order => {
            const dateObj = new Date(order.date);
            const dateString = dateObj.toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });

            let itemsHTML = '';
            if (Array.isArray(order.items)) {
                order.items.forEach(item => {
                    const imgUrl = item.image || item.img || '../assets/placeholder.jpg';
                    const price = item.price ? (String(item.price).includes('₹') ? item.price : `₹${item.price}`) : 'N/A';
                    itemsHTML += `
                        <div class="d-flex align-items-center mb-3 p-3 border rounded-3 bg-light config-item">
                            <img src="${imgUrl}" alt="${item.name}" class="order-item-img me-4 shadow-sm bg-white">
                            <div class="flex-grow-1">
                                <h5 class="mb-1 fw-bold text-dark">${item.name}</h5>
                                <p class="mb-0 text-secondary fw-semibold">Quantity: <span class="text-dark">${item.quantity || 1}</span></p>
                            </div>
                            <div class="text-end ms-3">
                                <span class="fw-bold fs-6 text-dark">${price}</span>
                            </div>
                        </div>
                    `;
                });
            }

            const orderHTML = `
                <div class="order-card" data-aos="fade-up">
                    <div class="order-header">
                        <div class="d-flex flex-column">
                            <span class="text-muted small fw-bold text-uppercase mb-1">Order Placed</span>
                            <span class="fs-6 fw-bold text-dark">${dateString}</span>
                        </div>
                        <div class="d-flex flex-column text-end">
                            <span class="text-muted small fw-bold text-uppercase mb-1">Total</span>
                            <span class="fs-5 fw-bold color-nature">${order.total || '₹0.00'}</span>
                        </div>
                        <div class="d-flex flex-column text-end">
                            <span class="text-muted small fw-bold text-uppercase mb-1">Order ID</span>
                            <span class="font-monospace text-secondary">#ORD-${order.id.toString().padStart(5, '0')}</span>
                        </div>
                        <div>
                            <span class="order-status status-${order.status || 'Processing'}"><i class="bi bi-clock-history me-1"></i>${order.status || 'Processing'}</span>
                        </div>
                    </div>
                    <div class="order-body">
                        <h6 class="fw-bold mb-3">Items in your order:</h6>
                        ${itemsHTML}
                        <div class="mt-4 text-end">
                            <button class="btn btn-outline-secondary rounded-pill px-4 fw-bold me-2"><i class="bi bi-receipt me-2"></i>Invoice</button>
                            <button class="btn btn-nature rounded-pill px-4 fw-bold" style="background:#5A8A5A;color:white;border:none;"><i class="bi bi-arrow-repeat me-2"></i>Order Again</button>
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
