const NAME_CAR = Symbol("name of the car");

let car_obj = {
  [NAME_CAR]: "mazda",
  color: "red",
  price: 40000,
};

console.log(car_obj[NAME_CAR]);

const NAME = "name";
const COLOR = "color";

let car_map = new Map([
  ["km", 10000],
  ["yad", 2],
]);
car_map.set(NAME, "toyota");
car_map.set(COLOR, "black");
car_map.set("price", 40000);

console.log("color:", car_map.get(COLOR));
console.log("color:", car_map.get("color"));
for (const item of car_map) {
  console.log(item[0], ":", item[1]);
}
//   alert(car_map.get("name"));
console.log(car_map.has("color"));
console.log(car_map.has("year"));

console.log(car_map.size);
