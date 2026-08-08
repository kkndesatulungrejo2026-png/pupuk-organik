document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    if (!menuToggle || !nav) {
        console.error("Hamburger atau nav tidak ditemukan!");
        return;
    }

    // Klik hamburger
    menuToggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        nav.classList.toggle("active");
    });

    // Klik link menu → tutup menu
    nav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });

    });

    // Klik di luar menu → tutup menu
    document.addEventListener("click", function (e) {

        if (
            nav.classList.contains("active") &&
            !nav.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            nav.classList.remove("active");
        }

    });

});
