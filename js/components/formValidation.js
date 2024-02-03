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
                createError(input, "Вводите только буквы");
                result = false;
            }
        }

        if (input.dataset.required === "number") {
            if (!input.value.match(/^\d{10}$/)) {
                createError(
                    input,
                    "Введите корректный номер телефона!(0687623820)"
                );
                result = false;
            }
        }

        if (input.dataset.required === "email") {
            if (!input.value.match(/^\S+@\S+\.\S+$/)) {
                createError(input, "Введите корректный email (some@email.net)");
                result = false;
            }
        }

        if (input.dataset.required === "select") {
            const numberSelected = document.querySelector(".number-selected");

            if (numberSelected.textContent === "") {
                createError(input, "Выберите специализацию!");
                result = false;
            }
        }
        if (input.dataset.required === "select-small") {
            const numberSelected = document.querySelector(
                ".number-selected-small"
            );

            if (numberSelected.textContent === "") {
                createError(input, "Выберите специализацию!");
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

/** ****************************************************************** */

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
                createError(input, "Вводите только буквы");
                result = false;
            }
        }

        if (input.dataset.required === "number") {
            if (!input.value.match(/^\d{10}$/)) {
                createError(
                    input,
                    "Введите корректный номер телефона!(0687623820)"
                );
                result = false;
            }
        }

        if (input.dataset.required === "email") {
            if (!input.value.match(/^\S+@\S+\.\S+$/)) {
                createError(input, "Введите корректный email (some@email.net)");
                result = false;
            }
        }

        if (input.dataset.required === "select") {
            const numberSelected = document.querySelector(
                ".number-selected-small-filter"
            );

            if (numberSelected.textContent === "") {
                createError(input, "Выберите специализацию!");
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
            alert("Форма провірена успішно!");

            return false;
        }
    });
/** ****************************************************************** */
