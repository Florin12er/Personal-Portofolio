const body = document.body;
const input = document.querySelector(".white-black");
const project = document.querySelectorAll(".project");
const skill = document.querySelectorAll(".skill");

console.log(skill);
function whiteBlackSwitch() {
  if (input.checked === true) {
    body.style.background = "#020617";
    body.style.color = "#fafafa";
    project.forEach((project) => {
      project.style.border = "2px solid #fafafa";
    });
    skill.forEach((skill) => {
      skill.style.border = "2px solid #fafafa";
    });
  } else {
    body.style.background = "#fafafa";
    body.style.color = "#020617";
  project.forEach((project) => {
      project.style.border = "2px solid #020617";
    });
    skill.forEach((skill) => {
      skill.style.border = "2px solid #020617";
    });

  }
}

input.addEventListener("change", () => {
  whiteBlackSwitch();
});
whiteBlackSwitch();
