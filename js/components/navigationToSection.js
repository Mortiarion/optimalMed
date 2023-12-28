const menuLinks = document.querySelectorAll(".navigation__item a");

const navigateToSection = (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute("href");
    console.log(targetId);

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
};

menuLinks.forEach((link) => {
    link.addEventListener("click", navigateToSection);
});
