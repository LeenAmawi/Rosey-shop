 
 
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
  const loginForm = document.getElementById('login');
  if (loginForm ) {
    loginForm .addEventListener('submit', e => {
      e.preventDefault();
      

      const email = document.getElementById('email2').value.trim();
      const password = document.getElementById('password').value.trim();

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

  //  ..................................................cart page..........................

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


