// =============================================
// Medicine_&_Nutrients.js — Hero Carousel + Dynamic Categories
// Theme: Green, White & Black (Medical / Health)
// =============================================

const heroProducts = [
    {
        name: "Vitamin D3 5000 IU",
        price: "$12.99",
        tag: "BESTSELLER",
        img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&h=600&fit=crop",
        link: "Medicine_&_Nutrients_ProductDetails.html?name=Vitamin D3 5000 IU&price=$12.99&img=https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&h=600&fit=crop&cat=Vitamins&rating=4.9&reviews=24000&originalPrice=$19.99&desc=High-potency Vitamin D3 for bone health, immune support, and mood regulation. 120 softgels.&badge=Bestseller&brand=NatureMade",
        bg: "linear-gradient(rgba(7, 15, 7, 0.88), rgba(45, 90, 39, 0.85)), url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1600&h=900&fit=crop')",
        desc: "Boost your immunity and strengthen bones with pharmaceutical-grade Vitamin D3. Recommended by 9 out of 10 doctors."
    },
    {
        name: "Omega-3 Fish Oil",
        price: "$18.99",
        tag: "HEART HEALTH",
        img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=600&h=600&fit=crop",
        link: "Medicine_&_Nutrients_ProductDetails.html?name=Omega-3 Fish Oil&price=$18.99&img=https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=600&h=600&fit=crop&cat=Supplements&rating=4.8&reviews=31000&originalPrice=$29.99&desc=Triple-strength EPA/DHA for heart, brain, and joint health. 180 count.&badge=Top Rated&brand=Nordic Naturals",
        bg: "linear-gradient(rgba(7, 15, 7, 0.88), rgba(45, 90, 39, 0.85)), url('https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1600&h=900&fit=crop')",
        desc: "Clinically-proven omega-3 formula for cardiovascular health. Molecularly distilled, no fishy aftertaste."
    },
    {
        name: "Ashwagandha KSM-66",
        price: "$15.99",
        tag: "STRESS RELIEF",
        img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&h=600&fit=crop",
        link: "Medicine_&_Nutrients_ProductDetails.html?name=Ashwagandha KSM-66&price=$15.99&img=https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&h=600&fit=crop&cat=Herbal&rating=4.8&reviews=22000&originalPrice=$24.99&desc=Clinically-proven adaptogen for stress relief, energy, and focus.&badge=Organic&brand=Himalaya",
        bg: "linear-gradient(rgba(7, 15, 7, 0.88), rgba(45, 90, 39, 0.85)), url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&h=900&fit=crop')",
        desc: "Ancient Ayurvedic wisdom meets modern science. Clinically-proven to reduce cortisol levels by 30%."
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
const SLIDE_DURATION = 5000;

let isDragging = false;
let dragStartX = 0;
let dragCurrentX = 0;
let dragStartTime = 0;
const SWIPE_THRESHOLD = 50;
const VELOCITY_THRESHOLD = 0.3;

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
                    <h1>Your <span style="color:var(--accent-green)">Health</span>, Simplified</h1>
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

function showHeroSlide(index, direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    index = ((index % heroProducts.length) + heroProducts.length) % heroProducts.length;
    if (index === currentHeroSlide) return;
    slides.forEach(s => { s.classList.remove('next-slide', 'prev-slide', 'active'); s.style.transform = ''; s.style.opacity = ''; });
    dots.forEach(d => d.classList.remove('active'));
    currentHeroSlide = index;
    slides[currentHeroSlide].classList.add('active', direction === 'next' ? 'next-slide' : 'prev-slide');
    dots[currentHeroSlide].classList.add('active');
    startCarouselAutoPlay();
}

function nextHeroSlide() { showHeroSlide((currentHeroSlide + 1) % heroProducts.length, 'next'); }
function prevHeroSlide() { showHeroSlide((currentHeroSlide - 1 + heroProducts.length) % heroProducts.length, 'prev'); }

function startCarouselAutoPlay() {
    clearInterval(carouselTimer);
    if (progressFill) { progressFill.style.transition = 'none'; progressFill.style.width = '0%'; progressFill.offsetHeight; progressFill.style.transition = `width ${SLIDE_DURATION}ms linear`; progressFill.style.width = '100%'; }
    carouselTimer = setInterval(nextHeroSlide, SLIDE_DURATION);
}

function pauseCarouselAutoPlay() {
    clearInterval(carouselTimer);
    if (progressFill) { progressFill.style.transition = 'none'; progressFill.style.width = progressFill.offsetWidth + 'px'; }
}

function initSwipeHandlers() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;
    carousel.addEventListener('dragstart', e => e.preventDefault());
    carousel.addEventListener('touchstart', onDragStart, { passive: true });
    carousel.addEventListener('touchmove', onDragMove, { passive: false });
    carousel.addEventListener('touchend', onDragEnd);
    carousel.addEventListener('touchcancel', onDragEnd);
    carousel.addEventListener('mousedown', onDragStart);
    carousel.addEventListener('mousemove', onDragMove);
    carousel.addEventListener('mouseup', onDragEnd);
    carousel.addEventListener('mouseleave', onDragEnd);
}

function getClientX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }

