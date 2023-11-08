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
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1560: {
      slidesPerView: 3,
    },
  },
});
