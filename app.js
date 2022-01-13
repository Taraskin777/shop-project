const productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".add");
console.log(addToCartBtns);


for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    //  console.log("clicked");

    // console.log(prevProductCount);

    productsCountEl.textContent = +productsCountEl.textContent + 1;

  });
}



let productLike = document.querySelectorAll(".heart");
for (let i = 0; i < productLike.length; i++) {
  productLike[i].addEventListener("click", function () {
    console.log("like");
  });
};

productLike.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("liked")) {
      item.classList.remove("liked");
    } else {
      item.classList.add("liked");
    }
  });

});

// modal

let detailsBtn = document.querySelectorAll(".more");
console.log(detailsBtn);

let modalWindow = document.querySelector(".modal");
console.log(modalWindow)

let btnClose = document.querySelector(".btn-close");

detailsBtn.forEach((item) => {
  item.addEventListener("click", function () {
    modalWindow.classList.add("show");
  });

  btnClose.addEventListener("click", function () {
    modalWindow.classList.remove("show");
  });
});
