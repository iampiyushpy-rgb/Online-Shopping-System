// =============================================
// Books_AllProducts.js — All Products Page
// Full book database with filtering, sorting, likes
// =============================================

// --- Full Book Database ---
const allProducts = [
    // === Horror & Thrillers ===
    { name: "It", author: "Stephen King", price: 14.99, originalPrice: 22.99, category: "Horror", badge: "Bestseller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "A terrifying masterpiece about childhood fears and the evil that lurks in the sewers of a small town.", rating: 4.8, reviews: 45000 },
    { name: "The Shining", author: "Stephen King", price: 13.99, originalPrice: 19.99, category: "Horror", badge: "Classic", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", desc: "Jack Torrance's descent into madness in the haunted Overlook Hotel. A horror genre-definer.", rating: 4.9, reviews: 52000 },
    { name: "Bird Box", author: "Josh Malerman", price: 12.99, originalPrice: null, category: "Horror", badge: "Trending", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "Something is out there. Something terrifying. And if you look at it, you die.", rating: 4.5, reviews: 28000 },
    { name: "Mexican Gothic", author: "Silvia Moreno-Garcia", price: 15.99, originalPrice: 24.99, category: "Horror", badge: "Award Winner", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", desc: "A darkly glamorous gothic tale set in 1950s Mexico — think Jane Eyre meets Lovecraft.", rating: 4.6, reviews: 18000 },

    // === Autobiography & Memoir ===
    { name: "Becoming", author: "Michelle Obama", price: 15.99, originalPrice: 32.50, category: "Autobiography", badge: "Must Read", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop", desc: "An intimate, powerful memoir by the former First Lady of the United States.", rating: 4.9, reviews: 54000 },
    { name: "Educated", author: "Tara Westover", price: 14.99, originalPrice: 22.99, category: "Autobiography", badge: "Inspiring", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=300&fit=crop", desc: "A woman who grew up in the mountains of Idaho with no formal education earns a PhD from Cambridge.", rating: 4.8, reviews: 41000 },
    { name: "Born a Crime", author: "Trevor Noah", price: 13.99, originalPrice: 19.99, category: "Autobiography", badge: "Hilarious", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "Growing up in apartheid South Africa, Trevor Noah's existence was literally a crime.", rating: 4.7, reviews: 36000 },
    { name: "Long Walk to Freedom", author: "Nelson Mandela", price: 16.99, originalPrice: 28.99, category: "Autobiography", badge: "Legendary", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "Nelson Mandela's epic autobiography from prison to president.", rating: 4.9, reviews: 32000 },

    // === Drama & Literary Fiction ===
    { name: "Normal People", author: "Sally Rooney", price: 15.99, originalPrice: null, category: "Drama", badge: "Adapted", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "A riveting exploration of mutual fascination, friendship, and love between two Irish students.", rating: 4.6, reviews: 38000 },
    { name: "A Little Life", author: "Hanya Yanagihara", price: 17.99, originalPrice: 28.99, category: "Drama", badge: "Profound", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", desc: "A devastating novel about four college classmates navigating ambition, addiction, and trauma in New York.", rating: 4.7, reviews: 22000 },
    { name: "The Kite Runner", author: "Khaled Hosseini", price: 14.99, originalPrice: 21.99, category: "Drama", badge: "Timeless", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", desc: "A haunting tale of friendship, betrayal, and redemption set against the backdrop of Afghanistan.", rating: 4.8, reviews: 58000 },
    { name: "Beautiful World, Where Are You", author: "Sally Rooney", price: 16.99, originalPrice: null, category: "Drama", badge: "New", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "Four young people navigate love, friendship, and modern anxieties in this sharp, layered novel.", rating: 4.4, reviews: 19000 },

    // === Sci-Fi & Fantasy ===
    { name: "Project Hail Mary", author: "Andy Weir", price: 22.99, originalPrice: null, category: "Sci-Fi", badge: "Must Read", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", desc: "A lone astronaut must save humanity in this riveting tale of scientific ingenuity from the author of The Martian.", rating: 4.9, reviews: 56000 },
    { name: "Dune", author: "Frank Herbert", price: 14.99, originalPrice: 24.99, category: "Sci-Fi", badge: "Legendary", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "The monumental sci-fi epic set on the desert planet Arrakis. Politics, religion, and war intertwined.", rating: 4.9, reviews: 67000 },
    { name: "The Name of the Wind", author: "Patrick Rothfuss", price: 16.99, originalPrice: 25.99, category: "Fantasy", badge: "Epic", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "A musician, a beggar, and a legend. Kvothe tells his own story of music, magic, and myth.", rating: 4.8, reviews: 42000 },
    { name: "Neuromancer", author: "William Gibson", price: 13.99, originalPrice: 18.99, category: "Sci-Fi", badge: "Cyberpunk", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", desc: "The seminal cyberpunk novel that launched an entire genre and predicted the internet age.", rating: 4.5, reviews: 29000 },
    { name: "The Hobbit", author: "J.R.R. Tolkien", price: 12.99, originalPrice: 18.99, category: "Fantasy", badge: "Classic", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop", desc: "Bilbo Baggins embarks on an unexpected journey that will change the fate of Middle-earth forever.", rating: 4.9, reviews: 89000 },

    // === Romance ===
    { name: "It Ends with Us", author: "Colleen Hoover", price: 15.99, originalPrice: null, category: "Romance", badge: "Trending", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", desc: "A brave exploration of love, courage, and the strength it takes to walk away.", rating: 4.6, reviews: 120000 },
    { name: "The Notebook", author: "Nicholas Sparks", price: 12.99, originalPrice: 17.99, category: "Romance", badge: "Classic", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop", desc: "A love story that spans decades. Noah and Allie prove that true love never dies.", rating: 4.5, reviews: 75000 },
    { name: "Beach Read", author: "Emily Henry", price: 14.99, originalPrice: null, category: "Romance", badge: "Fun", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "Two writers with opposite genres swap styles for the summer — and maybe fall in love.", rating: 4.5, reviews: 32000 },
    { name: "People We Meet on Vacation", author: "Emily Henry", price: 15.99, originalPrice: 23.99, category: "Romance", badge: "Bestseller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "Two best friends. Ten summer trips. One chance to fix everything between them.", rating: 4.6, reviews: 28000 },

    // === Mystery & Crime ===
    { name: "Gone Girl", author: "Gillian Flynn", price: 14.99, originalPrice: 22.99, category: "Mystery", badge: "Bestseller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "On a warm summer morning a woman disappears. The #1 thriller that shattered expectations.", rating: 4.7, reviews: 89000 },
    { name: "The Girl on the Train", author: "Paula Hawkins", price: 13.99, originalPrice: 18.99, category: "Mystery", badge: "Grip", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", desc: "Rachel takes the same commuter train every morning, until she sees something shocking.", rating: 4.4, reviews: 62000 },
    { name: "Big Little Lies", author: "Liane Moriarty", price: 14.99, originalPrice: null, category: "Mystery", badge: "Adapted", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", desc: "Three mothers, a school trivia night, and a terrible secret threatening to unravel everything.", rating: 4.5, reviews: 45000 },
    { name: "The Da Vinci Code", author: "Dan Brown", price: 12.99, originalPrice: 19.99, category: "Mystery", badge: "Phenomenon", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "A murder inside the Louvre leads to a trail of clues hidden in the works of Leonardo da Vinci.", rating: 4.3, reviews: 95000 },

    // === Self-Help & Growth ===
    { name: "Atomic Habits", author: "James Clear", price: 16.99, originalPrice: 27.99, category: "Self-Help", badge: "Phenomenon", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=300&fit=crop", desc: "An easy and proven way to build good habits and break bad ones. 10 million copies sold.", rating: 4.8, reviews: 85000 },
    { name: "The Power of Now", author: "Eckhart Tolle", price: 14.99, originalPrice: null, category: "Self-Help", badge: "Essential", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop", desc: "A guide to spiritual enlightenment that has changed millions of lives around the world.", rating: 4.6, reviews: 38000 },
    { name: "Think and Grow Rich", author: "Napoleon Hill", price: 11.99, originalPrice: 16.99, category: "Self-Help", badge: "Timeless", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "The classic personal development guide that has inspired over 100 million readers worldwide.", rating: 4.5, reviews: 72000 },
    { name: "The 7 Habits of Highly Effective People", author: "Stephen Covey", price: 15.99, originalPrice: 24.99, category: "Self-Help", badge: "Leadership", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "A holistic approach to effectiveness. The definitive guide to personal and professional growth.", rating: 4.7, reviews: 55000 },

    // === History & Politics ===
    { name: "Sapiens", author: "Yuval Noah Harari", price: 18.99, originalPrice: null, category: "History", badge: "Essential", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop", desc: "A brief history of humankind — sweeping, audacious, and utterly compelling. A modern classic.", rating: 4.8, reviews: 72000 },
    { name: "Guns, Germs, and Steel", author: "Jared Diamond", price: 16.99, originalPrice: 24.99, category: "History", badge: "Pulitzer", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", desc: "Why did history unfold differently on different continents? The Pulitzer Prize-winning exploration.", rating: 4.6, reviews: 35000 },
    { name: "The Silk Roads", author: "Peter Frankopan", price: 17.99, originalPrice: 29.99, category: "History", badge: "Epic", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "A radical new history of the world told from the heart of its oldest trade routes.", rating: 4.5, reviews: 18000 },
    { name: "SPQR", author: "Mary Beard", price: 15.99, originalPrice: 22.99, category: "History", badge: "Academic", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "Ancient Rome's history as you've never read it before — witty, rigorous, and revelatory.", rating: 4.7, reviews: 21000 },

    // === Young Adult & Children ===
    { name: "Harry Potter Box Set", author: "J.K. Rowling", price: 49.99, originalPrice: 79.99, category: "Young Adult", badge: "Iconic", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", desc: "The complete seven-book saga that defined a generation. Welcome to Hogwarts.", rating: 4.9, reviews: 145000 },
    { name: "Percy Jackson", author: "Rick Riordan", price: 12.99, originalPrice: null, category: "Young Adult", badge: "Adventure", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "Greek gods are real and they have kids. Percy is one of them —  and he's in serious trouble.", rating: 4.7, reviews: 65000 },
    { name: "The Hunger Games", author: "Suzanne Collins", price: 14.99, originalPrice: 21.99, category: "Young Adult", badge: "Dystopia", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "In a dark future, teenagers are forced to fight to the death in an annual televised event.", rating: 4.7, reviews: 88000 },
    { name: "Matilda", author: "Roald Dahl", price: 9.99, originalPrice: 14.99, category: "Young Adult", badge: "Charming", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", desc: "A brilliant little girl with telekinetic powers takes on the world's meanest school principal.", rating: 4.8, reviews: 42000 },

    // === Poetry & Verse ===
    { name: "Milk and Honey", author: "Rupi Kaur", price: 10.99, originalPrice: null, category: "Poetry", badge: "Bestseller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop", desc: "A collection of poetry and prose about survival, love, loss, and femininity.", rating: 4.5, reviews: 58000 },
    { name: "The Sun and Her Flowers", author: "Rupi Kaur", price: 12.99, originalPrice: 17.99, category: "Poetry", badge: "Beautiful", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=300&fit=crop", desc: "A journey of wilting, falling, rooting, rising, and blooming through powerful verse.", rating: 4.4, reviews: 35000 },
    { name: "Leaves of Grass", author: "Walt Whitman", price: 8.99, originalPrice: null, category: "Poetry", badge: "Classic", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "The foundational collection of American poetry. Raw, exuberant, and deeply human.", rating: 4.7, reviews: 28000 },
    { name: "The Waste Land", author: "T.S. Eliot", price: 9.99, originalPrice: 14.99, category: "Poetry", badge: "Masterwork", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "The poem that shattered modernist conventions. A fragmented, haunting masterpiece.", rating: 4.6, reviews: 15000 },

    // === Non-Fiction ===
    { name: "The Midnight Library", author: "Matt Haig", price: 18.99, originalPrice: 28.99, category: "Non-Fiction", badge: "Bestseller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "Between life and death there is a library, and within that library, the shelves go on forever.", rating: 4.9, reviews: 42000 },
    { name: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 16.99, originalPrice: 24.99, category: "Non-Fiction", badge: "Nobel", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", desc: "Nobel laureate reveals how our two systems of thinking shape our judgments and decisions.", rating: 4.6, reviews: 48000 },
    { name: "Homo Deus", author: "Yuval Noah Harari", price: 17.99, originalPrice: 26.99, category: "Non-Fiction", badge: "Visionary", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", desc: "The sequel to Sapiens. What will define humanity when algorithms know us better than we know ourselves?", rating: 4.5, reviews: 32000 },
    { name: "Outliers", author: "Malcolm Gladwell", price: 14.99, originalPrice: null, category: "Non-Fiction", badge: "Smart", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=300&fit=crop", desc: "What makes high achievers different? The 10,000 hour rule and the hidden factors behind success.", rating: 4.4, reviews: 55000 },

    // === Classics ===
    { name: "Pride and Prejudice", author: "Jane Austen", price: 9.99, originalPrice: null, category: "Classic", badge: "Timeless", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "The ultimate romantic comedy of manners. Elizabeth Bennet meets the proud Mr. Darcy.", rating: 4.8, reviews: 92000 },
    { name: "1984", author: "George Orwell", price: 11.99, originalPrice: 16.99, category: "Classic", badge: "Essential", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", desc: "Big Brother is watching. Orwell's chilling prophecy of mass surveillance and totalitarian control.", rating: 4.8, reviews: 105000 },
    { name: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99, originalPrice: 18.99, category: "Classic", badge: "Pulitzer", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", desc: "Racial injustice and moral courage in Depression-era Alabama, seen through the eyes of young Scout.", rating: 4.9, reviews: 85000 },
    { name: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99, originalPrice: null, category: "Classic", badge: "Iconic", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "The green light at the end of the dock. Jay Gatsby's tragic pursuit of the American Dream.", rating: 4.6, reviews: 78000 },

    // === Manga ===
    { name: "One Piece Vol. 1", author: "Eiichiro Oda", price: 9.99, originalPrice: null, category: "Manga", badge: "Iconic", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=300&fit=crop", desc: "Monkey D. Luffy sets sail to become King of the Pirates. The greatest manga adventure ever told.", rating: 4.9, reviews: 120000 },
    { name: "Attack on Titan Vol. 1", author: "Hajime Isayama", price: 10.99, originalPrice: 14.99, category: "Manga", badge: "Epic", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=300&fit=crop", desc: "Humanity's last stand against terrifying giants. A war story, a mystery, and a political thriller.", rating: 4.8, reviews: 95000 },
    { name: "My Hero Academia Vol. 1", author: "Kohei Horikoshi", price: 9.99, originalPrice: null, category: "Manga", badge: "Hot", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=300&fit=crop", desc: "Izuku Midoriya dreams of becoming a hero in a world where nearly everyone has superpowers.", rating: 4.7, reviews: 68000 },
    { name: "Death Note Vol. 1", author: "Tsugumi Ohba", price: 8.99, originalPrice: 12.99, category: "Manga", badge: "Thriller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=300&fit=crop", desc: "A notebook that kills anyone whose name is written in it. A deadly game of cat and mouse.", rating: 4.8, reviews: 82000 }
];


// --- Liked products state (stored in localStorage) ---
let likedProducts = JSON.parse(localStorage.getItem('books_liked') || '[]');

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
    localStorage.setItem('books_liked', JSON.stringify(likedProducts));
}

// --- Generate Star HTML ---
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

// --- Format Price ---
function formatPrice(p) {
    return '$' + p.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// --- Render All Product Cards ---
function renderAllProducts(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = '';

    products.forEach((p, idx) => {
        const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
        const liked = isLiked(p.name);

        const card = document.createElement('div');
        card.className = 'all-product-card';
        card.dataset.index = idx;

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
                <div class="apc-author">by ${p.author}</div>
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
                    <button class="apc-btn-cart" onclick="event.stopPropagation();">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="apc-btn-buy" onclick="event.stopPropagation(); window.location.href='Books_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(formatPrice(p.price))}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(p.category)}&rating=${p.rating}&reviews=${p.reviews}${p.originalPrice ? '&originalPrice=' + encodeURIComponent(formatPrice(p.originalPrice)) : ''}&desc=${encodeURIComponent(p.desc)}&badge=${encodeURIComponent(p.badge)}&author=${encodeURIComponent(p.author)}'">
                        <i class="fas fa-bolt"></i> Buy Now
                    </button>
                </div>
            </div>
        `;

        // Click card → go to product details
        card.addEventListener('click', () => {
            window.location.href = `Books_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(formatPrice(p.price))}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(p.category)}&rating=${p.rating}&reviews=${p.reviews}${p.originalPrice ? '&originalPrice=' + encodeURIComponent(formatPrice(p.originalPrice)) : ''}&desc=${encodeURIComponent(p.desc)}&badge=${encodeURIComponent(p.badge)}&author=${encodeURIComponent(p.author)}`;
        });

        grid.appendChild(card);
    });

    // Update results count
    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = products.length;
}

// --- Filter Logic ---
let activeFilter = 'all';

function filterProducts(category) {
    activeFilter = category;

    // Update active button styling
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });

    if (category === 'all') {
        renderAllProducts(allProducts);
    } else if (category === 'liked') {
        const liked = allProducts.filter(p => isLiked(p.name));
        renderAllProducts(liked);
    } else {
        const filtered = allProducts.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
        renderAllProducts(filtered);
    }
}

// --- Sort Logic ---
function sortProducts(criteria) {
    let sorted = [...allProducts];
    if (activeFilter !== 'all') {
        if (activeFilter === 'liked') {
            sorted = sorted.filter(p => isLiked(p.name));
        } else {
            sorted = sorted.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));
        }
    }

    switch (criteria) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'reviews':
            sorted.sort((a, b) => b.reviews - a.reviews);
            break;
        default: // 'featured' — original order
            break;
    }

    renderAllProducts(sorted);
}

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

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    renderAllProducts(allProducts);
    initBackToTop();
    initCustomDropdown();

    // Filter buttons
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDropdown();
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.dataset.value;
            const text = item.querySelector('span').textContent;

            label.textContent = 'Sort: ' + text;

            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            closeDropdown();
            sortProducts(value);
        });
    });
}
