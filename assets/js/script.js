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
    let counter0 = parseInt(localStorage.getItem("storageCount")) ||0;
  let counter1 = document.getElementById("counter");
    if (counter1) {
  counter1.textContent = counter0;
}


    let items=document.querySelectorAll(".cartButton");
    items.forEach(btn=>{
    btn.addEventListener("click",()=>{
    
    counter0++;
    localStorage.setItem("storageCount", counter0);
    counter1.textContent = counter0;
        })
    })
    // ..............................................................login..........
  let loginForm = document.getElementById('login');
  if (loginForm ) {
    loginForm .addEventListener('submit', e => {
      e.preventDefault();
      

      let email = document.getElementById('email2').value.trim();
      let password = document.getElementById('password').value.trim();

      if(! email || !password){
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

       loginForm .reset();
      
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
  let cartItemsContainer = document.getElementById('cart-items');
let totalItemsSpan = document.getElementById('total-items');
let totalPriceSpan = document.getElementById('total-price');

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItemsContainer.innerHTML = '';

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
          <img src="${product.image}" class="img-fluid">
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
    cartItemsContainer.appendChild(item);
  });

  totalItemsSpan.textContent = totalItems;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

function updateQuantity(index, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity = parseInt(quantity);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function clearCart() {
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
//...............................................................................




  });



