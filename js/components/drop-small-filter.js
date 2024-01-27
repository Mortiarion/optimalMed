const popupSmall = document.querySelector(".dropdown-speciality-small-popup");
const filter = document.querySelector(".dropdown-speciality-small-filter");
const input = filter.querySelector('input[type="text"]');
const labels = filter.querySelectorAll(".checkbox-container-filter");

const openPopupSmall = () => {
    filter.classList.add("open-popup-small");
};

const closePopupSmall = () => {
    filter.classList.remove("open-popup-small");
};

popupSmall.addEventListener("click", () => {
    filter.classList.contains("open-popup-small")
        ? closePopupSmall()
        : openPopupSmall();
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

function updateSelectedCount() {
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
    numberSelected = selectedCount > 0 ? `вибрано ${selectedCount}` : " ";
    console.log(numberSelected);
}

labels.forEach(function (label) {
    const checkbox = label.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", updateSelectedCount);
});

// document.addEventListener("click", (event) => {
//     const isPopupSmall = popupSmall.contains(event.target);

//     if (!isPopupSmall && filter.classList.contains("open-popup-small")) {
//         closePopupSmall();
//     }
// });
