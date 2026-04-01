// Typing
const text = "AI & Full Stack Developer";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// Default Data
let skills = JSON.parse(localStorage.getItem("skills")) || 
["C Program","C++","Communication","Leadership","Teamwork","Troubleshooter"];

let projects = JSON.parse(localStorage.getItem("projects")) || 
["Portfolio Website","AI Chatbot","Leave App"];

// Display
function display(){
    let skillHTML = "";
    skills.forEach(s => skillHTML += `<div class="card">${s}</div>`);
    document.getElementById("skillList").innerHTML = skillHTML;

    let projHTML = "";
    projects.forEach(p => projHTML += `<div class="card">${p}</div>`);
    document.getElementById("projectList").innerHTML = projHTML;
}
display();

// LOGIN
function openLogin(){
    document.getElementById("loginBox").style.display="block";
}

function login(){
    let pass = document.getElementById("password").value;
    if(pass === "admin123"){
        document.getElementById("adminPanel").style.display="block";
        alert("Login Success");
    } else {
        alert("Wrong Password");
    }
}

// ADD SKILL
function addSkill(){
    let skill = document.getElementById("newSkill").value;
    skills.push(skill);
    localStorage.setItem("skills", JSON.stringify(skills));
    display();
}

// ADD PROJECT
function addProject(){
    let proj = document.getElementById("newProject").value;
    projects.push(proj);
    localStorage.setItem("projects", JSON.stringify(projects));
    display();
}
