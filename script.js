document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    if (!menuToggle || !nav) {
        return;
    }

    // Buka / tutup menu saat hamburger diklik
    menuToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        nav.classList.toggle("active");
    });

    // Tutup menu saat salah satu menu diklik
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });

    });

    // Tutup menu jika klik di luar menu
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
