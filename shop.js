const addToCartButtons = document.querySelectorAll(".addToCartBtn");
const notification = document.getElementById("notification");
const cartCount = document.getElementById("cartCount");
const floatingCart = document.getElementById("floatingCart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.textContent = cart.length;

// Add to Cart
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const product = {
      name: button.getAttribute("data-name"),
      price: parseFloat(button.getAttribute("data-price")),
      image: button.getAttribute("data-image"),
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount.textContent = cart.length;

    showNotification(`${product.name} added to cart 🧁`);
  });
});

// Show Notification
function showNotification(message) {
  notification.textContent = message;
  notification.classList.add("show");
  setTimeout(() => notification.classList.remove("show"), 2000);
}

// Go to Cart
floatingCart.addEventListener("click", () => {
  window.location.href = "cart.html";
});

// ======= SHOP FUNCTIONALITY ======= //
const addToCartBtns = document.querySelectorAll(".addToCartBtn");
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const confirmAdd = document.getElementById("confirmAdd");
const cancelModal = document.getElementById("cancelModal");

let selectedProduct = null;

// Show modal when Add to Cart clicked
addToCartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const image = btn.dataset.image;

    selectedProduct = { name, price, image };

    modalImg.src = image;
    modalName.textContent = name;
    modalPrice.textContent = `$${price}`;
    modal.style.display = "flex";
  });
});

// Close modal
cancelModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Add to Cart Confirmation
confirmAdd.addEventListener("click", () => {
  const option = document.querySelector('input[name="option"]:checked').value;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ ...selectedProduct, option });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${selectedProduct.name} (${option}) added to cart! 🛒`);
  modal.style.display = "none";
});

