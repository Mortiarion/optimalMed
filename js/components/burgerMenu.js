const burgerMenu = document.querySelector(".btn__burger");
const navigationBurger = document.querySelector(".navigation__burger");
const btnClose = document.querySelector(".btn__close");

burgerMenu.addEventListener("click", function () {
    navigationBurger.classList.add("active");
    // document.body.classList.add("no-scroll-drop-popup");
});

btnClose.addEventListener("click", function () {
    navigationBurger.classList.remove("active");
    // document.body.classList.remove("no-scroll-drop-popup");
});
