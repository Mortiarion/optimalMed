// отримуєм доступ до елементів які нам потрібні в подальшому
const checkBoxContainers = document.querySelectorAll(".checkbox-container");
const selectedSpecializations = document.querySelector(
    ".selected-specializations"
);
const selectButton = document.getElementById("select-button");
const selectedItems = [];
console.log(selectedItems);

// forEach ми використувуєм щоб пребрати весь список доступ них елементом
checkBoxContainers.forEach((container) => {
    // console.log(container)
    const checkBox = container.querySelector("input[type='checkbox']"); // знаходим чекбокс в контейнерах
    const text = container.textContent.trim(); // знаходим текст і видаляєм пробіли щоб не листати кілометрове полотно
    // console.log(text);

    container.addEventListener("change", () => {
        // прослуховувач подій на зміну стану. на майбутнє в випадках селекта чекбокса або радіо кнопок. ато замахався понімати чого не робили з cklick
        if (checkBox.checked) {
            // провірка чи чекбоес активний
            if (!selectedItems.includes(text)) {
                // Якщо чекбокс відзначений і текст ще не знаходиться серед обраних елементів
                selectedItems.push(text); // Додаємо текст до масиву обраних елементів
                console.log(selectedItems);

                // const span = document.createElement("span"); // створення елементу куди будем поміщати дані і далі кнопку видалення
                // span.classList.add("checked-element");
                // span.textContent = text;
                // span.dataset.value = text; // Додаємо атрибут зі значенням для пошуку

                // const deleteBtn = document.createElement("button"); // це та кнопка виделення
                // deleteBtn.classList.add("delete-btn");
                // deleteBtn.innerHTML = "&#10006";

                // span.appendChild(deleteBtn);

                // selectedSpecializations.appendChild(span);
            }
        } else {
            // якщо чекбокс занятий
            const index = selectedItems.indexOf(text);
            // console.log(index);
            if (index !== -1) {
                selectedItems.splice(index, 1); // видаляєм текст з масиву обраних елементів

                // Знаходимо вибраний елемент у відображенні вибраних спеціалізацій та видаляємо його
                const spanToRemove = selectedSpecializations.querySelector(
                    `span[data-value="${text}"]`
                );
                console.log(spanToRemove);
                if (spanToRemove) {
                    spanToRemove.remove();
                }
            }
        }
        updateSelectedCount();
    });

    // selectedSpecializations.addEventListener("click", (event) => {
    //     if (event.target.classList.contains("delete-btn")) {
    //         const span = event.target.parentElement;
    //         // console.log(span);
    //         const specializationText = span.getAttribute("data-value");
    //         // console.log(specializationText);
    //         const index = selectedItems.indexOf(specializationText);
    //         if (index !== -1) {
    //             selectedItems.splice(index, 1);
    //         }
    //         span.remove();

    //         // Знайти відповідний чекбокс та скасувати опцію "checked"
    //         checkBoxContainers.forEach((container) => {
    //             const checkBox = container.querySelector(
    //                 "input[type='checkbox']"
    //             );
    //         });
    //         if (container.textContent.trim() === specializationText) {
    //             checkBox.checked = false;
    //         }
    //         updateSelectedCount();
    //     }
    // });

    selectButton.addEventListener("click", () => {
        // selectedItems.length = 0;
        // selectedSpecializations.textContent = "";

        // checkBoxContainers.forEach((container) => {
        //     const checkBox = container.querySelector("input[type='checkbox']");
        //     checkBox.checked = false;
        // });
        // console.log(selectButton);

        dropdownList.classList.remove("active-dropdown-list");
        overlay.classList.remove("active-overlay");
        // disabledOrAnablesSroll();
        // document.body.classList.remove("no-sroll-drop-popup")
        if (document.body.classList.contains("no-scroll-drop-popup")) {
            disabledOrAnablesSroll();
        }
        updateSelectedCount();
    });
});

