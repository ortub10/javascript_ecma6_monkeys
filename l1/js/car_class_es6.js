class Car {
  constructor(_name, _year, _price) {
    this.name = _name;
    this.year = _year;
    this.price = _price;
  }

  addToHtml() {
    let id_parent = document.querySelector("#id_parent");
    id_parent.innerHTML += `<h2>${this.name}</h2>`;
    id_parent.innerHTML += `<div>${this.year}</div>`;
    id_parent.innerHTML += `<div>${this.price}</div>`;
  }
}

class Truck extends Car {
  constructor(_name, _year, _price, _kg) {
    super(_name, _year, _price);
    this.kg = _kg;
  }
  addToHtml() {
    super.addToHtml();
    let id_parent = document.querySelector("#id_parent");
    id_parent.innerHTML += `<div> kg:${this.kg}</div>`;
  }
}
