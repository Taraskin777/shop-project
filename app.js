//add to cart
const productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".add");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent =
      +productsCountEl.textContent + +quantityInput[i].value;
    quantityInput[i].value = 1;
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

function showModalByScroll() {
  if (window.pageYOffset >= document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);


AOS.init();


//кнопка додавання кількості товарів на картці товару(функціональне програмування)



// function toggleButtonState(count) {
//   decrementBtns.disabled = count <= minCount;
//   incrementBtns.disabled = count >= maxCount;
// }

// for (let i = 0; i < quantityInput.length; i++) {
//   let currentValue = +quantityInput[i].value;
//   toggleButtonState(currentValue, incrementBtns[i], decrementBtns[i]);
// }

// function toggleButtonState(count, incrementBtn, decrementBtn) {
//   decrementBtn.disabled = count <= minCount;
//   incrementBtn.disabled = count >= maxCount;
// }

// for (let i = 0; i < incrementBtns.length; i++) {
//   incrementBtns[i].addEventListener("click", function () {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue + 1;
//     quantityInput[i].value = nextValue;

//     toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
//   });
// }

// for (let i = 0; i < decrementBtns.length; i++) {
//   decrementBtns[i].addEventListener("click", function () {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue - 1;
//     quantityInput[i].value = nextValue;

//     toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
//   });
// }


let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");
// let minCount = 1;
// let maxCount = 5;

function Counter(
  incrementBtn,
  decrementBtn,
  inputField,
  minCount = 1,
  maxCount = 5
) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;

  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );

  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );


};



let counter1;
for(i = 0; i < quantityInput.length; i++) {
    counter1 = new Counter(incrementBtns[i],decrementBtns[i],quantityInput[i]);
}
// let counter1 = new Counter(
  
//   incrementBtns[0],  
//   decrementBtns[0],
//   quantityInput[0]
// );

// console.log(counter1);