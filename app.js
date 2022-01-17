//add to cart
const productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".add");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {

    productsCountEl.textContent = +productsCountEl.textContent + 1;

  });
}

// add and remove like

let productLike = document.querySelectorAll(".heart");
// for (let i = 0; i < productLike.length; i++) {
//   productLike[i].addEventListener("click", function () {
//     console.log("like");
//   });
// };

// productLike.forEach(item => {
//   item.addEventListener('click', function () {
//     console.log('liked');
//   });
// });

productLike.forEach((item) => {
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    item.classList.toggle('liked'); //або
  });

});

// modal

let detailsBtn = document.querySelectorAll(".more");
console.log(detailsBtn);

let modalWindow = document.querySelector(".modal");
console.log(modalWindow);

let btnClose = document.querySelector(".btn-close");

function openModal() {
  modalWindow.classList.add("show");
  modalWindow.classList.remove('hide');
};

function closeModal() {
  modalWindow.classList.remove("show");
  modalWindow.classList.add('hide');
};

detailsBtn.forEach((item) => {
  item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);




$(".slider").slick({
  dots: true,
  autoplay: true,
});

// модальне вікно при прокрутці сторінки 



// window.addEventListener('scroll', function () {
//   let scrolled = window.pageYOffset;
//   console.log(scrolled);

//   if (scrolled > 941) {
//     modalWindow.classList.add("show");
//     // window.removeEventListener("scroll", function ();
//   };
// });


function showModalByScroll() {
  if (window.pageYOffset >= document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);


AOS.init();



let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let quantityInput = document.querySelectorAll(".product-quantity input")[0];

incrementBtns.addEventListener("click", function () {
  let currentValue = +quantityInput.value;
  let nextValue = currentValue + 1;
  quantityInput.value = nextValue;

  console.log(currentValue);
});

decrementBtns.addEventListener("click", function () {
  let currentValue = +quantityInput.value;
  let nextValue = currentValue - 1;
  quantityInput.value = nextValue;

  console.log(currentValue);
});