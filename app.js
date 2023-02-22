"use strict";

window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  console.log("fstart");

  document.querySelector("#jalapeno_container").classList.add("falling_1");
  document.querySelector("#salad_container").classList.add("falling_2");
  document.querySelector("#tomato_container").classList.add("falling_3");
  document.querySelector("#banana_container").classList.add("pattern");
  document.querySelector("#strawberry_container").classList.add("sliding");

  document
    .querySelector("#jalapeno_container")
    .addEventListener("click", clickJalapeno);
  document
    .querySelector("#salad_container")
    .addEventListener("click", clickSalad);
  document
    .querySelector("#tomato_container")
    .addEventListener("click", clickTomato);
  document
    .querySelector("#banana_container")
    .addEventListener("click", clickBanana);
  document
    .querySelector("#strawberry_container")
    .addEventListener("click", clickStrawberry);
}

function clickJalapeno() {
  console.log("Click jalapeno");
  document
    .querySelector("#jalapeno_container")
    .removeEventListener("click", clickJalapeno);
  document.querySelector("#jalapeno_container").classList.add("paused");

  document.querySelector("#jalapeno_sprite").classList.add("zoom_out");

  document
    .querySelector("#jalapeno_container")
    .addEventListener("animationend", jalapenoGone);

  incrementPoints3();
}

function incrementPoints3() {
  console.log("incrementPoints3");
  points = points + 3;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#point_count").textContent = points;
}

function jalapenoGone() {
  document
    .querySelector("#jalapeno_container")
    .removeEventListener("animationend", jalapenoGone);
  document.querySelector("#jalapeno_sprite").classList.remove("zoom_out");
  document.querySelector("#jalapeno_container").classList.remove("paused");
  document.querySelector("#jalapeno_container").classList.remove("falling");
  document.querySelector("#jalapeno_container").offsetWidth;
  document.querySelector("#jalapeno_container").classList.add("falling");
  document
    .querySelector("#jalapeno_container")
    .addEventListener("click", clickJalapeno);
}

function clickSalad() {
  console.log("Click salad");
  document
    .querySelector("#salad_container")
    .removeEventListener("click", clickSalad);
  document.querySelector("#salad_container").classList.add("paused");
  document.querySelector("#salad_sprite").classList.add("zoom_out");
  document
    .querySelector("#salad_container")
    .addEventListener("animationend", saladGone);

  incrementPoints2();
}

function incrementPoints2() {
  console.log("incrementPoints2");
  points = points + 2;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#point_count").textContent = points;
}

function saladGone() {
  document
    .querySelector("#salad_container")
    .removeEventListener("animationend", saladGone);
  document.querySelector("#salad_sprite").classList.remove("zoom_out");
  document.querySelector("#salad_container").classList.remove("paused");
  document.querySelector("#salad_container").classList.remove("falling");
  document.querySelector("#salad_container").offsetWidth;
  document.querySelector("#salad_container").classList.add("falling");
  document
    .querySelector("#salad_container")
    .addEventListener("click", clickSalad);
}

function clickTomato() {
  console.log("Click tomato");
  document
    .querySelector("#tomato_container")
    .removeEventListener("click", clickTomato);
  document.querySelector("#tomato_container").classList.add("paused");
  document.querySelector("#tomato_sprite").classList.add("zoom_out");
  document
    .querySelector("#tomato_container")
    .addEventListener("animationend", tomatoGone);

  incrementPoints1();
}

function incrementPoints1() {
  console.log("incrementPoints1");
  points = points + 1;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#point_count").textContent = points;
}

function tomatoGone() {
  document
    .querySelector("#tomato_container")
    .removeEventListener("animationend", tomatoGone);
  document.querySelector("#tomato_sprite").classList.remove("zoom_out");
  document.querySelector("#tomato_container").classList.remove("paused");
  document.querySelector("#tomato_container").classList.remove("falling");
  document.querySelector("#tomato_container").offsetWidth;
  document.querySelector("#tomato_container").classList.add("falling");
  document
    .querySelector("#tomato_container")
    .addEventListener("click", clickTomato);
}

