
/* ── PRODUCT DATA ──────────────────────────── */
const PRODUCTS = [
  { id:1,  name:'Botanical Glow Serum',   cat:'skincare', gender:'women', tag:'hot',  price:1299, old:1799, desc:'Vitamin C + Hyaluronic Acid', img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Hot' },
  { id:2,  name:'Aloe Hydra Gel',         cat:'skincare', gender:'women', tag:'new',  price:499,  old:699,  desc:'Pure Aloe Vera & Centella',    img:'https://images.unsplash.com/photo-1617343240515-8e1f391e9d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'New' },
  { id:3,  name:'Charcoal Face Wash',     cat:'skincare', gender:'men',   tag:'sale', price:349,  old:549,  desc:'Detox & Deep Cleanse',          img:'https://images.unsplash.com/photo-1624394406551-2fbbe05f51c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Sale' },
  { id:4,  name:'Castor Growth Oil',      cat:'haircare', gender:'women', tag:'hot',  price:699,  old:999,  desc:'Cold-Pressed, Vitamin E+',      img:'https://images.unsplash.com/photo-1592666493419-77d72d639a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Hot' },
  { id:5,  name:'Gentle Baby Wash',       cat:'bodycare', gender:'kids',  tag:'new',  price:399,  old:599,  desc:'Tear-Free, Hypoallergenic',     img:'https://images.unsplash.com/photo-1583994019482-55b4017b8f22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'New' },
  { id:6,  name:'Beard Balm & Oil Set',   cat:'haircare', gender:'men',   tag:'new',  price:849,  old:1199, desc:'Argan & Jojoba Enriched',       img:'https://images.unsplash.com/photo-1583442434614-6d4c79b59f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'New' },
  { id:7,  name:'Rice Water Shampoo',     cat:'haircare', gender:'women', tag:'sale', price:449,  old:699,  desc:'Fermented Rice + Biotin',       img:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Sale' },
  { id:8,  name:'Neem Body Lotion',       cat:'bodycare', gender:'women', tag:'eco',  price:299,  old:449,  desc:'24h Moisturisation, SPF 8',     img:'https://images.unsplash.com/photo-1607291825202-27c32165703f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Eco' },
  { id:9,  name:'Kids Sunscreen SPF 50',  cat:'bodycare', gender:'kids',  tag:'hot',  price:599,  old:849,  desc:'Mineral, No White Cast',        img:'https://images.unsplash.com/photo-1582481710952-419e3b0ec9ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Hot' },
  { id:10, name:'Salicylic Toner',        cat:'skincare', gender:'men',   tag:'new',  price:549,  old:799,  desc:'2% BHA, Pore Minimising',       img:'https://images.unsplash.com/photo-1592611368806-d2f3467c8006?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'New' },
  { id:11, name:'Argan Hair Mask',        cat:'haircare', gender:'women', tag:'hot',  price:799,  old:1099, desc:'Intense Repair Treatment',      img:'https://images.unsplash.com/photo-1571771894821-ce9b6c119db8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Hot' },
  { id:12, name:'Activated Charcoal Soap',cat:'bodycare', gender:'men',   tag:'sale', price:249,  old:349,  desc:'Detoxifying & Antibacterial',   img:'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85', badge:'Sale' },
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
  dot.style.transform = `translate(${mx-4}px, ${my-4}px)`;
});
(function animRing(){
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
    card.style.transform = `rotateY(${xr*10}deg) rotateX(${-yr*7}deg)`;
  }
});

/* ── REVEAL ON SCROLL ──────────────────────── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
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
    <div class="product-card reveal" style="transition-delay:${i*0.07}s" data-id="${p.id}">
      <div class="pc-img-wrap">
        <div class="pc-img">
          ${shapeHTML(p)}

        </div>
        <div class="pc-badges"><span class="badge-tag ${badgeClass(p.tag)}">${p.badge}</span></div>
        <div class="pc-actions">
          <button class="pa-btn" onclick="toggleWishlist(${p.id})" title="Wishlist">♡</button>
          <button class="pa-btn" onclick="quickView(${p.id})"      title="Quick View">👁</button>
          <button class="pa-btn" onclick="addToCart(${p.id})"      title="Add to Cart">+</button>
        </div>
        <div class="pc-rating-bar">
          <span class="stars-s">★★★★★</span>
          <span>${(4.5 + Math.random()*0.5).toFixed(1)} (${50 + Math.floor(Math.random()*200)})</span>
        </div>
      </div>
      <div class="pc-body">
        <div class="pc-cat">${p.cat}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-desc">${p.desc}</div>
        <div class="pc-footer">
          <div class="pc-price-wrap">
            <span class="pc-price">₹${p.price}</span>
            ${p.old ? `<span class="pc-old">₹${p.old}</span>` : ''}
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
    g.style.transition = 'opacity 0.4s var(--ease), transform 0.4s var(--ease)';
    g.style.opacity = '1'; g.style.transform = 'translateY(0)';
  }, 260);
}

function filterByCategory(cat) {
  scrollToSection('products');
  setTimeout(() => {
    const tab = [...document.querySelectorAll('.f-tab')].find(t => t.textContent.toLowerCase() === cat || (cat === 'all' && t.textContent.toLowerCase() === 'all'));
    if (tab) filterProd(tab, cat === 'all' ? 'all' : cat);
  }, 700);
}

/* ── CART ──────────────────────────────────── */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({...p, qty:1});
  updateCartUI();
  showToast(`🌿 ${p.name} added!`);
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartPip').textContent = total;
  const body = document.getElementById('cartBody');
  const ftr  = document.getElementById('cartFtr');
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty-state"><span class="ces-ico">🌿</span><p>Your bag is empty.<br>Start exploring!</p></div>`;
    ftr.style.display = 'none';
  } else {
    body.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-thumb" style="background:linear-gradient(160deg,${item.bg1},${item.bg2});border-radius:10px;"></div>
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
  closeCart(); showToast('Redirecting to secure checkout…');
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
  showToast(`👁 Viewing: ${p.name}`);
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
  closeSearch(); showToast(`🔍 Searching "${term}"…`);
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeSearch(); closeCart(); } });

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
  showToast('🌿 Welcome! Check your inbox for 10% off.');
}

/* ── SCROLL HELPER ──────────────────────────── */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* ── COUNTDOWN ──────────────────────────────── */
const END = Date.now() + (3*86400 + 11*3600 + 45*60) * 1000;
function tick() {
  const diff = Math.max(0, END - Date.now());
  const d = Math.floor(diff/86400000);
  const h = Math.floor((diff%86400000)/3600000);
  const m = Math.floor((diff%3600000)/60000);
  const s = Math.floor((diff%60000)/1000);
  document.getElementById('cdD').textContent = String(d).padStart(2,'0');
  document.getElementById('cdH').textContent = String(h).padStart(2,'0');
  document.getElementById('cdM').textContent = String(m).padStart(2,'0');
  document.getElementById('cdS').textContent = String(s).padStart(2,'0');
}
setInterval(tick, 1000); tick();

/* ── INIT ───────────────────────────────────── */
updateCartUI();