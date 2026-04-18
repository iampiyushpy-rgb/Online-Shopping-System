/* ═══════════════════════════════════════════════════════
   FOOD PAGE — JavaScript
   Hero Carousel, Dynamic Categories, Cart, Ratings
   ═══════════════════════════════════════════════════════ */

// ── Hero Carousel Data ─────────────────────────────────
const heroSlides = [
    {
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&h=600&fit=crop",
        badge: "🔥 Trending Now",
        title: "Flavours That Make You Crave More",
        desc: "Order from 500+ top restaurants near you. Lightning-fast delivery, zero hassle.",
        cta: "Order Now",
        ctaLink: "#shop"
    },
    {
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1400&h=600&fit=crop",
        badge: "🍕 FLAT 60% OFF",
        title: "Pizza Fest Is Live!",
        desc: "Wood-fired, cheesy, loaded — grab your favorite pizza at unbelievable prices.",
        cta: "Grab The Deal",
        ctaLink: "#deals"
    },
    {
        img: "https://images.unsplash.com/photo-1495474472207-464a51ebc2cc?q=80&w=1400&h=600&fit=crop",
        badge: "🥞 Breakfast Specials",
        title: "Start Your Morning Right",
        desc: "Pancakes, waffles, smoothie bowls & more — delivered hot to your door.",
        cta: "Explore Breakfast",
        ctaLink: "#breakfast"
    },
    {
        img: "https://images.unsplash.com/photo-1544025162-83da70b77cc2?q=80&w=1400&h=600&fit=crop",
        badge: "🍗 Non-Veg Festival",
        title: "Grilled, Fried & Sizzling",
        desc: "Juicy chicken wings, smoky kebabs, tender steaks — all in one place.",
        cta: "Order Meats",
        ctaLink: "#nonveg"
    },
    {
        img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1400&h=600&fit=crop",
        badge: "🌿 Healthy Choices",
        title: "Eat Clean, Feel Great",
        desc: "Curated salads, grain bowls & fresh juices for the health-conscious foodie.",
        cta: "Eat Healthy",
        ctaLink: "#healthy"
    }
];

// FOOD_DATA_RAW is already available globally from foodData.js

// ── Category Metadata ──────────────────────────────────
const categoryMeta = {
    sweets: { icon: "fas fa-cookie-bite", label: "Sweets & Mithai", tagline: "SUGAR RUSH", title: "Irresistible Sweet Treats", bg: "var(--food-warm-bg)" },
    spicy: { icon: "fas fa-pepper-hot", label: "Spicy & Fiery", tagline: "BRING THE HEAT", title: "Flame-Kissed Flavours", bg: "var(--food-section-alt)" },
    pizza: { icon: "fas fa-pizza-slice", label: "Pizza", tagline: "CHEESY GOODNESS", title: "Pizza Paradise", bg: "var(--food-bg)" },
    burgers: { icon: "fas fa-burger", label: "Burgers", tagline: "STACKED & LOADED", title: "Burger Bonanza", bg: "var(--food-warm-bg)" },
    beverages: { icon: "fas fa-mug-hot", label: "Beverages", tagline: "SIP & CHILL", title: "Refreshing Beverages", bg: "var(--food-section-alt)" },
    biryani: { icon: "fas fa-bowl-rice", label: "Biryani", tagline: "ROYAL FEAST", title: "Biryani Kingdom", bg: "var(--food-bg)" },
    healthy: { icon: "fas fa-leaf", label: "Healthy", tagline: "EAT CLEAN", title: "Healthy & Fresh", bg: "var(--food-warm-bg)" },
    chinese: { icon: "fas fa-utensils", label: "Chinese & Asian", tagline: "EAST MEETS WEST", title: "Asian Delights", bg: "var(--food-section-alt)" },
    desserts: { icon: "fas fa-ice-cream", label: "Desserts", tagline: "SWEET ENDINGS", title: "Divine Desserts", bg: "var(--food-bg)" },
    breakfast: { icon: "fas fa-egg", label: "Breakfast", tagline: "RISE & DINE", title: "Morning Specials", bg: "var(--food-warm-bg)" }
};

