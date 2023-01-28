const navbar = document.querySelector(".navigation-wrapper");
console.log(navbar);

window.addEventListener("scroll", () => {
  window.scrollY > 0
    ? navbar.classList.add("scrolled")
    : navbar.classList.remove("scrolled");
});
