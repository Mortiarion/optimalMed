const burgerMenu = document.querySelector(".btn__burger");
const navigationBurger = document.querySelector(".navigation__burger");
const btnClose = document.querySelector(".btn__close");

burgerMenu.addEventListener("click", function () {
    navigationBurger.classList.toggle("active");
});

btnClose.addEventListener("click", function () {
    navigationBurger.classList.remove("active");
})