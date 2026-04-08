// =============================================
// 2_Wheelers_ProductDetails.js
// Features: Dynamic stars, like button, badge,
// discount %, description — matching AllProducts
// =============================================

// --- URL Parameters ---
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name') || 'Premium Bike';
const price = urlParams.get('price') || '$999.00';
const img = urlParams.get('img') || 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=300&fit=crop';
const cat = urlParams.get('cat') || '2 Wheelers';
const rating = parseFloat(urlParams.get('rating')) || 4.7;
const reviews = parseInt(urlParams.get('reviews')) || 1850;
const originalPrice = urlParams.get('originalPrice') || '';
const desc = urlParams.get('desc') || '';
const badge = urlParams.get('badge') || '';

// --- Update Basic UI ---
document.getElementById('product-title').innerText = name;
document.getElementById('product-price').innerText = price;
document.getElementById('product-img').src = img;
document.getElementById('category-name').innerText = cat;
document.title = name + " - 2 Wheelers";

// --- Dynamic Star Rating ---
function renderStars(rating) {
    let html = '';
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.3;
    const empty = 5 - full - (hasHalf ? 1 : 0);
    for (let i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
    if (hasHalf) html += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < empty; i++) html += '<i class="far fa-star empty"></i>';
    return html;
}

const ratingContainer = document.getElementById('rating-container');
if (ratingContainer) {
    ratingContainer.innerHTML = `
        ${renderStars(rating)}
        <span>(${rating} • ${reviews.toLocaleString()} Reviews)</span>
    `;
}

// --- Dynamic Description ---
const descEl = document.getElementById('product-desc');
if (descEl && desc) {
    descEl.innerText = desc;
}

// --- Original Price & Discount Badge ---
if (originalPrice) {
    const origEl = document.getElementById('original-price');
    const discEl = document.getElementById('discount-badge');

    // Parse prices for discount calculation
    const currentNum = parseFloat(price.replace(/[^0-9.]/g, ''));
    const origNum = parseFloat(originalPrice.replace(/[^0-9.]/g, ''));

    if (origEl) {
        origEl.textContent = originalPrice;
        origEl.style.display = 'inline';
    }

    if (discEl && origNum > currentNum) {
        const discountPct = Math.round((1 - currentNum / origNum) * 100);
        if (discountPct > 0) {
            discEl.textContent = discountPct + '% OFF';
            discEl.style.display = 'inline-flex';
        }
    }
}

// --- Product Badge ---
const badgeEl = document.getElementById('product-badge');
if (badgeEl && badge) {
    badgeEl.textContent = badge;
    badgeEl.style.display = 'inline-block';
}

// --- Like / Wishlist Button ---
let likedProducts = JSON.parse(localStorage.getItem('2w_liked') || '[]');

function isLiked(productName) {
    return likedProducts.includes(productName);
}

function toggleLike(productName) {
    const btn = document.getElementById('like-btn');
    const idx = likedProducts.indexOf(productName);
    if (idx > -1) {
        likedProducts.splice(idx, 1);
        btn.classList.remove('liked');
        btn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        likedProducts.push(productName);
        btn.classList.add('liked');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    localStorage.setItem('2w_liked', JSON.stringify(likedProducts));
}

const likeBtn = document.getElementById('like-btn');
if (likeBtn) {
    // Set initial state
    if (isLiked(name)) {
        likeBtn.classList.add('liked');
        likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    likeBtn.addEventListener('click', () => toggleLike(name));
}

// --- Image Gallery Logic ---
const mainImg = document.getElementById('product-img');
const thumbList = document.getElementById('thumb-list');

const galleryImages = [
    img,
    "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400&h=300&fit=crop"
];

galleryImages.forEach((src, idx) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.className = `thumbnail ${idx === 0 ? 'active' : ''}`;
    thumb.onclick = () => {
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        }, 300);
    };
    thumbList.appendChild(thumb);
});

// --- Generate 20 Dynamic Related Bike Products ---
const relatedProductsPool = [
    { name: "Apex Mountain Pro X9", price: "$1,299", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 2450 },
    { name: "Velocity Road Racer", price: "$899", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 1890 },
    { name: "CityGlide Hybrid 7", price: "$549", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 1560 },
    { name: "TrailBlazer Fat Tire", price: "$989", img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 1240 },
    { name: "Pro Cycling Helmet", price: "$79", img: "https://images.unsplash.com/photo-1557803175-2b3156c31fc8?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 3200 },
    { name: "Cycling Gloves Pro", price: "$34", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400&h=300&fit=crop", rating: 4.5, reviews: 2340 },
    { name: "Carbon Frame Racer", price: "$1,499", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 890 },
    { name: "KidStar BMX Blaze", price: "$279", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 980 },
    { name: "LED Bike Light Set", price: "$25", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400&h=300&fit=crop", rating: 4.4, reviews: 3450 },
    { name: "Titanium Bike Lock", price: "$45", img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 2100 }
];

const scroll = document.getElementById('related-scroll');
for (let i = 0; i < 20; i++) {
    const baseProduct = relatedProductsPool[i % relatedProductsPool.length];
    const p = {
        name: i < relatedProductsPool.length ? baseProduct.name : `${baseProduct.name} v${Math.floor(i / relatedProductsPool.length) + 1}`,
        price: baseProduct.price,
        img: baseProduct.img,
        rating: baseProduct.rating,
        reviews: baseProduct.reviews
    };

    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.minWidth = '240px';
    card.onclick = () => window.location.href = `2_Wheelers_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}&img=${encodeURIComponent(p.img)}&cat=Related&rating=${p.rating}&reviews=${p.reviews}`;
    
    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${p.img}" alt="${p.name}" class="product-image">
        </div>
        <div class="product-info">
            <h3>${p.name}</h3>
            <div class="related-stars">${renderStars(p.rating)}</div>
            <p class="product-price">${p.price}</p>
        </div>
    `;
    scroll.appendChild(card);
}
