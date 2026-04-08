// Hero Carousel Dynamic Data
const heroProducts = [
    { 
        name: "Emerald Ceramic Pot Set", 
        price: "$129.99", 
        tag: "BEST DEAL", 
        img: "../assets/cookware_category_green_1775381016223.png", 
        link: "ProductDetails.html?name=Emerald%20Ceramic%20Pot%20Set&price=$129.99&img=../assets/cookware_category_green_1775381016223.png&cat=Cookware&rating=4.8&reviews=3200&originalPrice=$189.99&desc=Eco-friendly%20ceramic%20with%20non-stick%20coating.%20Set%20of%205%20pots%20and%20pans%20for%20healthy%2C%20oil-free%20cooking.&badge=Best%20Seller",
        bg: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('../assets/hero_banner_green_ecommerce_1775380995226.png')",
        desc: "Upgrade your kitchen with our top-rated eco-friendly ceramic pot set. Healthier cooking, elegant design."
    },
    { 
        name: "Smart Kitchen Combo", 
        price: "$199.00", 
        tag: "TRENDING NOW", 
        img: "https://images.unsplash.com/photo-1556910110-ad52744d7c1f?q=80&w=600&h=600&fit=crop", 
        link: "ProductDetails.html?name=Smart+Kitchen+Combo&price=$199&img=https://images.unsplash.com/photo-1556910110-ad52744d7c1f?q=80&w=400&h=300&fit=crop&cat=Deals&rating=4.7&reviews=2450&originalPrice=$399&desc=Multi-functional%20automated%20kitchen%20tools.&badge=50%25%20OFF",
        bg: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1513519245088-0e12902e15ca?q=80&w=1600&h=900&fit=crop')",
        desc: "The ultimate automated kitchen experience. Multi-functional tools to save your time and space."
    },
    { 
        name: "Luxury Sofa Set Lux", 
        price: "$1,200", 
        tag: "BEST SELLER", 
        img: "https://images.unsplash.com/photo-1493663214224-992ca251d102?q=80&w=600&h=600&fit=crop", 
        link: "ProductDetails.html?name=Luxury%20Sofa%20Set%20Lux&price=$1,200&img=https://images.unsplash.com/photo-1493663214224-992ca251d102?q=80&w=400&h=300&fit=crop&cat=Deals&rating=4.9&reviews=1890&originalPrice=$1,800&desc=Hand-stitched%20premium%20velvet%20upholstery.&badge=Best%20Seller",
        bg: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=1600&h=900&fit=crop')",
        desc: "Supreme comfort meets modern architecture. Hand-stitched premium velvet for an elegant living room."
    },
    { 
        name: "Nordic Minimalist Vase", 
        price: "$32.00", 
        tag: "TRENDING NOW", 
        img: "https://images.unsplash.com/photo-1581783598307-5bbe6ed40e5a?q=80&w=600&h=600&fit=crop", 
        link: "ProductDetails.html?name=Nordic%20Minimalist%20Vase&price=$32.00&img=https://images.unsplash.com/photo-1581783598307-5bbe6ed40e5a?q=80&w=400&h=300&fit=crop&cat=Trending&rating=4.5&reviews=1560&badge=Trending",
        bg: "#111827",
        desc: "A timeless ceramic piece that brings Scandinavian simplicity to your shelf or table."
    },
    { 
        name: "Bamboo Serving Tray", 
        price: "$24.50", 
        tag: "BEST DEAL", 
        img: "https://images.unsplash.com/photo-1513519245088-0e12902e15ca?q=80&w=600&h=600&fit=crop", 
        link: "ProductDetails.html?name=Bamboo%20Serving%20Tray&price=$24.50&img=https://images.unsplash.com/photo-1513519245088-0e12902e15ca?q=400&h=300&fit=crop&cat=Best+Deals&rating=4.4&reviews=2100&originalPrice=$35&badge=Best%20Deal",
        bg: "#064e3b",
        desc: "Sustainable, durable, and naturally beautiful. Perfect for breakfast in bed or hosting guests."
    },
    { 
        name: "Velvet Cushion Set", 
        price: "$45.00", 
        tag: "BEST SELLER", 
        img: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=600&h=600&fit=crop", 
        link: "ProductDetails.html?name=Velvet%20Cushion%20Set&price=$45.00&img=https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=400&h=300&fit=crop&cat=Bestsellers&rating=4.6&reviews=2340&originalPrice=$65&badge=Best%20Seller",
        bg: "#4c1d95",
        desc: "Plush textures and vibrant tones. Transform any sofa into a sanctuary of softness."
    }
];

// Carousel DOM elements
const carouselInner = document.getElementById('hero-carousel-inner');
const carouselDots = document.getElementById('hero-carousel-nav');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const progressFill = document.getElementById('carousel-progress-fill');

let currentHeroSlide = 0;
let carouselTimer;
const SLIDE_DURATION = 6000; // 6 seconds

