


document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cartItems");
    const totalItems = document.getElementById("totalItems");
    const totalPrice = document.getElementById("totalPrice");
    const emptyCart = document.getElementById("emptyCart");
    const checkoutButton = document.querySelector(".checkout");

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    // Render cart items
    function renderCart() {
        if (cartItems.length === 0) {
            emptyCart.style.display = "block";
            cartContainer.style.display = "none";
        } else {
            emptyCart.style.display = "none";
            cartContainer.style.display = "block";
            cartContainer.innerHTML = cartItems
                .map(
                    (item) => `
                        <div class="cart-item">
                            <img src="${item.imageUrl}" alt="${item.name}" class="cart-item-image">
                            <div class="cart-item-details">
                                <h3>${item.name}</h3>
                                <p>Price: $${item.price.toFixed(2)}</p>
                                <div class="quantity-control">
                                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                                    <span>${item.quantity}</span>
                                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                                </div>
                                <button class="remove-item" onclick="removeItem(${item.id})">Remove</button>
                            </div>
                        </div>
                    `
                )
                .join("");
        }

        updateTotals();
    }

    // Update total items and price
    function updateTotals() {
        const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPriceValue = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

        totalItems.textContent = totalItemsCount;
        totalPrice.textContent = `$${totalPriceValue.toFixed(2)}`;
    }

    // Update item quantity
    function updateQuantity(id, change) {
        const item = cartItems.find((item) => item.id === id);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cartItems = cartItems.filter((cartItem) => cartItem.id !== id);
            }
            saveCart();
            renderCart();
        }
    }

    // Remove item from cart
    function removeItem(id) {
        cartItems = cartItems.filter((item) => item.id !== id);
        saveCart();
        renderCart();
    }

    // Clear the entire cart
    function clearCart() {
        cartItems = [];
        saveCart();
        renderCart();
    }

    // Buy items
    function buyItems() {
        if (cartItems.length === 0) {
            alert("Your cart is empty. Please add items before buying.");
        } else {
            alert("Thank you for your purchase!");
            clearCart();
        }
    }

    // Expose functions to global scope
    window.updateQuantity = updateQuantity;
    window.removeItem = removeItem;
    window.clearCart = clearCart;
    window.buyItems = buyItems;
    
    addToCart({
        id: 2,
        name: "Dune",
        author: "Frank Herbert",
        price: 18.99,
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1649161732i/32773948._SY540_.jpg",
        description: "A sci-fi epic about Paul Atreides navigating politics, war, and destiny on the desert planet Arrakis."
    });

    addToCart({
        id: 12,
        name: "Atomic Habits",
        author: "James Clear",
        price: 19.99,
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_0035cc74-7206-485d-aa04-83b3b7cf8db7?wid=800&hei=800&qlt=80&fmt=webp",
        description: "James Clear's self-help book about the power of small habits to create big change."
    });

    // Initial render
    renderCart();
});