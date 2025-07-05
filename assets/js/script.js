// ....................................................spiner...............
window.addEventListener('load', function () {
  setTimeout(() => {
    let loading1 = document.getElementById('loading');
    if (loading1) {
      loading1.style.display = 'none';
      let content = document.getElementById('main-content');
      if (content) content.style.display = 'block';
    }
  }, 500);
});

//..........................................................................
 
document.addEventListener("DOMContentLoaded", function () {
  let counter0 = parseInt(localStorage.getItem("storageCount")) || 0;
  let counter1 = document.getElementById("counter");
  if (counter1) {
    counter1.textContent = counter0;
  }
  let cartButtons = document.querySelectorAll(".cartButton");
  cartButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); 
      e.preventDefault();

      let card = button.closest(".card");

      let name = card.querySelector(".card-text").textContent.trim();
      let priceText = card.querySelector("ins").textContent.trim();
      let price = parseFloat(priceText.replace("$", ""));
      let image = card.querySelector("img").getAttribute("src");

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let existingProduct = cart.find(p => p.name === name);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({
          name: name,
          price: price,
          image: image,
          quantity: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      counter0 = cart.reduce((sum, p) => sum + p.quantity, 0);
      localStorage.setItem("storageCount", counter0);
      counter1.textContent = counter0;
      window.location.href = "cart.html";
    });
  });

  // ..............................................................login..........
  let loginForm = document.getElementById('login');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();

      let email = document.getElementById('email2').value.trim();
      let password = document.getElementById('password').value.trim();

      if (!email || !password) {
        return;
      }
      localStorage.setItem('username', email);
      localStorage.setItem('password', password);

      Swal.fire({
        icon: 'success',
        title: 'HI!',
        text: `HI, ${email}! success login.`,
        confirmButtonText: 'OK'
      });

      loginForm.reset();
    });
  }

  // ..............................................................regiser..............................
  let registerForm = document.getElementById('formRegister');

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let firstName = document.getElementById('FN').value.trim();
      let lastName = document.getElementById('LN').value.trim();
      let email4 = document.getElementById('email3').value.trim();
      let password1 = document.getElementById('passwd').value.trim();

      if (!firstName || !lastName || !email4 || !password1) {
        Swal.fire({
          icon: 'error',
          title: 'Missing fields!',
          text: 'Please fill in all the fields.'
        });
        return;
      }

      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('username', email4);
      localStorage.setItem('password', password1);

      Swal.fire({
        icon: 'success',
        title: 'Account Created!',
        text: `Welcome, ${firstName} ${lastName}!`,
        confirmButtonText: 'OK'
      }).then(() => {
        registerForm.reset();
      });
    });
  }

  //  ..................................................cart page..........................
  let cartItems = document.getElementById('cartItems');
  let totalItemsSpan = document.getElementById('totalItems');
  let totalPriceSpan = document.getElementById('totalPrice');

  function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cartItems) return;

    cartItems.innerHTML = '';
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach((product, index) => {
      totalItems += product.quantity;
      totalPrice += product.price * product.quantity;

      const item = document.createElement('div');
      item.className = "card mb-3 p-3";

      item.innerHTML = `
        <div class="row align-items-center">
          <div class="col-md-2">
            <img src="${product.image}"  style="width: 300px; height: 200px; object-fit: cover;" class="img-fluid">
          </div>
          <div class="col-md-3">
            <h5>${product.name}</h5>
            <p>$${product.price.toFixed(2)}</p>
          </div>
          <div class="col-md-3">
            <input type="number" min="1" value="${product.quantity}" class="form-control" onchange="updateQuantity(${index}, this.value)">
          </div>
          <div class="col-md-2">
            <strong>$${(product.price * product.quantity).toFixed(2)}</strong>
          </div>
          <div class="col-md-2">
            <button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
          </div>
        </div>
      `;
      cartItems.appendChild(item);
    });

    if (totalItemsSpan) totalItemsSpan.textContent = totalItems;
    if (totalPriceSpan) totalPriceSpan.textContent = totalPrice.toFixed(2);
  }

  window.updateQuantity = function (index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }

  window.removeItem = function (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }

  window.clearCart = function () {
    localStorage.removeItem('cart');
    loadCart();
  }

  loadCart();

  // ......................delivery page......................
  const form = document.getElementById("deliveryForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let deliveryName = document.getElementById("name").value.trim();
      let deliveryAddress = document.getElementById("address").value.trim();
      let deliveryPayment = document.getElementById("payment").value;
      let deliveryDate = document.getElementById("delivery-date").value;

      if (!deliveryName || !deliveryAddress || !deliveryPayment || !deliveryDate) {
        Swal.fire({
          icon: "error",
          title: "Missing all Fields or some of them!",
          text: "Please fill in all the required fields."
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: "Your order has been confirmed.",
        confirmButtonText: "OK",
      }).then(() => {
        form.reset();
      });
    });
  }
});
