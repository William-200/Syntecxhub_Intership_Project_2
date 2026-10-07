// Syntecxhub Project 2
// Mobile navigation and smooth interaction

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuBtn.setAttribute("aria-expanded", isOpen);

  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a navigation link.
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});
