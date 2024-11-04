/***Navbar Toggle ****/
let navBar = document.querySelector(".navLinks");
let menuBar = document.querySelector("#menuBtn");

menuBar.onclick = () => {
  navBar.classList.toggle("active");
};
