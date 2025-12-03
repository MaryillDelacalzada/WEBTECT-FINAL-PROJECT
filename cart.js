const cartContainer = document.getElementById("cartContainer");
const backToShopBtn = document.getElementById("backToShop");
const checkoutBtn = document.getElementById("checkoutBtn");

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render the cart
function renderCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="empty-cart">Your cart is empty 😢</p>`;
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
      </div>
      <button class="removeBtn" data-index="${index}">❌</button>
    `;
    cartContainer.appendChild(div);
  });

  // Add remove button functionality
  const removeButtons = document.querySelectorAll(".removeBtn");
  removeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

// Checkout button
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty! 🛒");
    return;
  }
  alert("Thank you for your purchase! 💖");
  localStorage.removeItem("cart");
  window.location.href = "shop.html";
});

// Back to shop button
backToShopBtn.addEventListener("click", () => {
  window.location.href = "shop.html";
});

// Initialize
renderCart();
