"use strict";

window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  console.log("fstart");

  document.querySelector("#banana_container").classList.add("pattern");
  //   document.querySelector("#jalapeno_container").classList.add("falling_1");
  //   document.querySelector("#salad_container").classList.add("falling_2");
  //   document.querySelector("#strawberry_container").classList.add("sliding");
  //   document.querySelector("#tomato_container").classList.add("falling_3");

  document
    .querySelector("#banana_container")
    .addEventListener("click", clickBanana);
  //   document
  //     .querySelector("#jalapeno_container")
  //     .addEventListener("click", clickJalapeno);
  //   document
  //     .querySelector("#salad_container")
  //     .addEventListener("click", clickSalad);
  //   document
  //     .querySelector("#strawberry_container")
  //     .addEventListener("click", clickStrawberry);
  //   document
  //     .querySelector("#tomato_container")
  //     .addEventListener("click", clickTomato);
}

function clickBanana() {
  console.log("Click Banana");
  document
    .querySelector("#banana_container")
    .removeEventListener("click", clickBanana);

  document.querySelector("#banana_container").classList.add("paused");
  document.querySelector("#banana_sprite").classList.add("zoom_in");
  document
    .querySelector("#banana_container")
    .addEventListener("animationend", bananaGone);
  decrementedLives();
}

function decrementedLives() {
  console.log("decrementedLives");
  displayDecrementedLives();
  lives--;
}

function displayDecrementedLives() {
  console.log("#health" + lives);
  document.querySelector("#health" + lives).classList.remove("active_heart");
  document.querySelector("#health" + lives).classList.add("broken_heart");
}

function bananaGone() {
  document
    .querySelector("#banana_container")
    .removeEventListener("animationend", bananaGone);
  document.querySelector("#banana_sprite").classList.remove("zoom_in");
  document.querySelector("#banana_container").classList.remove("paused");

  document.querySelector("banana_container").classList.remove("pattern");
  document.querySelector("banana_container").offsetWidth;
  document.querySelector("banana_container").classList.add("pattern");

  document.querySelector("#banana_container").classList.add("pattern");
}
