const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];
const body = document.body;

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  body.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  body.classList.remove("active");
});
