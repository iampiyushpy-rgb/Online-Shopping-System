// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name') || 'Premium Essential';
const price = urlParams.get('price') || '$45.00';
const img = urlParams.get('img') || 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=400&h=300&fit=crop';
const cat = urlParams.get('cat') || 'General';

// Update UI
document.getElementById('product-title').innerText = name;
document.getElementById('product-price').innerText = price;
document.getElementById('product-img').src = img;
document.getElementById('category-name').innerText = cat;
document.title = name + " - HomeSmart";

// Image Gallery Logic
const mainImg = document.getElementById('product-img');
const thumbList = document.getElementById('thumb-list');

// Create representative thumbnails (using variations of the main image or unique ones)
// For demonstration, we'll use a few variations or related images
const galleryImages = [
    img,
    "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?q=80&w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581783598307-5bbe6ed40e5a?q=80&w=400&h=300&fit=crop"
];

galleryImages.forEach((src, idx) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.className = `thumbnail ${idx === 0 ? 'active' : ''}`;
    thumb.onclick = () => {
        // Fade out main image
        mainImg.style.opacity = '0';
        
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
            
            // Update active state
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        }, 300);
    };
    thumbList.appendChild(thumb);
});

// Generate 20 dynamic related products
const relatedProductsPool = [
    { name: "Nordic Minimalist Vase", price: "$32.00", img: "https://images.unsplash.com/photo-1581783598307-5bbe6ed40e5a?q=80&w=400&h=300&fit=crop" },
    { name: "Bamboo Serving Tray", price: "$24.50", img: "https://images.unsplash.com/photo-1513519245088-0e12902e15ca?q=80&w=400&h=300&fit=crop" },
    { name: "Velvet Cushion Set", price: "$45.00", img: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=400&h=300&fit=crop" },
    { name: "Ceramic Coffee Dripper", price: "$28.00", img: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?q=80&w=400&h=300&fit=crop" },
    { name: "Aromatic Diffuser", price: "$39.99", img: "https://images.unsplash.com/photo-1602928294711-536f9ae94098?q=80&w=400&h=300&fit=crop" },
    { name: "Wooden Coaster Set", price: "$15.00", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&h=300&fit=crop" },
    { name: "Glass Storage Jars", price: "$19.00", img: "https://images.unsplash.com/photo-1521128182236-407137f8ea6b?q=80&w=400&h=300&fit=crop" },
    { name: "Linen Table Runner", price: "$22.00", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&h=300&fit=crop" },
    { name: "Cotton Throw Blanket", price: "$55.00", img: "https://images.unsplash.com/photo-1512418490979-92798cec352a?q=80&w=400&h=300&fit=crop" },
    { name: "Matte Black Planter", price: "$34.00", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&h=300&fit=crop" }
];

const scroll = document.getElementById('related-scroll');
// Create 20 items by cycling through the pool or slightly modifying them
for (let i = 0; i < 20; i++) {
    const baseProduct = relatedProductsPool[i % relatedProductsPool.length];
    const p = {
        name: `${baseProduct.name} ${Math.floor(i / relatedProductsPool.length + 1)}`,
        price: baseProduct.price,
        img: baseProduct.img
    };

    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.minWidth = '240px'; // Ensuring consistent width for horizontal scroll
    card.onclick = () => window.location.href = `../template/ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}&img=${encodeURIComponent(p.img)}&cat=Related`;
    
    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${p.img}" alt="${p.name}" class="product-image">
        </div>
        <div class="product-info">
            <h3>${p.name}</h3>
            <p class="product-price">${p.price}</p>
        </div>
    `;
    scroll.appendChild(card);
}