function onDragStart(e) {
    if (e.target.closest('.carousel-control, .carousel-dot, .btn-light, .add-to-cart')) return;
    isDragging = true; dragStartX = getClientX(e); dragCurrentX = dragStartX; dragStartTime = Date.now();
    pauseCarouselAutoPlay();
    document.querySelector('.hero-carousel').style.cursor = 'grabbing';
    const active = document.querySelectorAll('.carousel-slide')[currentHeroSlide];
    if (active) active.style.transition = 'none';
}

function onDragMove(e) {
    if (!isDragging) return;
    if (e.cancelable && e.touches) e.preventDefault();
    dragCurrentX = getClientX(e);
    const d = dragCurrentX - dragStartX;
    const active = document.querySelectorAll('.carousel-slide')[currentHeroSlide];
    if (active) { active.style.transform = `translateX(${d * 0.4}px)`; active.style.opacity = `${1 - Math.abs(d) / 1500}`; }
}

function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    document.querySelector('.hero-carousel').style.cursor = '';
    const d = dragCurrentX - dragStartX;
    const v = Math.abs(d) / (Date.now() - dragStartTime);
    const active = document.querySelectorAll('.carousel-slide')[currentHeroSlide];
    if (active) { active.style.transition = 'transform 0.3s ease, opacity 0.3s ease'; active.style.transform = ''; active.style.opacity = ''; }
    if (Math.abs(d) > SWIPE_THRESHOLD || v > VELOCITY_THRESHOLD) { d < 0 ? nextHeroSlide() : prevHeroSlide(); }
    else { startCarouselAutoPlay(); }
}