const updateSelectedCount = () => {
    const count = selectedItems.length;
    let selectedText = `выбрано ${count} специализаций`;
    // if (selectedText === "") {
    //     selectedText.textContent = "";
    // }
    if (count === 0) {
        selectedText = ""; // робим пустим якщо кількість знову стає - 0 спеціалізацій
    }
    // Ваш елемент, де ви хочете відображати кількість вибраних елементів
    const selectedCountElement = document.querySelector(".number-selected");
    selectedCountElement.textContent = selectedText;
    // disabledOrAnablesSroll();
};










    // Отримуємо посилання на елементи DOM
    var popup = document.querySelector('.dropdown-speciality-small-popup');
    var filter = document.querySelector('.dropdown-speciality-small-filter');
    var input = filter.querySelector('input[type="text"]');
    var labels = filter.querySelectorAll('.checkbox-container-filter');

    // Додаємо подію кліку на popup
    popup.addEventListener('click', function() {
        filter.classList.toggle('show'); // Перемикаємо клас show, який показує або приховує filter
    });

    // Додаємо подію вводу тексту в input
    input.addEventListener('input', function() {
        var searchText = input.value.trim().toLowerCase(); // Отримуємо введений текст, видаляємо пробіли на початку і в кінці, і перетворюємо його на нижній регістр

        labels.forEach(function(label) {
            var labelText = label.textContent.trim().toLowerCase(); // Отримуємо текст label, видаляємо пробіли на початку і в кінці, і перетворюємо його на нижній регістр

            // Перевіряємо, чи містить labelText введений текст. Якщо так, показуємо label, інакше ховаємо.
            if (labelText.includes(searchText)) {
                label.style.display = 'block';
            } else {
                label.style.display = 'none';
            }
        });
    });















































    const inputText = document.querySelector("input[type='text");

inputText.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    const regex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/;

    if (!regex.test(inputValue)) {
        inputText.classList.remove("valid");
        inputText.classList.add("invalid");
    } else {
        inputText.classList.remove("invalid");
        inputText.classList.add("valid");
    }
});

const inputPhone = document.querySelector("input[type='tel']");

inputPhone.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    const regex = /^\d+$/;

    if (!regex.test(inputValue)) {
        inputPhone.classList.remove("valid");
        inputPhone.classList.add("invalid");
    } else {
        inputPhone.classList.remove("invalid");
        inputPhone.classList.add("valid");
    }
});

const inputEmail = document.querySelector("input[type='email']");

inputEmail.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(inputValue)) {
        inputEmail.classList.remove("invalid");
        inputEmail.classList.add("valid");
    } else {
        inputEmail.classList.remove("invalid");
        inputEmail.classList.add("valid");
    }
});

const numberSelected = document.querySelector(".number-selected");
const dropdownSpeciality = document.querySelector(".dropdown-speciality");

// dropdownSpeciality.addEventListener("click", () => {
//     if (numberSelected && numberSelected.textContent.trim() !== "") {
//         dropdownSpeciality.classList.remove("invalid");
//         dropdownSpeciality.classList.add("valid");
//     } else {
//         dropdownSpeciality.classList.remove("invalid");
//         dropdownSpeciality.classList.add("valid");
//         dropdownSpeciality.focus();
//     }
// });

const form = document.querySelector(".main__form");
const formButton = document.querySelector(".form-btn");

