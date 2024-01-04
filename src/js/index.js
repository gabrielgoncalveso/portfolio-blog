const buttonInit = document.getElementById("button-init");
const init = document.getElementById("init");

buttonInit.addEventListener("click", () => {
  init.scrollIntoView({ behavior: "smooth" });
});

const buttonAbout = document.getElementById("button-about");
const about = document.getElementById("about");

buttonAbout.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

const buttonTechnologies = document.getElementById("button-technologies");
const technologies = document.getElementById("technologies");

buttonTechnologies.addEventListener("click", () => {
  technologies.scrollIntoView({ behavior: "smooth" });
});

const buttonContact = document.getElementById("button-contact");
const contact = document.getElementById("contact");

buttonContact.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});
