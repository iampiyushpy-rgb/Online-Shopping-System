// =============================================
// Books_ProductDetails.js
// Features: Dynamic stars, like button, badge,
// discount %, description, author — Books theme
// =============================================

// --- URL Parameters ---
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name') || 'A Great Book';
const price = urlParams.get('price') || '$14.99';
const img = urlParams.get('img') || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop';
const cat = urlParams.get('cat') || 'Books';
const rating = parseFloat(urlParams.get('rating')) || 4.7;
const reviews = parseInt(urlParams.get('reviews')) || 1850;
const originalPrice = urlParams.get('originalPrice') || '';
const desc = urlParams.get('desc') || '';
const badge = urlParams.get('badge') || '';
const author = urlParams.get('author') || '';

// --- Update Basic UI ---
document.getElementById('product-title').innerText = name;
document.getElementById('product-price').innerText = price;
document.getElementById('product-img').src = img;
document.getElementById('category-name').innerText = cat;
document.title = name + " — BookShelf";

// --- Author ---
const authorEl = document.getElementById('book-author');
if (authorEl && author) {
    authorEl.innerText = 'by ' + author;
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
if (descEl && desc) {
    descEl.innerText = desc;
}

// --- Original Price & Discount Badge ---
if (originalPrice) {
    const origEl = document.getElementById('original-price');
    const discEl = document.getElementById('discount-badge');

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
let likedProducts = JSON.parse(localStorage.getItem('books_liked') || '[]');

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
    localStorage.setItem('books_liked', JSON.stringify(likedProducts));
}

const likeBtn = document.getElementById('like-btn');
if (likeBtn) {
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
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&h=300&fit=crop"
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

// --- Generate 20 Dynamic Related Book Products ---
const relatedProductsPool = [
    { name: "The Midnight Library", author: "Matt Haig", price: "$18.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 42000 },
    { name: "Atomic Habits", author: "James Clear", price: "$16.99", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 85000 },
    { name: "Sapiens", author: "Yuval Noah Harari", price: "$18.99", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 72000 },
    { name: "Dune", author: "Frank Herbert", price: "$14.99", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 67000 },
    { name: "Gone Girl", author: "Gillian Flynn", price: "$14.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", rating: 4.7, reviews: 89000 },
    { name: "Becoming", author: "Michelle Obama", price: "$15.99", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 54000 },
    { name: "Normal People", author: "Sally Rooney", price: "$15.99", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 38000 },
    { name: "It Ends with Us", author: "Colleen Hoover", price: "$15.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", rating: 4.6, reviews: 120000 },
    { name: "1984", author: "George Orwell", price: "$11.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", rating: 4.8, reviews: 105000 },
    { name: "The Hobbit", author: "J.R.R. Tolkien", price: "$12.99", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", rating: 4.9, reviews: 89000 }
];

const scroll = document.getElementById('related-scroll');
for (let i = 0; i < 20; i++) {
    const baseProduct = relatedProductsPool[i % relatedProductsPool.length];
    const p = {
        name: i < relatedProductsPool.length ? baseProduct.name : `${baseProduct.name} v${Math.floor(i / relatedProductsPool.length) + 1}`,
        author: baseProduct.author,
        price: baseProduct.price,
        img: baseProduct.img,
        rating: baseProduct.rating,
        reviews: baseProduct.reviews
    };

    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.minWidth = '240px';
    card.onclick = () => window.location.href = `Books_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}&img=${encodeURIComponent(p.img)}&cat=Related&rating=${p.rating}&reviews=${p.reviews}&author=${encodeURIComponent(p.author)}`;

    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${p.img}" alt="${p.name}" class="product-image">
        </div>
        <div class="product-info">
            <h3>${p.name}</h3>
            <p class="related-author">by ${p.author}</p>
            <div class="related-stars">${renderStars(p.rating)}</div>
            <p class="product-price">${p.price}</p>
        </div>
    `;
    scroll.appendChild(card);
}
