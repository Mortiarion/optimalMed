// import "./components/customSelect.js";
import "./components/burgerMenu.js";
import "./components/navigationToSection.js";
import "./components/formValidation.js";
import "./components/drop-small-filter.js";
import "./components/drop-small-filter-main.js";


const overlay = document.querySelector(".overlay");
const dropdownSpeciality = document.querySelector(".dropdown-speciality");
const dropdownList = document.querySelector(".dropdown-list");
const closeDropdown = document.querySelector(".close-dropdown");
const openPopup = document.querySelectorAll(".open-popup");
// console.log(openPopup);

const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");

const toggleOverlay = () => {
    overlay.classList.toggle("active-overlay");
    // disabledOrAnablesSroll();
};

const toggleDropdownList = () => {
    dropdownList.classList.toggle("active-dropdown-list");
    disabledOrAnablesSroll();
};

const togglePopup = () => {
    popup.classList.toggle("active-popup");
    // disabledOrAnablesSroll();
};

openPopup.forEach((element) => {
    element.addEventListener("click", () => {
        // console.log(element);
        // const isElement = event.target === element;
        // console.log(isElement);
        togglePopup();
        toggleOverlay();
        disabledOrAnablesSroll();
        // if (isElement) {
        // }
    });
});

const disabledOrAnablesSroll = () => {
    document.body.classList.toggle("no-scroll-drop-popup");
};

// const enableScroll = () => {
//     document.body.classList.remove("");
// }
const dropdownSpecialitySmallFilter = document.querySelector(
    ".dropdown-speciality-small-filter"
);

document.addEventListener("click", (event) => {
    const isDropdownSpeciality = event.target === dropdownSpeciality;
    const isCloseDropdown = event.target === closeDropdown;
    const isOverlay = event.target === overlay;
    const isOpenPopup = event.target === openPopup;
    const isPopupClose = event.target === popupClose;
    

    if (isDropdownSpeciality) {
        toggleDropdownList();
        toggleOverlay();
    }

    if (isCloseDropdown) {
        toggleDropdownList();
        toggleOverlay();
    }

    if (isOverlay) {
        if (popup.classList.contains("active-popup")) {
            // toggleDropdownList();
            togglePopup();
            toggleOverlay();
            disabledOrAnablesSroll();
        }

        if (dropdownList.classList.contains("active-dropdown-list")) {
            toggleDropdownList();
            toggleOverlay();
        }
        // else if (!popup.classList.contains("active-popup")) {
        //     toggleOverlay();
        //     toggleDropdownList();

        // }
        // if (!dropdownList.classList.contains("active-dropdown-list")) {
        //     togglePopup();
        // }
    }

    if (isOpenPopup) {
        togglePopup();
    }

    if (isPopupClose) {
        togglePopup();
        toggleOverlay();
        disabledOrAnablesSroll();
    }

    // if (
    //     event.target.classList.contains("overlay") &&
    //     !event.target.classList.contains("popup")
    // ) {
    //     togglePopup();
    //     toggleOverlay();
    // }

});
/**--------------------------------------------- */

const checkBoxContainers = document.querySelectorAll(".checkbox-container");
const selectButton = document.getElementById("select-button");
const clearButton = document.getElementById("clear-btn");
const selectedItems = [];

clearButton.addEventListener("click", () => {
    checkBoxContainers.forEach((container) => {
        const checkBox = container.querySelector("input[type='checkbox']");
        checkBox.checked = false; // Скидання стану чекбокса
    });
    selectedItems.length = 0; // Очищення масиву вибраних елементів
    updateSelectedCount(); // Оновлення кількості вибраних елементів
});

checkBoxContainers.forEach((container) => {
    // console.log(container);
    const checkBox = container.querySelector("input[type='checkbox']");

    container.addEventListener("change", () => {
        if (checkBox.checked) {
            selectedItems.push(checkBox.value);
        } else {
            const index = selectedItems.indexOf(checkBox.value);
            if (index !== -1) {
                selectedItems.splice(index, 1);
            }
        }
        updateSelectedCount();
    });
});

selectButton.addEventListener("click", () => {
    // Отримання посилань на елементи dropdownList та overlay
    const dropdownList = document.querySelector(".dropdown-list");
    const overlay = document.querySelector(".overlay");

    dropdownList.classList.remove("active-dropdown-list");
    overlay.classList.remove("active-overlay");

    if (document.body.classList.contains("no-scroll-drop-popup")) {
        disabledOrAnablesSroll();
    }
    updateSelectedCount();
});

