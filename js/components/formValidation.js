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

const inputPhone = document.querySelector("input[type='phone']");

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
