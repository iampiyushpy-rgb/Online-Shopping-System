/* ═══════════════════════════════════════════════════════
   FOOD PRODUCT DETAILS — JavaScript
   URL Parameter Parsing & Dynamic Rendering
   ═══════════════════════════════════════════════════════ */

// Base Data (Fetched from centralized foodData.js)
const allFoodProducts = getAllFoodProducts();

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 1;
}

function renderProductDetails() {
    const productId = getProductIdFromUrl();
    const product = allFoodProducts.find(p => p.id === productId) || allFoodProducts[0];

    // Main Info
    document.getElementById('dish-name').innerText = product.name;
    document.getElementById('rest-name').innerText = product.restaurant;
    document.getElementById('dish-price').innerText = `₹${product.price}`;
    document.getElementById('dish-desc').innerText = product.desc || "Delicious food prepared with the finest ingredients. Stay tuned for a flavor explosion!";
    document.getElementById('dish-rating').innerHTML = `<i class="fas fa-star"></i> ${product.rating}`;
    document.getElementById('review-count').innerText = `(${product.reviews.toLocaleString()} reviews)`;
    document.getElementById('main-image').src = product.img;

    // Badge logic
    const badge = document.getElementById('dish-badge');
    if (product.rating >= 4.8) {
        badge.innerText = 'Bestseller';
        badge.style.display = 'block';
    } else {
        badge.style.display = 'none';
    }

    // Features
    document.getElementById('prep-time').innerText = product.time || '20 min';
    document.getElementById('diet-pref').innerText = product.veg ? '100% Pure Veg' : 'Non-Vegetarian';
    const dietIcon = document.getElementById('diet-icon');
    dietIcon.className = product.veg ? 'fas fa-leaf' : 'fas fa-drumstick-bite';

    // Thumbnails
    const thumbList = document.getElementById('thumb-list');
    if (thumbList) {
        const demoImgs = [
            product.img,
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400&h=300&fit=crop"
        ];
        
        thumbList.innerHTML = demoImgs.map((src, index) => `
            <div class="thumb-item ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${src}', this)">
                <img src="${src}" alt="Thumbnail ${index + 1}">
            </div>
        `).join('');
    }

    // Dynamic Video feature
    const videoContainer = document.getElementById('video-container');
    const featureVideo = document.getElementById('feature-video');
    const overlay = document.getElementById('video-overlay');
    if (product.video && videoContainer) {
        featureVideo.src = product.video;
        videoContainer.style.display = 'block';
        featureVideo.pause(); // ensure it starts paused
        if (overlay) overlay.style.display = 'flex';
        featureVideo.controls = false;
    } else if (videoContainer) {
        videoContainer.style.display = 'none';
    }

    // Like button state
    const likeBtn = document.getElementById('like-btn');
    if (likeBtn) {
        let likedItems = JSON.parse(localStorage.getItem('food_liked') || '[]');
        if (likedItems.includes(product.name)) {
            likeBtn.classList.add('liked');
            likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
        }
        
        likeBtn.onclick = () => {
            let liked = JSON.parse(localStorage.getItem('food_liked') || '[]');
            const idx = liked.indexOf(product.name);
            if (idx > -1) {
                liked.splice(idx, 1);
                likeBtn.classList.remove('liked');
                likeBtn.innerHTML = '<i class="far fa-heart"></i>';
            } else {
                liked.push(product.name);
                likeBtn.classList.add('liked');
                likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
            }
            localStorage.setItem('food_liked', JSON.stringify(liked));
            updateNavBadges();
        };
    }
}

