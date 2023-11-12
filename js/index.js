const burgerMenu = document.querySelector(".btn__burger");
const navigationBurger = document.querySelector(".navigation__burger");
const btnClose = document.querySelector(".btn__close");

burgerMenu.addEventListener("click", function () {
    navigationBurger.classList.toggle("active");
});

btnClose.addEventListener("click", function () {
    navigationBurger.classList.remove("active");
});


/**--------------------------------------------- */

let cards = document.getElementsByClassName("card");
  transforms = [
    { x: 0, z: 0, scale: 1, filter: "blur(0px)" },
    { x: "-105%", z: "-50px", scale: 0.999, filter: "blur(2.5px)" },
    { x: "105%", z: "-50px", scale: 0.999, filter: "blur(2.5px)" },
  ];

let nextTransform = function (x) {
  if (x >= cards.length - 1) {
    x = 0;
  } else {
    x++;
  }
  return x;
};

function next() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.transform =
      "translateX(" +
      transforms[nextTransform(i)].x +
      ")" +
      "translateZ(" +
      transforms[nextTransform(i)].z +
      ")" +
      "scale(" +
      transforms[nextTransform(i)].scale +
      ")";
    cards[i].style.filter = transforms[nextTransform(i)].filter;
  }
  transforms.push(transforms.shift());
}

document.getElementById("carousel").onclick = function () {
  next();
};

let currentIndex = 0;

function updateCards() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform =
      "translateX(" +
      transforms[(i + currentIndex) % cards.length].x +
      ")" +
      "translateZ(" +
      transforms[(i + currentIndex) % cards.length].z +
      ")" +
      "scale(" +
      transforms[(i + currentIndex) % cards.length].scale +
      ")";
    cards[i].style.filter =
      transforms[(i + currentIndex) % cards.length].filter;
  }
}

function showNext() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCards();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCards();
}

document.querySelector(".btn__next").addEventListener("click", showNext);
document.querySelector(".btn__prev").addEventListener("click", showPrev);

updateCards();


/**--------------------------------------------- */

let cardsTwo = document.getElementsByClassName("card__two");

transformsTwo = [
  { x: 0, z: 0, scale: 1, filter: "blur(0px)" },
  { x: "-93%", z: "-50px", scale: 0.8, filter: "blur(2.5px)" },
  { x: "93%", z: "-50px", scale: 0.8, filter: "blur(2.5px)" },
];

let nextTransformTwo = function (x) {
  if (x >= cardsTwo.length - 1) {
    x = 0;
  } else {
    x++;
  }
  return x;
};

function nextTwo() {
  for (i = 0; i < cardsTwo.length; i++) {
    cardsTwo[i].style.transform =
      "translateX(" +
      transformsTwo[nextTransformTwo(i)].x +
      ")" +
      "translateZ(" +
      transformsTwo[nextTransformTwo(i)].z +
      ")" +
      "scale(" +
      transformsTwo[nextTransformTwo(i)].scale +
      ")";
    cardsTwo[i].style.filter = transformsTwo[nextTransformTwo(i)].filter;
  }
  transformsTwo.push(transformsTwo.shift());
}

document.getElementById("carousel__two").onclick = function () {
  nextTwo();
};

let currentIndexTwo = 0;

function updateCardsTwo() {
  for (let i = 0; i < cardsTwo.length; i++) {
    cardsTwo[i].style.transform =
      "translateX(" +
      transformsTwo[(i + currentIndexTwo) % cardsTwo.length].x +
      ")" +
      "translateZ(" +
      transformsTwo[(i + currentIndexTwo) % cardsTwo.length].z +
      ")" +
      "scale(" +
      transformsTwo[(i + currentIndexTwo) % cardsTwo.length].scale +
      ")";
    cardsTwo[i].style.filter =
      transformsTwo[(i + currentIndexTwo) % cardsTwo.length].filter;
  }
}

function showNextTwo() {
  currentIndexTwo = (currentIndexTwo + 1) % cardsTwo.length;
  updateCardsTwo();
}

function showPrevTwo() {
  currentIndexTwo = (currentIndexTwo - 1 + cardsTwo.length) % cardsTwo.length;
  updateCardsTwo();
}

document.querySelector(".btn__next-two").addEventListener("click", showNextTwo);
document.querySelector(".btn__prev-two").addEventListener("click", showPrevTwo);

updateCardsTwo();