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
const openDropdownSpecialitySmallFilterMain = () => {
    dropdownSpecialitySmallFilterMain.classList.add("filter-main-open");
};
const closeDropdownSpecialitySmallFilterMain = () => {
    dropdownSpecialitySmallFilterMain.classList.remove("filter-main-open");
};
const mainForm = document.querySelector(".main__form");

dropdownSpecialitySmall.addEventListener("click", (event) => {
    dropdownSpecialitySmallFilterMain.classList.contains("filter-main-open")
        ? closeDropdownSpecialitySmallFilterMain()
        : openDropdownSpecialitySmallFilterMain();
    event.stopPropagation();
});

document.addEventListener("click", (event) => {
    if (!dropdownSpecialitySmallFilterMain.contains(event.target)) {
        closeDropdownSpecialitySmallFilterMain();
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
    if (selectedCount === 0) {
        numberSelected.textContent = "";
    }
}

labels.forEach(function (label) {
    const checkbox = label.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", updateSelectedCount);
});
