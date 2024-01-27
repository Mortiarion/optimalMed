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