// =============================================
// Health Experts
// =============================================
const experts = [
    { name: "Dr. Sarah Mitchell", specialty: "Nutritionist", bio: "20+ years in clinical nutrition. Specializes in supplement protocols.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&fit=crop" },
    { name: "Dr. James Chen", specialty: "Pharmacist", bio: "Chief pharmacist with expertise in drug interactions and safety.", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&fit=crop" },
    { name: "Dr. Priya Sharma", specialty: "Ayurveda Expert", bio: "Bridges traditional Ayurvedic medicine with modern wellness science.", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&fit=crop" },
    { name: "Dr. Michael Torres", specialty: "Sports Medicine", bio: "Helps athletes optimize performance through targeted supplementation.", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&h=200&fit=crop" },
    { name: "Dr. Emily Watson", specialty: "Dermatologist", bio: "Expert in skin health nutrients and collagen-based therapies.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop" }
];

function renderExperts() {
    const grid = document.getElementById('expert-spotlight-grid');
    if (!grid) return;
    experts.forEach(e => {
        const card = document.createElement('div');
        card.className = 'expert-card';
        card.innerHTML = `
            <img src="${e.img}" alt="${e.name}" class="expert-avatar">
            <h4>${e.name}</h4>
            <div class="expert-specialty">${e.specialty}</div>
            <p class="expert-bio">${e.bio}</p>
        `;
        grid.appendChild(card);
    });
}

// =============================================
// Dynamic Category Sections
// =============================================
const categoryData = {
    vitamins: { tagline: "ESSENTIAL DAILY SUPPORT", title: "Vitamins & Supplements", products: [
        { name: "Vitamin C 1000mg", brand: "NatureMade", price: "$9.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop" },
        { name: "Biotin 5000mcg", brand: "Natrol", price: "$7.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" },
        { name: "Zinc 50mg", brand: "Now Foods", price: "$6.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop" },
        { name: "Iron + Folic Acid", brand: "Garden of Life", price: "$11.99", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop" }
    ]},
    painrelief: { tagline: "FAST & EFFECTIVE RELIEF", title: "Pain Relief & Anti-Inflammatory", products: [
        { name: "Ibuprofen 200mg", brand: "Advil", price: "$8.49", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop" },
        { name: "Acetaminophen 500mg", brand: "Tylenol", price: "$7.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop" },
        { name: "Muscle Relief Cream", brand: "Bengay", price: "$12.99", img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop" },
        { name: "Joint Support Complex", brand: "Move Free", price: "$24.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" }
    ]},
    digestive: { tagline: "GUT HEALTH MATTERS", title: "Digestive Health", products: [
        { name: "Probiotic 50B CFU", brand: "Garden of Life", price: "$24.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop" },
        { name: "Digestive Enzymes", brand: "Now Foods", price: "$14.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop" },
        { name: "Fiber Supplement", brand: "Metamucil", price: "$16.99", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop" },
        { name: "Antacid Tablets", brand: "Tums", price: "$6.49", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" }
    ]},
    immunity: { tagline: "FORTIFY YOUR DEFENSES", title: "Immunity Boosters", products: [
        { name: "Elderberry Gummies", brand: "Zarbee's", price: "$14.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" },
        { name: "Vitamin C + Zinc", brand: "Emergen-C", price: "$10.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop" },
        { name: "Turmeric Curcumin", brand: "Qunol", price: "$19.99", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop" },
        { name: "Echinacea Extract", brand: "Nature's Way", price: "$8.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop" }
    ]},
    skincare: { tagline: "GLOW FROM WITHIN", title: "Skin & Beauty Nutrients", products: [
        { name: "Collagen Peptides", brand: "Vital Proteins", price: "$27.99", img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop" },
        { name: "Hyaluronic Acid", brand: "Now Foods", price: "$14.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop" },
        { name: "Biotin Complex", brand: "Sports Research", price: "$12.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" },
        { name: "Vitamin E Oil", brand: "Jason Natural", price: "$9.99", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop" }
    ]},
    babykids: { tagline: "SAFE FOR LITTLE ONES", title: "Baby & Kids Health", products: [
        { name: "Kids Multivitamin", brand: "Flintstones", price: "$11.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop" },
        { name: "Baby Vitamin D Drops", brand: "Enfamil", price: "$9.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop" },
        { name: "Children's Cough Syrup", brand: "Zarbee's", price: "$8.49", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" },
        { name: "Kids Probiotic Chews", brand: "Culturelle", price: "$16.99", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop" }
    ]},
    diabetes: { tagline: "MANAGE & THRIVE", title: "Diabetes Care", products: [
        { name: "Blood Glucose Monitor", brand: "OneTouch", price: "$29.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop" },
        { name: "Test Strips (100ct)", brand: "Accu-Chek", price: "$34.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop" },
        { name: "Sugar-Free Protein Bar", brand: "Quest", price: "$2.49", img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=400&h=300&fit=crop" },
        { name: "Chromium Picolinate", brand: "Now Foods", price: "$7.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" }
    ]},
    protein: { tagline: "FUEL YOUR PERFORMANCE", title: "Protein & Fitness Nutrition", products: [
        { name: "Whey Protein Isolate", brand: "Optimum Nutrition", price: "$34.99", img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=400&h=300&fit=crop" },
        { name: "Plant Protein Blend", brand: "Vega", price: "$29.99", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop" },
        { name: "BCAA Energy", brand: "Xtend", price: "$22.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" },
        { name: "Creatine Monohydrate", brand: "MuscleTech", price: "$19.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop" }
    ]},
    herbal: { tagline: "NATURE'S PHARMACY", title: "Herbal & Ayurveda", products: [
        { name: "Ashwagandha KSM-66", brand: "Himalaya", price: "$15.99", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop" },
        { name: "Triphala Capsules", brand: "Organic India", price: "$12.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop" },
        { name: "Turmeric Golden Milk", brand: "Gaia Herbs", price: "$18.99", img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop" },
        { name: "Holy Basil (Tulsi)", brand: "Himalaya", price: "$9.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" }
    ]},
    firstaid: { tagline: "BE PREPARED", title: "First Aid & Medical Supplies", products: [
        { name: "First Aid Kit - 250pc", brand: "Johnson & Johnson", price: "$19.99", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop" },
        { name: "Adhesive Bandages", brand: "Band-Aid", price: "$5.99", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop" },
        { name: "Antiseptic Spray", brand: "Bactine", price: "$7.99", img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop" },
        { name: "Digital Thermometer", brand: "Vicks", price: "$9.99", img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop" }
    ]}
};

const badgesPool = [
    { text: "Bestseller", class: "badge-best" },
    { text: "Top Pick", class: "badge-best" },
    { text: "New", class: "badge-new" },
    { text: "Sale", class: "badge-deal" }
];

function renderDynamicCategories() {
    const container = document.getElementById('dynamic-categories');
    if (!container) return;

    Object.keys(categoryData).forEach((key, index) => {
        const cat = categoryData[key];
        const section = document.createElement('section');
        section.className = 'container';
        section.id = `cat-${key}`;
        section.style.background = index % 2 === 0 ? 'white' : 'var(--med-section-alt)';

        section.innerHTML = `
            <div class="section-header">
                <div>
                    <span class="section-tagline">${cat.tagline}</span>
                    <h2>${cat.title}</h2>
                </div>
                <a href="Medicine_&_Nutrients_AllProducts.html" class="view-all">View All <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="product-scroll-container">
                ${cat.products.map(p => {
                    const b = badgesPool[Math.floor(Math.random() * badgesPool.length)];
                    return `
                    <div class="product-card" onclick="window.location.href='Medicine_&_Nutrients_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(cat.title)}&badge=${encodeURIComponent(b.text)}&brand=${encodeURIComponent(p.brand)}'">
                        <div class="image-wrapper">
                            <img src="${p.img}" class="product-image" alt="${p.name}">
                            <span class="product-badge ${b.class}">${b.text}</span>
                        </div>
                        <div class="product-info">
                            <h3>${p.name}</h3>
                            <p class="med-subtitle">${p.brand}</p>
                            <p class="product-price">${p.price}</p>
                            <button class="add-to-cart" onclick="event.stopPropagation();">Add to Cart</button>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        `;
        container.appendChild(section);
    });
}

// Category Tab Click → Scroll
function initCategoryTabs() {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const section = document.getElementById(`cat-${tab.dataset.cat}`);
            if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// Newsletter
function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input && input.value) { alert(`Welcome to MediStore Health Club! 💊\nHealth tips will be sent to ${input.value}`); input.value = ''; }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderHeroCarousel();
    renderExperts();
    renderDynamicCategories();
    initCategoryTabs();
    initNewsletter();
});
