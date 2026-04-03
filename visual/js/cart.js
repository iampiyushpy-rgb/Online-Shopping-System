document.addEventListener('DOMContentLoaded', () => {
    
    let cartItems = [
        {
            id: 1,
            name: "Choco Chip Cookies",
            price: 299.00,
            quantity: 1,
            image: "../assets/Choco Chip Cookies.jpg"
        },
        {
            id: 2,
            name: "Hazelnut Praline",
            price: 150.00,
            quantity: 1,
            image: "../assets/Hazelnut Praline.jpg"
        },
        {
            id: 3,
            name: "Fresh Strawberries",
            price: 60.00,
            quantity: 1,
            image: "../assets/Fresh Strawberries.jpg"
        }
    ];

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
                        <p class="text-secondary mb-2">₹${item.price.toFixed(2)}</p>
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
                        <span class="fw-bold fs-5 color-nature">₹${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
            `;
            cartContainer.insertAdjacentHTML('beforeend', itemHTML);
        });

        updateTotals();
    }

    window.updateQuantity = (index, change) => {
        if (cartItems[index].quantity + change > 0) {
            cartItems[index].quantity += change;
            renderCart();
        }
    };

    window.removeItem = (index) => {
        cartItems.splice(index, 1);
        renderCart();
    };

    function updateTotals() {
        const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const delivery = subtotal > 0 ? 50 : 0;
        const tax = subtotal * 0.05; 
        const total = subtotal + tax + delivery;

        subtotal_amount.innerText = `₹${subtotal.toFixed(2)}`;
        delivery_fee.innerText = `₹${delivery.toFixed(2)}`;
        tax_amount.innerText = `₹${tax.toFixed(2)}`;
        total_amount.innerText = `₹${total.toFixed(2)}`;
    }

    
    renderCart();   //the initial render of the cart when the page loads
});