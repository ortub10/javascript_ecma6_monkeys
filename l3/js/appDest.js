import { car3, car4 } from "./cars.js";

let car = {
  name: "mazda",
  color: "blue",
  year: 2023,
};

let car2 = {
  name: "tesla",
  color: "white",
  year: 2023,
};

let fruits_ar = ["apple", "Banana", "kiwi"];

const init = () => {
  let { name, color } = car;
  document.body.innerHTML = `Your car is ${name} and your color is ${color}`;

  showCarInfo(car2);
  showCarInfo(car3);
  showCarInfo(car4);
  let [a, b, c] = fruits_ar;
  console.log(a);
  console.log(b);
  console.log(c);
};

const showCarInfo = ({ name, color }) => {
  document.body.innerHTML += `<h3>Your car is ${name} and your color is ${color}</h3>`;
};

init();
