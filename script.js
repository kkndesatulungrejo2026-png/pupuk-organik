<script>

    /* ========================================
       HAMBURGER MENU
    ======================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {

        // BUKA / TUTUP MENU SAAT HAMBURGER DIKLIK
        menuToggle.addEventListener("click", function (e) {

            // Supaya klik hamburger tidak dianggap klik di luar
            e.stopPropagation();

            nav.classList.toggle("active");

        });


        // TUTUP MENU KALAU KLIK DI LUAR MENU
        document.addEventListener("click", function (e) {

            if (
                !nav.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {

                nav.classList.remove("active");

            }

        });


        // TUTUP MENU SETELAH MEMILIH LINK
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");

            });

        });

    }


    /* ========================================
       BACK TO TOP
    ======================================== */

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                topBtn.style.display = "block";

            } else {

                topBtn.style.display = "none";

            }

        });


        topBtn.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* ========================================
       SEARCH
    ======================================== */

    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const keyword = searchInput.value.toLowerCase();

            cards.forEach(function (card) {

                const text = card.textContent.toLowerCase();

                if (text.includes(keyword)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

</script>
