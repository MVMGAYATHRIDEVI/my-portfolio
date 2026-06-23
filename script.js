// ================================
// THEME TOGGLE
// ================================

function toggleTheme() {

    document.body.classList.toggle("light");

    const themeBtn = document.querySelector(".theme-btn");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = "🌙";

    }
}

// ================================
// LOAD SAVED THEME
// ================================

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");
    const themeBtn = document.querySelector(".theme-btn");

    if (savedTheme === "light") {

        document.body.classList.add("light");
        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

});

// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .certificate-card, .contact-card, .skill-card, .edu-card"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {

    element.classList.add("hidden");
    observer.observe(element);

});

// ================================
// ACTIVE NAVBAR LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

// ================================
// NAVBAR SHADOW ON SCROLL
// ================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 25px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// ================================
// TYPEWRITER EFFECT
// ================================

const typingElement = document.querySelector(".typing-text");

if (typingElement) {

    const text =
        "Computer Science Engineer • AI Enthusiast • Future Lawyer";

    let index = 0;

    typingElement.innerHTML = "";

    function typeWriter() {

        if (index < text.length) {

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeWriter, 70);

        }
    }

    setTimeout(typeWriter, 500);
}

// ================================
// SMOOTH BUTTON HOVER EFFECT
// ================================

const buttons = document.querySelectorAll(
    ".btn, .project-btn"
);

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px) scale(1)";

    });

});

// ================================
// CURRENT YEAR AUTO UPDATE
// ================================

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} MVM Gayathri Devi. All Rights Reserved.`;

}
