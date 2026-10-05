/* =====================================================
   TASK 3 - PORTFOLIO JAVASCRIPT
   ===================================================== */


/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuToggle.textContent = "✕";

    } else {

        menuToggle.textContent = "☰";

    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* ================= DARK / LIGHT MODE ================= */

const themeToggle = document.getElementById("themeToggle");


const savedTheme = localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    themeToggle.textContent = "☀️";

}


themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");


    if (currentTheme === "dark") {

        document.documentElement.removeAttribute(
            "data-theme"
        );

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeToggle.textContent = "🌙";

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeToggle.textContent = "☀️";

    }

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        `Thank you, ${name}! Your message has been received.`
    );


    contactForm.reset();

});