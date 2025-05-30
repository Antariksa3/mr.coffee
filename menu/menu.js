const filterButtons = document.querySelectorAll(".filter-category button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    menuCards.forEach((card) => {
      if (
        category === "all" ||
        card.getAttribute("data-category") === category
      ) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

ScrollReveal().reveal(".title-section h1", { delay: 100 });
ScrollReveal().reveal(".filter-section", { delay: 200 });
ScrollReveal().reveal(".menu-card", {
  interval: 100,
  origin: "bottom",
  distance: "30px",
  duration: 500,
});
ScrollReveal().reveal(".footer-content", {
  distance: "50px",
  origin: "bottom",
  duration: 800,
  delay: 400,
  interval: 200,
  easing: "ease-in-out",
});