function clickBanana() {
  console.log("click banana");

  document
    .querySelector("#banana_container")
    .removeEventListener("click", clickBanana);
  document.querySelector("#banana_container").classList.add("paused");
  document.querySelector("#banana_sprite").classList.add("zoom_in");
  document
    .querySelector("#banana_container")
    .addEventListener("animationend", bananaGone);
  decrementLives();
}

function clickStrawberry() {
  console.log("click strawberry");

  document
    .querySelector("#strawberry_container")
    .removeEventListener("click", clickStrawberry);
  document.querySelector("#strawberry_container").classList.add("paused");
  document.querySelector("#strawberry_sprite").classList.add("zoom_in");
  document
    .querySelector("#strawberry_container")
    .addEventListener("animationend", strawberryGone);
  decrementLives();
}

function decrementLives() {
  console.log("banana bad");
  displayDecrementLives();
  lives--;
}
function displayDecrementLives() {
  console.log("badlives");
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}
function bananaGone() {
  document
    .querySelector("#banana_container")
    .removeEventListener("animationend", bananaGone);
  document.querySelector("#banana_container").classList.remove("paused");
  document.querySelector("#banana_sprite").classList.remove("zoom_in");
  document.querySelector("#banana_container").classList.remove("pattern");
  document.querySelector("#banana_container").offsetWidth;
  document.querySelector("#banana_container").classList.add("pattern");

  document
    .querySelector("#banana_container")
    .addEventListener("click", clickBanana);
}

function strawberryGone() {
  document
    .querySelector("#strawberry_container")
    .removeEventListener("animationend", strawberryGone);
  document.querySelector("#strawberry_container").classList.remove("paused");
  document.querySelector("#strawberry_sprite").classList.remove("zoom_in");
  document.querySelector("#strawberry_container").classList.remove("sliding");
  document.querySelector("#strawberry_container").offsetWidth;
  document.querySelector("#strawberry_container").classList.add("sliding");

  document
    .querySelector("#strawberry_container")
    .addEventListener("click", clickStrawberry);
}
//   document.querySelector("#banana_container").classList.add("pattern");
//   document.querySelector("#jalapeno_container").classList.add("falling_1");
//   document.querySelector("#salad_container").classList.add("falling_2");
//   document.querySelector("#strawberry_container").classList.add("sliding");
//   document.querySelector("#tomato_container").classList.add("falling_3");

//   document
//     .querySelector("#banana_container")
//     .addEventListener("click", clickBanana);
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
// }

// function clickBanana() {
//   console.log("Click Banana");
//   document
//     .querySelector("#banana_container")
//     .removeEventListener("click", clickBanana);

//   document.querySelector("#banana_container").classList.add("paused");
//   document.querySelector("#banana_sprite").classList.add("zoom_in");
//   document
//     .querySelector("#banana_container")
//     .addEventListener("animationend", bananaGone);
//   decrementedLives();
// }

// function decrementedLives() {
//   console.log("decrementedLives");
//   displayDecrementedLives();
//   lives--;
// }

// function displayDecrementedLives() {
//   console.log("#health" + lives);
//   document.querySelector("#health" + lives).classList.remove("active_heart");
//   document.querySelector("#health" + lives).classList.add("broken_heart");
// }

// function bananaGone() {
//   document
//     .querySelector("#banana_container")
//     .removeEventListener("animationend", bananaGone);
//   document.querySelector("#banana_sprite").classList.remove("zoom_in");
//   document.querySelector("#banana_container").classList.remove("paused");

//   document.querySelector("banana_container").classList.remove("pattern");
//   document.querySelector("banana_container").offsetWidth;
//   document.querySelector("banana_container").classList.add("pattern");

//   document.querySelector("#banana_container").classList.add("pattern");
// }
