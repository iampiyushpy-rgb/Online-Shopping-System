document.addEventListener('DOMContentLoaded', () => {
    let cartItems = JSON.parse(localStorage.getItem('pbssd_cart') || '[]');
    
    const cartContainer = document.getElementById('cartItemsContainer');
    const subtotal_amount = document.getElementById('subtotalAmount');
    const tax_amount = document.getElementById('taxAmount');
    const total_amount = document.getElementById('totalAmount');
    const delivery_fee = document.getElementById('deliveryAmount');

    function renderCart() {
        cartContainer.innerHTML = '';

        if (cartItems.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="bi bi-cart-x"></i>
                    <h4>Your cart is empty</h4>
                    <p class="text-center mt-3">Looks like you haven't added any items yet.</p>
                    <a href="../../index.html" class="btn btn-nature mt-3 px-4">Start Shopping</a>
                </div>
            `;
            updateTotals();
            return;
        }

        cartItems.forEach((item, index) => {
            const itemHTML = `
                <div class="cart-item align-items-center justify-content-between mb-4 p-3 shadow-sm">
                    <div class="col-lg-2 cart-item-img-w">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img me-4">
                    </div>
                    <div class="col-lg-8 flex-grow-1 cart-item-details-w">
                        <h5 class="fw-bold mb-1">${item.name}</h5>
                        <p class="text-secondary mb-2">₹${parsePrice(item.price).toFixed(2)}</p>
                        <div class="cart-item-funcs d-flex align-items-center">
                            <div class="d-flex align-items-center me-4">
                                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">
                                    <i class="bi bi-dash"></i>
                                </button>
                                <input type="text" class="quantity-input mx-2" value="${item.quantity}" readonly>
                                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">
                                    <i class="bi bi-plus"></i>
                                </button>
                            </div>
                            <button class="remove-btn" onclick="removeItem(${index})">
                                <i class="bi bi-trash3 me-1"></i> Remove
                            </button>
                        </div>
                    </div>
                    <div class="text-end">
                        <span class="fw-bold fs-5 color-nature">₹${(parsePrice(item.price) * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
            `;
            cartContainer.insertAdjacentHTML('beforeend', itemHTML);
        });

        updateTotals();
    }

    function parsePrice(price) {
        if (typeof price === 'number') return price;
        return parseFloat(String(price).replace(/[^\d.-]/g, '')) || 0;
    }

    window.updateQuantity = (index, change) => {
        if (cartItems[index].quantity + change > 0) {
            cartItems[index].quantity += change;
            syncCart();
            renderCart();
        }
    };

    window.removeItem = (index) => {
        cartItems.splice(index, 1);
        syncCart();
        renderCart();
    };
    
    function syncCart() {
        localStorage.setItem('pbssd_cart', JSON.stringify(cartItems));
    }

    function updateTotals() {
        const subtotal = cartItems.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);
        const delivery = subtotal > 0 ? 50 : 0;
        const tax = subtotal * 0.05; 
        const total = subtotal + tax + delivery;

        subtotal_amount.innerText = `₹${subtotal.toFixed(2)}`;
        delivery_fee.innerText = `₹${delivery.toFixed(2)}`;
        tax_amount.innerText = `₹${tax.toFixed(2)}`;
        total_amount.innerText = `₹${total.toFixed(2)}`;
    }

    
    renderCart();   //the initial render of the cart when the page loads


    const checkoutBtn = document.querySelector('.checkout-btn');
    let checkoutModalInstance = null;

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cartItems.length === 0) {
                alert('Your cart is empty. Please add items before checking out.');
                return;
            }
            
            
            document.getElementById('checkoutProgress').style.width = '33%';
            document.getElementById('checkoutProgress').classList.remove('bg-success');
            document.getElementById('step-address').classList.remove('d-none');
            document.getElementById('step-payment').classList.add('d-none');
            document.getElementById('step-thankyou').classList.add('d-none');
            
            
            const paymentStep = document.getElementById('step-payment');
            const buttons = paymentStep.querySelectorAll('button');
            buttons.forEach(btn => btn.disabled = false);
            buttons[1].innerText = 'Place Order';
            
            if (!checkoutModalInstance) {
                checkoutModalInstance = new bootstrap.Modal(document.getElementById('checkoutModal'));
            }
            checkoutModalInstance.show();
        });
    }

    window.nextStep = (step) => {
        if (step === 2) {
            document.getElementById('checkoutProgress').style.width = '66%';
            document.getElementById('step-address').classList.add('d-none');
            document.getElementById('step-payment').classList.remove('d-none');
        } else if (step === 1) {
            document.getElementById('checkoutProgress').style.width = '33%';
            document.getElementById('step-address').classList.remove('d-none');
            document.getElementById('step-payment').classList.add('d-none');
        }
    };

    window.processOrder = () => {
        
        document.getElementById('checkoutProgress').style.width = '100%';
        
        const paymentStep = document.getElementById('step-payment');
        const buttons = paymentStep.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = true);
        buttons[1].innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Processing...';

        setTimeout(() => {
            document.getElementById('step-payment').classList.add('d-none');
            document.getElementById('step-thankyou').classList.remove('d-none');
            document.getElementById('checkoutProgress').classList.add('bg-success');
        }, 1500);
    };

    window.clearCart = () => {
        cartItems = [];
        syncCart();
        renderCart();
    };
});