var burger = document.getElementById("burger");
var close = document.getElementById("cls");

function startMenu() {
  var nav = document.getElementById("navigation");

  nav.style.display = "block";
};

function closeMenu() {
  var nav = document.getElementById("navigation");

  nav.style.display = "none";
};

burger.addEventListener("click", startMenu);
close.addEventListener("click", closeMenu);