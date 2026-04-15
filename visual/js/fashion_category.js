// =============================================
// fashion_category.js — Hero Carousel + Dynamic Products
// Theme: Fashion (Green-White-Black)
// =============================================

// Hero Carousel Data — Fashion Items
const heroProducts = [
    {
        name: "Signature Silk Blazer",
        price: "₹4,299",
        tag: "NEW ARRIVAL",
        img: "https://images.unsplash.com/photo-1590770426020-6a4ae9d31a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        link: "fashion_ProductDetails.html?name=Signature%20Silk%20Blazer&price=₹4,299&img=https://images.unsplash.com/photo-1590770426020-6a4ae9d31a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&cat=Women&rating=4.9&reviews=203&desc=Timeless silk blazer with tailored fit.",
        bg: "linear-gradient(135deg, rgba(33,33,33,0.92), rgba(0,0,0,0.88)), url('https://images.unsplash.com/photo-1590770426020-6a4ae9d31a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
        desc: "Timeless silk blazer with tailored fit for every occasion. Premium Italian silk blend."
    },
    {
        name: "Linen Shirt Set",
        price: "₹1,499",
        tag: "TRENDING NOW",
        img: "https://images.unsplash.com/photo-1593771595439-7e7ca539f7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        link: "fashion_ProductDetails.html?name=Linen%20Shirt%20Set&price=₹1,499&img=https://images.unsplash.com/photo-1593771595439-7e7ca539f7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&cat=Men&rating=4.8&reviews=167&desc=Casual linen shirt perfect for summer.",
        bg: "linear-gradient(135deg, rgba(33, 150, 243, 0.9), rgba(13, 71, 161, 0.88)), url('https://images.unsplash.com/photo-1593771595439-7e7ca539f7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
        desc: "Casual linen shirt perfect for summer. Breathable fabric with modern cut."
    },
    {
        name: "Boho Maxi Dress",
        price: "₹1,899",
        tag: "BEST SELLER",
        img: "https://images.unsplash.com/photo-1577968897966-f23e2ebb964b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        link: "fashion_ProductDetails.html?name=Boho%20Maxi%20Dress&price=₹1,899&img=https://images.unsplash.com/photo-1577968897966-f23e2ebb964b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&cat=Women&rating=4.9&reviews=87&desc=Flowy boho maxi dress for summer festivals.",
        bg: "linear-gradient(135deg, rgba(159, 168, 218, 0.92), rgba(103, 128, 159, 0.88)), url('https://images.unsplash.com/photo-1577968897966-f23e2ebb964b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
        desc: "Flowy boho maxi dress for summer festivals. Lightweight cotton with intricate prints."
    },
    {
        name: "Kids Adventure Outfit",
        price: "₹799",
        tag: "KIDS FAVORITE",
        img: "https://images.unsplash.com/photo-1511671782779-cb5545a2c1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        link: "fashion_ProductDetails.html?name=Kids%20Adventure%20Outfit&price=₹799&img=https://images.unsplash.com/photo-1511671782779-cb5545a2c1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&cat=Kids&rating=4.8&reviews=78&desc=Adventure outfit set for young explorers.",
        bg: "linear-gradient(135deg, rgba(255, 193, 7, 0.88), rgba(255, 152, 0, 0.82)), url('https://images.unsplash.com/photo-1511671782779-cb5545a2c1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
        desc: "Adventure outfit set for young explorers. Durable fabrics for play and comfort."
    }
];

// DOM Elements
const carouselInner = document.getElementById('hero-carousel-inner');
const carouselDots = document.getElementById('hero-carousel-nav');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const progressFill = document.getElementById('carousel-progress-fill');

let currentHeroSlide = 0;
let carouselTimer;
const SLIDE_DURATION = 5000; // 5 seconds

// Swipe / Drag State
let isDragging = false;
let dragStartX = 0;
let dragCurrentX = 0;
let dragStartTime = 0;
const SWIPE_THRESHOLD = 50;
const VELOCITY_THRESHOLD = 0.3;

