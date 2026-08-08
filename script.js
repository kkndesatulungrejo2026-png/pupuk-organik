document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    if (!menuToggle || !nav) {
        return;
    }

    // Buka / tutup hamburger
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Otomatis tutup setelah memilih menu
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });

    });

});

        });

    });

    // KLIK DI LUAR MENU
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
