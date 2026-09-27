document.addEventListener("DOMContentLoaded", () => {

  // Hide opening loader
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      loader.style.pointerEvents = "none";
    }, 800);
  }

  // Show website content
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    element.classList.add("show");
  });

  // Mobile menu
  const menu = document.getElementById("menu");
  const header = document.querySelector("header");

  if (menu && header) {
    menu.addEventListener("click", () => {
      header.classList.toggle("open");
    });
  }

  // Close menu after clicking a link
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (header) {
        header.classList.remove("open");
      }
    });
  });

  // Footer year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