// Оголошення функції updateSelectedCount
const updateSelectedCount = () => {
    const count = selectedItems.length;
    let selectedText = `выбрано ${count} специализаций`;
    if (count === 0) {
        selectedText = ""; // робим пустим якщо кількість знову стає - 0 спеціалізацій
    }
    const selectedCountElement = document.querySelector(".number-selected");
    selectedCountElement.textContent = selectedText;
};

/**--------------------------------------------- */

window.onscroll = function () {
    stickyMenu();
};

const stickMenu = document.getElementById("sticky-menu");
const sticky = stickMenu.offsetTop;

function stickyMenu() {
    if (window.pageYOffset > sticky) {
        stickMenu.classList.add("sticky");
    } else {
        stickMenu.classList.remove("sticky");
    }
}

/**--------------------------------------------- */

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

// const swiperTwo = new Swiper(".swiper-two", {
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 1,
//   navigation: {
//     nextEl: ".next",
//     prevEl: ".prev",
//   },
// });

/**--------------------------------------------- */

// let x, i, j, l, ll, selElmnt, a, b, c;
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function (e) {
//       let y, i, k, s, h, sl, yl;
//       s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//       sl = s.length;
//       h = this.parentNode.previousSibling;
//       for (i = 0; i < sl; i++) {
//         if (s.options[i].innerHTML == this.innerHTML) {
//           s.selectedIndex = i;
//           h.innerHTML = this.innerHTML;
//           y = this.parentNode.getElementsByClassName("same-as-selected");
//           yl = y.length;
//           for (k = 0; k < yl; k++) {
//             y[k].removeAttribute("class");
//           }
//           this.setAttribute("class", "same-as-selected");
//           break;
//         }
//       }
//       h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function (e) {
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }

// function closeAllSelect(elmnt) {
//   let x,
//     y,
//     i,
//     xl,
//     yl,
//     arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i);
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// document.addEventListener("click", closeAllSelect);

/**--------------------------------------------- */

// const menuLinks = document.querySelectorAll(".navigation__item a");

// const navigateToSection = (e) => {
//   e.preventDefault();

//   const targetId = e.target.getAttribute("href");
//   console.log(targetId);

//   const targetSection = document.querySelector(targetId);
//   if (targetSection) {
//     targetSection.scrollIntoView({ behavior: 'smooth' });
//   }
// };

// menuLinks.forEach((link) => {
//   link.addEventListener('click', navigateToSection);
// });

/**--------------------------------------------- */

// const checkboxContainer = document.querySelectorAll(".checkbox-container");
// const selectedSpecializations = document.querySelector(
//     ".selected-specializations"
// );
// console.log(checkboxContainer);

// checkboxContainer.forEach((item) => {
//     item.addEventListener("click", () => {
//         const innerContent = item.textContent.trim();
//         // console.log(innerContent);
//         const isChecked = item.classList.contains("checked");
//         // console.log(isSelected);
//         if (!isChecked) {
//             selectedSpecializations.textContent += innerContent + " ";
//             item.classList.toggle("checked");
//         } else {
//             selectedSpecializations.textContent =
//                 selectedSpecializations.textContent.replace(
//                     innerContent + " ",
//                     ""
//                 );
//             item.classList.toggle("checked");
//         }
//     });
// });

// const checkedItems = [];

// checkboxContainer.forEach((item) => {
//     item.addEventListener("click", () => {
//         const innerContent = item.textContent;
//         console.log(checkedItems.includes(innerContent));

//         if (checkedItems.includes(innerContent)) {
//             checkedItems.splice(checkedItems.indexOf(innerContent), 1);
//         } else {
//             checkedItems.push(innerContent);
//         }

//         selectedSpecializations.textContent = checkedItems.join(", ");
//     });
// });

/**--------------------------------------------- */

// const checkboxContainers = document.querySelectorAll(".checkbox-container");
// const selectedSpecializations = document.querySelector(
//     ".selected-specializations"
// );
// const selectButton = document.getElementById("selectButton");

// const selectedItems = [];

// checkboxContainers.forEach((container) => {
//     const checkbox = container.querySelector('input[type="checkbox"]');
//     const text = container.textContent.trim();

//     container.addEventListener("click", () => {
//         checkbox.checked = !checkbox.checked; // Інвертуємо значення прапорця при кожному кліку на контейнер

