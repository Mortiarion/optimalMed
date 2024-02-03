const dropdownSpecialitySmall = document.querySelector(
    ".dropdown-speciality-small"
);
const dropdownSpecialitySmallFilterMain = document.querySelector(
    ".dropdown-speciality-small-filter-main"
);
// const filter = document.querySelector(".dropdown-speciality-small-filter");
const input =
    dropdownSpecialitySmallFilterMain.querySelector('input[type="text"]');
const labels = dropdownSpecialitySmallFilterMain.querySelectorAll(
    ".checkbox-container-filter"
);
// console.log(input);
// console.log(labels);
const openDropdownSpecialitySmallFilterMain = () => {
    dropdownSpecialitySmallFilterMain.classList.add("filter-main-open");
};
const closeDropdownSpecialitySmallFilterMain = () => {
    dropdownSpecialitySmallFilterMain.classList.remove("filter-main-open");
};

dropdownSpecialitySmall.addEventListener("click", () => {
    dropdownSpecialitySmallFilterMain.classList.contains("filter-main-open")
        ? closeDropdownSpecialitySmallFilterMain()
        : openDropdownSpecialitySmallFilterMain();
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

    let numberSelected = document.querySelector(".number-selected-small");
    numberSelected.textContent = `вибрано ${selectedCount}`;
    // numberSelected = selectedCount > 0 ? `вибрано ${selectedCount}` : "";
    if (selectedCount === 0) {
        numberSelected.textContent = "";
    }
}

labels.forEach(function (label) {
    const checkbox = label.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", updateSelectedCount);
});