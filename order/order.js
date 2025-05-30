document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const addons = document.querySelectorAll('input[name="addons"]:checked');

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email.");
      return;
    }

    if (address.length < 10) {
      alert("Please enter a complete address (at least 10 characters).");
      return;
    }

    alert("Order placed successfully!");

    form.reset();
  });
});

ScrollReveal().reveal(".title-section h1", {
  origin: "bottom",
  distance: "30px",
  duration: 700,
  delay: 100,
  reset: false,
});
ScrollReveal().reveal(".title-section h2", {
  origin: "bottom",
  distance: "30px",
  duration: 700,
  delay: 200,
  reset: false,
});
ScrollReveal().reveal(".order-img", {
  origin: "left",
  distance: "30px",
  duration: 700,
  delay: 400,
  reset: false,
});
ScrollReveal().reveal(".order-form", {
  origin: "right",
  distance: "30px",
  duration: 700,
  delay: 400,
  reset: false,
});
ScrollReveal().reveal(".order-button", {
  origin: "bottom",
  distance: "30px",
  duration: 700,
  delay: 800,
  reset: false,
});
ScrollReveal().reveal(".footer-wrapper", {
  origin: "bottom",
  distance: "60px",
  duration: 1000,
});
ScrollReveal().reveal(".footer-content", {
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  interval: 200,
});