function renderHeroCarousel() {
    if (!carouselInner || !carouselDots) return;
    
    heroProducts.forEach((product, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = product.bg;
        
        slide.innerHTML = `
            <div class="hero-content">
                <div class="hero-text">
                    <span class="category-tag">${product.tag}</span>
                    <h1>The Best For <span style="color:var(--accent-green)">Your Home</span></h1>
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
    
    startCarouselAutoPlay();
}

function showHeroSlide(index, direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (index === currentHeroSlide) return;
    
    // Remove all direction classes first
    slides.forEach(s => s.classList.remove('next-slide', 'prev-slide', 'active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // Set current active and animation direction
    currentHeroSlide = index;
    const activeSlide = slides[currentHeroSlide];
    activeSlide.classList.add('active');
    activeSlide.classList.add(direction === 'next' ? 'next-slide' : 'prev-slide');
    dots[currentHeroSlide].classList.add('active');
    
    startCarouselAutoPlay(); // Reset timer
}

function nextHeroSlide() {
    let next = (currentHeroSlide + 1) % heroProducts.length;
    showHeroSlide(next, 'next');
}

function prevHeroSlide() {
    let prev = (currentHeroSlide - 1 + heroProducts.length) % heroProducts.length;
    showHeroSlide(prev, 'prev');
}

function startCarouselAutoPlay() {
    clearInterval(carouselTimer);
    
    // Reset Progress Bar
    if (progressFill) {
        progressFill.style.transition = 'none';
        progressFill.style.width = '0%';
        // Force reflow
        progressFill.offsetHeight; 
        progressFill.style.transition = `width ${SLIDE_DURATION}ms linear`;
        progressFill.style.width = '100%';
    }

    carouselTimer = setInterval(nextHeroSlide, SLIDE_DURATION);
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    renderHeroCarousel();
    renderDynamicCategories();
});

// Category/Product Data for main body
const categories = [
    { name: "Mosquito Net & Insect Protection", tagline: "SUMMER SAFE" },
    { name: "Modern Home Decor", tagline: "ESTHETIC TOUCH" },
    { name: "Premium Lighting Solutions", tagline: "ILLUMINATE YOUR HOME" },
    { name: "Eco Storage Containers", tagline: "ORGANIZED LIVING" },
    { name: "Luxury Bathroom Suite", tagline: "SPA AT HOME" },
    { name: "Elegant Drinkware", tagline: "SIP IN STYLE" },
    { name: "Designer Furniture", tagline: "TIMELESS COMFORT" },
    { name: "Protective Home Covers", tagline: "SHIELD YOUR GEAR" },
    { name: "Hardware & Tools", tagline: "BUILD IT RIGHT" },
    { name: "Luxury Sofas & Loungers", tagline: "SIT IN COMFORT" },
    { name: "Home Furnishing Decor", tagline: "COZY SPACES" },
    { name: "Plush Mats & Rugs", tagline: "SOFT UNDERFOOT" },
    { name: "Spiritual Pooja Needs", tagline: "SACRED SPACE" },
    { name: "Bath Linen Essentials", tagline: "SOFT & ABSORBENT" },
    { name: "Urban Gardening kit", tagline: "GROW YOUR GREEN" },
    { name: "Artistic Wall Stickers", tagline: "VIBRANT WALLS" },
    { name: "Modern Cleaning Utilities", tagline: "SPARKLE & SHINE" },
    { name: "Exquisite Dining Set", tagline: "GATHER AROUND" },
    { name: "Practical Home Utilities", tagline: "EVERYDAY ESSENTIALS" }
];

const products = [
    { name: "Ultimate Edition", price: "$49.99", img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=400&h=300&fit=crop" },
    { name: "Modern Concept", price: "$75.00", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400&h=300&fit=crop" },
    { name: "Luxury Selection", price: "$120.00", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&h=300&fit=crop" },
    { name: "Essential Pack", price: "$35.50", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=400&h=300&fit=crop" }
];

const badges = [
    { text: "Best Seller", class: "badge-best" },
    { text: "Today's Deal", class: "badge-deal" },
    { text: "New", class: "badge-new" },
    { text: "Trending", class: "badge-best" }
];

function renderDynamicCategories() {
    const container = document.getElementById('dynamic-categories');
    if (!container) return;
    
    categories.forEach((catObj, index) => {
        const section = document.createElement('section');
        section.className = 'container';
        if (index % 2 === 0) section.style.background = 'var(--bg-gray)';

        section.innerHTML = `
            <div class="section-header">
                <div>
                    <span class="section-tagline">${catObj.tagline}</span>
                    <h2>${catObj.name}</h2>
                </div>
                <a href="Homesmart_AllProducts.html" class="view-all">View All <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="product-scroll-container">
                ${products.map(p => {
            const b = badges[Math.floor(Math.random() * badges.length)];
            return `
                    <div class="product-card" onclick="window.location.href='ProductDetails.html?name=${encodeURIComponent(catObj.name + ' ' + p.name)}&price=${encodeURIComponent(p.price)}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(catObj.name)}&badge=${encodeURIComponent(b.text)}'">
                        <div class="image-wrapper">
                            <img src="${p.img}" class="product-image">
                            <span class="product-badge ${b.class}">${b.text}</span>
                        </div>
                        <div class="product-info">
                            <h3>${p.name}</h3>
                            <p class="product-price">${p.price}</p>
                            <button class="add-to-cart" onclick="event.stopPropagation();">Add to Cart</button>
                        </div>
                    </div>
                `}).join('')}
            </div>
        `;
        container.appendChild(section);
    });
}