//         if (checkbox.checked) {
//             if (!selectedItems.includes(text)) {
//                 selectedItems.push(text);
//             }
//         } else {
//             const index = selectedItems.indexOf(text);
//             if (index !== -1) {
//                 selectedItems.splice(index, 1);
//             }
//         }

//         selectedSpecializations.textContent = selectedItems.join(", ");
//     });
// });

// selectButton.addEventListener("click", () => {
//     // Очищаємо вибрані елементи
//     selectedItems.length = 0;
//     selectedSpecializations.textContent = "";

//     // Знімаємо прапорці
//     checkboxContainers.forEach((container) => {
//         const checkbox = container.querySelector('input[type="checkbox"]');
//         checkbox.checked = false;
//     });
// });
/**--------------------------------------------- */
// document.addEventListener("DOMContentLoaded", function () {
//     const checkboxContainers = document.querySelectorAll(".checkbox-container");
//     const selectedSpecializations = document.querySelector(
//         ".selected-specializations"
//     );
//     const selectButton = document.getElementById("selectButton");

//     const selectedItems = [];

//     checkboxContainers.forEach((container) => {
//         const checkbox = container.querySelector('input[type="checkbox"]');
//         const text = container.textContent.trim();

//         container.addEventListener("click", () => {
//             checkbox.checked = !checkbox.checked; // Інвертуємо значення прапорця при кожному кліку на контейнер

//             if (checkbox.checked) {
//                 if (!selectedItems.includes(text)) {
//                     selectedItems.push(text);
//                     const span = document.createElement("span");
//                     span.classList.add("checked-element");
//                     span.textContent = text;

//                     const closeBtn = document.createElement("span");
//                     closeBtn.classList.add("close-btn");
//                     closeBtn.innerHTML = "&#10006;";

//                     span.appendChild(closeBtn);
//                     selectedSpecializations.appendChild(span);
//                     if (closeBtn) {
//                         closeBtn.addEventListener("click", () => {
//                             // Очищаємо вибрані елементи
//                             selectedItems.length = 0;
//                             selectedSpecializations.textContent = "";

//                             // Знімаємо прапорці
//                             checkboxContainers.forEach((container) => {
//                                 const checkbox = container.querySelector(
//                                     'input[type="checkbox"]'
//                                 );
//                                 checkbox.checked = false;
//                             });
//                         });
//                     }
//                 }
//             } else {
//                 const index = selectedItems.indexOf(text);
//                 if (index !== -1) {
//                     selectedItems.splice(index, 1);
//                     const spans =
//                         selectedSpecializations.querySelectorAll(
//                             ".checked-element"
//                         );
//                     spans.forEach((span) => {
//                         if (span.textContent === text) {
//                             span.remove();
//                         }
//                     });
//                 }
//             }
//         });
//     });

//     selectButton.addEventListener("click", () => {
//         // Очищаємо вибрані елементи
//         selectedItems.length = 0;
//         selectedSpecializations.textContent = "";

//         // Знімаємо прапорці
//         checkboxContainers.forEach((container) => {
//             const checkbox = container.querySelector('input[type="checkbox"]');
//             checkbox.checked = false;
//         });
//     });
// });

/**--------------------------------------------- */

// document.addEventListener("DOMContentLoaded", function () {
//     const checkboxContainers = document.querySelectorAll(".checkbox-container");
//     const selectedSpecializations = document.querySelector(
//         ".selected-specializations"
//     );
//     const selectButton = document.getElementById("selectButton");

//     const selectedItems = [];

//     checkboxContainers.forEach((container) => {
//         const checkbox = container.querySelector('input[type="checkbox"]');
//         const text = container.textContent.trim();

//         container.addEventListener("click", () => {
//             checkbox.checked = !checkbox.checked;

//             if (checkbox.checked) {
//                 if (!selectedItems.includes(text)) {
//                     selectedItems.push(text);
//                     const span = document.createElement("span");
//                     span.classList.add("checked-element");
//                     span.textContent = text;

//                     const closeBtn = document.createElement("span");
//                     closeBtn.classList.add("close-btn");
//                     closeBtn.innerHTML = "&#10006;";
//                     span.appendChild(closeBtn);

