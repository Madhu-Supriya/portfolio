// =========================
// AOS Animation
// =========================

AOS.init({
    duration: 1000,
    once: true
});

// =========================
// Typing Animation
// =========================

const roles = [
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS Enthusiast",
    "Terraform Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typing.textContent = currentRole.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentRole.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);

}

typeEffect();

// =========================
// Sticky Navbar
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 20px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// Scroll To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#38bdf8;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =========================
// Mobile Menu
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});

// =========================
// Close Mobile Menu
// =========================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});

// =========================
// Reveal Animation
// =========================

const cards = document.querySelectorAll(
".project-card,.skill-card,.achievement-card,.timeline-item"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// =========================
// Footer Year
// =========================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
    `© ${new Date().getFullYear()} Madhulata Nallamilli | Cloud & DevOps Engineer`;

}
