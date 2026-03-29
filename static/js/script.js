let cartCount = 0;

function addToCart(productId) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    
    // Visual feedback
    const btn = event.target;
    btn.innerText = "Added!";
    btn.style.background = "#10b981"; // Success green
    
    setTimeout(() => {
        btn.innerText = "Add to Cart";
        btn.style.background = "#2563eb";
    }, 1500);

    console.log(`Product ${productId} added to session cart.`);
}