//                     selectedSpecializations.appendChild(span);
//                 }
//             } else {
//                 const index = selectedItems.indexOf(text);
//                 if (index !== -1) {
//                     selectedItems.splice(index, 1);
//                     const spans =
//                         selectedSpecializations.querySelectorAll(
//                             ".checked-element"
//                         );
//                     spans.forEach((span) => {
//                         if (span.textContent === text) {
//                             span.remove();
//                         }
//                     });
//                 }
//             }
//         });

//         // Видаляємо елемент при кліку на хрестик
//         selectedSpecializations.addEventListener("click", (event) => {
//             if (event.target.classList.contains("close-btn")) {
//                 const span = event.target.parentElement;
//                 const specializationText = span.textContent;
//                 const index = selectedItems.indexOf(specializationText);
//                 if (index !== -1) {
//                     selectedItems.splice(index, 1);
//                 }
//                 span.remove();

//                 // Знайти відповідний чекбокс та скасувати опцію "checked"
//                 checkboxContainers.forEach((container) => {
//                     if (container.textContent.trim() === specializationText) {
//                         const checkbox = container.querySelector(
//                             'input[type="checkbox"]'
//                         );
//                         checkbox.checked = false;
//                     }
//                 });
//             }
//         });
//     });

//     selectButton.addEventListener("click", () => {
//         selectedItems.length = 0;
//         selectedSpecializations.textContent = "";

//         checkboxContainers.forEach((container) => {
//             const checkbox = container.querySelector('input[type="checkbox"]');
//             checkbox.checked = false;
//         });
//     });
// });

/**--------------------------------------------- */

// // отримуєм доступ до елементів які нам потрібні в подальшому
// const checkBoxContainers = document.querySelectorAll(".checkbox-container");
// const selectedSpecializations = document.querySelector(
//     ".selected-specializations"
// );
// const selectButton = document.getElementById("select-button");
// const selectedItems = [];
// console.log(selectedItems)

// // forEach ми використувуєм щоб пребрати весь список доступ них елементом
// checkBoxContainers.forEach((container) => {
//     // console.log(container)
//     const checkBox = container.querySelector("input[type='checkbox']"); // знаходим чекбокс в контейнерах
//     const text = container.textContent.trim(); // знаходим текст і видаляєм пробіли щоб не листати кілометрове полотно
// // console.log(text);

//     container.addEventListener("change", () => { // прослуховувач подій на зміну стану. на майбутнє в випадках селекта чекбокса або радіо кнопок. ато замахався понімати чого не робили з cklick
//         if (checkBox.checked) { // провірка чи чекбоес активний
//             if (!selectedItems.includes(text)) { // Якщо чекбокс відзначений і текст ще не знаходиться серед обраних елементів
//                 selectedItems.push(text); // Додаємо текст до масиву обраних елементів
// console.log(selectedItems);

//                 // const span = document.createElement("span"); // створення елементу куди будем поміщати дані і далі кнопку видалення
//                 // span.classList.add("checked-element");
//                 // span.textContent = text;
//                 // span.dataset.value = text; // Додаємо атрибут зі значенням для пошуку

//                 // const deleteBtn = document.createElement("button"); // це та кнопка виделення
//                 // deleteBtn.classList.add("delete-btn");
//                 // deleteBtn.innerHTML = "&#10006";

//                 // span.appendChild(deleteBtn);

//                 // selectedSpecializations.appendChild(span);
//             }
//         } else {
//             // якщо чекбокс занятий
//             const index = selectedItems.indexOf(text);
//             // console.log(index);
//             if (index !== -1) {
//                 selectedItems.splice(index, 1); // видаляєм текст з масиву обраних елементів

//                 // Знаходимо вибраний елемент у відображенні вибраних спеціалізацій та видаляємо його
//                 const spanToRemove = selectedSpecializations.querySelector(
//                     `span[data-value="${text}"]`
//                 );
//                 console.log(spanToRemove);
//                 if (spanToRemove) {
//                     spanToRemove.remove();
//                 }
//             }
//         }
//         updateSelectedCount();
//     });

//     // selectedSpecializations.addEventListener("click", (event) => {
//     //     if (event.target.classList.contains("delete-btn")) {
//     //         const span = event.target.parentElement;
//     //         // console.log(span);
//     //         const specializationText = span.getAttribute("data-value");
//     //         // console.log(specializationText);
//     //         const index = selectedItems.indexOf(specializationText);
//     //         if (index !== -1) {
//     //             selectedItems.splice(index, 1);
//     //         }
//     //         span.remove();

