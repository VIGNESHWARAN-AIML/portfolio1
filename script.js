// Typing Effect
const text = "AI Developer | Leader | Problem Solver";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 40);
    }
}
typing();

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 }
  }
});

// OWNER LOGIN
function ownerLogin() {
    let pass = prompt("Enter Password:");
    if (pass === "admin123") {
        alert("Edit Mode ON");

        document.getElementById("about").contentEditable = true;
        document.getElementById("skills").contentEditable = true;
        document.getElementById("projects").contentEditable = true;
    }
}

// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});
