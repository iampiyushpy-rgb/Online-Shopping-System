// =============================================
// Homesmart_AllProducts.js — All Products Page
// Aggregates products from every HomeSmart section
// =============================================

const allProducts = [
    // === Hero / Featured Products ===
    { name: "Emerald Ceramic Pot Set", price: 129.99, originalPrice: 189.99, category: "Cookware", badge: "Best Seller", badgeClass: "badge-best", img: "../assets/cookware_category_green_1775381016223.png", desc: "Eco-friendly ceramic with non-stick coating. Set of 5 pots and pans for healthy, oil-free cooking.", rating: 4.8, reviews: 3200 },
    { name: "Smart Kitchen Combo", price: 199, originalPrice: 399, category: "Kitchen", badge: "50% OFF", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1556910110-ad52744d7c1f?q=80&w=400&h=300&fit=crop", desc: "Digital 8-in-1 kitchen workstation including high-speed blender, food processor, and smart-weighing bowl.", rating: 4.7, reviews: 2450 },
    { name: "Luxury Sofa Set Lux", price: 1200, originalPrice: 1800, category: "Furniture", badge: "Top Pick", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&h=300&fit=crop", desc: "Hand-finished premium velvet upholstery with high-density foam cushions and a solid mahogany frame.", rating: 4.9, reviews: 1890 },
    { name: "Nordic Minimalist Vase", price: 32, originalPrice: null, category: "Decor", badge: "Trending", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1581783598307-5bbe6ed40e5a?q=80&w=400&h=300&fit=crop", desc: "Matte-finish ceramic vase with organic line work. A timeless centerpiece reflecting Scandinavian design simplicity.", rating: 4.5, reviews: 1560 },
    { name: "Bamboo Serving Tray", price: 24.50, originalPrice: 35, category: "Kitchen", badge: "Best Deal", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=400&h=300&fit=crop", desc: "Hand-crafted sustainable bamboo with raised edges and reinforced handles. Ideal for charcuterie and coffee service.", rating: 4.4, reviews: 2100 },
    { name: "Velvet Cushion Set", price: 45, originalPrice: 65, category: "Furnishing", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&h=300&fit=crop", desc: "Set of 4 plush velvet cushions with hidden zippers. Includes hypoallergenic inserts for maximum comfort.", rating: 4.6, reviews: 2340 },

    // === Mosquito Net & Insect Protection ===
    { name: "Royal Mosquito Net King", price: 39.99, originalPrice: 59, category: "Insect Protection", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1632345031435-072fc985bc31?q=80&w=400&h=300&fit=crop", desc: "Extra-fine honeycomb mesh with a reinforced bottom border. 360-degree protection for king-size beds.", rating: 4.7, reviews: 4500 },
    { name: "Window Mesh Screen Kit", price: 18, originalPrice: 25, category: "Insect Protection", badge: "Essential", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1621371107530-9b3602167d4f?q=80&w=400&h=300&fit=crop", desc: "Self-adhesive magnetic frame kit with high-transparency fiberglass mesh. Fully customizable for any window size.", rating: 4.3, reviews: 3200 },

    // === Modern Home Decor ===
    { name: "Abstract Wall Art Canvas", price: 89, originalPrice: 129, category: "Home Decor", badge: "New", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=400&h=300&fit=crop", desc: "Set of 3 hand-painted abstract canvas panels. Vibrant emerald gold textures that create a focal point in any room.", rating: 4.8, reviews: 890 },
    { name: "Floating Shelf Set", price: 55, originalPrice: 75, category: "Home Decor", badge: "Popular", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1594498653385-d5172b532c00?q=80&w=400&h=300&fit=crop", desc: "Three-piece solid oak floating shelves with invisible bracket mounts. Holds up to 10kg each.", rating: 4.6, reviews: 1780 },
    { name: "Aromatic Reed Diffuser", price: 28, originalPrice: null, category: "Home Decor", badge: "Trending", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1602928294711-536f9ae94098?q=80&w=400&h=300&fit=crop", desc: "Premium essential oil aromatic reeds. Includes 200ml of fragrance and 10 natural rattan reeds for slow diffusion.", rating: 4.4, reviews: 2560 },

    // === Premium Lighting ===
    { name: "Crystal Chandelier Modern", price: 249, originalPrice: 399, category: "Lighting", badge: "Premium", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=400&h=300&fit=crop", desc: "K9 crystal prismatic pendants on a brushed steel frame. Features dimmable LED integration and high-end refractivity.", rating: 4.9, reviews: 670 },
    { name: "Smart LED Strip 10m", price: 35, originalPrice: 49, category: "Lighting", badge: "Best Deal", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1558239023-b8a4814a7e56?q=80&w=400&h=300&fit=crop", desc: "16 million colors with voice control through Alexa. Strong self-adhesive backing and multi-zone light effects.", rating: 4.5, reviews: 5600 },
    { name: "Minimal Table Lamp", price: 42, originalPrice: null, category: "Lighting", badge: "New", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1507473884658-6697bc933075?q=80&w=400&h=300&fit=crop", desc: "Sculptural iron frame with a sandblasted finish and natural linen drum shade. Hand-touch brightness adjustment.", rating: 4.3, reviews: 1890 },

    // === Eco Storage ===
    { name: "Bamboo Storage Box Set", price: 34, originalPrice: 49, category: "Storage", badge: "Eco-Friendly", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1521128182236-407137f8ea6b?q=80&w=400&h=300&fit=crop", desc: "Set of 4 stackable hand-woven bamboo boxes. Breathable design perfect for linens, towels, or wardobe organization.", rating: 4.6, reviews: 2100 },
    { name: "Glass Storage Jars 6pc", price: 29, originalPrice: null, category: "Storage", badge: "Kitchen Must", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=400&h=300&fit=crop", desc: "Crystal clear borosilicate glass jars with airtight silicone-sealed bamboo lids. Ranging from 250ml to 2 Liters.", rating: 4.7, reviews: 3800 },

    // === Luxury Bathroom ===
    { name: "Rain Shower Head Gold", price: 89, originalPrice: 139, category: "Bathroom", badge: "Luxury", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1559839734-2b71cf197ec2?q=80&w=400&h=300&fit=crop", desc: "Wide 12-inch rainfall surface with a stunning brushed gold finish. Easy-clean silicone nozzles and high-pressure tech.", rating: 4.8, reviews: 1450 },
    { name: "Bamboo Bath Caddy", price: 38, originalPrice: 55, category: "Bathroom", badge: "Spa Vibes", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=400&h=300&fit=crop", desc: "Solid bamboo construction with adjustable wing length. Features wine glass slots and tablet prop for the ultimate bath experience.", rating: 4.5, reviews: 2300 },

    // === Drinkware ===
    { name: "Double-Wall Glass Set", price: 32, originalPrice: 45, category: "Drinkware", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1574633405260-2495b54630a1?q=80&w=400&h=300&fit=crop", desc: "Set of 6 insulated borosilicate glasses. Double-wall technology prevents condensation and keeps beverages at optimal temperature.", rating: 4.7, reviews: 3400 },
    { name: "Ceramic Mug Collection", price: 24, originalPrice: null, category: "Drinkware", badge: "Handmade", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1514228742587-6b1558fbed39?q=80&w=400&h=300&fit=crop", desc: "Set of 4 artisan-crafted mugs with a reactive glaze finish. Each piece features unique subtle variations in tone.", rating: 4.4, reviews: 2890 },

    // === Designer Furniture ===
    { name: "Mid-Century Accent Chair", price: 349, originalPrice: 499, category: "Furniture", badge: "Designer", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&h=300&fit=crop", desc: "Walnut-finish legs with premium textured boucle fabric. A stylish statement piece for your living room or study.", rating: 4.8, reviews: 780 },
    { name: "Industrial Coffee Table", price: 189, originalPrice: 269, category: "Furniture", badge: "Popular", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=400&h=300&fit=crop", desc: "Solid reclaimed wood tabletop paired with matte black steel legs. Durable industrial build with adjustable feet.", rating: 4.6, reviews: 1560 },

    // === Home Covers ===
    { name: "Sofa Cover Stretch Fit", price: 45, originalPrice: 65, category: "Home Covers", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1550226122-241551ad3ffb?q=80&w=400&h=300&fit=crop", desc: "Jacquard weave stretchable sofa protector. Features anti-slip foam anchors and elastic bottom for a custom, tailored look.", rating: 4.5, reviews: 5200 },
    { name: "Waterproof Mattress Protector", price: 29, originalPrice: 39, category: "Home Covers", badge: "Essential", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400&h=300&fit=crop", desc: "Deep-pocketed breathable protector with a noiseless TPU backing. Hypoallergenic cotton surface protects against spills and allergens.", rating: 4.7, reviews: 6100 },

    // === Hardware & Tools ===
    { name: "Premium Drill Kit 20V", price: 129, originalPrice: 179, category: "Hardware Tools", badge: "Pro Grade", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=400&h=300&fit=crop", desc: "Powerful 20V brushless motor with 2.0Ah lithium-ion battery. Includes a 50-piece comprehensive bit set.", rating: 4.8, reviews: 2340 },
    { name: "Wall Mounting Toolkit", price: 22, originalPrice: null, category: "Hardware Tools", badge: "Must Have", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&h=300&fit=crop", desc: "Level, stud finder, anchors, and screws. Everything to hang frames and shelves perfectly.", rating: 4.4, reviews: 3600 },

    // === Furnishing & Textiles ===
    { name: "Linen Table Runner", price: 22, originalPrice: 32, category: "Furnishing", badge: "Elegant", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=400&h=300&fit=crop", desc: "100% stone-washed linen runner. Heavyweight fabric with decorative hemstitch detail for upscale dining.", rating: 4.5, reviews: 1890 },
    { name: "Cotton Throw Blanket", price: 55, originalPrice: 79, category: "Furnishing", badge: "Cozy Pick", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1512418490979-92798cec352a?q=80&w=400&h=300&fit=crop", desc: "Soft organic cotton throw with a traditional waffle weave. Features fringed edges and breathable thermal properties.", rating: 4.7, reviews: 2100 },

    // === Mats & Rugs ===
    { name: "Handwoven Jute Rug 5x7", price: 89, originalPrice: 129, category: "Mats & Decor", badge: "Natural", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=400&h=300&fit=crop", desc: "Eco-friendly natural jute fiber rug. Hand-braided for durability and a warm, rustic aesthetic.", rating: 4.6, reviews: 1340 },
    { name: "Anti-Fatigue Kitchen Mat", price: 35, originalPrice: 49, category: "Mats & Decor", badge: "Comfort+", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&h=300&fit=crop", desc: "Premium 3/4 inch ergonomic mat. High-rebound foam core reduces strain on joints during long standing tasks.", rating: 4.5, reviews: 4200 },

    // === Pooja Needs ===
    { name: "Brass Pooja Thali Set", price: 49, originalPrice: 69, category: "Pooja Needs", badge: "Sacred", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&h=300&fit=crop", desc: "Solid brass plate with detailed filigree edge. Set includes deepak, agarbatti stand, and roli katori.", rating: 4.8, reviews: 2890 },
    { name: "Camphor & Incense Collection", price: 15, originalPrice: null, category: "Pooja Needs", badge: "Daily Use", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&h=300&fit=crop", desc: "High-purity Bhimseni camphor paired with hand-rolled Mysore Sandalwood dhoop sticks.", rating: 4.4, reviews: 5600 },

    // === Bath Linen ===
    { name: "Egyptian Cotton Towel Set", price: 65, originalPrice: 89, category: "Bath Linen", badge: "Luxury", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=400&h=300&fit=crop", desc: "6-piece set of 800 GSM Egyptian cotton towels. Features long-staple fibers for superior absorbency and fluffiness.", rating: 4.8, reviews: 3100 },
    { name: "Bamboo Fiber Bath Sheet", price: 28, originalPrice: null, category: "Bath Linen", badge: "Eco Pick", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1594503799639-650081d60bed?q=80&w=400&h=300&fit=crop", desc: "Oversized bath sheet made from an organic bamboo-cotton blend. Naturally antimicrobial and fast-drying.", rating: 4.5, reviews: 2340 },

    // === Urban Gardening ===
    { name: "Herb Garden Starter Kit", price: 34, originalPrice: 49, category: "Gardening", badge: "Grow Green", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&h=300&fit=crop", desc: "All-in-one starter kit including peat pots, soil disks, and labels for 6 essential culinary herbs.", rating: 4.6, reviews: 2670 },
    { name: "Self-Watering Planter 3pc", price: 42, originalPrice: 59, category: "Gardening", badge: "Smart", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1592150621344-7164ff0e687e?q=80&w=400&h=300&fit=crop", desc: "Triple set of modern self-watering pots. Features a water level indicator for easy plant maintenance.", rating: 4.7, reviews: 1890 },
    { name: "Matte Black Planter", price: 34, originalPrice: null, category: "Gardening", badge: "Minimal", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&h=300&fit=crop", desc: "Ceramic pot with drainage hole and bamboo saucer. 20cm diameter for medium plants.", rating: 4.3, reviews: 1200 },

    // === Wall Art ===
    { name: "Peel & Stick Wall Decals", price: 19, originalPrice: 29, category: "Wall Art", badge: "Fun Pick", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=400&h=300&fit=crop", desc: "Premium vinyl botanical wall stickers. Easy to apply, reposition, and remove without damaging wall paint.", rating: 4.4, reviews: 3400 },
    { name: "3D Foam Wall Panels 10pc", price: 45, originalPrice: 65, category: "Wall Art", badge: "3D Effect", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1513519245088-0e12902e15ca?q=80&w=400&h=300&fit=crop", desc: "High-density PE foam panels with a realistic white brick texture. Features thermal insulation and sound reduction.", rating: 4.5, reviews: 2100 },

    // === Cleaning ===
    { name: "Cordless Vacuum Pro", price: 179, originalPrice: 249, category: "Cleaning", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=400&h=300&fit=crop", desc: "Lightweight cordless stick vacuum with a 250W brushless motor. Multi-stage filtration and LED floor lights.", rating: 4.8, reviews: 4500 },
    { name: "Spin Mop Bucket System", price: 39, originalPrice: 55, category: "Cleaning", badge: "Essential", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&h=300&fit=crop", desc: "360° spinning wringer with 2 microfiber heads. Stainless steel basket, splash-free design.", rating: 4.5, reviews: 5800 },

    // === Dining ===
    { name: "Ceramic Dinner Set 24pc", price: 89, originalPrice: 129, category: "Dining", badge: "Complete Set", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1616046229412-f04646270b80?q=80&w=400&h=300&fit=crop", desc: "Comprehensive 24-piece dinnerware set. Hand-painted ceramic with an elegant matte glaze finish for upscale dining rooms.", rating: 4.7, reviews: 1670 },
    { name: "Stainless Cutlery Set 30pc", price: 49, originalPrice: 69, category: "Dining", badge: "Premium", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1542601906990-b4d3f66f913e?q=80&w=400&h=300&fit=crop", desc: "Mirror-finish 18/10 stainless steel set. Ergonomically designed with balanced weight and elegant curves.", rating: 4.6, reviews: 2340 },

    // === Home Utilities ===
    { name: "Smart Power Strip 6-Port", price: 35, originalPrice: 49, category: "Utilities", badge: "Smart Home", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1631581891961-9851fb3c91a1?q=80&w=400&h=300&fit=crop", desc: "App-controlled power center with 4 independent AC outlets and 2 high-speed USB ports. Includes surge protection and energy monitoring.", rating: 4.5, reviews: 3200 },
    { name: "Digital Kitchen Scale", price: 22, originalPrice: null, category: "Utilities", badge: "Essential", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1594385208974-2e75f9d8a847?q=80&w=400&h=300&fit=crop", desc: "Ultra-precise digital scale with a tempered glass platform. Features unit conversion and a high-contrast backlit LCD.", rating: 4.4, reviews: 4100 },
    { name: "Wooden Coaster Set", price: 15, originalPrice: 22, category: "Utilities", badge: "Value Pack", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=400&h=300&fit=crop", desc: "Set of 6 handcrafted acacia wood coasters. Treated with moisture-resistant finish and features non-slip felt pads.", rating: 4.3, reviews: 2800 }
];

// --- Liked products state ---
let likedProducts = JSON.parse(localStorage.getItem('hs_liked') || '[]');

function isLiked(productName) {
    return likedProducts.includes(productName);
}

function toggleLike(productName, btn) {
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
    localStorage.setItem('hs_liked', JSON.stringify(likedProducts));
}

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

function formatPrice(p) {
    return '$' + p.toLocaleString('en-US', { minimumFractionDigits: p % 1 !== 0 ? 2 : 0 });
}

function renderAllProducts(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = '';

    products.forEach((p, idx) => {
        const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
        const liked = isLiked(p.name);
        const card = document.createElement('div');
        card.className = 'all-product-card';

        card.innerHTML = `
            <div class="apc-image-wrap">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                <span class="apc-badge ${p.badgeClass}">${p.badge}</span>
                <button class="apc-like-btn ${liked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLike('${p.name.replace(/'/g, "\\'")}', this)">
                    <i class="${liked ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="apc-info">
                <div class="apc-category">${p.category}</div>
                <div class="apc-name">${p.name}</div>
                <div class="apc-desc">${p.desc}</div>
                <div class="apc-rating">
                    <div class="apc-stars">${renderStars(p.rating)}</div>
                    <span class="apc-rating-text">${p.rating} (${p.reviews.toLocaleString()})</span>
                </div>
                <div class="apc-price-row">
                    <div>
                        <span class="apc-price">${formatPrice(p.price)}</span>
                        ${p.originalPrice ? `<span class="apc-original-price">${formatPrice(p.originalPrice)}</span>` : ''}
                    </div>
                    ${discount > 0 ? `<span class="apc-discount">${discount}% OFF</span>` : ''}
                </div>
                <div class="apc-actions">
                    <button class="apc-btn-cart" onclick="event.stopPropagation();"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                    <button class="apc-btn-buy" onclick="event.stopPropagation(); window.location.href='ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(formatPrice(p.price))}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(p.category)}&rating=${p.rating}&reviews=${p.reviews}${p.originalPrice ? '&originalPrice=' + encodeURIComponent(formatPrice(p.originalPrice)) : ''}&desc=${encodeURIComponent(p.desc)}&badge=${encodeURIComponent(p.badge)}'"><i class="fas fa-bolt"></i> Buy Now</button>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(formatPrice(p.price))}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(p.category)}&rating=${p.rating}&reviews=${p.reviews}${p.originalPrice ? '&originalPrice=' + encodeURIComponent(formatPrice(p.originalPrice)) : ''}&desc=${encodeURIComponent(p.desc)}&badge=${encodeURIComponent(p.badge)}`;
        });
        grid.appendChild(card);
    });

    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = products.length;
}

let activeFilter = 'all';

function filterProducts(category) {
    activeFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    if (category === 'all') {
        renderAllProducts(allProducts);
    } else {
        renderAllProducts(allProducts.filter(p => p.category.toLowerCase().includes(category.toLowerCase())));
    }
}

function sortProducts(criteria) {
    let sorted = [...allProducts];
    if (activeFilter !== 'all') {
        sorted = sorted.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));
    }
    switch (criteria) {
        case 'price-low': sorted.sort((a, b) => a.price - b.price); break;
        case 'price-high': sorted.sort((a, b) => b.price - a.price); break;
        case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
        case 'reviews': sorted.sort((a, b) => b.reviews - a.reviews); break;
    }
    renderAllProducts(sorted);
}

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', () => {
    renderAllProducts(allProducts);
    initBackToTop();
    initCustomDropdown();
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterProducts(btn.dataset.filter));
    });
});

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
            sortProducts(value);
        });
    });
}
