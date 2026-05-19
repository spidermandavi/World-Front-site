function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}
