
/* ── PRODUCT DATA ──────────────────────────── */
const PRODUCTS = [
  { id:1,  name:'Premium Chicken & Rice',   cat:'food',     gender:'dogs',  tag:'hot',  price:2499, old:3299, desc:'Adult Formula · Real Chicken #1',      img:'https://images.unsplash.com/photo-1606853732446-fd1ac6da8555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=85', badge:'Hot', icon:'🐕' },
  { id:2,  name:'Salmon Kitten Formula',    cat:'food',     gender:'cats',  tag:'new',  price:1299, old:1799, desc:'DHA Enriched for Brain Development',   img:'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'New', icon:'🐈' },
  { id:3,  name:'Puppy Dental Chews',       cat:'treats',   gender:'dogs',  tag:'sale', price:449,  old:699,  desc:'Tartar Control, Minty Fresh Breath',   img:'https://images.unsplash.com/photo-1599169668359-16d2a9c79b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Sale', icon:'🦷' },
  { id:4,  name:'Gentle Puppy Shampoo',     cat:'grooming', gender:'dogs',  tag:'hot',  price:599,  old:849,  desc:'Tear-Free, Oat & Aloe Formula',       img:'https://images.unsplash.com/photo-1581578731548-64f551ec6c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Hot', icon:'🛁' },
  { id:5,  name:'Bird Seed Premium Mix',    cat:'food',     gender:'birds', tag:'new',  price:349,  old:499,  desc:'15 Varieties, Vitamins Enriched',      img:'https://images.unsplash.com/photo-1627486892754-0a667459910b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'New', icon:'🐦' },
  { id:6,  name:'Cat Interactive Wand',     cat:'treats',   gender:'cats',  tag:'new',  price:299,  old:449,  desc:'Feather & Bell, Retractable 60cm',    img:'https://images.unsplash.com/photo-1606789597920-1b02792f752b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'New', icon:'🧶' },
  { id:7,  name:'Grain-Free Dry Dog Food',  cat:'food',     gender:'dogs',  tag:'sale', price:1899, old:2699, desc:'Sweet Potato & Bison, Sensitive Gut', img:'https://images.unsplash.com/photo-1589924691584-abc446982984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Sale', icon:'🐕' },
  { id:8,  name:'Detangling Coat Spray',    cat:'grooming', gender:'cats',  tag:'eco',  price:499,  old:749,  desc:'Argan Oil, Tangle-Free Finish',       img:'https://images.unsplash.com/photo-1606890658317-7d4b09a3a9a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Eco', icon:'✨' },
  { id:9,  name:'Hamster Activity Wheel',   cat:'treats',   gender:'small', tag:'hot',  price:799,  old:1099, desc:'Silent Spinner, 8-inch, BPA-Free',    img:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Hot', icon:'🐹' },
  { id:10, name:'Anti-Flea Shampoo',        cat:'grooming', gender:'dogs',  tag:'new',  price:549,  old:799,  desc:'Neem & Tea Tree, 3-in-1 Formula',    img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'New', icon:'🌿' },
  { id:11, name:'Tuna & Salmon Cat Treats', cat:'treats',   gender:'cats',  tag:'hot',  price:349,  old:499,  desc:'Freeze-Dried, 100% Single Protein',   img:'https://images.unsplash.com/photo-1587300003388-59208e32825c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Hot', icon:'🐟' },
  { id:12, name:'Bamboo Pet Food Bowl Set', cat:'grooming', gender:'dogs',  tag:'sale', price:899,  old:1299, desc:'Non-Slip, Eco-Friendly, 2-Bowl Set',  img:'https://images.unsplash.com/photo-1601001732791-eab72b7e19cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Sale', icon:'🌱' },
];


let cart = [];
let wishlist = [];

/* ── LOADER ────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('gone'), 2400);
});

/* ── CURSOR ────────────────────────────────── */
const dot  = document.getElementById('cur-dot');
const ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
});
(function animRing() {
  rx += (mx - rx - 16) * 0.13;
  ry += (my - ry - 16) * 0.13;
  ring.style.transform = `translate(${rx}px, ${ry}px)`;
  requestAnimationFrame(animRing);
})();

/* ── NAVBAR ────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
});

/* ── HERO 3D PARALLAX ──────────────────────── */
document.addEventListener('mousemove', e => {
  const xr = (e.clientX / innerWidth  - 0.5) * 2;
  const yr = (e.clientY / innerHeight - 0.5) * 2;
  const card = document.querySelector('.card-main');
  if (card) {
    card.style.animation = 'none';
    card.style.transform = `rotateY(${xr * 10}deg) rotateX(${-yr * 7}deg)`;
  }
});

/* ── REVEAL ON SCROLL ──────────────────────── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ── RENDER PRODUCTS ───────────────────────── */
function shapeHTML(p) {
  return `<img src="${p.img}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />`;
}


function badgeClass(tag) {
  return tag === 'new' ? 'b-new' : tag === 'sale' ? 'b-sale' : tag === 'eco' ? 'b-eco' : 'b-hot';
}

function renderProducts(filter = 'all') {
  const list = filter === 'all' ? PRODUCTS
    : filter === 'sale' ? PRODUCTS.filter(p => p.tag === 'sale')
    : PRODUCTS.filter(p => p.cat === filter || p.gender === filter);

  const grid = document.getElementById('prodGrid');
  grid.innerHTML = list.map((p, i) => `
    <div class="product-card reveal" style="transition-delay:${i * 0.07}s" data-id="${p.id}">
      <div class="pc-img-wrap">
        <div class="pc-img">
          ${shapeHTML(p)}

        </div>
        <div class="pc-badges"><span class="badge-tag ${badgeClass(p.tag)}">${p.badge}</span></div>
        <div class="pc-actions">
          <button class="pa-btn" onclick="toggleWishlist(${p.id})" title="Wishlist">🐾</button>
          <button class="pa-btn" onclick="quickView(${p.id})"      title="Quick View">👁</button>
          <button class="pa-btn" onclick="addToCart(${p.id})"      title="Add to Cart">+</button>
        </div>
        <div class="pc-rating-bar">
          <span class="stars-s">★★★★★</span>
          <span>${(4.4 + Math.random() * 0.6).toFixed(1)} (${40 + Math.floor(Math.random() * 280)})</span>
        </div>
      </div>
      <div class="pc-body">
        <div class="pc-cat">${p.cat} · ${p.gender}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-desc">${p.desc}</div>
        <div class="pc-footer">
          <div class="pc-price-wrap">
            <span class="pc-price">₹${p.price.toLocaleString()}</span>
            ${p.old ? `<span class="pc-old">₹${p.old.toLocaleString()}</span>` : ''}
          </div>
          <button class="pc-add" onclick="addToCart(${p.id})">Add</button>
        </div>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
}
renderProducts();

function filterProd(btn, filter) {
  document.querySelectorAll('.f-tab').forEach(t => t.classList.remove('on'));
  btn.classList.add('on');
  const g = document.getElementById('prodGrid');
  g.style.opacity = '0'; g.style.transform = 'translateY(14px)';
  setTimeout(() => {
    renderProducts(filter);
    g.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    g.style.opacity = '1'; g.style.transform = 'translateY(0)';
  }, 260);
}

function filterByCategory(cat) {
  scrollToSection('products');
  setTimeout(() => {
    const map = { dogs: 'dogs', cats: 'cats', birds: 'food', all: 'all' };
    const tabText = cat === 'all' ? 'all' : cat;
    const tab = [...document.querySelectorAll('.f-tab')].find(t => t.textContent.toLowerCase() === tabText);
    if (tab) filterProd(tab, map[cat] || 'all');
  }, 700);
}

/* ── CART ──────────────────────────────────── */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCartUI();
  showToast(`🐾 ${p.name} added to cart!`);
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartPip').textContent = total;
  const body = document.getElementById('cartBody');
  const ftr  = document.getElementById('cartFtr');
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty-state"><span class="ces-ico">🐾</span><p>Your cart is empty.<br>Find something your pet will love!</p></div>`;
    ftr.style.display = 'none';
  } else {
    body.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-thumb" style="background:linear-gradient(160deg,${item.bg1},${item.bg2});display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${item.icon}</div>
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-meta">${item.cat} · ${item.gender}</div>
          <div class="ci-qty">
            <button class="ci-q-btn" onclick="chgQty(${item.id},-1)">−</button>
            <span class="ci-q-num">${item.qty}</span>
            <button class="ci-q-btn" onclick="chgQty(${item.id},1)">+</button>
          </div>
        </div>
        <span class="ci-price">₹${(item.price * item.qty).toLocaleString()}</span>
      </div>
    `).join('');
    const sum = cart.reduce((s, i) => s + i.price * i.qty, 0);
    document.getElementById('cartTotal').textContent = '₹' + sum.toLocaleString();
    ftr.style.display = 'block';
  }
}

function chgQty(id, d) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  updateCartUI();
}

document.getElementById('cartBtn').addEventListener('click', openCart);
function openCart() {
  document.getElementById('cartVeil').classList.add('on');
  document.getElementById('cartPanel').classList.add('on');
}
function closeCart() {
  document.getElementById('cartVeil').classList.remove('on');
  document.getElementById('cartPanel').classList.remove('on');
}
function checkout() {
  closeCart();
  showToast('Redirecting to secure checkout…');
}

/* ── WISHLIST ───────────────────────────────── */
function toggleWishlist(id) {
  if (!wishlist.includes(id)) wishlist.push(id);
  const el = document.getElementById('wlFlash');
  el.classList.add('on');
  setTimeout(() => el.classList.remove('on'), 2400);
}

/* ── QUICK VIEW ─────────────────────────────── */
function quickView(id) {
  const p = PRODUCTS.find(x => x.id === id);
  showToast(`${p.icon} Viewing: ${p.name}`);
}

/* ── SEARCH ─────────────────────────────────── */
document.getElementById('searchBtn').addEventListener('click', () => {
  document.getElementById('searchVeil').classList.add('on');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
});
function closeSearch() { document.getElementById('searchVeil').classList.remove('on'); }
function onSearch(v) { /* live filter in real app */ }
function qSearch(term) {
  document.getElementById('searchInput').value = term;
  closeSearch();
  showToast(`🔍 Searching "${term}"…`);
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeSearch(); closeCart(); } });

/* ── MOBILE NAV ─────────────────────────────── */
document.getElementById('hambBtn').addEventListener('click', () => {
  document.getElementById('mob-menu').classList.toggle('open');
});
document.getElementById('mob-close').addEventListener('click', closeMob);
function closeMob() { document.getElementById('mob-menu').classList.remove('open'); }

/* ── TOAST ──────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('on'), 2800);
}

/* ── NEWSLETTER ─────────────────────────────── */
function subscribe() {
  const v = document.getElementById('nlEmail').value;
  if (!v || !v.includes('@')) { showToast('Please enter a valid email!'); return; }
  document.getElementById('nlEmail').value = '';
  showToast('🐾 Welcome to the Pack! Check your inbox.');
}

/* ── SCROLL HELPER ──────────────────────────── */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* ── COUNTDOWN ──────────────────────────────── */
const END = Date.now() + (4 * 86400 + 8 * 3600 + 22 * 60) * 1000;
function tick() {
  const diff = Math.max(0, END - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cdD').textContent = String(d).padStart(2, '0');
  document.getElementById('cdH').textContent = String(h).padStart(2, '0');
  document.getElementById('cdM').textContent = String(m).padStart(2, '0');
  document.getElementById('cdS').textContent = String(s).padStart(2, '0');
}
setInterval(tick, 1000);
tick();

/* ── INIT ───────────────────────────────────── */
updateCartUI();
