document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    if (!menuToggle || !nav) {
        console.log("Hamburger atau nav tidak ditemukan!");
        return;
    }

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

});
