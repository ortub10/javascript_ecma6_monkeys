import Ball from "./ballClass.js";

let numbers_ar = [];
let timer;
let counter;
let play = false;
window.onload = () => {
  declareEvents();
};

const declareEvents = function () {
  let start_btn = document.querySelector("#start_btn");
  let reset_btn = document.querySelector("#reset_btn");

  start_btn.addEventListener("click", startLotto);
  reset_btn.addEventListener("click", resetLotto);
};

const resetLotto = () => {
  if (confirm("Are you sure you want to restart?")) {
    document.querySelector("#id_balls").innerHTML = "";
    clearInterval(timer);
    play = false;
  }
};

const startLotto = () => {
  if (!play) {
    play = true;
    let colors_ar = ["red", "blue", "green", "black", "silver", "gold"];
    colors_ar = _.shuffle(colors_ar);
    for (let i = 0; i < 20; i++) {
      numbers_ar.push(i + 1);
    }

    numbers_ar = _.shuffle(numbers_ar);
    counter = 0;
    timer = setInterval(() => {
      // document.querySelector("#id_balls").innerHTML += numbers_ar[counter];
      let ball = new Ball("#id_balls", numbers_ar[counter], colors_ar[counter]);
      ball.render();
      counter++;
      if (counter >= 6) {
        clearInterval(timer);
      }
    }, 1000);
  }
};
