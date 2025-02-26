document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = {
        id: Number.parseInt(urlParams.get("id")),
        name: urlParams.get("name"),
        author: urlParams.get("author"), // Added author field
        price: Number.parseFloat(urlParams.get("price")),
        imageUrl: urlParams.get("imageUrl"),
        description: urlParams.get("description"),
    };

    const productImage = document.getElementById("productImage");
    const productName = document.getElementById("productName");
    const productAuthor = document.getElementById("productAuthor"); // Added author element
    const productPrice = document.getElementById("productPrice");
    const productDescription = document.getElementById("productDescription");
    const quantitySpan = document.getElementById("quantity");
    const decreaseQuantityButton = document.getElementById("decreaseQuantity");
    const increaseQuantityButton = document.getElementById("increaseQuantity");
    const addToCartButton = document.getElementById("addToCart");
    const returnToProductsButton = document.getElementById("returnToProducts");

    // Set product details
    productImage.src = product.imageUrl;
    productImage.alt = product.name;
    productName.textContent = product.name;
    productAuthor.textContent = `by ${product.author}`; // Display author
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productDescription.textContent = product.description;

    let quantity = 1;

    // Quantity controls
    decreaseQuantityButton.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });

    increaseQuantityButton.addEventListener("click", () => {
        quantity++;
        quantitySpan.textContent = quantity;
    });

    // Add to cart functionality
    addToCartButton.addEventListener("click", () => {
        for (let i = 0; i < quantity; i++) {
            window.addToCart(product);
        }
        alert(`Added ${quantity} ${product.name}(s) to cart.`);
    });

    // Return to products page
    returnToProductsButton.addEventListener("click", () => {
        window.location.href = "product.html";
    });
});