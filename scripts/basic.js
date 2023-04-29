const menuClick = document.getElementById("navMenuButton");
const menu = document.getElementById("navMenu");

menuClick.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
