// ── DATA ────────────────────────────────────────────────────
const products = [
  // MEN (5 items)
  { id:1, name:'Oxford Button Shirt', category:'men', tag:'new', price:1299, oldPrice:1799, rating:4.8, reviews:124, image:'https://images.unsplash.com/photo-1593771595439-7e7ca539f7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', badge:'New' },
  { id:5, name:'Chino Trousers', category:'men', tag:'sale', price:1599, oldPrice:2199, rating:4.6, reviews:91, image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'Sale' },
  { id:9, name:'Leather Jacket', category:'men', tag:'hot', price:5999, oldPrice:7999, rating:4.9, reviews:203, image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'Hot' },
  { id:10, name:'Wool Overcoat', category:'men', tag:'new', price:8999, rating:4.8, reviews:156, image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'New' },
  { id:11, name:'Slim Fit Suit', category:'men', tag:'sale', price:12999, oldPrice:18999, rating:4.9, reviews:89, image:'https://images.unsplash.com/photo-1578926285510-6d6158e845d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'Sale' },
  
  // WOMEN (6 items)
  { id:2, name:'Floral Wrap Dress', category:'women', tag:'hot', price:1899, oldPrice:2499, rating:4.9, reviews:87, image:'https://images.unsplash.com/photo-1577968897966-f23e2ebb964b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'Hot' },
  { id:4, name:'Silk Blazer', category:'women', tag:'new', price:4299, oldPrice:5999, rating:4.9, reviews:203, image:'https://images.unsplash.com/photo-1590770426020-6a4ae9d31a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'New' },
  { id:6, name:'Embroidered Kurta', category:'women', tag:'hot', price:2199, oldPrice:2999, rating:4.8, reviews:167, image:'https://images.unsplash.com/photo-1608254977395-f0908a5fe542?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'Hot' },
  { id:12, name:'Velvet Midi Dress', category:'women', tag:'new', price:3499, oldPrice:4999, rating:4.7, reviews:134, image:'https://images.unsplash.com/photo-1578494264067-19032680a68a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'New' },
  { id:13, name:'Cashmere Sweater', category:'women', tag:'sale', price:2999, oldPrice:4499, rating:4.9, reviews:245, image:'https://images.unsplash.com/photo-1529139577552-0c328d130c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'Sale' },
  { id:14, name:'Leather Handbag', category:'women', price:5499, oldPrice:7499, rating:4.8, reviews:98, image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  
  // KIDS (5 items)
  { id:3, name:'Denim Joggers', category:'kids', tag:'sale', price:799, oldPrice:1199, rating:4.7, reviews:56, image:'https://images.unsplash.com/photo-1517346810528-5687a7c6f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'Sale' },
  { id:7, name:'Graphic Tee Set', category:'kids', tag:'new', price:599, oldPrice:899, rating:4.5, reviews:44, image:'https://images.unsplash.com/photo-1595152623397-7c8bd122a555?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'New' },
  { id:15, name:'Cotton Dress', category:'kids', tag:'hot', price:1299, rating:4.8, reviews:78, image:'https://images.unsplash.com/photo-1511671782779-cb5545a2c1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'Hot' },
  { id:16, name:'Kids Blazer', category:'kids', tag:'new', price:2199, rating:4.6, reviews:67, image:'https://images.unsplash.com/photo-1578931589470-55cb3498de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'New' },
  { id:17, name:'Sneakers Set', category:'kids', tag:'sale', price:999, oldPrice:1499, rating:4.7, reviews:112, image:'https://images.unsplash.com/photo-1579653902448-b8f0ee0d2575?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge:'Sale' }
];


let cart = [];
let activeFilter = 'all';


// ── LOADER ──────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 2200);
});

// ── CURSOR ──────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
});

function animateRing() {
  ringX += (mouseX - ringX - 18) * 0.12;
  ringY += (mouseY - ringY - 18) * 0.12;
  cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animateRing);
}
animateRing();



// ── 3D CARD MOUSE PARALLAX ──────────────────────────────────
const card3d = document.getElementById('hero3dCard');
document.addEventListener('mousemove', e => {
  if (!card3d) return;
  const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
  const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;
  card3d.style.animation = 'none';
  card3d.style.transform = `translateY(-50%) rotateY(${xRatio * 12}deg) rotateX(${-yRatio * 8}deg)`;
});

// ── REVEAL ON SCROLL ────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── PRODUCTS ────────────────────────────────────────────────
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? products :
    filter === 'sale' ? products.filter(p => p.tag === 'sale') :
    filter === 'new' ? products.filter(p => p.tag === 'new') :
    products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card reveal" style="transition-delay:${i * 0.08}s" data-id="${p.id}">
      <div class="product-img-wrap">
        <div class="product-img">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="product-badges">
          ${p.badge ? `<span class="badge ${p.tag === 'new' ? 'badge-new' : p.tag === 'sale' ? 'badge-sale' : 'badge-hot'}">${p.badge}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="action-btn" onclick="quickView(${p.id})" title="Quick View">👁</button>
          <button class="action-btn" onclick="addToCart(${p.id})" title="Add to Cart">+</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category.charAt(0).toUpperCase()+p.category.slice(1)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <div class="stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))}</div>
          <span class="rating-count">${p.reviews ? `(${p.reviews})` : ''}</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">₹${p.price.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="price-old">₹${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id})">Add</button>
        </div>
      </div>
    </div>
  `).join('');


  // re-observe new cards
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
renderProducts();

function filterProducts(btn, filter) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = filter;
  const grid = document.getElementById('productsGrid');
  grid.style.opacity = '0'; grid.style.transform = 'translateY(12px)';
  setTimeout(() => {
    renderProducts(filter);
    grid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    grid.style.opacity = '1'; grid.style.transform = 'translateY(0)';
  }, 250);
}

function filterCategory(cat) {
  document.querySelectorAll('.filter-tab').forEach(t => {
    if(t.textContent.toLowerCase() === cat || (cat === 'all' && t.textContent.toLowerCase() === 'all')) {
      t.classList.add('active');
    } else { t.classList.remove('active'); }
  });
  document.getElementById('sale').scrollIntoView({ behavior:'smooth' });
  setTimeout(() => filterProducts(document.querySelector('.filter-tab'), cat === 'all' ? 'all' : cat), 600);
}

// ── CART ────────────────────────────────────────────────────
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...product, qty: 1 }); }
  updateCartUI();
  showToast(`${product.name} added to bag!`);
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><span class="cart-empty-icon">🛍</span><div class="cart-empty-text">Your bag is empty.<br>Start shopping!</div></div>`;
    footer.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(item => {
      const prod = products.find(p => p.id === item.id);
      return `
      <div class="cart-item">
        <div class="cart-item-img">
          ${prod?.image ? `<img src="${prod.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" />` : ''}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${item.category} · Size M</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
      </div>
    `;
    }).join('');

    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    document.getElementById('cartTotal').textContent = '₹' + total.toLocaleString();
    footer.style.display = 'block';
  }
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}
document.getElementById('cartBtn').addEventListener('click', openCart);

function checkout() {
  closeCart();
  showToast('Redirecting to checkout…');
}

// ── WISHLIST ────────────────────────────────────────────────


function quickView(id) {
  const p = products.find(pr => pr.id === id);
  showToast(`Quick view: ${p.name}`);
}

// ── SEARCH ──────────────────────────────────────────────────
document.getElementById('searchBtn').addEventListener('click', () => {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
});
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
}
function handleSearch(val) { /* in a real app, filter here */ }
function quickSearch(term) {
  document.getElementById('searchInput').value = term;
  closeSearch();
  showToast(`Searching for "${term}"…`);
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSearch(); closeCart(); }
});



// ── TOAST ───────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── NEWSLETTER ──────────────────────────────────────────────
function subscribeNewsletter() {
  const email = document.getElementById('emailInput').value;
  if (!email || !email.includes('@')) { showToast('Please enter a valid email!'); return; }
  document.getElementById('emailInput').value = '';
  showToast('🎉 Welcome to LUXE! Check your inbox.');
}

// ── COUNTDOWN ───────────────────────────────────────────────
let endTime = Date.now() + (2 * 24 * 3600 + 14 * 3600 + 38 * 60 + 22) * 1000;
function updateCountdown() {
  const diff = Math.max(0, endTime - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cdDays').textContent = String(d).padStart(2,'0');
  document.getElementById('cdHours').textContent = String(h).padStart(2,'0');
  document.getElementById('cdMins').textContent = String(m).padStart(2,'0');
  document.getElementById('cdSecs').textContent = String(s).padStart(2,'0');
}
setInterval(updateCountdown, 1000);
updateCountdown();



// ── INIT UI ────────────────────────────────────────────
updateCartUI();
