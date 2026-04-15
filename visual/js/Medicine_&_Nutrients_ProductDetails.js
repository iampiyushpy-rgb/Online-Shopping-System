// =============================================
// Medicine_&_Nutrients_ProductDetails.js
// Dynamic product data, stars, like, gallery, related
// =============================================

// --- URL Parameters ---
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name') || 'Health Product';
const price = urlParams.get('price') || '$14.99';
const img = urlParams.get('img') || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop';
const cat = urlParams.get('cat') || 'Medicine';
const rating = parseFloat(urlParams.get('rating')) || 4.7;
const reviews = parseInt(urlParams.get('reviews')) || 1200;
const originalPrice = urlParams.get('originalPrice') || '';
const desc = urlParams.get('desc') || '';
const badge = urlParams.get('badge') || '';
const brand = urlParams.get('brand') || '';

// --- Update Basic UI ---
document.getElementById('product-title').innerText = name;
document.getElementById('product-price').innerText = price;
document.getElementById('product-img').src = img;
document.getElementById('category-name').innerText = cat;
document.title = name + " — MediStore";

// --- Brand ---
const brandEl = document.getElementById('product-brand');
if (brandEl && brand) {
    brandEl.innerHTML = 'by <strong>' + brand + '</strong>';
}

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
if (descEl && desc) { descEl.innerText = desc; }

// --- Original Price & Discount ---
if (originalPrice) {
    const origEl = document.getElementById('original-price');
    const discEl = document.getElementById('discount-badge');
    const currentNum = parseFloat(price.replace(/[^0-9.]/g, ''));
    const origNum = parseFloat(originalPrice.replace(/[^0-9.]/g, ''));

    if (origEl) { origEl.textContent = originalPrice; origEl.style.display = 'inline'; }
    if (discEl && origNum > currentNum) {
        const pct = Math.round((1 - currentNum / origNum) * 100);
        if (pct > 0) { discEl.textContent = pct + '% OFF'; discEl.style.display = 'inline-flex'; }
    }
}

// --- Product Badge ---
const badgeEl = document.getElementById('product-badge');
if (badgeEl && badge) { badgeEl.textContent = badge; badgeEl.style.display = 'inline-block'; }

// --- Like / Wishlist ---
let likedProducts = JSON.parse(localStorage.getItem('med_liked') || '[]');

function isLiked(n) { return likedProducts.includes(n); }
function toggleLike(n) {
    const btn = document.getElementById('like-btn');
    const idx = likedProducts.indexOf(n);
    if (idx > -1) { likedProducts.splice(idx, 1); btn.classList.remove('liked'); btn.innerHTML = '<i class="far fa-heart"></i>'; }
    else { likedProducts.push(n); btn.classList.add('liked'); btn.innerHTML = '<i class="fas fa-heart"></i>'; }
    localStorage.setItem('med_liked', JSON.stringify(likedProducts));
}

const likeBtn = document.getElementById('like-btn');
if (likeBtn) {
    if (isLiked(name)) { likeBtn.classList.add('liked'); likeBtn.innerHTML = '<i class="fas fa-heart"></i>'; }
    likeBtn.addEventListener('click', () => toggleLike(name));
}

// --- Image Gallery ---
const mainImg = document.getElementById('product-img');
const thumbList = document.getElementById('thumb-list');

const galleryImages = [
    img,
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop"
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

// --- Related Products ---
const relatedPool = [
    { name: "Vitamin D3 5000 IU", brand: "NatureMade", price: "$12.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 24000 },
    { name: "Omega-3 Fish Oil", brand: "Nordic Naturals", price: "$18.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 31000 },
    { name: "Probiotic 50B CFU", brand: "Garden of Life", price: "$24.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 18000 },
    { name: "Ashwagandha KSM-66", brand: "Himalaya", price: "$15.99", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 22000 },
    { name: "Collagen Peptides", brand: "Vital Proteins", price: "$27.99", img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 29000 },
    { name: "Whey Protein Isolate", brand: "Optimum Nutrition", price: "$34.99", img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 38000 },
    { name: "Elderberry Gummies", brand: "Zarbee's", price: "$14.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 41000 },
    { name: "Multivitamin Complete", brand: "Centrum", price: "$22.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 45000 },
    { name: "Turmeric Curcumin", brand: "Qunol", price: "$19.99", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 22000 },
    { name: "First Aid Kit - 250pc", brand: "J&J", price: "$19.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 31000 }
];

const scroll = document.getElementById('related-scroll');
for (let i = 0; i < 20; i++) {
    const base = relatedPool[i % relatedPool.length];
    const p = {
        name: i < relatedPool.length ? base.name : `${base.name} v${Math.floor(i / relatedPool.length) + 1}`,
        brand: base.brand,
        price: base.price,
        img: base.img,
        rating: base.rating,
        reviews: base.reviews
    };

    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.minWidth = '240px';
    card.onclick = () => window.location.href = `Medicine_&_Nutrients_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}&img=${encodeURIComponent(p.img)}&cat=Related&rating=${p.rating}&reviews=${p.reviews}&brand=${encodeURIComponent(p.brand)}`;

    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${p.img}" alt="${p.name}" class="product-image">
        </div>
        <div class="product-info">
            <h3>${p.name}</h3>
            <p class="related-brand">${p.brand}</p>
            <div class="related-stars">${renderStars(p.rating)}</div>
            <p class="product-price">${p.price}</p>
        </div>
    `;
    scroll.appendChild(card);
}
