const overlay = document.querySelector(".overlay");
const dropdownSpeciality = document.querySelector(".dropdown-speciality");
const dropdownList = document.querySelector(".dropdown-list");
const closeDropdown = document.querySelector(".close-dropdown");

const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");

const openOverlay = () => {
    if (!overlay.classList.contains("active-overlay")) {
        overlay.classList.add("active-overlay");
        disabledOrAnablesSroll();
    }
};

const closeOverlay = () => {
    if (overlay.classList.contains("active-overlay")) {
        overlay.classList.remove("active-overlay");
        disabledOrAnablesSroll();
    }
};

const openPopup = () => {
    if (!popup.classList.contains("active-popup")) {
        popup.classList.add("active-popup");
        openOverlay();
    }
};

const closePopup = () => {
    if (popup.classList.contains("active-popup")) {
        popup.classList.remove("active-popup");
        closeOverlay();
    }
};

const disabledOrAnablesSroll = () => {
    document.body.classList.toggle("no-scroll-drop-popup");
};

const openDropSpecialality = () => {
    if (!dropdownList.classList.contains("active-dropdown-list")) {
        dropdownList.classList.add("active-dropdown-list");
        openOverlay();
    }
};

const closeDropSpeciality = () => {
    if (dropdownList.classList.contains("active-dropdown-list")) {
        dropdownList.classList.remove("active-dropdown-list");
        closeOverlay();
    }
};

document.addEventListener("click", (event) => {
    const isOverlay = event.target === overlay;

    if (isOverlay) {
        if (popup.classList.contains("active-popup")) {
            closePopup();
            closeOverlay();
        }

        if (dropdownList.classList.contains("active-dropdown-list")) {
            closeDropSpeciality();
        }
    }
});

/**--------------------------------------------- */

const checkBoxContainers = document.querySelectorAll(".checkbox-container");
const selectedItems = [];

const clearCheckbox = () => {
    checkBoxContainers.forEach((container) => {
        const checkBox = container.querySelector("input[type='checkbox']");
        checkBox.checked = false;
    });
    selectedItems.length = 0;
    updateSelectedCount();
};

checkBoxContainers.forEach((container) => {
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

const selectedButton = () => {
    const overlay = document.querySelector(".overlay");

    dropdownList.classList.remove("active-dropdown-list");
    overlay.classList.remove("active-overlay");

    if (document.body.classList.contains("no-scroll-drop-popup")) {
        disabledOrAnablesSroll();
    }
    updateSelectedCount();
};

const updateSelectedCount = () => {
    const count = selectedItems.length;
    let selectedText = `выбрано ${count} специализаций`;
    if (count === 0) {
        selectedText = "";
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

const navigationBurger = document.querySelector(".navigation__burger");
const openBurgerMenu = () => {
    navigationBurger.classList.add("active");
    document.body.classList.add("no-scroll-drop-popup");
};

const closeBurgerMenu = () => {
    const navigationBurger = document.querySelector(".navigation__burger");

    navigationBurger.classList.remove("active");
    document.body.classList.remove("no-scroll-drop-popup");
};

const burgerItemList = navigationBurger.querySelectorAll(".navigation__item");

burgerItemList.forEach((item) => {
    item.addEventListener("click", () => {
        navigationBurger.classList.remove("active");
        document.body.classList.remove("no-scroll-drop-popup");
    });
});

/**--------------------------------------------- */

const navigateToSection = function (event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("href");

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
};

/**--------------------------------------------- */

function downloadFile(filePath, fileName) {
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", filePath);
    downloadLink.setAttribute("download", fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

/**--------------------------------------------- */

const togglePopupFilterSmall = () => {
    const popupSmall = document.querySelector(
        ".dropdown-speciality-small-popup"
    );
    const filter = document.querySelector(".dropdown-speciality-small-filter");
    const input = filter.querySelector('input[type="text"]');
    const labels = filter.querySelectorAll(".checkbox-container-filter");
    filter.classList.toggle("open-popup-small");

    filter.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", (event) => {
        if (!popupSmall.contains(event.target)) {
            filter.classList.remove("open-popup-small");
        }
    });

    input.addEventListener("input", function () {
        const searchText = input.value.trim().toLowerCase();

        labels.forEach(function (label) {
            const labelText = label.textContent.trim().toLowerCase();

            if (labelText.startsWith(searchText)) {
                label.style.display = "flex";
            } else {
                label.style.display = "none";
            }
        });
    });

    function updateSelectedCountPopup() {
        let selectedCount = 0;

        labels.forEach(function (label) {
            const checkbox = label.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                selectedCount++;
            }
        });

        let numberSelected = document.querySelector(
            ".number-selected-small-filter"
        );
        numberSelected.textContent = `вибрано ${selectedCount}`;
        if (selectedCount === 0) {
            numberSelected.textContent = "";
        }
    }

    labels.forEach(function (label) {
        const checkbox = label.querySelector('input[type="checkbox"]');
        checkbox.addEventListener("change", updateSelectedCountPopup);
    });
};

/**--------------------------------------------- */

const toggleDropdownSpecialitySmallFilterMain = () => {
    const dropdownSpecialitySmall = document.querySelector(
        ".dropdown-speciality-small"
    );

    const dropdownSpecialitySmallFilterMain = document.querySelector(
        ".dropdown-speciality-small-filter-main"
    );
    const input =
        dropdownSpecialitySmallFilterMain.querySelector('input[type="text"]');
    const labels = dropdownSpecialitySmallFilterMain.querySelectorAll(
        ".checkbox-container-filter"
    );

    dropdownSpecialitySmallFilterMain.classList.toggle("filter-main-open");
    dropdownSpecialitySmallFilterMain.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", (event) => {
        if (!dropdownSpecialitySmall.contains(event.target)) {
            dropdownSpecialitySmallFilterMain.classList.remove(
                "filter-main-open"
            );
        }
    });

    input.addEventListener("input", function () {
        const input =
            dropdownSpecialitySmallFilterMain.querySelector(
                'input[type="text"]'
            );
        const labels = dropdownSpecialitySmallFilterMain.querySelectorAll(
            ".checkbox-container-filter"
        );
        const searchText = input.value.trim().toLowerCase();

        labels.forEach(function (label) {
            const labelText = label.textContent.trim().toLowerCase();

            if (labelText.startsWith(searchText)) {
                label.style.display = "flex";
            } else {
                label.style.display = "none";
            }
        });
    });

    function updateSelectedCountSmallFilterMain() {
        let selectedCount = 0;

        labels.forEach(function (label) {
            const checkbox = label.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                selectedCount++;
            }
        });

        let numberSelected = document.querySelector(".number-selected-small");
        numberSelected.textContent = `вибрано ${selectedCount}`;
        if (selectedCount === 0) {
            numberSelected.textContent = "";
        }
    }

    labels.forEach(function (label) {
        const checkbox = label.querySelector('input[type="checkbox"]');
        checkbox.addEventListener("change", updateSelectedCountSmallFilterMain);
    });
};

