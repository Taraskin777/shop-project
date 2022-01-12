const productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".add");
console.log(addToCartBtns);


for (let i = 0; i < addToCartBtns.length; i++) {
   addToCartBtns[i].addEventListener("click", function () {
     console.log("clicked");
   });
 }