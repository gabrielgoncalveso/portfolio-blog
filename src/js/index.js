const buttonInit = document.getElementById("button-init");
const init = document.getElementById("init");

buttonInit.addEventListener("click", () => {
  init.scrollIntoView({ behavior: "smooth" });
});

const mobileButtonInit = document.getElementById("mobile-button-init");

buttonInit.addEventListener("click", () => {
  init.scrollIntoView({ behavior: "smooth" });
});
mobileButtonInit.addEventListener("click", () => {
  scroll({ top: 0, behavior: "smooth" });
  document.getElementById("menu-mobile").classList.add("hidden");
});

const buttonAbout = document.getElementById("button-about");
const mobileButtonAbout = document.getElementById("mobile-button-about");
const about = document.getElementById("about");

buttonAbout.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

mobileButtonAbout.addEventListener("click", () => {
  init.scrollIntoView({ behavior: "smooth" });
  document.getElementById("menu-mobile").classList.add("hidden");
});

const buttonTechnologies = document.getElementById("button-technologies");
const mobileButtonTechnologies = document.getElementById(
  "mobile-button-technologies"
);
const technologies = document.getElementById("technologies");

buttonTechnologies.addEventListener("click", () => {
  technologies.scrollIntoView({ behavior: "smooth" });
});

mobileButtonTechnologies.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth", block: "end" });
  document.getElementById("menu-mobile").classList.add("hidden");
});

const buttonContact = document.getElementById("button-contact");
const mobileButtonContact = document.getElementById("mobile-button-contact");
const contact = document.getElementById("contact");

buttonContact.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

mobileButtonContact.addEventListener("click", () => {
  technologies.scrollIntoView({ behavior: "smooth", block: "end" });
  document.getElementById("menu-mobile").classList.add("hidden");
});

const buttonCloseMenu = document.getElementById("sandwich-close-button");
buttonCloseMenu.addEventListener("click", () => {
  document.getElementById("menu-mobile").classList.add("hidden");
});

const buttonOpenMenu = document.getElementById("sandwich-open-button");
buttonOpenMenu.addEventListener("click", () => {
  document.getElementById("menu-mobile").classList.remove("hidden");
});