/**--------------------------------------------- */

// const validationMain = () => {
//     function validation(form) {
//         function removeError(input) {
//             const parent = input.parentNode;

//             if (parent.classList.contains("error")) {
//                 parent.querySelector(".error-label").remove();
//                 parent.classList.remove("error");
//             }
//         }

//         function createError(input, text) {
//             const parent = input.parentNode;
//             const errorLabel = document.createElement("label");

//             errorLabel.classList.add("error-label");
//             errorLabel.textContent = text;
//             parent.classList.add("error");

//             parent.append(errorLabel);
//         }

//         let result = true;

//         const allInputs = form.querySelectorAll("input");

//         for (const input of allInputs) {
//             removeError(input);

//             if (input.dataset.required === "letter") {
//                 if (input.value === "") {
//                     createError(input);
//                     result = false;
//                 }
//             }

//             if (input.dataset.required === "number") {
//                 if (!input.value.match(/^(?:\+380|0)?\d{9}$/)) {
//                     createError(input);
//                     result = false;
//                 }
//             }

//             if (input.dataset.required === "email") {
//                 if (!input.value.match(/^\S+@\S+\.\S+$/)) {
//                     createError(input);
//                     result = false;
//                 }
//             }

//             if (input.dataset.required === "select") {
//                 const numberSelected =
//                     document.querySelector(".number-selected");

//                 if (numberSelected.textContent === "") {
//                     createError(input);
//                     result = false;
//                 }
//             }
//             if (input.dataset.required === "select-small") {
//                 const numberSelected = document.querySelector(
//                     ".number-selected-small"
//                 );

//                 if (numberSelected.textContent === "") {
//                     createError(input);
//                     result = false;
//                 }
//             }

//             if (!result) {
//                 const firstErrorInput =
//                     form.querySelector(".error-label").previousElementSibling;
//                 firstErrorInput.focus();
//             }
//         }

//         return result;
//     }
//     document
//         .querySelector(".main__form")
//         .addEventListener("submit", function (event) {
//             event.preventDefault();

//             if (validation(this) == true) {
//                 alert("Форма провірена успішно!");

//                 return false;
//             }
//         });
// };

/**--------------------------------------------- */

