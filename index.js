const body = document.body;
const input = document.querySelector(".white-black");
const project = document.querySelectorAll(".project");
const skill = document.querySelectorAll(".skill");
const dashboard = document.querySelector(".dashboard");
const content = document.querySelector(".about-content");
const contact = document.querySelector(".footer")
console.log();

function whiteBlackSwitch() {
  if (input.checked === true) {
    body.style.background = "#161616";
    content.style.background = "#C84B31";
    body.style.color = "#FFF5E0";
    contact.style.background ="#346751"
    dashboard.style.background = "#346751";
    project.forEach((project) => {
      project.style.border = "2px solid #FFF5E0";
      project.style.background = "#C84B31";
    });
    skill.forEach((skill) => {
      skill.style.border = "2px solid #FFF5E0";
    });
  } else {
    dashboard.style.background = "#41b06e";
    body.style.background = "#FFF5E0";
    content.style.background = "#8DECB4";
    body.style.color = "#161616";
    project.forEach((project) => {
      project.style.border = "2px solid #161616";
    });
    skill.forEach((skill) => {
      skill.style.border = "2px solid #161616";
    });
  }
}

input.addEventListener("change", () => {
  whiteBlackSwitch();
});
whiteBlackSwitch();
