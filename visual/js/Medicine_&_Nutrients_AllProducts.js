// =============================================
// Medicine_&_Nutrients_AllProducts.js
// 55 Products, Filter, Sort, Wishlist, Stars
// =============================================

const allProducts = [
    // --- Vitamins ---
    { name: "Vitamin D3 5000 IU", brand: "NatureMade", price: 12.99, originalPrice: 19.99, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Vitamins", rating: 4.9, reviews: 24000, badge: "Bestseller", badgeClass: "badge-best", desc: "High-potency for bone & immune support. 120 softgels." },
    { name: "Vitamin C 1000mg", brand: "NatureMade", price: 9.99, originalPrice: 14.99, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "Vitamins", rating: 4.8, reviews: 19000, badge: "Top Rated", badgeClass: "badge-best", desc: "Immune system booster with rose hips. 250 tablets." },
    { name: "Biotin 5000mcg", brand: "Natrol", price: 7.99, originalPrice: 11.99, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Vitamins", rating: 4.7, reviews: 15000, badge: "Popular", badgeClass: "badge-new", desc: "Supports hair, skin, and nail health. 150 tablets." },
    { name: "Iron + Folic Acid", brand: "Garden of Life", price: 11.99, originalPrice: null, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "Vitamins", rating: 4.6, reviews: 8500, badge: "Essential", badgeClass: "badge-new", desc: "Gentle iron with whole-food folate. 60 capsules." },
    { name: "Zinc 50mg", brand: "Now Foods", price: 6.99, originalPrice: 9.99, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Vitamins", rating: 4.7, reviews: 12000, badge: "Sale", badgeClass: "badge-deal", desc: "Chelated zinc for maximum absorption. 250 tablets." },
    { name: "Multivitamin Complete", brand: "Centrum", price: 22.99, originalPrice: null, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "Vitamins", rating: 4.9, reviews: 45000, badge: "#1 Seller", badgeClass: "badge-best", desc: "Complete A-Z multivitamin. 200 tablets." },
    // --- Pain Relief ---
    { name: "Ibuprofen 200mg", brand: "Advil", price: 8.49, originalPrice: null, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Pain Relief", rating: 4.8, reviews: 52000, badge: "Trusted", badgeClass: "badge-best", desc: "Fast relief from headaches, pain & fever. 200 tablets." },
    { name: "Acetaminophen 500mg", brand: "Tylenol", price: 7.99, originalPrice: null, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "Pain Relief", rating: 4.7, reviews: 48000, badge: "Essential", badgeClass: "badge-new", desc: "Gentle pain relief for all ages. 100 caplets." },
    { name: "Muscle Relief Cream", brand: "Bengay", price: 12.99, originalPrice: 17.99, img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", category: "Pain Relief", rating: 4.5, reviews: 14000, badge: "Sale", badgeClass: "badge-deal", desc: "Ultra-strength topical analgesic. 4 oz tube." },
    { name: "Joint Support Complex", brand: "Move Free", price: 24.99, originalPrice: 34.99, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Pain Relief", rating: 4.6, reviews: 11000, badge: "28% OFF", badgeClass: "badge-deal", desc: "Glucosamine + chondroitin for joint comfort." },
    { name: "Naproxen Sodium 220mg", brand: "Aleve", price: 9.99, originalPrice: null, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "Pain Relief", rating: 4.7, reviews: 29000, badge: "12-Hour", badgeClass: "badge-best", desc: "All-day long-lasting pain relief. 100 caplets." },
    // --- Digestive ---
    { name: "Probiotic 50B CFU", brand: "Garden of Life", price: 24.99, originalPrice: 39.99, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "Digestive", rating: 4.7, reviews: 18000, badge: "Award Winner", badgeClass: "badge-best", desc: "16-strain probiotic for optimal gut health." },
    { name: "Digestive Enzymes", brand: "Now Foods", price: 14.99, originalPrice: null, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Digestive", rating: 4.6, reviews: 9200, badge: "Effective", badgeClass: "badge-new", desc: "Full-spectrum enzyme blend for better digestion." },
    { name: "Fiber Supplement", brand: "Metamucil", price: 16.99, originalPrice: 22.99, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "Digestive", rating: 4.5, reviews: 23000, badge: "Sale", badgeClass: "badge-deal", desc: "Premium psyllium husk fiber powder. 72 servings." },
    { name: "Antacid Tablets", brand: "Tums", price: 6.49, originalPrice: null, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Digestive", rating: 4.4, reviews: 31000, badge: "Classic", badgeClass: "badge-best", desc: "Ultra-strength 1000mg calcium carbonate. 160 tablets." },
    { name: "Apple Cider Vinegar", brand: "Bragg", price: 8.99, originalPrice: null, img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", category: "Digestive", rating: 4.7, reviews: 17000, badge: "Organic", badgeClass: "badge-new", desc: "Raw, unfiltered with the mother. 32 oz." },
    // --- Immunity ---
    { name: "Elderberry Gummies", brand: "Zarbee's", price: 14.99, originalPrice: null, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Immunity", rating: 4.8, reviews: 41000, badge: "Kids Fav", badgeClass: "badge-best", desc: "Delicious elderberry with zinc & vitamin C. 60 gummies." },
    { name: "Vitamin C + Zinc", brand: "Emergen-C", price: 10.99, originalPrice: 15.99, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Immunity", rating: 4.6, reviews: 27000, badge: "31% OFF", badgeClass: "badge-deal", desc: "Super orange effervescent drink mix. 30 packets." },
    { name: "Turmeric Curcumin", brand: "Qunol", price: 19.99, originalPrice: 29.99, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "Immunity", rating: 4.7, reviews: 22000, badge: "33% OFF", badgeClass: "badge-deal", desc: "Ultra-high absorption curcumin. 120 softgels." },
    { name: "Echinacea Extract", brand: "Nature's Way", price: 8.99, originalPrice: null, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "Immunity", rating: 4.5, reviews: 13000, badge: "Herbal", badgeClass: "badge-new", desc: "Standardized root extract. 100 capsules." },
    { name: "Mushroom Complex", brand: "Real Mushrooms", price: 29.99, originalPrice: null, img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", category: "Immunity", rating: 4.8, reviews: 8900, badge: "Premium", badgeClass: "badge-best", desc: "5 Defenders immune support blend. 90 capsules." },
    // --- Skincare ---
    { name: "Collagen Peptides", brand: "Vital Proteins", price: 27.99, originalPrice: null, img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", category: "Skincare", rating: 4.7, reviews: 29000, badge: "Trending", badgeClass: "badge-best", desc: "Grass-fed, pasture-raised collagen. 20 oz." },
    { name: "Hyaluronic Acid", brand: "Now Foods", price: 14.99, originalPrice: 21.99, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Skincare", rating: 4.6, reviews: 11000, badge: "32% OFF", badgeClass: "badge-deal", desc: "Joint & skin hydration. 120 veggie capsules." },
    { name: "Biotin Complex", brand: "Sports Research", price: 12.99, originalPrice: null, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Skincare", rating: 4.7, reviews: 16000, badge: "Top Rated", badgeClass: "badge-best", desc: "High potency with coconut oil. 120 softgels." },
    { name: "Vitamin E Oil", brand: "Jason Natural", price: 9.99, originalPrice: null, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "Skincare", rating: 4.5, reviews: 7800, badge: "Pure", badgeClass: "badge-new", desc: "45,000 IU maximum strength skin oil. 2 oz." },
    // --- Baby & Kids ---
    { name: "Kids Multivitamin", brand: "Flintstones", price: 11.99, originalPrice: null, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Baby & Kids", rating: 4.8, reviews: 35000, badge: "Classic", badgeClass: "badge-best", desc: "Complete children's chewable vitamin. 180 tablets." },
    { name: "Baby Vitamin D Drops", brand: "Enfamil", price: 9.99, originalPrice: null, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "Baby & Kids", rating: 4.9, reviews: 21000, badge: "#1 Pediatric", badgeClass: "badge-best", desc: "400 IU per drop, 90-day supply. Tasteless." },
    { name: "Children's Cough Syrup", brand: "Zarbee's", price: 8.49, originalPrice: null, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Baby & Kids", rating: 4.7, reviews: 18000, badge: "All Natural", badgeClass: "badge-new", desc: "Honey-based nighttime cough relief. 4 oz." },
    { name: "Kids Probiotic Chews", brand: "Culturelle", price: 16.99, originalPrice: 24.99, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "Baby & Kids", rating: 4.6, reviews: 9200, badge: "32% OFF", badgeClass: "badge-deal", desc: "Berry-flavored daily probiotic. 30 chewables." },
    { name: "Gripe Water", brand: "Mommy's Bliss", price: 7.99, originalPrice: null, img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", category: "Baby & Kids", rating: 4.8, reviews: 27000, badge: "Trusted", badgeClass: "badge-best", desc: "Organic ginger & fennel for baby comfort. 4 oz." },
    // --- Diabetes ---
    { name: "Blood Glucose Monitor", brand: "OneTouch", price: 29.99, originalPrice: 49.99, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Diabetes", rating: 4.7, reviews: 16000, badge: "40% OFF", badgeClass: "badge-deal", desc: "Accurate readings in 5 seconds. Includes 10 strips." },
    { name: "Test Strips (100ct)", brand: "Accu-Chek", price: 34.99, originalPrice: null, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "Diabetes", rating: 4.8, reviews: 24000, badge: "Essential", badgeClass: "badge-best", desc: "Compatible with Accu-Chek Guide. 100 strips." },
    { name: "Sugar-Free Protein Bar", brand: "Quest", price: 2.49, originalPrice: null, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=400&h=300&fit=crop", category: "Diabetes", rating: 4.6, reviews: 56000, badge: "Keto", badgeClass: "badge-new", desc: "20g protein, 1g sugar. Chocolate chip cookie dough." },
    { name: "Chromium Picolinate", brand: "Now Foods", price: 7.99, originalPrice: null, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Diabetes", rating: 4.5, reviews: 8800, badge: "Wellness", badgeClass: "badge-new", desc: "Supports healthy blood sugar metabolism. 250 caps." },
    { name: "Diabetic Socks (3 Pack)", brand: "Dr. Scholl's", price: 14.99, originalPrice: 19.99, img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", category: "Diabetes", rating: 4.4, reviews: 7200, badge: "Comfort", badgeClass: "badge-best", desc: "Non-binding, moisture-wicking. Crew length." },
    // --- Protein ---
    { name: "Whey Protein Isolate", brand: "Optimum Nutrition", price: 34.99, originalPrice: null, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=400&h=300&fit=crop", category: "Protein", rating: 4.8, reviews: 38000, badge: "Top Rated", badgeClass: "badge-best", desc: "Gold standard 100% whey. 2 lbs, double rich chocolate." },
    { name: "Plant Protein Blend", brand: "Vega", price: 29.99, originalPrice: 39.99, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "Protein", rating: 4.6, reviews: 14000, badge: "25% OFF", badgeClass: "badge-deal", desc: "Pea + hemp + rice protein. Vanilla flavor." },
    { name: "BCAA Energy", brand: "Xtend", price: 22.99, originalPrice: null, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Protein", rating: 4.7, reviews: 19000, badge: "Popular", badgeClass: "badge-new", desc: "7g BCAAs per serving. Blue raspberry. 30 servings." },
    { name: "Creatine Monohydrate", brand: "MuscleTech", price: 19.99, originalPrice: 27.99, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Protein", rating: 4.8, reviews: 25000, badge: "29% OFF", badgeClass: "badge-deal", desc: "Clinically researched for strength & power. 400g." },
    { name: "Mass Gainer", brand: "Serious Mass", price: 44.99, originalPrice: null, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=400&h=300&fit=crop", category: "Protein", rating: 4.5, reviews: 21000, badge: "Bulk Up", badgeClass: "badge-best", desc: "1,250 calories per serving. 6 lbs chocolate." },
    // --- Herbal ---
    { name: "Ashwagandha KSM-66", brand: "Himalaya", price: 15.99, originalPrice: 24.99, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "Herbal", rating: 4.8, reviews: 22000, badge: "Organic", badgeClass: "badge-new", desc: "Clinically-proven adaptogen for stress. 90 caps." },
    { name: "Triphala Capsules", brand: "Organic India", price: 12.99, originalPrice: null, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "Herbal", rating: 4.6, reviews: 7400, badge: "Ayurvedic", badgeClass: "badge-new", desc: "Traditional digestive cleanse. 90 veggie caps." },
    { name: "Turmeric Golden Milk", brand: "Gaia Herbs", price: 18.99, originalPrice: null, img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", category: "Herbal", rating: 4.7, reviews: 9100, badge: "Premium", badgeClass: "badge-best", desc: "Anti-inflammatory latte blend with black pepper." },
    { name: "Holy Basil (Tulsi)", brand: "Himalaya", price: 9.99, originalPrice: null, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Herbal", rating: 4.5, reviews: 6200, badge: "Sacred Herb", badgeClass: "badge-new", desc: "Stress support & emotional well-being. 60 caps." },
    { name: "Valerian Root", brand: "Nature's Way", price: 8.99, originalPrice: 12.99, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Herbal", rating: 4.4, reviews: 11000, badge: "Sleep Aid", badgeClass: "badge-best", desc: "Promotes restful sleep naturally. 100 capsules." },
    // --- First Aid ---
    { name: "First Aid Kit - 250pc", brand: "Johnson & Johnson", price: 19.99, originalPrice: null, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "First Aid", rating: 4.8, reviews: 31000, badge: "Complete", badgeClass: "badge-best", desc: "All-purpose emergency first aid kit for home & travel." },
    { name: "Adhesive Bandages", brand: "Band-Aid", price: 5.99, originalPrice: null, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "First Aid", rating: 4.7, reviews: 42000, badge: "Essential", badgeClass: "badge-new", desc: "Flexible fabric bandages. Assorted 100ct." },
    { name: "Antiseptic Spray", brand: "Bactine", price: 7.99, originalPrice: null, img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", category: "First Aid", rating: 4.6, reviews: 15000, badge: "No-Sting", badgeClass: "badge-new", desc: "Pain relieving antiseptic cleansing spray. 5 oz." },
    { name: "Digital Thermometer", brand: "Vicks", price: 9.99, originalPrice: 14.99, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "First Aid", rating: 4.5, reviews: 19000, badge: "33% OFF", badgeClass: "badge-deal", desc: "Fast 8-second reading. Fever InSight display." },
    { name: "Instant Cold Pack (6)", brand: "Medline", price: 8.99, originalPrice: null, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "First Aid", rating: 4.6, reviews: 10000, badge: "Bulk Pack", badgeClass: "badge-best", desc: "Instant activation. No refrigeration needed." },
    // Extra
    { name: "Omega-3 Fish Oil", brand: "Nordic Naturals", price: 18.99, originalPrice: 29.99, img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&h=300&fit=crop", category: "Vitamins", rating: 4.8, reviews: 31000, badge: "37% OFF", badgeClass: "badge-deal", desc: "Triple-strength EPA/DHA. 180 softgels." },
    { name: "Magnesium Glycinate", brand: "Doctor's Best", price: 13.99, originalPrice: null, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&h=300&fit=crop", category: "Vitamins", rating: 4.7, reviews: 17000, badge: "Top Rated", badgeClass: "badge-best", desc: "Highly absorbable chelated magnesium. 120 tablets." },
    { name: "CoQ10 200mg", brand: "Qunol", price: 22.99, originalPrice: 34.99, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&h=300&fit=crop", category: "Vitamins", rating: 4.8, reviews: 20000, badge: "34% OFF", badgeClass: "badge-deal", desc: "Ultra-high absorption. Heart & cellular energy." },
    { name: "Melatonin 5mg", brand: "Natrol", price: 6.49, originalPrice: null, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&h=300&fit=crop", category: "Herbal", rating: 4.6, reviews: 38000, badge: "Sleep Aid", badgeClass: "badge-best", desc: "Drug-free sleep support. 250 fast dissolve tablets." },
    { name: "Prenatal Vitamin", brand: "One A Day", price: 16.99, originalPrice: null, img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=400&h=300&fit=crop", category: "Baby & Kids", rating: 4.8, reviews: 24000, badge: "Essential", badgeClass: "badge-best", desc: "Complete prenatal with DHA. 60 softgels." }
];

// --- Helper: Render Stars ---
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

// --- Wishlist / Like via localStorage ---
let likedItems = JSON.parse(localStorage.getItem('med_liked') || '[]');

function isLiked(name) { return likedItems.includes(name); }

function toggleLike(name, btn) {
    const idx = likedItems.indexOf(name);
    if (idx > -1) {
        likedItems.splice(idx, 1);
        btn.classList.remove('liked');
        btn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        likedItems.push(name);
        btn.classList.add('liked');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    localStorage.setItem('med_liked', JSON.stringify(likedItems));
}

// --- Current State ---
let currentFilter = 'all';
let currentSort = 'featured';

// --- Render Products ---
function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    const countEl = document.getElementById('product-count');
    if (!grid) return;
    grid.innerHTML = '';
    countEl.textContent = products.length;

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'all-product-card';
        const detailUrl = `Medicine_&_Nutrients_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent('$' + p.price.toFixed(2))}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(p.category)}&rating=${p.rating}&reviews=${p.reviews}${p.originalPrice ? '&originalPrice=' + encodeURIComponent('$' + p.originalPrice.toFixed(2)) : ''}&desc=${encodeURIComponent(p.desc)}&badge=${encodeURIComponent(p.badge)}&brand=${encodeURIComponent(p.brand)}`;

        let discountHTML = '';
        if (p.originalPrice) {
            const pct = Math.round((1 - p.price / p.originalPrice) * 100);
            discountHTML = `<span class="apc-original-price">$${p.originalPrice.toFixed(2)}</span><span class="apc-discount">${pct}% OFF</span>`;
        }

        card.innerHTML = `
            <div class="apc-image-wrap" onclick="window.location.href='${detailUrl}'">
                <img src="${p.img}" alt="${p.name}">
                <span class="apc-badge ${p.badgeClass}">${p.badge}</span>
                <button class="apc-like-btn ${isLiked(p.name) ? 'liked' : ''}" onclick="event.stopPropagation();" data-name="${p.name}">
                    <i class="${isLiked(p.name) ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="apc-info" onclick="window.location.href='${detailUrl}'">
                <div class="apc-category">${p.category}</div>
                <div class="apc-name">${p.name}</div>
                <div class="apc-brand">${p.brand}</div>
                <p class="apc-desc">${p.desc}</p>
                <div class="apc-rating">
                    <div class="apc-stars">${renderStars(p.rating)}</div>
                    <span class="apc-rating-text">${p.rating} (${p.reviews.toLocaleString()})</span>
                </div>
                <div class="apc-price-row">
                    <div><span class="apc-price">$${p.price.toFixed(2)}</span>${discountHTML}</div>
                </div>
                <div class="apc-actions" onclick="event.stopPropagation();">
                    <button class="apc-btn-cart">Add to Cart</button>
                    <button class="apc-btn-buy" onclick="window.location.href='${detailUrl}'">Buy Now</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Rebind like buttons
    document.querySelectorAll('.apc-like-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleLike(btn.dataset.name, btn));
    });
}

// --- Filter ---
function filterProducts(cat) {
    currentFilter = cat;
    applyFilterAndSort();
}

// --- Sort ---
function sortProducts(method) {
    currentSort = method;
    applyFilterAndSort();
}

function applyFilterAndSort() {
    let filtered = currentFilter === 'all' ? [...allProducts] : allProducts.filter(p => p.category === currentFilter);

    switch (currentSort) {
        case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'reviews': filtered.sort((a, b) => b.reviews - a.reviews); break;
        default: break;
    }

    renderProducts(filtered);
}

// --- Dropdown Logic ---
function initSortDropdown() {
    const dropdown = document.getElementById('sortDropdown');
    const trigger = document.getElementById('sortTrigger');
    const menu = document.getElementById('sortMenu');
    const label = document.getElementById('sortLabel');
    const backdrop = document.getElementById('sortBackdrop');

    if (!trigger) return;

    trigger.addEventListener('click', () => {
        dropdown.classList.toggle('open');
        backdrop.classList.toggle('visible');
    });

    backdrop.addEventListener('click', () => {
        dropdown.classList.remove('open');
        backdrop.classList.remove('visible');
    });

    menu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            menu.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const sort = item.dataset.sort;
            label.textContent = 'Sort: ' + item.textContent.replace(/\s+/g, ' ').trim();
            sortProducts(sort);
            dropdown.classList.remove('open');
            backdrop.classList.remove('visible');
        });
    });
}

// --- Filter Buttons Logic ---
function initFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.dataset.filter);
        });
    });
}

// --- Back to Top ---
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 600);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(allProducts);
    initSortDropdown();
    initFilterButtons();
    initBackToTop();
});
