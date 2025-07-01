 
 
 document.addEventListener("DOMContentLoaded", function () {
    let counter0 = parseInt(localStorage.getItem("storageCount")) ||0;
  let counter1 = document.getElementById("counter");
    counter1.textContent = counter0;


    let items=document.querySelectorAll(".cartButton");
    items.forEach(btn=>{
    btn.addEventListener("click",()=>{
    
    counter0++;
    localStorage.setItem("storageCount", counter0);
    counter1.textContent = counter0;
        })
    })
   

//   ..........................................................cart page...........................................................
//  let cart = [
//       {
//         id: 1,
//         name: "Rose with balloons",
//         price: 50,
//         quantity: 2,
//         img: "assets/images/birth1.jpeg"
//       },
//       {
//         id: 2,
//         name: "Flower basket with balloon",
//         price: 80,
//         quantity: 1,
//         img: "assets/images/birth2.jpeg"
//       }
//     ];

//     const cartItemsEl = document.getElementById('cart-items');
//     const cartTotalEl = document.getElementById('cart-total');
//     const emptyCartMessage = document.getElementById('empty-cart-message');
//     const checkoutBtn = document.getElementById('checkout-btn');

//     function renderCart() {
//       cartItemsEl.innerHTML = '';

//       if (cart.length === 0) {
//         document.getElementById('cart-container').classList.add('d-none');
//         emptyCartMessage.classList.remove('d-none');
//         return;
//       } else {
//         document.getElementById('cart-container').classList.remove('d-none');
//         emptyCartMessage.classList.add('d-none');
//       }

//       let total = 0;

//       cart.forEach(item => {
//         const itemTotal = item.price * item.quantity;
//         total += itemTotal;

//         const tr = document.createElement('tr');

//         tr.innerHTML = `
//           <td>
//             <div class="d-flex align-items-center gap-3">
//               <img src="${item.img}" alt="${item.name}" width="80" height="80" style="border-radius: 12px; object-fit: cover;">
//               <span>${item.name}</span>
//             </div>
//           </td>
//           <td>$${item.price.toFixed(2)}</td>
//           <td>
//             <input type="number" min="1" value="${item.quantity}" class="form-control form-control-sm quantity-input" data-id="${item.id}" style="width: 70px;" />
//           </td>
//           <td>$${itemTotal.toFixed(2)}</td>
//           <td class="text-center">
//             <button class="btn-remove" data-id="${item.id}" title="Remove"><i class="fa-solid fa-trash"></i></button>
//           </td>
//         `;

//         cartItemsEl.appendChild(tr);
//       });

//       cartTotalEl.textContent = `Total: $${total.toFixed(2)}`;
//       checkoutBtn.disabled = total === 0;
//     }

//     // تحديث كمية المنتج
//     cartItemsEl.addEventListener('input', e => {
//       if (e.target.classList.contains('quantity-input')) {
//         const id = parseInt(e.target.getAttribute('data-id'));
//         const newQty = parseInt(e.target.value);
//         if (newQty >= 1) {
//           const product = cart.find(item => item.id === id);
//           if (product) {
//             product.quantity = newQty;
//             renderCart();
//           }
//         }
//       }
//     });

//     cartItemsEl.addEventListener('click', e => {
//       if (e.target.closest('.btn-remove')) {
//         const id = parseInt(e.target.closest('.btn-remove').getAttribute('data-id'));
//         cart = cart.filter(item => item.id !== id);
//         renderCart();
//       }
//     });

//     renderCart();

    // ......................delivery page......................
let form = document.getElementById("deliveryForm");
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
  console.log("test"); 

});









 });
