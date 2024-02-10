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
    const clearButton = document.getElementById("clear-btn");
    clearButton.addEventListener("click", () => {
        checkBoxContainers.forEach((container) => {
            const checkBox = container.querySelector("input[type='checkbox']");
            checkBox.checked = false;
        });
        selectedItems.length = 0;
        updateSelectedCount();
    });
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
    const selectButton = document.getElementById("select-button");

    selectButton.addEventListener("click", () => {
        const dropdownList = document.querySelector(".dropdown-list");
        const overlay = document.querySelector(".overlay");

        dropdownList.classList.remove("active-dropdown-list");
        overlay.classList.remove("active-overlay");

        if (document.body.classList.contains("no-scroll-drop-popup")) {
            disabledOrAnablesSroll();
        }
        updateSelectedCount();
    });
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

const openBurgerMenu = () => {
    const navigationBurger = document.querySelector(".navigation__burger");

    navigationBurger.classList.add("active");
    document.body.classList.add("no-scroll-drop-popup");
};

const closeBurgerMenu = () => {
    const navigationBurger = document.querySelector(".navigation__burger");

    navigationBurger.classList.remove("active");
    document.body.classList.remove("no-scroll-drop-popup");
};
const navigationBurger = document.querySelector(".navigation__burger");

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
const validationMain = () => {
    function validation(form) {
        function removeError(input) {
            const parent = input.parentNode;

            if (parent.classList.contains("error")) {
                parent.querySelector(".error-label").remove();
                parent.classList.remove("error");
            }
        }

        function createError(input, text) {
            const parent = input.parentNode;
            const errorLabel = document.createElement("label");

            errorLabel.classList.add("error-label");
            errorLabel.textContent = text;
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
                const numberSelected =
                    document.querySelector(".number-selected");

                if (numberSelected.textContent === "") {
                    createError(input);
                    result = false;
                }
            }
            if (input.dataset.required === "select-small") {
                const numberSelected = document.querySelector(
                    ".number-selected-small"
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
    document
        .querySelector(".main__form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            if (validation(this) == true) {
                alert("Форма провірена успішно!");

                return false;
            }
        });
};

/**--------------------------------------------- */
const validationPopup = () => {
    function validationFormPopup(form) {
        function removeError(input) {
            const parent = input.parentNode;

            if (parent.classList.contains("error")) {
                parent.querySelector(".error-label").remove();
                parent.classList.remove("error");
            }
        }

        function createError(input, text) {
            const parent = input.parentNode;
            const errorLabel = document.createElement("label");

            errorLabel.classList.add("error-label");
            errorLabel.textContent = text;
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
                if (!input.value.match(/^\d{10}$/)) {
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

    document
        .querySelector(".popup-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            if (validationFormPopup(this) == true) {
                alert("Форма проверена успешно!");

                return false;
            }
        });
};

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

// const renderArticleHtmlPagas = () => {
//     const template = "<div><h2>{{title}}</h2><p>{{content}}</p></div>";

//     const data = {
//         title: "Уролог в Польщі",
//         content: "Польща",
//     };

//     function render(template, data) {
//         return template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
//             return data[key] || "";
//         });
//     }

//     const result = render(template, data);
//     console.log(result);

//     const targetElement = document.querySelector("body");
//     targetElement.innerHTML = result;

//     // Відкриваємо нове вікно зі сторінкою
//     // const newWindow = window.open("", "_blank");
//     // newWindow.document.write(result);
// }

const template = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet">
    <meta name="description" content="Вакансії для лікарів у Польщі. Приватні та державні лікарні, найбільший вибір робочих місць. Отримайте унікальну пропозицію початку роботи та план кар'єри на 5 років з нострифікацією диплома.">
    <meta name="keywords" content="лікарі, вакансії, Польща, нострифікація, медичні спеціалісти">
    <meta name="robots" content="index, follow">
    <meta name="author" content="https://t.me/Mood_Panda">
    <title>{{title}}</title>
</head>
<body>
    <div class="wrapper">
        <header class="header header__article">
            <div class="container article__container">
                <nav class="navigation" id="sticky-menu">
                    <a class="logo" href="index.html">
                        {{logo}}
                    </a>
                    <ul class="navigation__list">
                        <li class="navigation__item"><a href="index.html#why">О нас</a></li>
                        <li class="navigation__item"><a href="index.html#requierements">Требования</a></li>
                        <li class="navigation__item"><a href="index.html#scheme">Схема нашего сотрудничества</a></li>
                        <li class="navigation__item"><a href="index.html#doctor-salary">Заработки</a></li>
                    </ul>
                    <a class="tell" href="tel:+48512058549">+48 512 058 549</a>
                    <a class="email" href="mailto:biuro@optimuswork.pl">biuro&#64;optimuswork.pl</a>
                    <div class="language__menu">
                        <button class="open-language-menu" onclick="openLanguageMenu(event)">Ru</button>
                        <ul class="dropdown-language">
                            <li><a href="#">Ru</a></li>
                            <li><a href="#">Ua</a></li>
                        </ul>
                    </div>
                    <button class="btn__burger" onclick="openBurgerMenu()">
                        {{openBurgerButton}}
                    </button>
                    <div class="navigation__burger">
                        <div class="list__head">
                            <a href="#" class="list__logo">
                                <svg width="178" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 14.415h8.381a.04.04 0 00.038-.026l3.95-10.27a.04.04 0 01.076.004l4.736 17.762c.01.04.066.04.077 0L23.19 8.52a.04.04 0 01.076-.004l2.35 5.874a.04.04 0 00.037.025h5.578" stroke="#461DBA" stroke-width="3" stroke-linecap="round"/>
                                    <path d="M48.37 22.24c-.912 0-1.744-.168-2.496-.504a6.44 6.44 0 01-1.968-1.416 6.48 6.48 0 01-1.272-2.064 6.778 6.778 0 01-.456-2.472c0-.88.152-1.712.456-2.496a6.839 6.839 0 011.296-2.064 6.44 6.44 0 011.968-1.416 5.758 5.758 0 012.472-.528c.896 0 1.72.176 2.472.528a6.077 6.077 0 011.968 1.416c.56.592.992 1.28 1.296 2.064.32.784.48 1.616.48 2.496 0 .864-.152 1.688-.456 2.472a6.268 6.268 0 01-1.296 2.064 6.077 6.077 0 01-1.968 1.416c-.752.336-1.584.504-2.496.504zm-4.536-6.432c0 .704.12 1.36.36 1.968.24.592.56 1.12.96 1.584.416.448.896.8 1.44 1.056.56.256 1.152.384 1.776.384.624 0 1.208-.128 1.752-.384a4.9 4.9 0 001.464-1.08 5.3 5.3 0 001.344-3.576c0-.688-.12-1.336-.36-1.944a4.938 4.938 0 00-.984-1.608 4.41 4.41 0 00-1.464-1.08 3.864 3.864 0 00-1.752-.408c-.624 0-1.208.136-1.752.408a4.486 4.486 0 00-1.44 1.08 5.23 5.23 0 00-.984 1.632 5.312 5.312 0 00-.36 1.968zM63.22 22.24c-1.056 0-1.992-.264-2.808-.792a6.568 6.568 0 01-1.944-2.04v7.704h-1.632V9.496H58.3v2.424a5.946 5.946 0 011.992-1.896 5.035 5.035 0 012.664-.744c.864 0 1.656.184 2.376.552a5.87 5.87 0 011.872 1.44c.528.592.936 1.28 1.224 2.064a6.65 6.65 0 01.456 2.424c0 .88-.136 1.712-.408 2.496A6.252 6.252 0 0167.3 20.32a5.57 5.57 0 01-1.8 1.416c-.688.336-1.448.504-2.28.504zm-.456-1.44c.672 0 1.28-.144 1.824-.432a4.463 4.463 0 001.416-1.128c.4-.48.704-1.016.912-1.608a5.745 5.745 0 00.312-1.872 5.3 5.3 0 00-1.344-3.528 4.633 4.633 0 00-1.488-1.104 4.119 4.119 0 00-1.824-.408c-.416 0-.856.088-1.32.264-.448.16-.872.384-1.272.672-.384.272-.72.6-1.008.984-.272.368-.44.76-.504 1.176v3.84c.192.448.432.864.72 1.248.304.384.64.72 1.008 1.008.384.272.792.488 1.224.648.432.16.88.24 1.344.24zm14.24.6a7.45 7.45 0 01-.432.192 6.46 6.46 0 01-.624.24c-.24.08-.512.152-.816.216a4.65 4.65 0 01-.96.096A3.49 3.49 0 0173.164 22a2.46 2.46 0 01-.84-.432 2.31 2.31 0 01-.576-.768 2.44 2.44 0 01-.216-1.056v-8.952h-1.728V9.496h1.728V5.272h1.632v4.224h2.88v1.296h-2.88v8.496c.032.464.192.808.48 1.032.304.208.648.312 1.032.312.464 0 .872-.072 1.224-.216.352-.16.576-.272.672-.336l.432 1.32zm1.56.6V9.496h1.631V22h-1.632zm0-15.12v-2.4h1.631v2.4h-1.632zM101.91 22h-1.632v-6.984c0-1.456-.232-2.528-.696-3.216-.464-.688-1.152-1.032-2.064-1.032-.48 0-.936.088-1.368.264a4.407 4.407 0 00-1.176.744c-.352.32-.664.704-.936 1.152-.272.432-.48.912-.624 1.44V22h-1.632v-6.984c0-1.488-.224-2.568-.672-3.24-.448-.672-1.136-1.008-2.064-1.008-.944 0-1.784.328-2.52.984-.736.656-1.264 1.52-1.584 2.592V22H83.31V9.496h1.488v2.832c.512-.96 1.184-1.704 2.016-2.232a4.938 4.938 0 012.76-.816c1.056 0 1.896.296 2.52.888.64.592 1.032 1.368 1.176 2.328 1.168-2.144 2.776-3.216 4.824-3.216.704 0 1.296.128 1.776.384.496.256.888.624 1.176 1.104.304.464.52 1.032.648 1.704.144.656.216 1.392.216 2.208V22zm6.118.24a4.678 4.678 0 01-1.656-.288 4.527 4.527 0 01-1.32-.84 3.868 3.868 0 01-.864-1.224 3.821 3.821 0 01-.312-1.536c0-.544.128-1.048.384-1.512a3.66 3.66 0 011.08-1.2 5.101 5.101 0 011.656-.768 7.327 7.327 0 012.112-.288c.64 0 1.288.056 1.944.168.656.112 1.24.272 1.752.48v-1.128c0-1.104-.312-1.976-.936-2.616-.624-.656-1.488-.984-2.592-.984-.64 0-1.296.128-1.968.384a9.491 9.491 0 00-2.04 1.104l-.576-1.08c1.616-1.088 3.184-1.632 4.704-1.632 1.568 0 2.8.44 3.696 1.32.896.88 1.344 2.096 1.344 3.648v5.64c0 .448.2.672.6.672V22a3.89 3.89 0 01-.624.072c-.416 0-.744-.104-.984-.312-.224-.208-.344-.496-.36-.864l-.048-.984a5.65 5.65 0 01-2.184 1.728c-.864.4-1.8.6-2.808.6zm.384-1.248c.848 0 1.624-.16 2.328-.48.72-.32 1.264-.744 1.632-1.272.144-.144.248-.296.312-.456.08-.176.12-.336.12-.48v-2.04a9.929 9.929 0 00-3.48-.648c-1.152 0-2.088.24-2.808.72-.72.48-1.08 1.112-1.08 1.896 0 .384.072.744.216 1.08.16.336.368.632.624.888.272.24.592.432.96.576.368.144.76.216 1.176.216zm9.143-16.512h1.632v14.688c0 .464.128.832.384 1.104.256.256.616.384 1.08.384a4.12 4.12 0 001.296-.264l.288 1.32c-.304.128-.68.232-1.128.312-.432.08-.808.12-1.128.12-.752 0-1.344-.208-1.776-.624-.432-.432-.648-1.032-.648-1.8V4.48z" fill="#461DBA"/>
                                    <path d="M147.029 22h-1.632v-6.984c0-1.456-.232-2.528-.696-3.216-.464-.688-1.152-1.032-2.064-1.032-.48 0-.936.088-1.368.264a4.407 4.407 0 00-1.176.744c-.352.32-.664.704-.936 1.152-.272.432-.48.912-.624 1.44V22h-1.632v-6.984c0-1.488-.224-2.568-.672-3.24-.448-.672-1.136-1.008-2.064-1.008-.944 0-1.784.328-2.52.984-.736.656-1.264 1.52-1.584 2.592V22h-1.632V9.496h1.488v2.832c.512-.96 1.184-1.704 2.016-2.232a4.938 4.938 0 012.76-.816c1.056 0 1.896.296 2.52.888.64.592 1.032 1.368 1.176 2.328 1.168-2.144 2.776-3.216 4.824-3.216.704 0 1.296.128 1.776.384.496.256.888.624 1.176 1.104.304.464.52 1.032.648 1.704.144.656.216 1.392.216 2.208V22zm8.374.24a6.218 6.218 0 01-2.52-.504 6.44 6.44 0 01-1.968-1.416c-.56-.608-1-1.304-1.32-2.088a6.91 6.91 0 01-.456-2.52c0-.88.152-1.704.456-2.472a6.532 6.532 0 011.296-2.04 6.045 6.045 0 011.992-1.392 5.918 5.918 0 012.496-.528c.912 0 1.744.176 2.496.528.768.336 1.424.8 1.968 1.392a6.59 6.59 0 011.728 4.488v.384a.966.966 0 01-.024.264h-10.704c.048.672.2 1.296.456 1.872.272.56.616 1.048 1.032 1.464.416.416.888.744 1.416.984a4.494 4.494 0 002.928.168c.4-.112.768-.264 1.104-.456.336-.192.64-.424.912-.696.272-.288.48-.6.624-.936l1.416.384a4.313 4.313 0 01-.816 1.272c-.352.368-.76.696-1.224.984-.464.272-.976.48-1.536.624-.56.16-1.144.24-1.752.24zm4.608-7.152a4.802 4.802 0 00-.48-1.824 4.662 4.662 0 00-1.008-1.44c-.4-.4-.872-.712-1.416-.936a4.317 4.317 0 00-1.704-.336 4.565 4.565 0 00-3.168 1.272c-.4.4-.728.88-.984 1.44a5.642 5.642 0 00-.432 1.824h9.192zm8.734 7.152a5.49 5.49 0 01-2.4-.528 6.268 6.268 0 01-1.896-1.44 6.79 6.79 0 01-1.248-2.04 7.044 7.044 0 01-.432-2.448c0-.88.144-1.712.432-2.496.288-.8.68-1.496 1.176-2.088a5.622 5.622 0 011.8-1.392 5.08 5.08 0 012.304-.528c1.056 0 1.992.28 2.808.84.816.544 1.456 1.208 1.92 1.992V4.48h1.632v15.408c0 .448.192.672.576.672V22c-.24.048-.432.072-.576.072-.384 0-.72-.12-1.008-.36-.288-.256-.432-.56-.432-.912v-1.224a5.468 5.468 0 01-2.016 1.944c-.848.48-1.728.72-2.64.72zm.36-1.44c.4 0 .824-.08 1.272-.24.464-.16.896-.376 1.296-.648.4-.288.736-.616 1.008-.984.288-.384.464-.792.528-1.224V13.84a4.123 4.123 0 00-.696-1.2 5.26 5.26 0 00-1.056-1.008 4.709 4.709 0 00-1.248-.672 3.909 3.909 0 00-1.32-.24c-.672 0-1.28.144-1.824.432a4.677 4.677 0 00-1.416 1.152c-.384.464-.68 1-.888 1.608a5.745 5.745 0 00-.312 1.872 5.3 5.3 0 001.344 3.528 4.9 4.9 0 001.464 1.08 4.274 4.274 0 001.848.408z" fill="#0FA4AE"/>
                                </svg>
                            </a>
                            <button class="btn__close" onclick="closeBurgerMenu()">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_659)">
                                    <path d="M11.2878 -1.45702C11.5132 -1.68244 11.8787 -1.68244 12.1042 -1.45702C12.3296 -1.23159 12.3296 -0.866112 12.1042 -0.640689L-0.140744 11.6042C-0.366167 11.8296 -0.731648 11.8296 -0.957071 11.6042C-1.18249 11.3788 -1.18249 11.0133 -0.957071 10.7879L11.2878 -1.45702Z" fill="#461DBA"/>
                                    <path d="M16.1858 3.44094C16.4112 3.21552 16.7767 3.21552 17.0021 3.44094C17.2275 3.66637 17.2275 4.03185 17.0021 4.25727L4.75721 16.5022C4.53179 16.7276 4.16631 16.7276 3.94089 16.5022C3.71547 16.2767 3.71547 15.9113 3.94089 15.6858L16.1858 3.44094Z" fill="#461DBA"/>
                                    <path d="M21.0837 8.3389C21.3092 8.11348 21.6747 8.11348 21.9001 8.3389C22.1255 8.56432 22.1255 8.92981 21.9001 9.15523L9.65517 21.4001C9.42975 21.6255 9.06427 21.6255 8.83885 21.4001C8.61343 21.1747 8.61343 20.8092 8.83885 20.5838L21.0837 8.3389Z" fill="#461DBA"/>
                                    <path d="M11.2878 -1.45702C11.5132 -1.68244 11.8787 -1.68244 12.1042 -1.45702C12.3296 -1.23159 12.3296 -0.866112 12.1042 -0.640689L-0.140744 11.6042C-0.366167 11.8296 -0.731648 11.8296 -0.957071 11.6042C-1.18249 11.3788 -1.18249 11.0133 -0.957071 10.7879L11.2878 -1.45702Z" stroke="#461DBA" stroke-width="2"/>
                                    <path d="M16.1858 3.44094C16.4112 3.21552 16.7767 3.21552 17.0021 3.44094C17.2275 3.66637 17.2275 4.03185 17.0021 4.25727L4.75721 16.5022C4.53179 16.7276 4.16631 16.7276 3.94089 16.5022C3.71547 16.2767 3.71547 15.9113 3.94089 15.6858L16.1858 3.44094Z" stroke="#461DBA" stroke-width="2"/>
                                    <path d="M21.0837 8.3389C21.3092 8.11348 21.6747 8.11348 21.9001 8.3389C22.1255 8.56432 22.1255 8.92981 21.9001 9.15523L9.65517 21.4001C9.42975 21.6255 9.06427 21.6255 8.83885 21.4001C8.61343 21.1747 8.61343 20.8092 8.83885 20.5838L21.0837 8.3389Z" stroke="#461DBA" stroke-width="2"/>
                                    </g>
                                    <g clip-path="url(#clip1_1_659)">
                                    <path d="M10.0637 -1.45702C9.83831 -1.68244 9.47283 -1.68244 9.24741 -1.45702C9.02199 -1.23159 9.02199 -0.866112 9.24741 -0.640689L21.4923 11.6042C21.7177 11.8296 22.0832 11.8296 22.3086 11.6042C22.5341 11.3788 22.5341 11.0133 22.3086 10.7879L10.0637 -1.45702Z" fill="#461DBA"/>
                                    <path d="M5.16578 3.44094C4.94035 3.21552 4.57487 3.21552 4.34945 3.44094C4.12403 3.66637 4.12403 4.03185 4.34945 4.25727L16.5943 16.5022C16.8198 16.7276 17.1853 16.7276 17.4107 16.5022C17.6361 16.2767 17.6361 15.9113 17.4107 15.6858L5.16578 3.44094Z" fill="#461DBA"/>
                                    <path d="M0.267817 8.3389C0.0423936 8.11348 -0.323088 8.11348 -0.54851 8.3389C-0.773932 8.56432 -0.773933 8.92981 -0.54851 9.15523L11.6964 21.4001C11.9218 21.6255 12.2873 21.6255 12.5127 21.4001C12.7381 21.1747 12.7381 20.8092 12.5127 20.5838L0.267817 8.3389Z" fill="#461DBA"/>
                                    <path d="M10.0637 -1.45702C9.83831 -1.68244 9.47283 -1.68244 9.24741 -1.45702C9.02199 -1.23159 9.02199 -0.866112 9.24741 -0.640689L21.4923 11.6042C21.7177 11.8296 22.0832 11.8296 22.3086 11.6042C22.5341 11.3788 22.5341 11.0133 22.3086 10.7879L10.0637 -1.45702Z" stroke="#461DBA" stroke-width="2"/>
                                    <path d="M5.16578 3.44094C4.94035 3.21552 4.57487 3.21552 4.34945 3.44094C4.12403 3.66637 4.12403 4.03185 4.34945 4.25727L16.5943 16.5022C16.8198 16.7276 17.1853 16.7276 17.4107 16.5022C17.6361 16.2767 17.6361 15.9113 17.4107 15.6858L5.16578 3.44094Z" stroke="#461DBA" stroke-width="2"/>
                                    <path d="M0.267817 8.3389C0.0423936 8.11348 -0.323088 8.11348 -0.54851 8.3389C-0.773932 8.56432 -0.773933 8.92981 -0.54851 9.15523L11.6964 21.4001C11.9218 21.6255 12.2873 21.6255 12.5127 21.4001C12.7381 21.1747 12.7381 20.8092 12.5127 20.5838L0.267817 8.3389Z" stroke="#461DBA" stroke-width="2"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1_659">
                                    <rect width="20.7803" height="7.50399" fill="white" transform="translate(0.675781 14.8696) rotate(-45)"/>
                                    </clipPath>
                                    <clipPath id="clip1_1_659">
                                    <rect width="20.7803" height="7.50399" fill="white" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 20.6758 14.8696)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <ul class="navigation__list">
                            <li class="navigation__item"><a href="index.html#why">О нас</a></li>
                            <li class="navigation__item"><a href="index.html#requierements">Требования</a></li>
                            <li class="navigation__item"><a href="index.html#scheme">Схема нашего сотрудничества</a></li>
                            <li class="navigation__item"><a href="index.html#doctor-salary">Заработки</a></li>
                        </ul>
                        <hr class="line">
                        <a class="tell" href="tel:+48512058549">+48 512 058 549</a>
                        <a class="email" href="mailto:biuro@optimuswork.pl">biuro&#64;optimuswork.pl</a>
                        <div class="language__menu">
                            <button class="open-language-menu" onclick="openLanguageMenu(event)">Ru</button>
                            <ul class="dropdown-language">
                                <li><a href="#">Ru</a></li>
                                <li><a href="#">Ua</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <main class="main">
            <div class="breadcrumbs">
                <div class="container article__breadcrumbs-container">
                    <div class="breadcrumbs__inner">
                        <ul class="breadcrumbs__list">
                            <li><a href="index.html">Головна</a></li>
                            <li><span>Как устроиться на работу урологом в Польше – условия и требования</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section class="article">
                <div class="container">
                    <div class="article__wrapper">
                        <div class="article__flex-box">
                            <div class="article__work-poland">
                                <span>
                                    Как устроиться на работу урологом
                                    <h2>
                                        в Польше – условия и требования<br>
                                    </h2>
                                </span> 
                                <p>
                                    Планируете отправиться на поиски работы урологом 
                                    в Польшу и не знаете, с чего начать? Обратитесь 
                                    в нашу компанию – подскажем, проконсультируем, 
                                    предложим несколько вакансий на выбор, поспособствуем 
                                    быстрому трудоустройству.
                                </p>
                                <p>
                                    Почему мы уверены, что вакансий будет несколько? Дело 
                                    в том, что сегодня в Польше наблюдается критический 
                                    недостаток компетентных врачей разных специализаций. 
                                    И специальность уролога – одна из наиболее дефицитных. 
                                    А значит, именно сегодня врачи из постсоветских стран, 
                                    особенно, Украины и Беларуси, получают уникальный шанс 
                                    изменить свою жизнь.
                                </p>
                                <div class="employment__wrapper">
                                    <div class="employment__content">
                                        <div class="employment__media">
                                        <span>
                                            Что должен делать врач-уролог
                                            <h2>
                                                в польском медицинском заведении?
                                            </h2>
                                        </span> 
                                        <p>
                                            Сферой деятельности уролога являются мужская и 
                                            женская мочеполовая система, а также почки, надпочечники 
                                            и предстательная железа. Профессиональный уролог:
                                        </p>
                                        <ul class="salary-list">
                                            <li>
                                                наблюдает пациентов, подбирает оптимальное консервативное 
                                                и хирургическое лечение согласно европейским протоколам;;
                                            </li>
                                            <li>
                                                проводит хирургические вмешательства и сопровождает 
                                                пациента в послеоперационном периоде;
                                            </li>
                                            <li>
                                                анализирует и оценивает результаты анализов;
                                            </li>
                                            <li>
                                                оказывает экстренную помощь;
                                            </li>
                                            <li>
                                                консультирует врачей других специальностей – андрологов, 
                                                гинекологов, эндокринологов, онкологов.
                                            </li>
                                        </ul>
                                        <p>
                                            Также должность уролога предусматривает ведение сопутствующей медицинской документации.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="image">
                <div class="container">
                    <div class="image__wrapper">
                        <img class="img-one salary-doctor" src="./img/Rectangle-638-urolog.png" alt="article-alerji">
                        <img class="img-two-none salary-doctor" src="./img/Rectangle-638-urolog.png" alt="article-alerji">
                        <img class="img-three-none salary-doctor" src="./img/Rectangle-638-urolog.png" alt="article-alerji">
                    </div>
                </div>
            </section>
            <section class="employment">
                <div class="container">
                    <div class="employment__wrapper">
                        <div class="employment__content">
                            <div class="employment__media">
                                <h3 class="employment__title">
                                    <span>Основные требования</span> 
                                    к урологу со стороны польских клиник
                                </h3>
                                <p>
                                    Стремление и задача любого работодателя – получение в штат 
                                    квалифицированного и ответственного специалиста. Кроме 
                                    того, нормы трудоустройства в сфере медицины регулируются 
                                    польским законодательством. Поэтому от претендентов на работу 
                                    врачом-урологом в Польше ожидают:
                                </p>
                                <ul>
                                    <li>
                                        наличия диплома о высшем образовании со специализацией «уролог». 
                                        Вопрос его нострификации в Польше встанет уже после того, как вы 
                                        начнете работать и получать зарплату;
                                    </li>
                                    <li>
                                        опыта работы по специальности – минимум 3 года в течение последних 5 лет. 
                                        Украинцы на сегодняшний день могут трудоустраиваться без соблюдения 
                                        данного пункта;
                                    </li>
                                    <li>
                                        знания польского языка на уровне, позволяющем свободно общаться с 
                                        коллегами и пациентами, изучать медицинскую литературу, вести 
                                        специализированную документацию;
                                    </li>
                                    <li>
                                        наличия разрешения и лицензии на осуществление врачебной деятельности;
                                    </li>
                                    <li>
                                        соответствующих личных качеств. В первую очередь, доктор должен уметь 
                                        коммуницировать с пациентами и коллегами, быть ответственным, 
                                        стремиться получать новый опыт и знания.
                                    </li>
                                </ul>
                                <p>
                                    Тем, кто соответствует перечисленным требованиям, предлагается высокая 
                                    заработная плата – от 7500 злотых брутто в месяц за стандартный восьмичасовой 
                                    рабочий день, доплаты и премии за качественную работу, переработки и дежурства, 
                                    социальные гарантии, помощь в поиске жилья и другие преференции.
                                </p>
                                <p>
                                    Заинтересовала возможность переехать в Польшу на работу урологом в современной 
                                    клинике на комфортных условиях? Свяжитесь с нашими консультантами – подскажем, 
                                    с чего начать и как пройти весь процесс без проблем и лишних усилий.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="footer">
			<div class="container">
                <div class="footer__wrapper">
                    <div class="footer__col-1">
                        <a class="logo" href="index.html">
                            <img src="./img/logo-footer.png" alt="logo-footer">
                        </a>
                        <p>
                            © 2022 Optimus Work Med
                        </p>
                    </div>
                    <div class="footer__col-2">
                        <ul>
                            <li><a href="index.html#why">О нас</a></li>
                            <li><a href="index.html#requierements">Требования</a></li>
                            <li><a href="index.html#scheme">Схема нашего сотрудничества</a></li>
                            <li><a href="index.html#doctor-salary">Заработки</a></li>
                        </ul>
                    </div>
                    <div class="footer__col-3">
                        <ul>
                            <li><a href="#">Информационная клаузула</a></li>
                            <li><a href="#">Согласия</a></li>
                            <li><a href="#">Список документов для подачи 1</a></li>
                            <li><a href="#">Список документов для подачи 2</a></li>
                            <li><a href="#">Список документов для подачи 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
		</footer>
    </div>
    <script src="./js/index.js"></script>
