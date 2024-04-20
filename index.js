const skills = {
    javascript: "https://www.javascript.com/",
    css: "https://en.wikipedia.org/wiki/CSS",
    html: "https://en.wikipedia.org/wiki/HTML",
    react: "https://react.dev/",
    sass: "https://sass-lang.com/",
    linux: "https://en.wikipedia.org/wiki/Linux",
    bash: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
    hugo: "https://gohugo.io/",
    nodeJs: "https://nodejs.org/en"
};

// Function to open skill links
function openSkillLink(skill) {
    window.open(skills[skill]);
}

// Attach click event listener to skills
Object.keys(skills).forEach(skill => {
    document.querySelector("." + skill).addEventListener("click", () => {
        openSkillLink(skill);
    });
});


const body = document.body;
const input = document.querySelector(".white-black");
const projects = document.querySelectorAll(".project");
const project = document.querySelector(".project");
const skillElements = document.querySelectorAll(".skill");
const dashboard = document.querySelector(".dashboard");
const content = document.querySelector(".about-content");
const contact = document.querySelector(".footer");
const backToTheTop = document.querySelector(".back-to-the-top");
const arrow = document.querySelector(".arrow")
console.log(arrow)
const visible = document.querySelector(".visible");

function toggleTheme() {
  const isWhiteTheme = input.checked;
  const bgColor = isWhiteTheme ? "#161616" : "#FFF5E0";
  const textColor = isWhiteTheme ? "#FFF5E0" : "#161616";
  const projectBorderColor = isWhiteTheme ? "#FFF5E0" : "#161616";
  const projectBgColor = isWhiteTheme ? "#C84B31" : "#8DECB4";
  const skillBorderColor = isWhiteTheme ? "#FFF5E0" : "#161616";
  const dashboardBgColor = isWhiteTheme ? "#346751" : "#41b06e";
  const contactBgColor = isWhiteTheme ? "#346751" : "#41b06e";

  body.style.background = bgColor;
  content.style.background = isWhiteTheme ? "#C84B31" : "#8DECB4";
  arrow.style.stroke = isWhiteTheme ? "#FFF5E0" : "#161616";
  body.style.color = textColor;
  contact.style.background = contactBgColor;
  dashboard.style.background = dashboardBgColor;
  projects.forEach((projects) => {
    projects.style.border = `2px solid ${projectBorderColor}`;
    projects.style.background = projectBgColor;
  });
  skillElements.forEach((skill) => {
    skill.style.border = `2px solid ${skillBorderColor}`;
  });
}

function toggleBackToTopVisibility() {
  const visiblePosition = visible.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (visiblePosition <= windowHeight && visiblePosition >= 0) {
    backToTheTop.style.display = "block";
  } else {
    backToTheTop.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

input.addEventListener("change", toggleTheme);
backToTheTop.addEventListener("click", scrollToTop);
window.addEventListener("scroll", toggleBackToTopVisibility);

toggleTheme(); // Initialize theme
toggleBackToTopVisibility(); // Initialize button visibility
