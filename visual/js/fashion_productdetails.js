// 2_Wheelers_ProductDetails.js adapted for Fashion
// Parses URL params for product data, renders gallery/rating/offers/related

// Default product data (fallback)
const defaultProduct = {
    name: "Signature Silk Blazer",
    price: "₹4,299",
    category: "Women",
    rating: 4.9,
    reviews: 203,
    badge: "New Arrival",
    desc: "Timeless silk blazer with tailored fit. Premium Italian silk blend for every occasion.",
    material: "Silk Blend",
    sizes: "S, M, L, XL",
    originalPrice: "₹5,999"
};

// Related products (fashion-themed)
const relatedProducts = [
    { name: "Linen Trousers", price: "₹1,599", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", cat: "Men" },
    { name: "Floral Wrap Dress", price: "₹1,899", img: "https://images.unsplash.com/photo-1577968897966-f23e2ebb964b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", cat: "Women" },
    { name: "Cashmere Sweater", price: "₹2,999", img: "https://images.unsplash.com/photo-1529139577552-0c328d130c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", cat: "Women" },
    { name: "Denim Joggers", price: "₹799", img: "https://images.unsplash.com/photo-1517346810528-5687a7c6f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", cat: "Kids" }
];

// Parse URL params
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Render rating stars
function renderRating(rating, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalf) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }

    container.innerHTML = stars + `<span>(${Math.round(rating * 10) / 10})</span>`;
}

// Main render
function renderProductDetails() {
    const name = getUrlParam('name') || defaultProduct.name;
    const price = getUrlParam('price') || defaultProduct.price;
    const img = getUrlParam('img') || defaultProduct.img || 'https://images.unsplash.com/photo-1590770426020-6a4ae9d31a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
    const category = getUrlParam('cat') || defaultProduct.category;
    const rating = parseFloat(getUrlParam('rating')) || defaultProduct.rating;
    const reviews = parseInt(getUrlParam('reviews')) || defaultProduct.reviews;
    const badge = getUrlParam('badge') || defaultProduct.badge;
    const desc = decodeURIComponent(getUrlParam('desc') || defaultProduct.desc);
    const originalPrice = getUrlParam('originalPrice');
    const material = getUrlParam('spec-material') || defaultProduct.material;

    // Title
    document.getElementById('product-title').textContent = name;

    // Category
    document.getElementById('category-name').textContent = category;

    // Main image
    document.getElementById('product-img').src = img;

    // Badge
    const badgeEl = document.getElementById('product-badge');
    if (badge) {
        badgeEl.textContent = badge;
        badgeEl.style.display = 'block';
    }

    // Rating
    renderRating(rating, 'rating-container');

    // Price
    document.getElementById('product-price').textContent = price;

    // Original price & discount
    if (originalPrice) {
        const originalEl = document.getElementById('original-price');
        const discountEl = document.getElementById('discount-badge');
        originalEl.textContent = originalPrice;
        originalEl.style.display = 'inline';
        discountEl.style.display = 'inline';
        discountEl.innerHTML = 'SAVE 25%'; // Calculate dynamically if needed
    }

    // Description
    document.getElementById('product-desc').textContent = desc;

    // Specs
    document.getElementById('spec-material').textContent = material;

    // Like button
    document.getElementById('like-btn').onclick = toggleLike;

    // Thumbnails (single image fallback)
    const thumbList = document.getElementById('thumb-list');
    thumbList.innerHTML = `<img src="${img}" class="thumbnail active" onclick="switchImage('${img}')" alt="Thumbnail">`;

    // Related products
    renderRelatedProducts();
}

// Toggle like button
let isLiked = false;
function toggleLike() {
    const btn = document.getElementById('like-btn');
    const icon = btn.querySelector('i');
    isLiked = !isLiked;
    if (isLiked) {
        icon.className = 'fas fa-heart';
        btn.classList.add('liked');
    } else {
        icon.className = 'far fa-heart';
        btn.classList.remove('liked');
    }
}

// Switch thumbnail image
function switchImage(imgSrc) {
    document.getElementById('product-img').src = imgSrc;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
}

// Render related products horizontal scroll
function renderRelatedProducts() {
    const container = document.getElementById('related-scroll');
    if (!container) return;

    container.innerHTML = relatedProducts.map(product => `
        <div class="product-card" onclick="window.location.href='fashion_ProductDetails.html?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&img=${encodeURIComponent(product.img)}&cat=${encodeURIComponent(product.category)}'">
            <div class="image-wrapper">
                <img src="${product.img}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        </div>
    `).join('');
}

// Init
document.addEventListener('DOMContentLoaded', renderProductDetails);
