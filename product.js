// Function to create animated particles
function createParticles() {
    const particlesContainer = document.getElementById("particles")
    if (!particlesContainer) return
  
    const particleCount = 50
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
  
      // Random position
      particle.style.left = `${Math.random() * 100}%`
  
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 8}s`
  
      particlesContainer.appendChild(particle)
    }
  }
  
  // Function to add to cart
  function addToCart(id, name, price) {
    // Get current cart from localStorage or create a new empty cart
    const cart = JSON.parse(localStorage.getItem("cart")) || []
  
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === id)
  
    if (existingProductIndex !== -1) {
      // If the product already exists, increase the quantity
      cart[existingProductIndex].quantity += 1
    } else {
      // Otherwise, add the new product to the cart
      cart.push({
        id: id,
        name: name,
        price: price,
        quantity: 1,
      })
    }
  
    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart))
  
    alert(`${name} has been added to your cart!`)
  }
  
  // Initialize particles when the page is loaded
  window.onload = () => {
    createParticles()
  }
  
  