</body>
</html>
`;

const data = {
    title: "Уролог в Польщі",
    logo: `
            <svg width="178" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14.415h8.381a.04.04 0 00.038-.026l3.95-10.27a.04.04 0 01.076.004l4.736 17.762c.01.04.066.04.077 0L23.19 8.52a.04.04 0 01.076-.004l2.35 5.874a.04.04 0 00.037.025h5.578" stroke="#461DBA" stroke-width="3" stroke-linecap="round"/>
                <path d="M48.37 22.24c-.912 0-1.744-.168-2.496-.504a6.44 6.44 0 01-1.968-1.416 6.48 6.48 0 01-1.272-2.064 6.778 6.778 0 01-.456-2.472c0-.88.152-1.712.456-2.496a6.839 6.839 0 011.296-2.064 6.44 6.44 0 011.968-1.416 5.758 5.758 0 012.472-.528c.896 0 1.72.176 2.472.528a6.077 6.077 0 011.968 1.416c.56.592.992 1.28 1.296 2.064.32.784.48 1.616.48 2.496 0 .864-.152 1.688-.456 2.472a6.268 6.268 0 01-1.296 2.064 6.077 6.077 0 01-1.968 1.416c-.752.336-1.584.504-2.496.504zm-4.536-6.432c0 .704.12 1.36.36 1.968.24.592.56 1.12.96 1.584.416.448.896.8 1.44 1.056.56.256 1.152.384 1.776.384.624 0 1.208-.128 1.752-.384a4.9 4.9 0 001.464-1.08 5.3 5.3 0 001.344-3.576c0-.688-.12-1.336-.36-1.944a4.938 4.938 0 00-.984-1.608 4.41 4.41 0 00-1.464-1.08 3.864 3.864 0 00-1.752-.408c-.624 0-1.208.136-1.752.408a4.486 4.486 0 00-1.44 1.08 5.23 5.23 0 00-.984 1.632 5.312 5.312 0 00-.36 1.968zM63.22 22.24c-1.056 0-1.992-.264-2.808-.792a6.568 6.568 0 01-1.944-2.04v7.704h-1.632V9.496H58.3v2.424a5.946 5.946 0 011.992-1.896 5.035 5.035 0 012.664-.744c.864 0 1.656.184 2.376.552a5.87 5.87 0 011.872 1.44c.528.592.936 1.28 1.224 2.064a6.65 6.65 0 01.456 2.424c0 .88-.136 1.712-.408 2.496A6.252 6.252 0 0167.3 20.32a5.57 5.57 0 01-1.8 1.416c-.688.336-1.448.504-2.28.504zm-.456-1.44c.672 0 1.28-.144 1.824-.432a4.463 4.463 0 001.416-1.128c.4-.48.704-1.016.912-1.608a5.745 5.745 0 00.312-1.872 5.3 5.3 0 00-1.344-3.528 4.633 4.633 0 00-1.488-1.104 4.119 4.119 0 00-1.824-.408c-.416 0-.856.088-1.32.264-.448.16-.872.384-1.272.672-.384.272-.72.6-1.008.984-.272.368-.44.76-.504 1.176v3.84c.192.448.432.864.72 1.248.304.384.64.72 1.008 1.008.384.272.792.488 1.224.648.432.16.88.24 1.344.24zm14.24.6a7.45 7.45 0 01-.432.192 6.46 6.46 0 01-.624.24c-.24.08-.512.152-.816.216a4.65 4.65 0 01-.96.096A3.49 3.49 0 0173.164 22a2.46 2.46 0 01-.84-.432 2.31 2.31 0 01-.576-.768 2.44 2.44 0 01-.216-1.056v-8.952h-1.728V9.496h1.728V5.272h1.632v4.224h2.88v1.296h-2.88v8.496c.032.464.192.808.48 1.032.304.208.648.312 1.032.312.464 0 .872-.072 1.224-.216.352-.16.576-.272.672-.336l.432 1.32zm1.56.6V9.496h1.631V22h-1.632zm0-15.12v-2.4h1.631v2.4h-1.632zM101.91 22h-1.632v-6.984c0-1.456-.232-2.528-.696-3.216-.464-.688-1.152-1.032-2.064-1.032-.48 0-.936.088-1.368.264a4.407 4.407 0 00-1.176.744c-.352.32-.664.704-.936 1.152-.272.432-.48.912-.624 1.44V22h-1.632v-6.984c0-1.488-.224-2.568-.672-3.24-.448-.672-1.136-1.008-2.064-1.008-.944 0-1.784.328-2.52.984-.736.656-1.264 1.52-1.584 2.592V22H83.31V9.496h1.488v2.832c.512-.96 1.184-1.704 2.016-2.232a4.938 4.938 0 012.76-.816c1.056 0 1.896.296 2.52.888.64.592 1.032 1.368 1.176 2.328 1.168-2.144 2.776-3.216 4.824-3.216.704 0 1.296.128 1.776.384.496.256.888.624 1.176 1.104.304.464.52 1.032.648 1.704.144.656.216 1.392.216 2.208V22zm6.118.24a4.678 4.678 0 01-1.656-.288 4.527 4.527 0 01-1.32-.84 3.868 3.868 0 01-.864-1.224 3.821 3.821 0 01-.312-1.536c0-.544.128-1.048.384-1.512a3.66 3.66 0 011.08-1.2 5.101 5.101 0 011.656-.768 7.327 7.327 0 012.112-.288c.64 0 1.288.056 1.944.168.656.112 1.24.272 1.752.48v-1.128c0-1.104-.312-1.976-.936-2.616-.624-.656-1.488-.984-2.592-.984-.64 0-1.296.128-1.968.384a9.491 9.491 0 00-2.04 1.104l-.576-1.08c1.616-1.088 3.184-1.632 4.704-1.632 1.568 0 2.8.44 3.696 1.32.896.88 1.344 2.096 1.344 3.648v5.64c0 .448.2.672.6.672V22a3.89 3.89 0 01-.624.072c-.416 0-.744-.104-.984-.312-.224-.208-.344-.496-.36-.864l-.048-.984a5.65 5.65 0 01-2.184 1.728c-.864.4-1.8.6-2.808.6zm.384-1.248c.848 0 1.624-.16 2.328-.48.72-.32 1.264-.744 1.632-1.272.144-.144.248-.296.312-.456.08-.176.12-.336.12-.48v-2.04a9.929 9.929 0 00-3.48-.648c-1.152 0-2.088.24-2.808.72-.72.48-1.08 1.112-1.08 1.896 0 .384.072.744.216 1.08.16.336.368.632.624.888.272.24.592.432.96.576.368.144.76.216 1.176.216zm9.143-16.512h1.632v14.688c0 .464.128.832.384 1.104.256.256.616.384 1.08.384a4.12 4.12 0 001.296-.264l.288 1.32c-.304.128-.68.232-1.128.312-.432.08-.808.12-1.128.12-.752 0-1.344-.208-1.776-.624-.432-.432-.648-1.032-.648-1.8V4.48z" fill="#461DBA"/>
                <path d="M147.029 22h-1.632v-6.984c0-1.456-.232-2.528-.696-3.216-.464-.688-1.152-1.032-2.064-1.032-.48 0-.936.088-1.368.264a4.407 4.407 0 00-1.176.744c-.352.32-.664.704-.936 1.152-.272.432-.48.912-.624 1.44V22h-1.632v-6.984c0-1.488-.224-2.568-.672-3.24-.448-.672-1.136-1.008-2.064-1.008-.944 0-1.784.328-2.52.984-.736.656-1.264 1.52-1.584 2.592V22h-1.632V9.496h1.488v2.832c.512-.96 1.184-1.704 2.016-2.232a4.938 4.938 0 012.76-.816c1.056 0 1.896.296 2.52.888.64.592 1.032 1.368 1.176 2.328 1.168-2.144 2.776-3.216 4.824-3.216.704 0 1.296.128 1.776.384.496.256.888.624 1.176 1.104.304.464.52 1.032.648 1.704.144.656.216 1.392.216 2.208V22zm8.374.24a6.218 6.218 0 01-2.52-.504 6.44 6.44 0 01-1.968-1.416c-.56-.608-1-1.304-1.32-2.088a6.91 6.91 0 01-.456-2.52c0-.88.152-1.704.456-2.472a6.532 6.532 0 011.296-2.04 6.045 6.045 0 011.992-1.392 5.918 5.918 0 012.496-.528c.912 0 1.744.176 2.496.528.768.336 1.424.8 1.968 1.392a6.59 6.59 0 011.728 4.488v.384a.966.966 0 01-.024.264h-10.704c.048.672.2 1.296.456 1.872.272.56.616 1.048 1.032 1.464.416.416.888.744 1.416.984a4.494 4.494 0 002.928.168c.4-.112.768-.264 1.104-.456.336-.192.64-.424.912-.696.272-.288.48-.6.624-.936l1.416.384a4.313 4.313 0 01-.816 1.272c-.352.368-.76.696-1.224.984-.464.272-.976.48-1.536.624-.56.16-1.144.24-1.752.24zm4.608-7.152a4.802 4.802 0 00-.48-1.824 4.662 4.662 0 00-1.008-1.44c-.4-.4-.872-.712-1.416-.936a4.317 4.317 0 00-1.704-.336 4.565 4.565 0 00-3.168 1.272c-.4.4-.728.88-.984 1.44a5.642 5.642 0 00-.432 1.824h9.192zm8.734 7.152a5.49 5.49 0 01-2.4-.528 6.268 6.268 0 01-1.896-1.44 6.79 6.79 0 01-1.248-2.04 7.044 7.044 0 01-.432-2.448c0-.88.144-1.712.432-2.496.288-.8.68-1.496 1.176-2.088a5.622 5.622 0 011.8-1.392 5.08 5.08 0 012.304-.528c1.056 0 1.992.28 2.808.84.816.544 1.456 1.208 1.92 1.992V4.48h1.632v15.408c0 .448.192.672.576.672V22c-.24.048-.432.072-.576.072-.384 0-.72-.12-1.008-.36-.288-.256-.432-.56-.432-.912v-1.224a5.468 5.468 0 01-2.016 1.944c-.848.48-1.728.72-2.64.72zm.36-1.44c.4 0 .824-.08 1.272-.24.464-.16.896-.376 1.296-.648.4-.288.736-.616 1.008-.984.288-.384.464-.792.528-1.224V13.84a4.123 4.123 0 00-.696-1.2 5.26 5.26 0 00-1.056-1.008 4.709 4.709 0 00-1.248-.672 3.909 3.909 0 00-1.32-.24c-.672 0-1.28.144-1.824.432a4.677 4.677 0 00-1.416 1.152c-.384.464-.68 1-.888 1.608a5.745 5.745 0 00-.312 1.872 5.3 5.3 0 001.344 3.528 4.9 4.9 0 001.464 1.08 4.274 4.274 0 001.848.408z" fill="#0FA4AE"/>
            </svg>
        `,
    openBurgerButton: `
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                            <path d="M20.3846 1C20.7245 1 21 1.27552 21 1.61539C21 1.95525 20.7245 2.23077 20.3846 2.23077L1.61538 2.23077C1.27552 2.23077 1 1.95525 1 1.61538C1 1.27552 1.27552 1 1.61538 1L20.3846 1Z" fill="#461DBA"/>
                            <path d="M20.3846 8.38462C20.7245 8.38462 21 8.66013 21 9C21 9.33987 20.7245 9.61539 20.3846 9.61539H1.61538C1.27552 9.61539 1 9.33987 1 9C1 8.66013 1.27552 8.38461 1.61539 8.38461L20.3846 8.38462Z" fill="#461DBA"/>
                            <path d="M20.3846 15.7692C20.7245 15.7692 21 16.0447 21 16.3846C21 16.7245 20.7245 17 20.3846 17L1.61538 17C1.27552 17 1 16.7245 1 16.3846C1 16.0447 1.27552 15.7692 1.61538 15.7692L20.3846 15.7692Z" fill="#461DBA"/>
                            <path d="M20.3846 1C20.7245 1 21 1.27552 21 1.61539C21 1.95525 20.7245 2.23077 20.3846 2.23077L1.61538 2.23077C1.27552 2.23077 1 1.95525 1 1.61538C1 1.27552 1.27552 1 1.61538 1L20.3846 1Z" stroke="#461DBA" stroke-width="2"/>
                            <path d="M20.3846 8.38462C20.7245 8.38462 21 8.66013 21 9C21 9.33987 20.7245 9.61539 20.3846 9.61539H1.61538C1.27552 9.61539 1 9.33987 1 9C1 8.66013 1.27552 8.38461 1.61539 8.38461L20.3846 8.38462Z" stroke="#461DBA" stroke-width="2"/>
                            <path d="M20.3846 15.7692C20.7245 15.7692 21 16.0447 21 16.3846C21 16.7245 20.7245 17 20.3846 17L1.61538 17C1.27552 17 1 16.7245 1 16.3846C1 16.0447 1.27552 15.7692 1.61538 15.7692L20.3846 15.7692Z" stroke="#461DBA" stroke-width="2"/>
                        </svg>
                        `,
};

function render(template, data) {
    return template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
        return data[key] || "";
    });
}

const renderArticleHtmlPagas = () => {
    const result = render(template, data);
    console.log(result);

    const targetElement = document.querySelector("body");
    targetElement.innerHTML = result;
};

const clickableElement = document.getElementById("article-urologist");

clickableElement.addEventListener("click", () => {
    const newWindow = window.open("", "_blank");
    const result = render(template, data);
    newWindow.document.write(result);
});

// const loadDataFromJsonFile = async (filename) => {
//     try {
//         const response = await fetch(filename);
//         if (!response.ok) {
//             throw new Error("Failed to load data");
//         }
//         return await response.json();
//     } catch (error) {
//         console.error(error);
//     }
// };

// const renderArticleHtmlPagas = async () => {
//     const jsonData = await loadDataFromJsonFile(
//         "load-data-from-json-file/data.json"
//     );

//     const template = `
//         <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" type="text/css" href="./css/style.css">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet">
//     <meta name="description" content="Вакансії для лікарів у Польщі. Приватні та державні лікарні, найбільший вибір робочих місць. Отримайте унікальну пропозицію початку роботи та план кар'єри на 5 років з нострифікацією диплома.">
//     <meta name="keywords" content="лікарі, вакансії, Польща, нострифікація, медичні спеціалісти">
//     <meta name="robots" content="index, follow">
//     <meta name="author" content="https://t.me/Mood_Panda">
//     <title>{{title}}</title>
// </head>
// <body>
//     <div class="wrapper">
//         <header class="header header__article">
//             <div class="container article__container">
//                 <nav class="navigation" id="sticky-menu">
//                     <a class="logo" href="index.html">
//                         {{logo}}

