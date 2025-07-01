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
  });