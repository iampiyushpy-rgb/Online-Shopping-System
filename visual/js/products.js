const categories = [
    'Health & Wellness', 'Beauty & Personal Care', 'Pet Supplies', 'Baby & Kids', 
    'Office & Stationery', 'Home Appliances', 'Smart Home & IoT', 'Footwear', 
    'Jewelry & Watches', 'Groceries & Gourmet Food', 'Bags & Luggage', 
    'Musical Instruments', 'Gardening & Outdoor', 'Industrial & Scientific (B2B)', 
    'Digital Products & Services'
];

const productPool = [
    { name: 'Multivitamins', price: '₹1,200', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500' },
    { name: 'Face Serum', price: '₹899', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500' },
    { name: 'Dog Food', price: '₹2,500', img: 'https://images.unsplash.com/photo-1589924691106-906f13979416?w=500' },
    { name: 'Baby Monitor', price: '₹4,500', img: 'https://images.unsplash.com/photo-1555252333-978fead06d0c?w=500' },
    { name: 'Notebook Set', price: '₹599', img: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500' },
    { name: 'Air Purifier', price: '₹12,999', img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500' },
    { name: 'Smart Bulb', price: '₹999', img: 'https://images.unsplash.com/photo-1550524513-317059df8c52?w=500' },
    { name: 'Running Shoes', price: '₹3,200', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
    { name: 'Smartwatch', price: '₹5,499', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
    { name: 'Organic Quinoa', price: '₹450', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500' },
    { name: 'Travel Suitcase', price: '₹7,500', img: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500' },
    { name: 'Acoustic Guitar', price: '₹6,800', img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500' },
    { name: 'Indoor Planter', price: '₹1,299', img: 'https://images.unsplash.com/photo-1485955900106-19499164c88b?w=500' },
    { name: 'Power Drill', price: '₹4,200', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500' },
    { name: 'Software License', price: '₹2,999', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500' }
];

const products = [];
for (let i = 0; i < 60; i++) {
    const template = productPool[i % productPool.length];
    products.push({
        id: i,
        name: `${template.name} v${i}`,
        section: categories[i % 6],
        price: template.price,
        rating: Math.floor(Math.random() * 2) + 4,
        description: 'This is a premium product curated with high quality materials. It comes with a 1-year manufacturer warranty and a 30-day return policy.',
        image: template.img,
        images: [
            template.img,
            `https://picsum.photos/seed/${i + 101}/600/600`,
            `https://picsum.photos/seed/${i + 102}/600/600`,
            `https://picsum.photos/seed/${i + 103}/600/600`,
            `https://picsum.photos/seed/${i + 104}/600/600`
        ]
    });
}

let toastTimeout;

        function showToast() {
            const cartToast = document.getElementById('cart-toast');
            if (cartToast) {
                cartToast.classList.add('show');
                clearTimeout(toastTimeout);
                toastTimeout = setTimeout(() => {
                    cartToast.classList.remove('show');
                }, 5000);
            }
        }

        function closeToast() {
            const cartToast = document.getElementById('cart-toast');
            if (cartToast) {
                clearTimeout(toastTimeout);
                cartToast.classList.remove('show');
            }
        }

        window.addEventListener('load', () => {
            
            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('id'));

            
            const product = products.find(p => p.id === productId);

            const container = document.getElementById('product-content');

            if (product) {
                
                container.innerHTML = `
                    <div id="cart-toast" class="cart-toast">
                        <div class="toast-icon">
                            <i class="bi bi-check-circle-fill"></i>
                        </div>
                        <div class="toast-content">
                            <p class="fw-bold mb-1">Added to Cart!</p>
                            <a href="visual/template/cart.html" class="btn btn-sm btn-light">Checkout</a>
                        </div>
                        <button class="toast-close" onclick="closeToast()">&times;</button>
                    </div>
                    <main class="c-prduct-d py-5">
                        <div class="row g-5">
                            <div class="col-lg-5">
                                <div class="c-singale-image-box-left">
                                    <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                        </div>
                                        <div class="swiper-button-next"></div>
                                        <div class="swiper-button-prev"></div>
                                    </div>
                                    <div thumbsSlider="" class="swiper mySwiper">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="${product.image}" class="product-img" alt="${product.name}">
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            
                            <div class="col-lg-6">
                                <div class="c-product-con">
                                    <span class="badge bg-success mb-2">${product.section}</span>
                                    <h1 class="heading-lora fw-bold mb-3">${product.name}</h1>
                                    <div class="c-price-product">
                                        <span class="c-normal-p">₹${(parseInt(product.price.replace(/\D/g, '')) + 400).toLocaleString('en-IN')}</span>
                                        <span class="c-discount-p color-nature">${product.price}</span>
                                    </div>
                                    <div class="mb-3 text-warning">
                                        ${'<i class="bi bi-star-fill"></i>'.repeat(product.rating)}
                                        ${'<i class="bi bi-star"></i>'.repeat(5 - product.rating)}
                                    </div>
                                    <p class="lead text-secondary mb-5">${product.description}</p>
                                    <div class="c-delivery-banner">
                                        <img src="visual/assets/delivery-banner.jpg" alt="">
                                    </div>
                                    
                                    <div class="c-actions-wrapper">
                                        <div class="c-quantity-selector mb-4">
                                            <label for="quantity" class="form-label fw-bold">Quantity</label>
                                            <select class="form-select" id="quantity" style="width: 100%;">
                                                <option selected>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                
                                        <div class="gap-3 mb-4">
                                            <button class="btn btn-buy-now flex-grow-1" onclick="openCheckoutModal()">Buy It Now</button>
                                            <button class="btn btn-add-cart flex-grow-1">Add to Cart</button>
                                            <button class="btn btn-favourite flex-grow-1"><i class="bi bi-heart"></i><span style="font-size: 1rem;font-weight: 700;margin-left: 5px"> Add to favourites</span></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </main>
                `;
                document.title = `${product.name} | PBSSD Fresh`;

                setTimeout(() => {
                    var swiper = new Swiper(".mySwiper", {
                        loop: true,
                        spaceBetween: 10,
                        slidesPerView: 4,
                        freeMode: true,
                        watchSlidesProgress: true,
                    });
                    var swiper2 = new Swiper(".mySwiper2", {
                        loop: true,
                        spaceBetween: 10,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        thumbs: {
                            swiper: swiper,
                        },
                    });
                }, 0);

                const addToCartBtn = document.querySelector('.btn-add-cart');
                if (addToCartBtn) {
                    addToCartBtn.addEventListener('click', (event) => {
                        event.preventDefault(); 
                        showToast();
                    });
                }

                window.openCheckoutModal = () => {
                    document.getElementById('checkoutProgress').style.width = '33%';
                    document.getElementById('checkoutProgress').classList.remove('bg-success');
                    document.getElementById('step-address').classList.remove('d-none');
                    document.getElementById('step-payment').classList.add('d-none');
                    document.getElementById('step-thankyou').classList.add('d-none');
                    
                    const paymentStep = document.getElementById('step-payment');
                    const buttons = paymentStep.querySelectorAll('button');
                    buttons.forEach(btn => btn.disabled = false);
                    buttons[1].innerText = 'Place Order';
                    
                    const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
                    modal.show();
                };

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
                    window.location.href = 'index.html';
                };
            } else {
                container.innerHTML = `<div class="col-12 text-center"><h2>Product not found</h2><a href="index.html">Return to home</a></div>`;
            }
        });