function changeMainImage(src, element) {
    document.getElementById('main-image').src = src;
    document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

function playVideo() {
    const video = document.getElementById('feature-video');
    const overlay = document.getElementById('video-overlay');
    if (video) {
        video.controls = true;
        video.play();
        if (overlay) overlay.style.display = 'none';
    }
}

function renderRelatedProducts() {
    const currentId = getProductIdFromUrl();
    const currentProduct = allFoodProducts.find(p => p.id === currentId) || allFoodProducts[0];
    const relatedGrid = document.getElementById('related-grid');
    if (!relatedGrid) return;

    // Filter products: 
    // 1. Same category first (interest-based)
    // 2. Exclude current product
    let relatedPool = allFoodProducts.filter(p => p.id !== currentId && p.category === currentProduct.category);
    
    // If not enough products in same category, add from others
    if (relatedPool.length < 8) {
        const others = allFoodProducts.filter(p => p.id !== currentId && p.category !== currentProduct.category);
        relatedPool = [...relatedPool, ...others];
    }

    // Shuffle and pick 10
    const finalRelated = relatedPool
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);

    relatedGrid.innerHTML = finalRelated.map(item => `
        <div class="food-card" onclick="window.location.href='Food_ProductDetails.html?id=${item.id}'">
            <div class="card-img-wrap" style="height: 160px;">
                <img src="${item.img}" alt="${item.name}">
                <div class="${item.veg ? 'veg-mark' : 'non-veg-mark'}"></div>
            </div>
            <div class="card-content">
                <div class="card-title" style="font-size: 1rem; margin-bottom: 2px;">${item.name}</div>
                <div class="card-restaurant" style="font-size: 0.75rem; margin-bottom: 5px;">${item.restaurant}</div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
                    <div class="card-rating" style="padding: 1px 6px; font-size: 0.7rem;"><i class="fas fa-star"></i> ${item.rating}</div>
                    <div style="font-size: 0.75rem; color: #696969;">${item.time}</div>
                </div>
                <div class="card-meta" style="margin-top: 5px;">
                    <span class="card-price" style="font-size: 1.1rem;">₹${item.price}</span>
                    <button class="add-btn" style="padding: 4px 12px; font-size: 0.8rem;" onclick="event.stopPropagation(); quickAdd(${item.id})">ADD</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add a quick add function for the related items
window.quickAdd = (id) => {
    const product = allFoodProducts.find(p => p.id === id);
    if (!product) return;
    
    let cart = JSON.parse(localStorage.getItem('pbssd_cart') || '[]');
    let existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, image: product.img, quantity: 1, category: 'Food' });
    }
    
    localStorage.setItem('pbssd_cart', JSON.stringify(cart));
    updateNavBadges();
    
    // Show a small toast instead of alert for better UX in slider
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: #27AE60; color: white; padding: 12px 24px; border-radius: 50px;
        font-weight: 700; z-index: 1000; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        animation: slideUp 0.3s ease-out;
    `;
    toast.innerText = `Added ${product.name} to basket!`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease-in forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
};

// Add animations for toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp { from { transform: translate(-50%, 100px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
    @keyframes slideDown { from { transform: translate(-50%, 0); opacity: 1; } to { transform: translate(-50%, 100px); opacity: 0; } }
`;
document.head.appendChild(style);

function updateNavBadges() {
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        const cart = JSON.parse(localStorage.getItem('pbssd_cart') || '[]');
        cartBadge.textContent = cart.length;
        cartBadge.style.display = cart.length > 0 ? 'flex' : 'none';
    }
    const favBadge = document.getElementById('favIconBadge');
    if (favBadge) {
        const liked = JSON.parse(localStorage.getItem('food_liked') || '[]');
        favBadge.textContent = liked.length;
        favBadge.style.display = liked.length > 0 ? 'flex' : 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateNavBadges();
    renderProductDetails();
    renderRelatedProducts();
});

function handleAddToCart() {
    const productId = getProductIdFromUrl();
    const product = allFoodProducts.find(p => p.id === productId);
    
    let cart = JSON.parse(localStorage.getItem('pbssd_cart') || '[]');
    let existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, image: product.img, quantity: 1, category: 'Food' });
    }
    
    localStorage.setItem('pbssd_cart', JSON.stringify(cart));
    
    updateNavBadges();
    alert(`${product.name} added to your basket!`);
}

function handleOrderNow() {
    handleAddToCart();
    window.location.href = 'cart.html';
}