form.addEventListener("submit", function (event) {
    disabledOrAnablesSroll();
    let isValid = true;

    const regexText = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/;
    const regexPhone = /^\d+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexText.test(inputText.value.trim())) {
        inputText.classList.add("invalid");
        isValid = false;
    } else {
        inputText.classList.remove("invalid");
    }

    if (!regexPhone.test(inputPhone.value.trim())) {
        inputPhone.classList.add("invalid");
        isValid = false;
    } else {
        inputPhone.classList.remove("invalid");
    }

    if (!emailPattern.test(inputEmail.value.trim())) {
        inputEmail.classList.add("invalid");
        isValid = false;
    } else {
        inputEmail.classList.remove("invalid");
    }

    // if (isValid) {
    //     dropdownSpeciality.classList.remove("invalid");
    //     dropdownSpeciality.classList.add("valid");
    // } else {
    //     dropdownSpeciality.classList.remove("valid");
    //     dropdownSpeciality.classList.add("invalid");
    // }

    // const numberSelected = document.querySelector(".number-selected");
    // const dropdownSpeciality = document.querySelector(".dropdown-speciality");

    // numberSelected.addEventListener("click", () => {
    //     if (numberSelected && numberSelected.textContent.trim() !== "") {
    //         dropdownSpeciality.classList.remove("invalid");
    //         dropdownSpeciality.classList.add("valid");
    //     } else {
    //         dropdownSpeciality.classList.remove("invalid");
    //         dropdownSpeciality.classList.add("valid");
    //     }
    // });

    if (numberSelected.textContent.trim() === "") {
        dropdownSpeciality.classList.add("invalid");
        isValid = false;
    } else {
        dropdownSpeciality.classList.remove("invalid");
    }

    // let errorMessage = document.querySelector(".error-message");
    // let isErrorMessageShown = false;

    if (!isValid) {
        event.preventDefault();
        const invalidFields = document.querySelectorAll(".invalid");
        invalidFields[0].focus();

        // if (!isErrorMessageShown) {
        //     if (!errorMessage) {
        //         errorMessage = document.createElement("div");
        //         errorMessage.classList.add("error-message");
        //         errorMessage.textContent = "Выберите специализацию";
        //         dropdownSpeciality.appendChild(errorMessage);
        //     }

        //     isErrorMessageShown = true;

        //     errorMessage.timerId = setTimeout(() => {
        //         errorMessage.remove();
        //         isErrorMessageShown = false;
        //     }, 3000);
        // }
    }
});

// const inputText = document.querySelector("input[type='text']");
// const inputPhone = document.querySelector("input[type='phone']");
// const inputEmail = document.querySelector("input[type='email']");
// const form = document.querySelector(".main__form");
// const formButton = document.querySelector(".form-btn");
// const specializationSelect = document.getElementById("specialization");
// const specializationTooltip = document.getElementById("specializationTooltip");

// inputText.addEventListener("input", validateInput);
// inputPhone.addEventListener("input", validateInput);
// inputEmail.addEventListener("input", validateInput);

// form.addEventListener("submit", validateForm);

// function validateInput(event) {
//     const inputValue = event.target.value.trim();
//     const inputType = event.target.getAttribute("type");
//     const regexText = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/;
//     const regexPhone = /^\d+$/;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     let isValid = true;

//     switch (inputType) {
//         case "text":
//             isValid = regexText.test(inputValue);
//             break;
//         case "tel":
//             isValid = regexPhone.test(inputValue);
//             break;
//         case "email":
//             isValid = emailPattern.test(inputValue);
//             break;
//         default:
//             break;
//     }

//     if (isValid) {
//         event.target.classList.remove("invalid");
//         event.target.classList.add("valid");
//     } else {
//         event.target.classList.remove("valid");
//         event.target.classList.add("invalid");
//     }
// }

// function validateForm(event) {
//     let isFormValid = true;

//     const formInputs = [inputText, inputPhone, inputEmail];
//     formInputs.forEach((input) => {
//         validateInput({ target: input });

//         if (input.classList.contains("invalid")) {
//             isFormValid = false;
//         }
//     });

//     if (specializationSelect.value === "0") {
//         event.preventDefault();
//         specializationTooltip.style.display = "block";

//         setTimeout(() => {
//             specializationTooltip.style.display = "none";
//         }, 3000);
//     }

//     if (!isFormValid) {
//         event.preventDefault();
//         const invalidFields = document.querySelectorAll(".invalid");
//         invalidFields[0].focus();
//         alert("Будь ласка, заповніть всі поля коректно.");
//     } else {
//         // Якщо всі поля валідні та відправлення відбулося успішно, очистити поля
//         form.reset();
//     }
// }