//                     </a>
//                     <ul class="navigation__list">
//                         <li class="navigation__item"><a href="index.html#why">О нас</a></li>
//                         <li class="navigation__item"><a href="index.html#requierements">Требования</a></li>
//                         <li class="navigation__item"><a href="index.html#scheme">Схема нашего сотрудничества</a></li>
//                         <li class="navigation__item"><a href="index.html#doctor-salary">Заработки</a></li>
//                     </ul>
//                     <a class="tell" href="tel:+48512058549">+48 512 058 549</a>
//                     <a class="email" href="mailto:biuro@optimuswork.pl">biuro&#64;optimuswork.pl</a>
//                     <div class="language__menu">
//                         <button class="open-language-menu" onclick="openLanguageMenu(event)">Ru</button>
//                         <ul class="dropdown-language">
//                             <li><a href="#">Ru</a></li>
//                             <li><a href="#">Ua</a></li>
//                         </ul>
//                     </div>
//                     <button class="btn__burger" onclick="openBurgerMenu()">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
//                             <path d="M20.3846 1C20.7245 1 21 1.27552 21 1.61539C21 1.95525 20.7245 2.23077 20.3846 2.23077L1.61538 2.23077C1.27552 2.23077 1 1.95525 1 1.61538C1 1.27552 1.27552 1 1.61538 1L20.3846 1Z" fill="#461DBA"/>
//                             <path d="M20.3846 8.38462C20.7245 8.38462 21 8.66013 21 9C21 9.33987 20.7245 9.61539 20.3846 9.61539H1.61538C1.27552 9.61539 1 9.33987 1 9C1 8.66013 1.27552 8.38461 1.61539 8.38461L20.3846 8.38462Z" fill="#461DBA"/>
//                             <path d="M20.3846 15.7692C20.7245 15.7692 21 16.0447 21 16.3846C21 16.7245 20.7245 17 20.3846 17L1.61538 17C1.27552 17 1 16.7245 1 16.3846C1 16.0447 1.27552 15.7692 1.61538 15.7692L20.3846 15.7692Z" fill="#461DBA"/>
//                             <path d="M20.3846 1C20.7245 1 21 1.27552 21 1.61539C21 1.95525 20.7245 2.23077 20.3846 2.23077L1.61538 2.23077C1.27552 2.23077 1 1.95525 1 1.61538C1 1.27552 1.27552 1 1.61538 1L20.3846 1Z" stroke="#461DBA" stroke-width="2"/>
//                             <path d="M20.3846 8.38462C20.7245 8.38462 21 8.66013 21 9C21 9.33987 20.7245 9.61539 20.3846 9.61539H1.61538C1.27552 9.61539 1 9.33987 1 9C1 8.66013 1.27552 8.38461 1.61539 8.38461L20.3846 8.38462Z" stroke="#461DBA" stroke-width="2"/>
//                             <path d="M20.3846 15.7692C20.7245 15.7692 21 16.0447 21 16.3846C21 16.7245 20.7245 17 20.3846 17L1.61538 17C1.27552 17 1 16.7245 1 16.3846C1 16.0447 1.27552 15.7692 1.61538 15.7692L20.3846 15.7692Z" stroke="#461DBA" stroke-width="2"/>
//                         </svg>
//                     </button>
//                     <div class="navigation__burger">
//                         <div class="list__head">
//                             <a href="#" class="list__logo">
//                                 <svg width="178" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M2 14.415h8.381a.04.04 0 00.038-.026l3.95-10.27a.04.04 0 01.076.004l4.736 17.762c.01.04.066.04.077 0L23.19 8.52a.04.04 0 01.076-.004l2.35 5.874a.04.04 0 00.037.025h5.578" stroke="#461DBA" stroke-width="3" stroke-linecap="round"/>
//                                     <path d="M48.37 22.24c-.912 0-1.744-.168-2.496-.504a6.44 6.44 0 01-1.968-1.416 6.48 6.48 0 01-1.272-2.064 6.778 6.778 0 01-.456-2.472c0-.88.152-1.712.456-2.496a6.839 6.839 0 011.296-2.064 6.44 6.44 0 011.968-1.416 5.758 5.758 0 012.472-.528c.896 0 1.72.176 2.472.528a6.077 6.077 0 011.968 1.416c.56.592.992 1.28 1.296 2.064.32.784.48 1.616.48 2.496 0 .864-.152 1.688-.456 2.472a6.268 6.268 0 01-1.296 2.064 6.077 6.077 0 01-1.968 1.416c-.752.336-1.584.504-2.496.504zm-4.536-6.432c0 .704.12 1.36.36 1.968.24.592.56 1.12.96 1.584.416.448.896.8 1.44 1.056.56.256 1.152.384 1.776.384.624 0 1.208-.128 1.752-.384a4.9 4.9 0 001.464-1.08 5.3 5.3 0 001.344-3.576c0-.688-.12-1.336-.36-1.944a4.938 4.938 0 00-.984-1.608 4.41 4.41 0 00-1.464-1.08 3.864 3.864 0 00-1.752-.408c-.624 0-1.208.136-1.752.408a4.486 4.486 0 00-1.44 1.08 5.23 5.23 0 00-.984 1.632 5.312 5.312 0 00-.36 1.968zM63.22 22.24c-1.056 0-1.992-.264-2.808-.792a6.568 6.568 0 01-1.944-2.04v7.704h-1.632V9.496H58.3v2.424a5.946 5.946 0 011.992-1.896 5.035 5.035 0 012.664-.744c.864 0 1.656.184 2.376.552a5.87 5.87 0 011.872 1.44c.528.592.936 1.28 1.224 2.064a6.65 6.65 0 01.456 2.424c0 .88-.136 1.712-.408 2.496A6.252 6.252 0 0167.3 20.32a5.57 5.57 0 01-1.8 1.416c-.688.336-1.448.504-2.28.504zm-.456-1.44c.672 0 1.28-.144 1.824-.432a4.463 4.463 0 001.416-1.128c.4-.48.704-1.016.912-1.608a5.745 5.745 0 00.312-1.872 5.3 5.3 0 00-1.344-3.528 4.633 4.633 0 00-1.488-1.104 4.119 4.119 0 00-1.824-.408c-.416 0-.856.088-1.32.264-.448.16-.872.384-1.272.672-.384.272-.72.6-1.008.984-.272.368-.44.76-.504 1.176v3.84c.192.448.432.864.72 1.248.304.384.64.72 1.008 1.008.384.272.792.488 1.224.648.432.16.88.24 1.344.24zm14.24.6a7.45 7.45 0 01-.432.192 6.46 6.46 0 01-.624.24c-.24.08-.512.152-.816.216a4.65 4.65 0 01-.96.096A3.49 3.49 0 0173.164 22a2.46 2.46 0 01-.84-.432 2.31 2.31 0 01-.576-.768 2.44 2.44 0 01-.216-1.056v-8.952h-1.728V9.496h1.728V5.272h1.632v4.224h2.88v1.296h-2.88v8.496c.032.464.192.808.48 1.032.304.208.648.312 1.032.312.464 0 .872-.072 1.224-.216.352-.16.576-.272.672-.336l.432 1.32zm1.56.6V9.496h1.631V22h-1.632zm0-15.12v-2.4h1.631v2.4h-1.632zM101.91 22h-1.632v-6.984c0-1.456-.232-2.528-.696-3.216-.464-.688-1.152-1.032-2.064-1.032-.48 0-.936.088-1.368.264a4.407 4.407 0 00-1.176.744c-.352.32-.664.704-.936 1.152-.272.432-.48.912-.624 1.44V22h-1.632v-6.984c0-1.488-.224-2.568-.672-3.24-.448-.672-1.136-1.008-2.064-1.008-.944 0-1.784.328-2.52.984-.736.656-1.264 1.52-1.584 2.592V22H83.31V9.496h1.488v2.832c.512-.96 1.184-1.704 2.016-2.232a4.938 4.938 0 012.76-.816c1.056 0 1.896.296 2.52.888.64.592 1.032 1.368 1.176 2.328 1.168-2.144 2.776-3.216 4.824-3.216.704 0 1.296.128 1.776.384.496.256.888.624 1.176 1.104.304.464.52 1.032.648 1.704.144.656.216 1.392.216 2.208V22zm6.118.24a4.678 4.678 0 01-1.656-.288 4.527 4.527 0 01-1.32-.84 3.868 3.868 0 01-.864-1.224 3.821 3.821 0 01-.312-1.536c0-.544.128-1.048.384-1.512a3.66 3.66 0 011.08-1.2 5.101 5.101 0 011.656-.768 7.327 7.327 0 012.112-.288c.64 0 1.288.056 1.944.168.656.112 1.24.272 1.752.48v-1.128c0-1.104-.312-1.976-.936-2.616-.624-.656-1.488-.984-2.592-.984-.64 0-1.296.128-1.968.384a9.491 9.491 0 00-2.04 1.104l-.576-1.08c1.616-1.088 3.184-1.632 4.704-1.632 1.568 0 2.8.44 3.696 1.32.896.88 1.344 2.096 1.344 3.648v5.64c0 .448.2.672.6.672V22a3.89 3.89 0 01-.624.072c-.416 0-.744-.104-.984-.312-.224-.208-.344-.496-.36-.864l-.048-.984a5.65 5.65 0 01-2.184 1.728c-.864.4-1.8.6-2.808.6zm.384-1.248c.848 0 1.624-.16 2.328-.48.72-.32 1.264-.744 1.632-1.272.144-.144.248-.296.312-.456.08-.176.12-.336.12-.48v-2.04a9.929 9.929 0 00-3.48-.648c-1.152 0-2.088.24-2.808.72-.72.48-1.08 1.112-1.08 1.896 0 .384.072.744.216 1.08.16.336.368.632.624.888.272.24.592.432.96.576.368.144.76.216 1.176.216zm9.143-16.512h1.632v14.688c0 .464.128.832.384 1.104.256.256.616.384 1.08.384a4.12 4.12 0 001.296-.264l.288 1.32c-.304.128-.68.232-1.128.312-.432.08-.808.12-1.128.12-.752 0-1.344-.208-1.776-.624-.432-.432-.648-1.032-.648-1.8V4.48z" fill="#461DBA"/>
//                                     <path d="M147.029 22h-1.632v-6.984c0-1.456-.232-2.528-.696-3.216-.464-.688-1.152-1.032-2.064-1.032-.48 0-.936.088-1.368.264a4.407 4.407 0 00-1.176.744c-.352.32-.664.704-.936 1.152-.272.432-.48.912-.624 1.44V22h-1.632v-6.984c0-1.488-.224-2.568-.672-3.24-.448-.672-1.136-1.008-2.064-1.008-.944 0-1.784.328-2.52.984-.736.656-1.264 1.52-1.584 2.592V22h-1.632V9.496h1.488v2.832c.512-.96 1.184-1.704 2.016-2.232a4.938 4.938 0 012.76-.816c1.056 0 1.896.296 2.52.888.64.592 1.032 1.368 1.176 2.328 1.168-2.144 2.776-3.216 4.824-3.216.704 0 1.296.128 1.776.384.496.256.888.624 1.176 1.104.304.464.52 1.032.648 1.704.144.656.216 1.392.216 2.208V22zm8.374.24a6.218 6.218 0 01-2.52-.504 6.44 6.44 0 01-1.968-1.416c-.56-.608-1-1.304-1.32-2.088a6.91 6.91 0 01-.456-2.52c0-.88.152-1.704.456-2.472a6.532 6.532 0 011.296-2.04 6.045 6.045 0 011.992-1.392 5.918 5.918 0 012.496-.528c.912 0 1.744.176 2.496.528.768.336 1.424.8 1.968 1.392a6.59 6.59 0 011.728 4.488v.384a.966.966 0 01-.024.264h-10.704c.048.672.2 1.296.456 1.872.272.56.616 1.048 1.032 1.464.416.416.888.744 1.416.984a4.494 4.494 0 002.928.168c.4-.112.768-.264 1.104-.456.336-.192.64-.424.912-.696.272-.288.48-.6.624-.936l1.416.384a4.313 4.313 0 01-.816 1.272c-.352.368-.76.696-1.224.984-.464.272-.976.48-1.536.624-.56.16-1.144.24-1.752.24zm4.608-7.152a4.802 4.802 0 00-.48-1.824 4.662 4.662 0 00-1.008-1.44c-.4-.4-.872-.712-1.416-.936a4.317 4.317 0 00-1.704-.336 4.565 4.565 0 00-3.168 1.272c-.4.4-.728.88-.984 1.44a5.642 5.642 0 00-.432 1.824h9.192zm8.734 7.152a5.49 5.49 0 01-2.4-.528 6.268 6.268 0 01-1.896-1.44 6.79 6.79 0 01-1.248-2.04 7.044 7.044 0 01-.432-2.448c0-.88.144-1.712.432-2.496.288-.8.68-1.496 1.176-2.088a5.622 5.622 0 011.8-1.392 5.08 5.08 0 012.304-.528c1.056 0 1.992.28 2.808.84.816.544 1.456 1.208 1.92 1.992V4.48h1.632v15.408c0 .448.192.672.576.672V22c-.24.048-.432.072-.576.072-.384 0-.72-.12-1.008-.36-.288-.256-.432-.56-.432-.912v-1.224a5.468 5.468 0 01-2.016 1.944c-.848.48-1.728.72-2.64.72zm.36-1.44c.4 0 .824-.08 1.272-.24.464-.16.896-.376 1.296-.648.4-.288.736-.616 1.008-.984.288-.384.464-.792.528-1.224V13.84a4.123 4.123 0 00-.696-1.2 5.26 5.26 0 00-1.056-1.008 4.709 4.709 0 00-1.248-.672 3.909 3.909 0 00-1.32-.24c-.672 0-1.28.144-1.824.432a4.677 4.677 0 00-1.416 1.152c-.384.464-.68 1-.888 1.608a5.745 5.745 0 00-.312 1.872 5.3 5.3 0 001.344 3.528 4.9 4.9 0 001.464 1.08 4.274 4.274 0 001.848.408z" fill="#0FA4AE"/>
//                                 </svg>
//                             </a>
//                             <button class="btn__close" onclick="closeBurgerMenu()">
//                                 <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <g clip-path="url(#clip0_1_659)">
//                                     <path d="M11.2878 -1.45702C11.5132 -1.68244 11.8787 -1.68244 12.1042 -1.45702C12.3296 -1.23159 12.3296 -0.866112 12.1042 -0.640689L-0.140744 11.6042C-0.366167 11.8296 -0.731648 11.8296 -0.957071 11.6042C-1.18249 11.3788 -1.18249 11.0133 -0.957071 10.7879L11.2878 -1.45702Z" fill="#461DBA"/>
//                                     <path d="M16.1858 3.44094C16.4112 3.21552 16.7767 3.21552 17.0021 3.44094C17.2275 3.66637 17.2275 4.03185 17.0021 4.25727L4.75721 16.5022C4.53179 16.7276 4.16631 16.7276 3.94089 16.5022C3.71547 16.2767 3.71547 15.9113 3.94089 15.6858L16.1858 3.44094Z" fill="#461DBA"/>
//                                     <path d="M21.0837 8.3389C21.3092 8.11348 21.6747 8.11348 21.9001 8.3389C22.1255 8.56432 22.1255 8.92981 21.9001 9.15523L9.65517 21.4001C9.42975 21.6255 9.06427 21.6255 8.83885 21.4001C8.61343 21.1747 8.61343 20.8092 8.83885 20.5838L21.0837 8.3389Z" fill="#461DBA"/>
//                                     <path d="M11.2878 -1.45702C11.5132 -1.68244 11.8787 -1.68244 12.1042 -1.45702C12.3296 -1.23159 12.3296 -0.866112 12.1042 -0.640689L-0.140744 11.6042C-0.366167 11.8296 -0.731648 11.8296 -0.957071 11.6042C-1.18249 11.3788 -1.18249 11.0133 -0.957071 10.7879L11.2878 -1.45702Z" stroke="#461DBA" stroke-width="2"/>
//                                     <path d="M16.1858 3.44094C16.4112 3.21552 16.7767 3.21552 17.0021 3.44094C17.2275 3.66637 17.2275 4.03185 17.0021 4.25727L4.75721 16.5022C4.53179 16.7276 4.16631 16.7276 3.94089 16.5022C3.71547 16.2767 3.71547 15.9113 3.94089 15.6858L16.1858 3.44094Z" stroke="#461DBA" stroke-width="2"/>
//                                     <path d="M21.0837 8.3389C21.3092 8.11348 21.6747 8.11348 21.9001 8.3389C22.1255 8.56432 22.1255 8.92981 21.9001 9.15523L9.65517 21.4001C9.42975 21.6255 9.06427 21.6255 8.83885 21.4001C8.61343 21.1747 8.61343 20.8092 8.83885 20.5838L21.0837 8.3389Z" stroke="#461DBA" stroke-width="2"/>
//                                     </g>
//                                     <g clip-path="url(#clip1_1_659)">
//                                     <path d="M10.0637 -1.45702C9.83831 -1.68244 9.47283 -1.68244 9.24741 -1.45702C9.02199 -1.23159 9.02199 -0.866112 9.24741 -0.640689L21.4923 11.6042C21.7177 11.8296 22.0832 11.8296 22.3086 11.6042C22.5341 11.3788 22.5341 11.0133 22.3086 10.7879L10.0637 -1.45702Z" fill="#461DBA"/>
//                                     <path d="M5.16578 3.44094C4.94035 3.21552 4.57487 3.21552 4.34945 3.44094C4.12403 3.66637 4.12403 4.03185 4.34945 4.25727L16.5943 16.5022C16.8198 16.7276 17.1853 16.7276 17.4107 16.5022C17.6361 16.2767 17.6361 15.9113 17.4107 15.6858L5.16578 3.44094Z" fill="#461DBA"/>
//                                     <path d="M0.267817 8.3389C0.0423936 8.11348 -0.323088 8.11348 -0.54851 8.3389C-0.773932 8.56432 -0.773933 8.92981 -0.54851 9.15523L11.6964 21.4001C11.9218 21.6255 12.2873 21.6255 12.5127 21.4001C12.7381 21.1747 12.7381 20.8092 12.5127 20.5838L0.267817 8.3389Z" fill="#461DBA"/>
//                                     <path d="M10.0637 -1.45702C9.83831 -1.68244 9.47283 -1.68244 9.24741 -1.45702C9.02199 -1.23159 9.02199 -0.866112 9.24741 -0.640689L21.4923 11.6042C21.7177 11.8296 22.0832 11.8296 22.3086 11.6042C22.5341 11.3788 22.5341 11.0133 22.3086 10.7879L10.0637 -1.45702Z" stroke="#461DBA" stroke-width="2"/>
//                                     <path d="M5.16578 3.44094C4.94035 3.21552 4.57487 3.21552 4.34945 3.44094C4.12403 3.66637 4.12403 4.03185 4.34945 4.25727L16.5943 16.5022C16.8198 16.7276 17.1853 16.7276 17.4107 16.5022C17.6361 16.2767 17.6361 15.9113 17.4107 15.6858L5.16578 3.44094Z" stroke="#461DBA" stroke-width="2"/>
//                                     <path d="M0.267817 8.3389C0.0423936 8.11348 -0.323088 8.11348 -0.54851 8.3389C-0.773932 8.56432 -0.773933 8.92981 -0.54851 9.15523L11.6964 21.4001C11.9218 21.6255 12.2873 21.6255 12.5127 21.4001C12.7381 21.1747 12.7381 20.8092 12.5127 20.5838L0.267817 8.3389Z" stroke="#461DBA" stroke-width="2"/>
//                                     </g>
//                                     <defs>
//                                     <clipPath id="clip0_1_659">
//                                     <rect width="20.7803" height="7.50399" fill="white" transform="translate(0.675781 14.8696) rotate(-45)"/>
//                                     </clipPath>
//                                     <clipPath id="clip1_1_659">
//                                     <rect width="20.7803" height="7.50399" fill="white" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 20.6758 14.8696)"/>
//                                     </clipPath>
//                                     </defs>
//                                 </svg>
//                             </button>
//                         </div>
//                         <ul class="navigation__list">
//                             <li class="navigation__item"><a href="index.html#why">О нас</a></li>
//                             <li class="navigation__item"><a href="index.html#requierements">Требования</a></li>
//                             <li class="navigation__item"><a href="index.html#scheme">Схема нашего сотрудничества</a></li>
//                             <li class="navigation__item"><a href="index.html#doctor-salary">Заработки</a></li>
//                         </ul>
//                         <hr class="line">
//                         <a class="tell" href="tel:+48512058549">+48 512 058 549</a>
//                         <a class="email" href="mailto:biuro@optimuswork.pl">biuro&#64;optimuswork.pl</a>
//                         <div class="language__menu">
//                             <button class="open-language-menu" onclick="openLanguageMenu(event)">Ru</button>
//                             <ul class="dropdown-language">
//                                 <li><a href="#">Ru</a></li>
//                                 <li><a href="#">Ua</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//         <main class="main">
//             <div class="breadcrumbs">
//                 <div class="container article__breadcrumbs-container">
//                     <div class="breadcrumbs__inner">
//                         <ul class="breadcrumbs__list">
//                             <li><a href="index.html">Головна</a></li>
//                             <li><span>Как устроиться на работу урологом в Польше – условия и требования</span></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <section class="article">
//                 <div class="container">
//                     <div class="article__wrapper">
//                         <div class="article__flex-box">
//                             <div class="article__work-poland">
//                                 <span>
//                                     Как устроиться на работу урологом
//                                     <h2>
//                                         в Польше – условия и требования<br>
//                                     </h2>
//                                 </span>
//                                 <p>
//                                     Планируете отправиться на поиски работы урологом
//                                     в Польшу и не знаете, с чего начать? Обратитесь
//                                     в нашу компанию – подскажем, проконсультируем,
//                                     предложим несколько вакансий на выбор, поспособствуем
//                                     быстрому трудоустройству.
//                                 </p>
//                                 <p>
//                                     Почему мы уверены, что вакансий будет несколько? Дело
//                                     в том, что сегодня в Польше наблюдается критический
//                                     недостаток компетентных врачей разных специализаций.
//                                     И специальность уролога – одна из наиболее дефицитных.
//                                     А значит, именно сегодня врачи из постсоветских стран,
//                                     особенно, Украины и Беларуси, получают уникальный шанс
//                                     изменить свою жизнь.
//                                 </p>
//                                 <div class="employment__wrapper">
//                                     <div class="employment__content">
//                                         <div class="employment__media">
//                                         <span>
//                                             Что должен делать врач-уролог
//                                             <h2>
//                                                 в польском медицинском заведении?
//                                             </h2>
//                                         </span>
//                                         <p>
//                                             Сферой деятельности уролога являются мужская и
//                                             женская мочеполовая система, а также почки, надпочечники
//                                             и предстательная железа. Профессиональный уролог:
//                                         </p>
//                                         <ul class="salary-list">
//                                             <li>
//                                                 наблюдает пациентов, подбирает оптимальное консервативное
//                                                 и хирургическое лечение согласно европейским протоколам;;
//                                             </li>
//                                             <li>
//                                                 проводит хирургические вмешательства и сопровождает
//                                                 пациента в послеоперационном периоде;
//                                             </li>
//                                             <li>
//                                                 анализирует и оценивает результаты анализов;
//                                             </li>
//                                             <li>
//                                                 оказывает экстренную помощь;
//                                             </li>
//                                             <li>
//                                                 консультирует врачей других специальностей – андрологов,
//                                                 гинекологов, эндокринологов, онкологов.
//                                             </li>
//                                         </ul>
//                                         <p>
//                                             Также должность уролога предусматривает ведение сопутствующей медицинской документации.
//                                         </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section class="image">
//                 <div class="container">
//                     <div class="image__wrapper">
//                         <img class="img-one salary-doctor" src="./img/Rectangle-638-urolog.png" alt="article-alerji">
//                         <img class="img-two-none salary-doctor" src="./img/Rectangle-638-urolog.png" alt="article-alerji">
//                         <img class="img-three-none salary-doctor" src="./img/Rectangle-638-urolog.png" alt="article-alerji">
//                     </div>
//                 </div>
//             </section>
//             <section class="employment">
//                 <div class="container">
//                     <div class="employment__wrapper">
//                         <div class="employment__content">
//                             <div class="employment__media">
//                                 <h3 class="employment__title">
//                                     <span>Основные требования</span>
//                                     к урологу со стороны польских клиник
//                                 </h3>
//                                 <p>
//                                     Стремление и задача любого работодателя – получение в штат
//                                     квалифицированного и ответственного специалиста. Кроме
//                                     того, нормы трудоустройства в сфере медицины регулируются
//                                     польским законодательством. Поэтому от претендентов на работу
//                                     врачом-урологом в Польше ожидают:
//                                 </p>
//                                 <ul>
//                                     <li>
//                                         наличия диплома о высшем образовании со специализацией «уролог».
//                                         Вопрос его нострификации в Польше встанет уже после того, как вы
//                                         начнете работать и получать зарплату;
//                                     </li>
//                                     <li>
//                                         опыта работы по специальности – минимум 3 года в течение последних 5 лет.
//                                         Украинцы на сегодняшний день могут трудоустраиваться без соблюдения
//                                         данного пункта;
//                                     </li>
//                                     <li>
//                                         знания польского языка на уровне, позволяющем свободно общаться с
//                                         коллегами и пациентами, изучать медицинскую литературу, вести
//                                         специализированную документацию;
//                                     </li>
//                                     <li>
//                                         наличия разрешения и лицензии на осуществление врачебной деятельности;
//                                     </li>
//                                     <li>
//                                         соответствующих личных качеств. В первую очередь, доктор должен уметь
//                                         коммуницировать с пациентами и коллегами, быть ответственным,
//                                         стремиться получать новый опыт и знания.
//                                     </li>
//                                 </ul>
//                                 <p>
//                                     Тем, кто соответствует перечисленным требованиям, предлагается высокая
//                                     заработная плата – от 7500 злотых брутто в месяц за стандартный восьмичасовой
//                                     рабочий день, доплаты и премии за качественную работу, переработки и дежурства,
//                                     социальные гарантии, помощь в поиске жилья и другие преференции.
//                                 </p>
//                                 <p>
//                                     Заинтересовала возможность переехать в Польшу на работу урологом в современной
//                                     клинике на комфортных условиях? Свяжитесь с нашими консультантами – подскажем,
//                                     с чего начать и как пройти весь процесс без проблем и лишних усилий.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//         <footer class="footer">
// 			<div class="container">
//                 <div class="footer__wrapper">
//                     <div class="footer__col-1">
//                         <a class="logo" href="index.html">
//                             <img src="./img/logo-footer.png" alt="logo-footer">
//                         </a>
//                         <p>
//                             © 2022 Optimus Work Med
//                         </p>
//                     </div>
//                     <div class="footer__col-2">
//                         <ul>
//                             <li><a href="index.html#why">О нас</a></li>
//                             <li><a href="index.html#requierements">Требования</a></li>
//                             <li><a href="index.html#scheme">Схема нашего сотрудничества</a></li>
//                             <li><a href="index.html#doctor-salary">Заработки</a></li>
//                         </ul>
//                     </div>
//                     <div class="footer__col-3">
//                         <ul>
//                             <li><a href="#">Информационная клаузула</a></li>
//                             <li><a href="#">Согласия</a></li>
//                             <li><a href="#">Список документов для подачи 1</a></li>
//                             <li><a href="#">Список документов для подачи 2</a></li>
//                             <li><a href="#">Список документов для подачи 3</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
// 		</footer>
//     </div>
//     <script src="./js/index.js"></script>
// </body>
// </html>
//     `;

//     const data = {
//         title: jsonData.title,
//         content: jsonData.content,
//         date: jsonData.date,
//     };

//     function render(template, data) {
//         return template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
//             return data[key] || "";
//         });
//     }

//     const clickableElement = document.getElementById("article-urologist");

//     clickableElement.addEventListener("click", () => {
//         const newWindow = window.open("", "_blank");
//         const result = render(template, data);
//         newWindow.document.write(result);
//     });
// };

// renderArticleHtmlPagas();