function validation(form) {
    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains("error")) {
            parent.querySelector(".error-label").remove();
            parent.classList.remove("error");
        }
    }

    function createError(input) {
        const parent = input.parentNode;
        const errorLabel = document.createElement("label");

        errorLabel.classList.add("error-label");
        parent.classList.add("error");

        parent.append(errorLabel);
    }

    let result = true;

    const allInputs = form.querySelectorAll("input");

    for (const input of allInputs) {
        removeError(input);

        if (input.dataset.required === "letter") {
            if (input.value === "") {
                createError(input);
                result = false;
            }
        }

        if (input.dataset.required === "number") {
            if (!input.value.match(/^(?:\+380|0)?\d{9}$/)) {
                createError(input);
                result = false;
            }
        }

        if (input.dataset.required === "email") {
            if (!input.value.match(/^\S+@\S+\.\S+$/)) {
                createError(input);
                result = false;
            }
        }

        let container = document.querySelector(".container");
        if (input.dataset.required === "select") {
            const numberSelected = document.querySelector(".number-selected");
            if (container.offsetWidth >= 320 && container.offsetWidth <= 1024) {
                if (window.getComputedStyle(input).display === "none") {
                    continue;
                }
            }

            if (numberSelected.textContent === "") {
                createError(input);
                result = false;
            }
        }
        if (input.dataset.required === "select-small") {
            const numberSelected = document.querySelector(
                ".number-selected-small"
            );

            if (
                container.offsetWidth >= 1024 &&
                container.offsetWidth <= 1440
            ) {
                if (window.getComputedStyle(input).display === "none") {
                    continue;
                }
            }

            if (numberSelected.textContent === "") {
                createError(input);
                result = false;
            }
        }

        if (!result) {
            const firstErrorInput =
                form.querySelector(".error-label").previousElementSibling;
            firstErrorInput.focus();
        }
    }

    return result;
}

function validationMain() {
    document
        .getElementById("main-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            if (validation(this) == true) {
                alert("Форма провірена успішно!");

                this.reset();

                if (
                    (numberSelected =
                        document.querySelector(".number-selected"))
                ) {
                    numberSelected.textContent = "";
                }

                if (
                    (numberSelected = document.querySelector(
                        ".number-selected-small"
                    ))
                ) {
                    numberSelected.textContent = "";
                }
                const allFormPopupBox =
                    this.querySelectorAll(".form-popup-box");
                allFormPopupBox.forEach((box) => {
                    if (box.classList.contains("error")) {
                        box.classList.remove("error");
                    }
                });
                return false;
            }
        });
}

/**--------------------------------------------- */

function validationFormPopup(form) {
    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains("error")) {
            parent.querySelector(".error-label").remove();
            parent.classList.remove("error");
        }
    }

    function createError(input) {
        const parent = input.parentNode;
        const errorLabel = document.createElement("label");

        errorLabel.classList.add("error-label");
        parent.classList.add("error");

        parent.append(errorLabel);
    }

    let result = true;

    const allInputs = form.querySelectorAll("input");

    for (const input of allInputs) {
        removeError(input);

        if (input.dataset.required === "letter") {
            if (input.value === "") {
                createError(input);
                result = false;
            }
        }

        if (input.dataset.required === "number") {
            if (!input.value.match(/^(?:\+380|0)?\d{9}$/)) {
                createError(input);
                result = false;
            }
        }

        if (input.dataset.required === "email") {
            if (!input.value.match(/^\S+@\S+\.\S+$/)) {
                createError(input);
                result = false;
            }
        }

        if (input.dataset.required === "select") {
            const numberSelected = document.querySelector(
                ".number-selected-small-filter"
            );

            if (numberSelected.textContent === "") {
                createError(input);
                result = false;
            }
        }

        if (!result) {
            const firstErrorInput =
                form.querySelector(".error-label").previousElementSibling;
            firstErrorInput.focus();
        }
    }

    return result;
}

function validationPopup() {
    document
        .querySelector(".popup-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            if (validationFormPopup(this) == true) {
                alert("Форма проверена успешно!");

                if (
                    (numberSelected = document.querySelector(
                        ".number-selected-small-filter"
                    ))
                ) {
                    numberSelected.textContent = "";
                }

                const allCheckBoxes = this.querySelectorAll(
                    "input[type='checkbox']"
                );
                allCheckBoxes.forEach((checkbox) => {
                    checkbox.checked = false;
                });

                const allFormPopupBox =
                    this.querySelectorAll(".form-popup-box");
                allFormPopupBox.forEach((box) => {
                    if (box.classList.contains("error")) {
                        box.classList.remove("error");
                    }
                });
                // this.reset();

                return false;
            }
        });
}
/**--------------------------------------------- */

const languageMenu = document.querySelector(".language__menu");
const dropdownLanguage = document.querySelector(".dropdown-language");
const buttonLanguageMenu = document.querySelector(".open-language-menu");

const openLanguageMenu = (event) => {
    const dropdownLanguage = event.target.nextElementSibling;
    dropdownLanguage.classList.toggle("language-menu-active");
};

const closeLanguageMenu = () => {
    dropdownLanguage.classList.remove("language-menu-active");
};

document.addEventListener("click", (event) => {
    const dropdownLanguages = document.querySelectorAll(".dropdown-language");
    dropdownLanguages.forEach((dropdownLanguage) => {
        if (!dropdownLanguage.parentElement.contains(event.target)) {
            dropdownLanguage.classList.remove("language-menu-active");
        }
    });
});

/**--------------------------------------------- */
