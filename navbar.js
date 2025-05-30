const toggle = document.getElementById("menu-toggle");
const openIcon = document.getElementById("open-menu");
const closeIcon = document.getElementById("close-menu");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  openIcon.style.display =
    openIcon.style.display === "none" ? "inline" : "none";
  closeIcon.style.display =
    closeIcon.style.display === "none" ? "inline" : "none";
});
