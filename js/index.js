const burgerMenu = document.querySelector(".btn__burger");
const navigationBurger = document.querySelector(".navigation__burger");
const btnClose = document.querySelector(".btn__close");

burgerMenu.addEventListener("click", function () {
    navigationBurger.classList.toggle("active");
});

btnClose.addEventListener("click", function () {
    navigationBurger.classList.remove("active");
});


const slidesContainer = document.querySelector(".slides");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = 2;
    }
    updateSlider();
});

function updateSlider() {
    const newTransformValue = `translateX(-${currentIndex * 100}vw)`;
        slidesContainer.style.transform = newTransformValue;
};

