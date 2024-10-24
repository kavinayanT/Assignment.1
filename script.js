function scrollToSection(section) {
    const target = document.querySelector(section);
    target.scrollIntoView({ behavior: "smooth" });
}
