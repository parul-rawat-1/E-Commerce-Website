// script.js
document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-name");
      const productPrice = button.getAttribute("data-price");
      const productImage = button.getAttribute("data-image");

      const product = {
        name: productName,
        price: productPrice,
        image: productImage,
      };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${productName} has been added to the cart.`);
    });
  });

  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
                <p>Your cart is empty.</p>
                <a href="shop.html" class="shop-now-button">Shop Now</a>
            `;
      cartTotalElement.textContent = "0.00";
    } else {
      cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" />
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>₹${item.price}</p>
                    </div>
                    <button class="remove-from-cart" data-index="${index}">Remove</button>
                `;
        cartItemsContainer.appendChild(cartItem);
        total += parseFloat(item.price);
      });

      cartTotalElement.textContent = total.toFixed(2);
    }
  }

  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-from-cart")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  renderCart();
});