// ── Restaurant Spotlight Data ──────────────────────────
const restaurants = [
    { name: "Paradise Biryani", cuisine: "Hyderabadi · Biryani · Kebabs", rating: 4.9, logo: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=120&h=120&fit=crop" },
    { name: "Haldiram's", cuisine: "Indian · Sweets · Snacks", rating: 4.7, logo: "https://images.unsplash.com/photo-1601303516990-33a5b60b6a47?q=80&w=120&h=120&fit=crop" },
    { name: "Shake Shack", cuisine: "Burgers · Shakes · American", rating: 4.8, logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=120&h=120&fit=crop" },
    { name: "Domino's Pizza", cuisine: "Pizza · Italian · Fast Food", rating: 4.5, logo: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=120&h=120&fit=crop" },
    { name: "Starbucks", cuisine: "Coffee · Snacks · Beverages", rating: 4.6, logo: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=120&h=120&fit=crop" },
    { name: "Yauatcha", cuisine: "Dim Sum · Chinese · Asian", rating: 4.9, logo: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=120&h=120&fit=crop" },
    { name: "The Green Kitchen", cuisine: "Salads · Bowls · Healthy", rating: 4.7, logo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=120&h=120&fit=crop" },
    { name: "Baskin Robbins", cuisine: "Ice Cream · Desserts · Cakes", rating: 4.6, logo: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=120&h=120&fit=crop" }
];

// ═══════════════════════════════════════════════════════
//  HERO CAROUSEL
// ═══════════════════════════════════════════════════════

let currentSlide = 0;
let carouselInterval;
const SLIDE_DURATION = 5000;

// ---- Swipe / Drag State ----
let isDragging = false;
let dragStartX = 0;
let dragCurrentX = 0;
let dragStartTime = 0;
const SWIPE_THRESHOLD = 50;       // min px to count as swipe
const VELOCITY_THRESHOLD = 0.3;   // px/ms — fast flick triggers even short swipes

function initHeroCarousel() {
    const inner = document.getElementById('food-carousel-inner');
    const nav = document.getElementById('food-carousel-nav');
    if (!inner || !nav) return;

    // Build slides
    inner.innerHTML = heroSlides.map((s, i) => `
        <div class="carousel-slide ${i === 0 ? 'active' : ''}">
            <img src="${s.img}" alt="${s.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
            <div class="slide-content">
                <div class="slide-badge">${s.badge}</div>
                <h2>${s.title}</h2>
                <p>${s.desc}</p>
                <a href="${s.ctaLink}" class="slide-cta">${s.cta} <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');

    // Build dots
    nav.innerHTML = heroSlides.map((_, i) => `
        <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></button>
    `).join('');

    // Dot click
    nav.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => goToSlide(+dot.dataset.idx));
    });

    // Arrows
    document.getElementById('foodPrevSlide')?.addEventListener('click', () => {
        goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
    });
    document.getElementById('foodNextSlide')?.addEventListener('click', () => {
        goToSlide((currentSlide + 1) % heroSlides.length);
    });

    initSwipeHandlers();
    startAutoplay();
}

function goToSlide(idx) {
    currentSlide = idx;
    const inner = document.getElementById('food-carousel-inner');
    inner.style.transform = `translateX(-${idx * 100}%)`;

    document.querySelectorAll('.food-hero-carousel .carousel-slide').forEach((s, i) => {
        s.classList.toggle('active', i === idx);
    });
    document.querySelectorAll('.food-hero-carousel .carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === idx);
    });

    resetProgress();
    resetAutoplay();
}

function startAutoplay() {
    carouselInterval = setInterval(() => {
        goToSlide((currentSlide + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    animateProgress();
}

function resetAutoplay() {
    clearInterval(carouselInterval);
    startAutoplay();
}

function animateProgress() {
    const fill = document.getElementById('food-progress-fill');
    if (!fill) return;
    fill.style.transition = 'none';
    fill.style.width = '0%';
    requestAnimationFrame(() => {
        fill.style.transition = `width ${SLIDE_DURATION}ms linear`;
        fill.style.width = '100%';
    });
}

function resetProgress() {
    animateProgress();
}

// ═══════════════════════════════════════════════════════
//  Touch + Mouse Swipe / Drag Handlers
// ═══════════════════════════════════════════════════════
function initSwipeHandlers() {
    const carousel = document.querySelector('.food-hero-carousel');
    if (!carousel) return;

    // Prevent image dragging interfering
    carousel.addEventListener('dragstart', e => e.preventDefault());

    // --- Touch Events ---
    carousel.addEventListener('touchstart', onDragStart, { passive: true });
    carousel.addEventListener('touchmove', onDragMove, { passive: false });
    carousel.addEventListener('touchend', onDragEnd);
    carousel.addEventListener('touchcancel', onDragEnd);

    // --- Mouse Events ---
    carousel.addEventListener('mousedown', onDragStart);
    carousel.addEventListener('mousemove', onDragMove);
    carousel.addEventListener('mouseup', onDragEnd);
    carousel.addEventListener('mouseleave', onDragEnd);
}

function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}

function onDragStart(e) {
    if (e.target.closest('.carousel-control, .carousel-dot, .slide-cta')) return;

    isDragging = true;
    dragStartX = getClientX(e);
    dragCurrentX = dragStartX;
    dragStartTime = Date.now();

    clearInterval(carouselInterval);

    document.querySelector('.food-hero-carousel').style.cursor = 'grabbing';

    const inner = document.getElementById('food-carousel-inner');
    if (inner) inner.style.transition = 'none';
}

function onDragMove(e) {
    if (!isDragging) return;

    if (e.cancelable && e.touches) e.preventDefault();

    dragCurrentX = getClientX(e);
    const deltaX = dragCurrentX - dragStartX;

    const inner = document.getElementById('food-carousel-inner');
    if (inner) {
        // We use transform relative to currentSlide
        // currentSlide * 100% is the baseline
        // we add deltaX in pixels. Since we can't easily mix % and px in translate, 
        // we'll calculate percentage based on container width.
        const width = inner.offsetWidth;
        const percentDelta = (deltaX / width) * 100;
        inner.style.transform = `translateX(calc(-${currentSlide * 100}% + ${percentDelta}%))`;
    }
}

function onDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;

    document.querySelector('.food-hero-carousel').style.cursor = '';

    const deltaX = dragCurrentX - dragStartX;
    const elapsed = Date.now() - dragStartTime;
    const velocity = Math.abs(deltaX) / elapsed;

    const inner = document.getElementById('food-carousel-inner');
    if (inner) inner.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';

    if (Math.abs(deltaX) > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
        if (deltaX < 0) {
            goToSlide((currentSlide + 1) % heroSlides.length);
        } else {
            goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
        }
    } else {
        goToSlide(currentSlide);
    }
}

// ═══════════════════════════════════════════════════════
//  DYNAMIC CATEGORY SECTIONS
// ═══════════════════════════════════════════════════════

function buildProductCard(item) {
    const ratingClass = item.rating >= 4.5 ? 'high' : item.rating >= 4.0 ? 'medium' : 'low';
    const discount = item.originalPrice ? Math.round((1 - item.price / item.originalPrice) * 100) : 0;

    return `
        <div class="food-product-card" onclick="window.location.href='Food_ProductDetails.html?id=${item.id}'">
            <div class="image-wrapper">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="food-badge ${discount > 0 ? 'food-badge-offer' : item.badge.includes('New') ? 'food-badge-new' : 'food-badge-best'}">${discount > 0 ? discount + '% OFF' : item.badge}</span>` : ''}
                <span class="food-badge-veg ${item.veg ? 'veg' : 'non-veg'}"></span>
                <span class="food-delivery-chip"><i class="fas fa-clock"></i> ${item.time}</span>
                <button class="food-wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(this, '${item.name.replace(/'/g, "\\'")}')"><i class="far fa-heart"></i></button>
            </div>
            <div class="food-product-info">
                <p class="food-restaurant-name">${item.restaurant}</p>
                <h3>${item.name}</h3>
                <span class="food-cuisine-tag">${item.cuisine}</span>
                <div class="food-rating-row">
                    <span class="food-rating-badge ${ratingClass}"><i class="fas fa-star"></i> ${item.rating}</span>
                    <span class="reviews-count">${formatReviews(item.reviews)} ratings</span>
                </div>
                <div class="food-price-row">
                    <span class="food-price">₹${item.price.toFixed(2)}${item.originalPrice ? `<span class="original-price">₹${item.originalPrice.toFixed(2)}</span>` : ''}</span>
                    <button class="food-order-btn" onclick="event.stopPropagation(); addToCart(${item.id})"><i class="fas fa-plus"></i> ADD</button>
                </div>
            </div>
        </div>
    `;
}

function renderCategorySections() {
    const container = document.getElementById('food-dynamic-categories');
    if (!container) return;

    let html = '';
    for (const [key, items] of Object.entries(getFoodData())) {
        const meta = categoryMeta[key];
        html += `
            <section class="food-container" id="section-${key}" style="background: ${meta.bg};" data-cat="${key}">
                <div class="food-section-header">
                    <div>
                        <span class="food-section-tagline">${meta.tagline}</span>
                        <h2><i class="${meta.icon}" style="margin-right: 10px; color: var(--food-red);"></i>${meta.title}</h2>
                    </div>
                    <a href="Food_AllProducts.html" class="food-view-all">View All <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="food-product-scroll">
                    ${items.map(item => buildProductCard(item)).join('')}
                </div>
            </section>
        `;
    }
    container.innerHTML = html;
}

// ── Restaurant Spotlight ───────────────────────────────
function renderRestaurants() {
    const grid = document.getElementById('food-restaurant-grid');
    if (!grid) return;

    grid.innerHTML = restaurants.map(r => `
        <div class="food-restaurant-card" onclick="showToast('Exploring ${r.name}...')">
            <img class="rest-logo" src="${r.logo}" alt="${r.name}">
            <div class="rest-info">
                <h4>${r.name}</h4>
                <p>${r.cuisine}</p>
                <span class="rest-rating"><i class="fas fa-star"></i> ${r.rating}</span>
            </div>
        </div>
    `).join('');
}

// ── Top Deals Section (Dynamic) ────────────────────────
function renderTopDeals() {
    const dealsContainer = document.getElementById('food-top-deals-container');
    if (!dealsContainer) return;

    // Flatten all products
    let allProducts = [];
    Object.values(getFoodData()).forEach(categoryItems => {
        allProducts = allProducts.concat(categoryItems);
    });

    // Filter items with an originalPrice (implies a discount)
    let deals = allProducts.filter(item => item.originalPrice && item.originalPrice > item.price);

    // Calculate discount % and sort descending
    deals.forEach(item => {
        item.discountPercent = Math.round((1 - item.price / item.originalPrice) * 100);
    });
    deals.sort((a, b) => b.discountPercent - a.discountPercent);

    // Take top 6 deals to show
    const topDeals = deals.slice(0, 6);

    dealsContainer.innerHTML = topDeals.map((item, idx) => `
        <div class="food-deal-card food-animate-in" style="animation-delay: ${idx * 0.1}s" onclick="window.location.href='Food_ProductDetails.html?id=${item.id}'">
            <div class="deal-badge">${Math.round((1 - item.price / item.originalPrice) * 100)}% OFF</div>
            <img class="deal-img" src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="deal-info">
                <h4>${item.name}</h4>
                <div class="deal-rating"><i class="fas fa-star"></i> ${item.rating}</div>
                <div class="deal-price-row">
                    <div>
                        <span class="price">₹${item.price.toFixed(2)}</span>
                        <span class="old-price">₹${item.originalPrice.toFixed(2)}</span>
                    </div>
                    <button class="deal-add-btn" onclick="event.stopPropagation(); addToCart(${item.id})"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

// ═══════════════════════════════════════════════════════
//  CATEGORY TAB FILTERING
// ═══════════════════════════════════════════════════════

function initCategoryTabs() {
    const tabs = document.querySelectorAll('.food-cat-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const cat = tab.dataset.category;
            const target = document.getElementById(`section-${cat}`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ═══════════════════════════════════════════════════════
//  CART & INTERACTIONS
// ═══════════════════════════════════════════════════════

let cartCount = 0;

function initCartCount() {
    const cart = JSON.parse(localStorage.getItem('pbssd_cart') || '[]');
    cartCount = cart.length;
    updateCartBadge();
    updateFavBadge();
}

function updateFavBadge() {
    const badge = document.getElementById('favIconBadge');
    if (badge) {
        const liked = JSON.parse(localStorage.getItem('food_liked') || '[]');
        badge.textContent = liked.length;
        badge.style.display = liked.length > 0 ? 'flex' : 'none';
    }
}

function addToCart(productId) {
    let allProducts = [];
    Object.values(getFoodData()).forEach(arr => allProducts.push(...arr));
    const product = allProducts.find(p => p.id === productId);

    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('pbssd_cart') || '[]');
    let existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, image: product.img, quantity: 1, category: 'Food' });
    }
    
    localStorage.setItem('pbssd_cart', JSON.stringify(cart));
    
    cartCount = cart.length;
    updateCartBadge();
    showToast(`${product.name} added to cart — ₹${product.price.toFixed(2)}`);
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.textContent = cartCount;
        badge.style.display = cartCount > 0 ? 'flex' : 'none';
    }
}

function toggleWishlist(btn, name) {
    btn.classList.toggle('liked');
    const icon = btn.querySelector('i');
    
    let likedItems = JSON.parse(localStorage.getItem('food_liked') || '[]');
    
    if (btn.classList.contains('liked')) {
        icon.className = 'fas fa-heart';
        if (name && !likedItems.includes(name)) likedItems.push(name);
        showToast('Added to favourites ❤️');
    } else {
        icon.className = 'far fa-heart';
        if (name) likedItems = likedItems.filter(item => item !== name);
        showToast('Removed from favourites');
    }
    localStorage.setItem('food_liked', JSON.stringify(likedItems));
    updateFavBadge();
}

// ═══════════════════════════════════════════════════════
//  TOAST NOTIFICATION
// ═══════════════════════════════════════════════════════

let toastTimeout;
function showToast(message) {
    let toast = document.getElementById('food-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'food-toast';
        toast.className = 'food-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toast.classList.remove('show');
    void toast.offsetWidth; // force reflow
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ═══════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════

function formatReviews(num) {
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num;
}

// ── Deal Banner Copy Code ──────────────────────────────
function copyCode(el) {
    const code = el.dataset.code || 'YUMMY50';
    navigator.clipboard.writeText(code).then(() => {
        showToast(`Code "${code}" copied! 🎉`);
    }).catch(() => {
        showToast(`Code: ${code}`);
    });
}

// ── Newsletter ─────────────────────────────────────────
function initNewsletter() {
    const form = document.getElementById('food-newsletter-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input').value;
        if (email) {
            showToast('Subscribed successfully! 🎉');
            form.reset();
        }
    });
}

// ── Sticky Category Tabs Shadow ────────────────────────
function initStickyTabs() {
    const tabs = document.querySelector('.food-category-tabs');
    if (!tabs) return;

    const observer = new IntersectionObserver(([entry]) => {
        tabs.classList.toggle('sticky-shadow', !entry.isIntersecting);
    }, { threshold: [1], rootMargin: '-1px 0px 0px 0px' });

    observer.observe(tabs);
}

// ── Scroll Animations ──────────────────────────────────
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('food-animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.food-product-card, .food-restaurant-card, .food-step').forEach(el => {
        observer.observe(el);
    });
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initCartCount();
    initHeroCarousel();
    renderTopDeals();
    renderCategorySections();
    renderRestaurants();
    initCategoryTabs();
    initNewsletter();
    initStickyTabs();

    // Delay scroll animations slightly
    setTimeout(initScrollAnimations, 300);
});