//     //         // Знайти відповідний чекбокс та скасувати опцію "checked"
//     //         checkBoxContainers.forEach((container) => {
//     //             const checkBox = container.querySelector(
//     //                 "input[type='checkbox']"
//     //             );
//     //         });
//     //         if (container.textContent.trim() === specializationText) {
//     //             checkBox.checked = false;
//     //         }
//     //         updateSelectedCount();
//     //     }
//     // });

//     selectButton.addEventListener("click", () => {
//         // selectedItems.length = 0;
//         // selectedSpecializations.textContent = "";

//         // checkBoxContainers.forEach((container) => {
//         //     const checkBox = container.querySelector("input[type='checkbox']");
//         //     checkBox.checked = false;
//         // });
//         // console.log(selectButton);

//         dropdownList.classList.remove("active-dropdown-list");
//         overlay.classList.remove("active-overlay");
//         // disabledOrAnablesSroll();
//         // document.body.classList.remove("no-sroll-drop-popup")
//         if (document.body.classList.contains("no-scroll-drop-popup")) {
//             disabledOrAnablesSroll();
//         }
//             updateSelectedCount();
//     });
// });

// const updateSelectedCount = () => {
//     const count = selectedItems.length;
//     let selectedText = `выбрано ${count} специализаций`;
//     // if (selectedText === "") {
//     //     selectedText.textContent = "";
//     // }
//     if (count === 0) {
//         selectedText = ""; // робим пустим якщо кількість знову стає - 0 спеціалізацій
//     }
//     // Ваш елемент, де ви хочете відображати кількість вибраних елементів
//     const selectedCountElement = document.querySelector(".number-selected");
//     selectedCountElement.textContent = selectedText;
//     // disabledOrAnablesSroll();
// }

/**--------------------------------------------- */

// document.addEventListener("DOMContentLoaded", function () {
//     const checkboxContainers = document.querySelectorAll(".checkbox-container");
//     const selectedSpecializations = document.querySelector(
//         ".selected-specializations"
//     );
//     const selectButton = document.getElementById("selectButton");

//     const selectedItems = [];

//     checkboxContainers.forEach((container) => {
//         const checkbox = container.querySelector('input[type="checkbox"]');
//         const text = container.textContent.trim();

//         container.addEventListener("change", () => {
//             if (checkbox.checked) {
//                 if (!selectedItems.includes(text)) {
//                     selectedItems.push(text);
//                     const span = document.createElement("span");
//                     span.classList.add("checked-element");
//                     span.textContent = text;
//                     span.dataset.value = text; // Додали атрибут зі значенням для пошуку

//                     const closeBtn = document.createElement("span");
//                     closeBtn.classList.add("close-btn");
//                     closeBtn.innerHTML = "&#10006;";
//                     span.appendChild(closeBtn);

//                     selectedSpecializations.appendChild(span);
//                 }
//             } else {
//                 const index = selectedItems.indexOf(text);
//                 if (index !== -1) {
//                     selectedItems.splice(index, 1);
//                     const spanToRemove = selectedSpecializations.querySelector(
//                         `span[data-value="${text}"]`
//                     );
//                     if (spanToRemove) {
//                         spanToRemove.remove();
//                     }
//                 }
//             }
//         });

//         // Видалення елемента при кліку на хрестик
//         selectedSpecializations.addEventListener("click", (event) => {
//             if (event.target.classList.contains("close-btn")) {
//                 const span = event.target.parentElement;
//                 const specializationText = span.getAttribute("data-value");
//                 const index = selectedItems.indexOf(specializationText);
//                 if (index !== -1) {
//                     selectedItems.splice(index, 1);
//                 }
//                 span.remove();

//                 // Знайти відповідний чекбокс та скасувати опцію "checked"
//                 checkboxContainers.forEach((container) => {
//                     const checkbox = container.querySelector(
//                         'input[type="checkbox"]'
//                     );
//                     if (container.textContent.trim() === specializationText) {
//                         checkbox.checked = false;
//                     }
//                 });
//             }
//         });
//     });

//     selectButton.addEventListener("click", () => {
//         selectedItems.length = 0;
//         selectedSpecializations.textContent = "";

//         checkboxContainers.forEach((container) => {
//             const checkbox = container.querySelector('input[type="checkbox"]');
//             checkbox.checked = false;
//         });
//     });
// });

/**--------------------------------------------- */
