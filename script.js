const themeButton = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

function updateThemeButton() {
  themeButton.textContent = document.body.classList.contains("dark")
    ? "☀️ Light"
    : "🌙 Dark";
}

updateThemeButton();

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );

  updateThemeButton();
});

document.getElementById("year").textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll(".filter-btn");
const works = document.querySelectorAll(".work");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    works.forEach((work) => {
      const categories = work.dataset.category.split(" ");
      const show = filter === "all" || categories.includes(filter);
      work.classList.toggle("hidden", !show);
    });
  });
});

const navLinks = document.querySelectorAll(".links a");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});