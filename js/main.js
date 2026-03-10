"use strict";
console.log("Hello world!");

const navBtnEl = document.querySelector(".nav__btn");
const navEl = document.querySelector(".nav");

console.log(navBtnEl);

navBtnEl.addEventListener("click", (ev) => {
  if (navEl.dataset.open == "true") {
    navEl.dataset.open = "false";
  } else {
    navEl.dataset.open = "true";
  }

  document.body.classList.toggle("no-scroll");
});
