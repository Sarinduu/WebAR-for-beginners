// window.addEventListener("scroll", function () {
//   const nav = document.querySelector(".sticky-nav");
//   if (window.scrollY > window.innerHeight - 80) {
//     nav.classList.add("scrolled");
//   } else {
//     nav.classList.remove("scrolled");
//   }
// });

fetch("./components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
  });

// Load footer
fetch("./components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
