let numbers_ar = [];
let timer;
let counter;
window.onload = () => {
  declareEvents();
};

const declareEvents = function () {
  let start_btn = document.querySelector("#start_btn");
  let reset_btn = document.querySelector("#reset_btn");

  start_btn.addEventListener("click", startLotto);
  reset_btn.addEventListener("click", () => {});
};

const startLotto = () => {
  for (let i = 0; i < 20; i++) {
    numbers_ar.push(i + 1);
  }
  counter = 0;
  timer = setInterval(() => {
    document.querySelector("#id_balls").innerHTML += numbers_ar[counter];
    counter++;
    if (counter >= 6) {
      clearInterval(timer);
    }
  }, 1000);
};
