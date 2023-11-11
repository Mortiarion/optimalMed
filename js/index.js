const burgerMenu = document.querySelector(".btn__burger");
const navigationBurger = document.querySelector(".navigation__burger");
const btnClose = document.querySelector(".btn__close");

burgerMenu.addEventListener("click", function () {
    navigationBurger.classList.toggle("active");
});

btnClose.addEventListener("click", function () {
    navigationBurger.classList.remove("active");
});


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 90,
    depth: 100,
    modifier: 6,
    slideShadows: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1560: {
      slidesPerView: 2,
    },
  },
});

let cards = document.getElementsByClassName("card"),
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

var currentIndex = 0;

function updateCards() {
  for (var i = 0; i < cards.length; i++) {
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