// =============================================
// Books.js — Hero Carousel + Dynamic Genre Sections
// Theme: Warm Amber & Deep Burgundy (Literary)
// =============================================

// Hero Carousel Dynamic Data
const heroProducts = [
    {
        name: "The Midnight Library",
        price: "$18.99",
        tag: "BESTSELLER",
        img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&h=600&fit=crop",
        link: "Books_ProductDetails.html?name=The Midnight Library&price=$18.99&img=https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&h=600&fit=crop&cat=Fiction&rating=4.9&reviews=42000&originalPrice=$28.99&desc=A dazzling novel about all the choices that go into a life well lived.&badge=Bestseller",
        bg: "linear-gradient(rgba(26, 10, 28, 0.85), rgba(74, 25, 66, 0.85)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&h=900&fit=crop')",
        desc: "Between life and death there is a library. Every book contains a different version of your life. Discover the #1 bestselling phenomenon."
    },
    {
        name: "Atomic Habits",
        price: "$16.99",
        tag: "SELF-IMPROVEMENT",
        img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&h=600&fit=crop",
        link: "Books_ProductDetails.html?name=Atomic Habits&price=$16.99&img=https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&h=600&fit=crop&cat=Self-Help&rating=4.8&reviews=85000&originalPrice=$27.99&desc=The life-changing million-copy bestseller. Build good habits, break bad ones.&badge=Phenomenon",
        bg: "linear-gradient(rgba(26, 10, 28, 0.85), rgba(74, 25, 66, 0.85)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&h=900&fit=crop')",
        desc: "Tiny changes, remarkable results. Learn the proven system that millions have used to transform their daily routines forever."
    },
    {
        name: "Dune",
        price: "$14.99",
        tag: "SCI-FI EPIC",
        img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&h=600&fit=crop",
        link: "Books_ProductDetails.html?name=Dune&price=$14.99&img=https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&h=600&fit=crop&cat=Sci-Fi&rating=4.9&reviews=67000&originalPrice=$24.99&desc=The monumental sci-fi saga. A stunning blend of adventure and mysticism.&badge=Legendary",
        bg: "linear-gradient(rgba(26, 10, 28, 0.85), rgba(74, 25, 66, 0.85)), url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1600&h=900&fit=crop')",
        desc: "The greatest science fiction novel of all time. A masterwork of imagination set on the desert planet Arrakis."
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

// ---- Swipe / Drag State ----
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
                    <h1>Your Next Great <span style="color:var(--accent-green)">Read</span> Awaits</h1>
                    <p>${product.desc}</p>
                </div>
                <div class="hero-product-display">
                    <div class="hero-card">
                        <img src="${product.img}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p class="hero-price">${product.price}</p>
                        <button class="btn-light" onclick="window.location.href='${product.link}'">VIEW BOOK</button>
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

    if (prevBtn) prevBtn.onclick = () => { prevHeroSlide(); };
    if (nextBtn) nextBtn.onclick = () => { nextHeroSlide(); };

    initSwipeHandlers();
    startCarouselAutoPlay();
}

// Show Slide
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

// Auto-Play with Progress Bar
function startCarouselAutoPlay() {
    clearInterval(carouselTimer);

    if (progressFill) {
        progressFill.style.transition = 'none';
        progressFill.style.width = '0%';
        progressFill.offsetHeight; // force reflow
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

// =============================================
// Touch + Mouse Swipe / Drag Handlers
// =============================================
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

function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}

function onDragStart(e) {
    if (e.target.closest('.carousel-control, .carousel-dot, .btn-light, .add-to-cart')) return;

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
        if (deltaX < 0) {
            nextHeroSlide();
        } else {
            prevHeroSlide();
        }
    } else {
        startCarouselAutoPlay();
    }
}

// =============================================
// Featured Authors Data
// =============================================
const featuredAuthors = [
    { name: "Stephen King", genre: "Horror / Thriller", bio: "The master of fear. Over 350 million copies sold worldwide.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop" },
    { name: "Michelle Obama", genre: "Autobiography", bio: "Former First Lady. Her memoir broke all publishing records.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop" },
    { name: "Haruki Murakami", genre: "Literary Fiction", bio: "Japan's most celebrated writer of surreal, dreamlike tales.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop" },
    { name: "J.K. Rowling", genre: "Fantasy", bio: "Creator of the wizarding world loved by billions.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop" },
    { name: "Neil Gaiman", genre: "Dark Fantasy", bio: "Weaves mythology into breathtaking modern narratives.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop" }
];

function renderFeaturedAuthors() {
    const grid = document.getElementById('author-spotlight-grid');
    if (!grid) return;

    featuredAuthors.forEach(author => {
        const card = document.createElement('div');
        card.className = 'author-card';
        card.innerHTML = `
            <img src="${author.img}" alt="${author.name}" class="author-avatar">
            <h4>${author.name}</h4>
            <div class="author-genre">${author.genre}</div>
            <p class="author-bio">${author.bio}</p>
        `;
        grid.appendChild(card);
    });
}

// =============================================
// Dynamic Genre Sections
// =============================================
const genreData = {
    horror: {
        tagline: "SPINE-CHILLING READS",
        title: "Horror & Thrillers",
        products: [
            { name: "It", author: "Stephen King", price: "$14.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" },
            { name: "The Shining", author: "Stephen King", price: "$13.99", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop" },
            { name: "Bird Box", author: "Josh Malerman", price: "$12.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" },
            { name: "Mexican Gothic", author: "Silvia Moreno-Garcia", price: "$15.99", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop" }
        ]
    },
    autobiography: {
        tagline: "REAL STORIES, REAL LIVES",
        title: "Autobiography & Memoir",
        products: [
            { name: "Becoming", author: "Michelle Obama", price: "$15.99", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop" },
            { name: "Educated", author: "Tara Westover", price: "$14.99", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=300&fit=crop" },
            { name: "Born a Crime", author: "Trevor Noah", price: "$13.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" },
            { name: "Long Walk to Freedom", author: "Nelson Mandela", price: "$16.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" }
        ]
    },
    drama: {
        tagline: "STORIES THAT MOVE YOU",
        title: "Drama & Literary Fiction",
        products: [
            { name: "Normal People", author: "Sally Rooney", price: "$15.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" },
            { name: "A Little Life", author: "Hanya Yanagihara", price: "$17.99", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop" },
            { name: "The Kite Runner", author: "Khaled Hosseini", price: "$14.99", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop" },
            { name: "Beautiful World", author: "Sally Rooney", price: "$16.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" }
        ]
    },
    scifi: {
        tagline: "BEYOND IMAGINATION",
        title: "Sci-Fi & Fantasy",
        products: [
            { name: "Project Hail Mary", author: "Andy Weir", price: "$22.99", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop" },
            { name: "Dune", author: "Frank Herbert", price: "$14.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" },
            { name: "The Name of the Wind", author: "Patrick Rothfuss", price: "$16.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" },
            { name: "Neuromancer", author: "William Gibson", price: "$13.99", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop" }
        ]
    },
    romance: {
        tagline: "LOVE IN EVERY PAGE",
        title: "Romance",
        products: [
            { name: "It Ends with Us", author: "Colleen Hoover", price: "$15.99", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop" },
            { name: "The Notebook", author: "Nicholas Sparks", price: "$12.99", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop" },
            { name: "Beach Read", author: "Emily Henry", price: "$14.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" },
            { name: "People We Meet", author: "Emily Henry", price: "$15.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" }
        ]
    },
    mystery: {
        tagline: "UNRAVEL THE TRUTH",
        title: "Mystery & Crime",
        products: [
            { name: "Gone Girl", author: "Gillian Flynn", price: "$14.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" },
            { name: "The Girl on the Train", author: "Paula Hawkins", price: "$13.99", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop" },
            { name: "Big Little Lies", author: "Liane Moriarty", price: "$14.99", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop" },
            { name: "The Da Vinci Code", author: "Dan Brown", price: "$12.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" }
        ]
    },
    selfhelp: {
        tagline: "TRANSFORM YOUR LIFE",
        title: "Self-Help & Growth",
        products: [
            { name: "Atomic Habits", author: "James Clear", price: "$16.99", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=300&fit=crop" },
            { name: "The Power of Now", author: "Eckhart Tolle", price: "$14.99", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop" },
            { name: "Think and Grow Rich", author: "Napoleon Hill", price: "$11.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" },
            { name: "The 7 Habits", author: "Stephen Covey", price: "$15.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" }
        ]
    },
    history: {
        tagline: "LESSONS FROM THE PAST",
        title: "History & Politics",
        products: [
            { name: "Sapiens", author: "Yuval Noah Harari", price: "$18.99", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop" },
            { name: "Guns, Germs, and Steel", author: "Jared Diamond", price: "$16.99", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop" },
            { name: "The Silk Roads", author: "Peter Frankopan", price: "$17.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" },
            { name: "SPQR", author: "Mary Beard", price: "$15.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" }
        ]
    },
    children: {
        tagline: "IMAGINATION UNLIMITED",
        title: "Young Adult & Children",
        products: [
            { name: "Harry Potter Box Set", author: "J.K. Rowling", price: "$49.99", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop" },
            { name: "Percy Jackson", author: "Rick Riordan", price: "$12.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" },
            { name: "The Hunger Games", author: "Suzanne Collins", price: "$14.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" },
            { name: "Matilda", author: "Roald Dahl", price: "$9.99", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop" }
        ]
    },
    poetry: {
        tagline: "WORDS THAT RESONATE",
        title: "Poetry & Verse",
        products: [
            { name: "Milk and Honey", author: "Rupi Kaur", price: "$10.99", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop" },
            { name: "The Sun and Her Flowers", author: "Rupi Kaur", price: "$12.99", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=300&fit=crop" },
            { name: "Leaves of Grass", author: "Walt Whitman", price: "$8.99", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop" },
            { name: "The Waste Land", author: "T.S. Eliot", price: "$9.99", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop" }
        ]
    }
};

const badgesPool = [
    { text: "Bestseller", class: "badge-best" },
    { text: "Top Pick", class: "badge-best" },
    { text: "New", class: "badge-new" },
    { text: "Trending", class: "badge-deal" }
];

function renderDynamicGenres() {
    const container = document.getElementById('dynamic-categories');
    if (!container) return;

    const genreKeys = Object.keys(genreData);

    genreKeys.forEach((key, index) => {
        const genre = genreData[key];
        const section = document.createElement('section');
        section.className = 'container';
        section.id = `genre-${key}`;
        section.style.background = index % 2 === 0 ? 'var(--book-warm-bg)' : 'var(--book-section-alt)';

        section.innerHTML = `
            <div class="section-header">
                <div>
                    <span class="section-tagline">${genre.tagline}</span>
                    <h2>${genre.title}</h2>
                </div>
                <a href="Books_AllProducts.html" class="view-all">View All <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="product-scroll-container">
                ${genre.products.map(p => {
                    const b = badgesPool[Math.floor(Math.random() * badgesPool.length)];
                    return `
                    <div class="product-card" onclick="window.location.href='Books_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(genre.title)}&badge=${encodeURIComponent(b.text)}'">
                        <div class="image-wrapper">
                            <img src="${p.img}" class="product-image" alt="${p.name}">
                            <span class="product-badge ${b.class}">${b.text}</span>
                        </div>
                        <div class="product-info">
                            <h3>${p.name}</h3>
                            <p class="book-author">by ${p.author}</p>
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

// =============================================
// Genre Tab Click → Scroll to Section
// =============================================
function initGenreTabs() {
    document.querySelectorAll('.genre-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.genre-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Scroll to corresponding section
            const genreId = tab.dataset.genre;
            const section = document.getElementById(`genre-${genreId}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// =============================================
// Newsletter Form
// =============================================
function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input && input.value) {
            alert(`Welcome to the Book Lovers Club! 📚\nWe'll send curated picks to ${input.value}`);
            input.value = '';
        }
    });
}

// =============================================
// Initialize
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    renderHeroCarousel();
    renderFeaturedAuthors();
    renderDynamicGenres();
    initGenreTabs();
    initNewsletter();
});
