// Function to create animated particles
function createParticles() {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;
  
    const particleCount = 50;
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
  
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
  
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 8}s`;
  
      particlesContainer.appendChild(particle);
    }
  }
  
  // Function to display cart contents
  function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cart.length === 0) {
      cartContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
      return;
    }
  
    let total = 0;
    let cartHTML = `
          <table>
              <thead>
                  <tr>
                      <th>Product</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
      `;
  
    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
  
      cartHTML += `
              <tr>
                  <td>${item.name || item.title}</td>
                  <td>$${item.price.toFixed(2)}</td>
                  <td>
                      <div class="quantity-controls">
                          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                          <span>${item.quantity}</span>
                          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                      </div>
                  </td>
                  <td>$${itemTotal.toFixed(2)}</td>
                  <td><button class="remove" onclick="removeItem(${item.id})">Remove</button></td>
              </tr>
          `;
    });
  
    cartHTML += `
              </tbody>
          </table>
          <div class="total">Total: $${total.toFixed(2)}</div>
      `;
  
    cartContainer.innerHTML = cartHTML;
  }
  
  // Function to update item quantity
  function updateQuantity(id, newQuantity) {
    if (newQuantity < 1) return;
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = cart.findIndex((item) => item.id === id);
  
    if (itemIndex !== -1) {
      cart[itemIndex].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    }
  }
  
  // Function to remove an item from the cart
  function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }
  
  
  
  // Function to buy items
  function buyItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before buying.");
    } else {
      alert("Thank you for your purchase!");
      clearCart();
    }
  }
  
  // Initialize particles and display cart when page loads
  window.onload = () => {
    createParticles();
    displayCart();
  };