// Render Hero Carousel
function renderHeroCarousel() {
    if (!carouselInner || !carouselDots) return;

    heroProducts.forEach((product, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = product.bg;
        slide.style.backgroundSize = 'cover';
        slide.style.backgroundPosition = 'center';

        slide.innerHTML = `
            <div class="hero-content">
                <div class="hero-text">
                    <span class="category-tag">${product.tag}</span>
                    <h1>Dress The <span style="color:var(--gold);">Future</span></h1>
                    <p>${product.desc}</p>
                </div>
                <div class="hero-product-display">
                    <div class="hero-card">
                        <img src="${product.img}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p class="hero-price">${product.price}</p>
                        <button class="btn-light" onclick="window.location.href='${product.link}'">VIEW PRODUCT</button>
                    </div>
                </div>
            </div>
        `;
        carouselInner.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dot.onclick = () => showHeroSlide(index, index > currentHeroSlide ? 'next' : 'prev');
        carouselDots.appendChild(dot);
    });

    if (prevBtn) prevBtn.onclick = () => prevHeroSlide();
    if (nextBtn) nextBtn.onclick = () => nextHeroSlide();

    initSwipeHandlers();

    startCarouselAutoPlay();
}

// Show Slide (circular)
function showHeroSlide(index, direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    index = ((index % heroProducts.length) + heroProducts.length) % heroProducts.length;

    if (index === currentHeroSlide) return;

    slides.forEach(s => {
        s.classList.remove('next-slide', 'prev-slide', 'active');
        s.style.transform = '';
        s.style.opacity = '';
    });
    dots.forEach(d => d.classList.remove('active'));

    currentHeroSlide = index;
    const activeSlide = slides[currentHeroSlide];
    activeSlide.classList.add('active');
    activeSlide.classList.add(direction === 'next' ? 'next-slide' : 'prev-slide');
    dots[currentHeroSlide].classList.add('active');

    startCarouselAutoPlay();
}

function nextHeroSlide() {
    let next = (currentHeroSlide + 1) % heroProducts.length;
    showHeroSlide(next, 'next');
}

function prevHeroSlide() {
    let prev = (currentHeroSlide - 1 + heroProducts.length) % heroProducts.length;
    showHeroSlide(prev, 'prev');
}

// Auto-Play
function startCarouselAutoPlay() {
    clearInterval(carouselTimer);

    if (progressFill) {
        progressFill.style.transition = 'none';
        progressFill.style.width = '0%';
        progressFill.offsetHeight;
        progressFill.style.transition = `width ${SLIDE_DURATION}ms linear`;
        progressFill.style.width = '100%';
    }

    carouselTimer = setInterval(nextHeroSlide, SLIDE_DURATION);
}

function pauseCarouselAutoPlay() {
    clearInterval(carouselTimer);
    if (progressFill) {
        progressFill.style.transition = 'none';
        progressFill.style.width = progressFill.offsetWidth + 'px';
    }
}

// Touch/Mouse Swipe
function initSwipeHandlers() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    carousel.addEventListener('dragstart', e => e.preventDefault());

    // Touch
    carousel.addEventListener('touchstart', onDragStart, { passive: true });
    carousel.addEventListener('touchmove', onDragMove, { passive: false });
    carousel.addEventListener('touchend', onDragEnd);
    carousel.addEventListener('touchcancel', onDragEnd);

    // Mouse
    carousel.addEventListener('mousedown', onDragStart);
    carousel.addEventListener('mousemove', onDragMove);
    carousel.addEventListener('mouseup', onDragEnd);
    carousel.addEventListener('mouseleave', onDragEnd);
}

function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}

function onDragStart(e) {
    if (e.target.closest('.carousel-control, .carousel-dot, .btn-light')) return;

    isDragging = true;
    dragStartX = getClientX(e);
    dragCurrentX = dragStartX;
    dragStartTime = Date.now();

    pauseCarouselAutoPlay();
    document.querySelector('.hero-carousel').style.cursor = 'grabbing';

    const activeSlide = document.querySelectorAll('.carousel-slide')[currentHeroSlide];
    if (activeSlide) activeSlide.style.transition = 'none';
}

function onDragMove(e) {
    if (!isDragging) return;

    if (e.cancelable && e.touches) e.preventDefault();

    dragCurrentX = getClientX(e);
    const deltaX = dragCurrentX - dragStartX;

    const activeSlide = document.querySelectorAll('.carousel-slide')[currentHeroSlide];
    if (activeSlide) {
        const dampedDelta = deltaX * 0.4;
        activeSlide.style.transform = `translateX(${dampedDelta}px)`;
        activeSlide.style.opacity = `${1 - Math.abs(deltaX) / 1500}`;
    }
}

function onDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;

    document.querySelector('.hero-carousel').style.cursor = '';

    const deltaX = dragCurrentX - dragStartX;
    const elapsed = Date.now() - dragStartTime;
    const velocity = Math.abs(deltaX) / elapsed;

    const activeSlide = document.querySelectorAll('.carousel-slide')[currentHeroSlide];
    if (activeSlide) {
        activeSlide.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        activeSlide.style.transform = '';
        activeSlide.style.opacity = '';
    }

    if (Math.abs(deltaX) > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
        if (deltaX < 0) nextHeroSlide();
        else prevHeroSlide();
    } else {
        startCarouselAutoPlay();
    }
}

