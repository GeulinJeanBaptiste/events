console.log("bonjour");
// JE suis un commentaire simple ligne (Ctrl+:)
/* JE suis en commentaire multi lignes (Alt+Shidt+A) */
/*  Pour ajouter un event (ecouteur d'evement) sur un HTMLElement avec une fonction getElementById ou querySelector...
 j'utilise la fonction addEventListener()
 */

document.getElementById("menubtn1").addEventListener("click", function () {
  console.log("click sur mon menu btn1 youpi!!!!!!");
  //   document.querySelector("#menubtn1 .submenu").style.height = "120px";
  //   console.dir(document.querySelector("#menubtn1 .submenu"));
  //   Je declare une variable qui va contenir l'HTMLElement : document.querySelector("#menubtn1 .submenu").
  // J'utilise le mot clé var et je lui donne un nom (submenu).
  var submenu = document.querySelector("#menubtn1 .submenu");
  //   je peux maintenant utiliser cette variable à la place de l'HTMLElement lui-même.

  submenu.classList.toggle("hide");
  submenu.classList.toggle("show");
});

var img = document.querySelector("img");

img.addEventListener("dblclick", function () {
  console.log("test");
  img.src = "/assets/img/singe2.jpg";
  img.style.height = "500px";
  img.alt = "bisous";
});
document.getElementById("menubtn2").addEventListener("click", function () {
  console.log("click sur mon menu btn1 youpi!!!!!!");

  var submenu = document.querySelector("#menubtn2 .submenu");

  submenu.classList.toggle("hide");
  submenu.classList.toggle("show");
});
document.getElementById("menubtn3").addEventListener("click", function () {
  console.log("click sur mon menu btn1 youpi!!!!!!");

  var submenu = document.querySelector("#menubtn3 .submenu");

  submenu.classList.toggle("hide");
  submenu.classList.toggle("show");
});
