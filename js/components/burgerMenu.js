const burgerMenu = document.querySelector(".btn__burger");
const navigationBurger = document.querySelector(".navigation__burger");
const btnClose = document.querySelector(".btn__close");
const burgerItemList = navigationBurger.querySelectorAll(".navigation__item");

const closeMenu = () => {
    navigationBurger.classList.remove("active");
    document.body.classList.remove("no-scroll-drop-popup");
};

btnClose.addEventListener("click", closeMenu);

const openMenu = () => {
    navigationBurger.classList.add("active");
    document.body.classList.add("no-scroll-drop-popup");
};

burgerMenu.addEventListener("click", openMenu);

burgerItemList.forEach((item) => {
    item.addEventListener("click", closeMenu);
});

navigationBurger.addEventListener("click", closeMenu);