// Categories data
const categories = [
    { name: "Men's Tailored Suits", tagline: "POWER DRESSING" },
    { name: "Women's Evening Wear", tagline: "ELEGANCE REDEFINED" },
    { name: "Casual Streetwear", tagline: "URBAN EDGE" },
    { name: "Designer Handbags", tagline: "LUXURY ACCESSORIES" },
    { name: "Premium Footwear", tagline: "STEP IN STYLE" },
    { name: "Jewelry Collections", tagline: "TIMeless GLOW" },
    { name: "Kids Formal Wear", tagline: "LITTLE ELEGANCE" },
    { name: "Sportswear Active", tagline: "MOVE IN STYLE" },
    { name: "Beachwear Summer", tagline: "VACATION VIBES" },
    { name: "Winter Coats", tagline: "COZY LUXURY" },
    { name: "Ethnic Wear", tagline: "CULTURAL GRACE" },
    { name: "Wedding Collections", tagline: "PERFECT DAY" },
    { name: "Office Professional", tagline: "BOARDROOM READY" },
    { name: "Party Outfits", tagline: "NIGHT OUT" },
    { name: "Loungewear Home", tagline: "RELAX IN LUXE" },
    { name: "Sunglasses Designer", tagline: "SHADES OF STYLE" },
    { name: "Watches Premium", tagline: "TIME PERFECTION" },
    { name: "Scarves Silks", tagline: "ELEGANT TOUCH" }
];


const products = [
    { name: "Oxford Shirt", price: "₹1,299", img: "https://images.unsplash.com/photo-1593771595439-7e7ca539f7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Silk Blazer", price: "₹4,299", img: "https://images.unsplash.com/photo-1590770426020-6a4ae9d31a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Maxi Dress", price: "₹1,899", img: "https://images.unsplash.com/photo-1577968897966-f23e2ebb964b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Adventure Set", price: "₹799", img: "https://images.unsplash.com/photo-1511671782779-cb5545a2c1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Leather Jacket", price: "₹5,999", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Chino Trousers", price: "₹1,599", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Cashmere Sweater", price: "₹2,999", img: "https://images.unsplash.com/photo-1529139577552-0c328d130c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Denim Jacket", price: "₹2,199", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Sneakers", price: "₹3,499", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Handbag", price: "₹4,999", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Wool Coat", price: "₹6,499", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Graphic Tee", price: "₹899", img: "https://images.unsplash.com/photo-1595152623397-7c8bd122a555?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];


const badges = [
    { text: "Best Seller", class: "badge-best" },
    { text: "Top Pick", class: "badge-deal" },
    { text: "New", class: "badge-new" },
    { text: "Trending", class: "badge-best" }
];

function renderDynamicCategories() {
    const container = document.getElementById('dynamic-categories');
    if (!container) return;

    categories.forEach((catObj, index) => {
        const section = document.createElement('section');
        section.className = 'container';
        section.style.background = index % 2 === 0 ? 'var(--warm-white)' : 'var(--cream)';

        section.innerHTML = `
            <div class="section-header">
                <div>
                    <span class="section-tagline">${catObj.tagline}</span>
                    <h2>${catObj.name}</h2>
                </div>
                <a href="fashion_AllProducts.html" class="view-all">View All <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="product-scroll-container">
                ${products.map(p => {
            const b = badges[Math.floor(Math.random() * badges.length)];
            return `
                    <div class="product-card" onclick="window.location.href='fashion_ProductDetails.html?name=${encodeURIComponent(catObj.name + ' ' + p.name)}&price=${encodeURIComponent(p.price)}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(catObj.name)}&badge=${encodeURIComponent(b.text)}'">
                        <div class="image-wrapper">
                            <img src="${p.img}" class="product-image" alt="${p.name}">
                            <span class="product-badge ${b.class}">${b.text}</span>
                        </div>
                        <div class="product-info">
                            <h3>${p.name}</h3>
                            <p class="product-price">${p.price}</p>
                            <button class="add-to-cart" onclick="event.stopPropagation();">Add to Cart</button>
                        </div>
                    </div>
                    `;
        }).join('')}
            </div>
        `;
        container.appendChild(section);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderHeroCarousel();
    renderDynamicCategories();
});
