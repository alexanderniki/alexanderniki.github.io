/*
 * gallery.js
 * Taken from https://dev.to/wepukhulutimothy/image-gallery-with-vanilla-javascript-518g
 */


let current = document.getElementById("current");
let opacity = 0.6;
let imgs = document.querySelectorAll(".img");

imgs.forEach(img => {
  img.addEventListener("click", (e) => {
    //reset opacity
    imgs.forEach(img => {img.style.opacity = 1;
    });
  current.src = e.target.src;
  //adding class 
  //current.classList.add("fade-in");
  //opacity
  e.target.style.opacity = opacity; 
  });
});