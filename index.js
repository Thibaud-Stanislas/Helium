const curseur = document.querySelector(".curseur");

window.addEventListener("mousemove", (e) => {
  curseur.style.left = e.pageX + "px";
  curseur.style.top = e.pageY + "px";
});
