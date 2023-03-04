const open = document.getElementById("btnHumbMenu");
const close = document.getElementById("closeMenu");
let menu = document.querySelector(".humMenu");

open.addEventListener("click", function () {
  menu.style.display = "block";
  open.style.display = "none";
});

close.addEventListener("click", function () {
  menu.style.display = "none";
  open.style.display = "block";
});
