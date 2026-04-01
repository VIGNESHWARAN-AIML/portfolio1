// Typing Effect
const text = "AI & Full Stack Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text[i];
        i++;
        setTimeout(typing, 50);
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

// LOGIN SYSTEM
function login() {
    const pass = document.getElementById("adminPass").value;
    if(pass === "admin123"){
        document.getElementById("adminPanel").style.display = "block";
        alert("Login Successful");
    } else {
        alert("Wrong Password");
    }
}

// ADD SKILLS
function addSkill(){
    const val = document.getElementById("newSkill").value;
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = val;
    document.getElementById("skillList").appendChild(div);
}

// ADD PROJECTS
function addProject(){
    const val = document.getElementById("newProject").value;
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = val;
    document.getElementById("projectList").appendChild(div);
}
