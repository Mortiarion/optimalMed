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

// let cards = document.getElementsByClassName("card");
//   transforms = [
//     { x: 0, z: 0, scale: 1, filter: "blur(0px)" },
//     { x: "-105%", z: "-50px", scale: 0.999, filter: "blur(2.5px)" },
//     { x: "105%", z: "-50px", scale: 0.999, filter: "blur(2.5px)" },
//   ];

// let nextTransform = function (x) {
//   if (x >= cards.length - 1) {
//     x = 0;
//   } else {
//     x++;
//   }
//   return x;
// };

// function next() {
//   for (i = 0; i < cards.length; i++) {
//     cards[i].style.transform =
//       "translateX(" +
//       transforms[nextTransform(i)].x +
//       ")" +
//       "translateZ(" +
//       transforms[nextTransform(i)].z +
//       ")" +
//       "scale(" +
//       transforms[nextTransform(i)].scale +
//       ")";
//     cards[i].style.filter = transforms[nextTransform(i)].filter;
//   }
//   transforms.push(transforms.shift());
// }

// document.getElementById("carousel").onclick = function () {
//   next();
// };

// let currentIndex = 0;

// function updateCards() {
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].style.transform =
//       "translateX(" +
//       transforms[(i + currentIndex) % cards.length].x +
//       ")" +
//       "translateZ(" +
//       transforms[(i + currentIndex) % cards.length].z +
//       ")" +
//       "scale(" +
//       transforms[(i + currentIndex) % cards.length].scale +
//       ")";
//     cards[i].style.filter =
//       transforms[(i + currentIndex) % cards.length].filter;
//   }
// }

// function showNext() {
//   currentIndex = (currentIndex + 1) % cards.length;
//   updateCards();
// }

// function showPrev() {
//   currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//   updateCards();
// }

// document.querySelector(".btn__next").addEventListener("click", showNext);
// document.querySelector(".btn__prev").addEventListener("click", showPrev);

// updateCards();


/**--------------------------------------------- */

// let cardsTwo = document.getElementsByClassName("card__two");

// transformsTwo = [
//   { x: 0, z: 0, scale: 1, filter: "blur(0px)" },
//   { x: "-93%", z: "-50px", scale: 0.8, filter: "blur(2.5px)" },
//   { x: "93%", z: "-50px", scale: 0.8, filter: "blur(2.5px)" },
// ];

// let nextTransformTwo = function (x) {
//   if (x >= cardsTwo.length - 1) {
//     x = 0;
//   } else {
//     x++;
//   }
//   return x;
// };

// function nextTwo() {
//   for (i = 0; i < cardsTwo.length; i++) {
//     cardsTwo[i].style.transform =
//       "translateX(" +
//       transformsTwo[nextTransformTwo(i)].x +
//       ")" +
//       "translateZ(" +
//       transformsTwo[nextTransformTwo(i)].z +
//       ")" +
//       "scale(" +
//       transformsTwo[nextTransformTwo(i)].scale +
//       ")";
//     cardsTwo[i].style.filter = transformsTwo[nextTransformTwo(i)].filter;
//   }
//   transformsTwo.push(transformsTwo.shift());
// }

// document.getElementById("carousel__two").onclick = function () {
//   nextTwo();
// };

// let currentIndexTwo = 0;

// function updateCardsTwo() {
//   for (let i = 0; i < cardsTwo.length; i++) {
//     cardsTwo[i].style.transform =
//       "translateX(" +
//       transformsTwo[(i + currentIndexTwo) % cardsTwo.length].x +
//       ")" +
//       "translateZ(" +
//       transformsTwo[(i + currentIndexTwo) % cardsTwo.length].z +
//       ")" +
//       "scale(" +
//       transformsTwo[(i + currentIndexTwo) % cardsTwo.length].scale +
//       ")";
//     cardsTwo[i].style.filter =
//       transformsTwo[(i + currentIndexTwo) % cardsTwo.length].filter;
//   }
// }

// function showNextTwo() {
//   currentIndexTwo = (currentIndexTwo + 1) % cardsTwo.length;
//   updateCardsTwo();
// }

// function showPrevTwo() {
//   currentIndexTwo = (currentIndexTwo - 1 + cardsTwo.length) % cardsTwo.length;
//   updateCardsTwo();
// }

// document.querySelector(".btn__next-two").addEventListener("click", showNextTwo);
// document.querySelector(".btn__prev-two").addEventListener("click", showPrevTwo);

// updateCardsTwo();

/**--------------------------------------------- */

// const swiper = new Swiper(".swiper", {
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 1,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

/**--------------------------------------------- */

const swiperTwo = new Swiper(".swiper-two", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

/**--------------------------------------------- */

let x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      let y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  let x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

/**--------------------------------------------- */
// Отримання всіх посилань навігаційного меню
const menuLinks = document.querySelectorAll(
    ".navigation__item a"
);
// console.log(menuLinks);

// Функція, що обробляє клік на посиланні
const navigateToSection = (e) => {
  e.preventDefault(); // Заборона стандартної дії посилання

  // Отримання атрибута href для навігаційного посилання
  const targetId = e.target.getAttribute("href");
  console.log(targetId);

  // Перехід до відповідної секції
  const targetSection = document.querySelector(targetId);
  // console.log(targetSection);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Плавний скролл до секції
  }
};

// Додавання обробника подій до кожного посилання навігації
menuLinks.forEach((link) => {
  link.addEventListener('click', navigateToSection);
});
// console.log(link);
