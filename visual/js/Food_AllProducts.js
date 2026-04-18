/* ═══════════════════════════════════════════════════════
   FOOD ALL PRODUCTS — JavaScript
   Filtering, Sorting, and Grid Rendering
   ═══════════════════════════════════════════════════════ */

// Base Data (Derived from centralized foodData.js)
const allFoodProducts = getAllFoodProducts();

let currentFilter = 'all';
let currentSort = 'featured';

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const resultsCount = document.getElementById('results-count');
    if (!grid) return;

    let filtered = allFoodProducts.filter(p => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'veg') return p.veg;
        if (currentFilter === 'non-veg') return !p.veg;
        return p.category === currentFilter;
    });

    if (currentSort === 'price-low') filtered.sort((a,b) => a.price - b.price);
    else if (currentSort === 'price-high') filtered.sort((a,b) => b.price - a.price);
    else if (currentSort === 'rating') filtered.sort((a,b) => b.rating - a.rating);

    resultsCount.innerText = filtered.length;

    grid.innerHTML = filtered.map(item => `
        <div class="food-card" onclick="window.location.href='Food_ProductDetails.html?id=${item.id}'">
            <div class="card-img-wrap">
                <img src="${item.img}" alt="${item.name}">
                <div class="${item.veg ? 'veg-mark' : 'non-veg-mark'}"></div>
            </div>
            <div class="card-content">
                <div class="card-title">${item.name}</div>
                <div class="card-restaurant">${item.restaurant}</div>
                <div class="card-meta">
                    <span class="card-rating"><i class="fas fa-star"></i> ${item.rating}</span>
                    <span class="card-price">₹${item.price}</span>
                    <button class="add-btn" onclick="event.stopPropagation(); addToCart(${item.id})">ADD</button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderProducts();
}

function updateSort(sort) {
    currentSort = sort;
    renderProducts();
}

function addToCart(productId) {
    const product = allFoodProducts.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('pbssd_cart') || '[]');
    let existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, image: product.img, quantity: 1, category: 'Food' });
    }
    
    localStorage.setItem('pbssd_cart', JSON.stringify(cart));
    
    updateNavBadges();
    alert(`${product.name} added to cart!`);
}

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
    // Initial render
    renderProducts();
    initBackToTop();
    initCustomDropdown();

    // Filter button listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => updateFilter(btn.dataset.filter));
    });
});

// --- Back to Top Button ---
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Custom Dropdown Logic ---
function initCustomDropdown() {
    const dropdown = document.getElementById('sort-dropdown');
    const trigger = document.getElementById('dropdown-trigger');
    const menu = document.getElementById('dropdown-menu');
    const label = document.getElementById('dropdown-label');
    const backdrop = document.getElementById('dropdown-backdrop');
    const items = menu ? menu.querySelectorAll('.dropdown-item') : [];

    if (!dropdown || !trigger || !menu) return;

    function openDropdown() {
        dropdown.classList.add('open');
        if (backdrop) backdrop.classList.add('visible');
    }

    function closeDropdown() {
        dropdown.classList.remove('open');
        if (backdrop) backdrop.classList.remove('visible');
    }

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
    });

    if (backdrop) {
        backdrop.addEventListener('click', closeDropdown);
    }

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) closeDropdown();
    });

    // Keyboard: Escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDropdown();
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.dataset.value;
            const text = item.querySelector('span').textContent;
            
            // Update label
            label.textContent = 'Sort: ' + text;

            // Update active state
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Close dropdown
            closeDropdown();

            // Trigger sort
            updateSort(value);
        });
    });
}
