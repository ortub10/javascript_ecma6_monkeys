export class CryptoClass {
  constructor(_parent, _name, _price) {
    this.parent = _parent;
    this.name = _name;
    this.price = _price;
  }

  renderToHtml() {
    let newDiv = document.createElement("div");
    newDiv.className = "col-6 border p-3";
    document.querySelector(this.parent).append(newDiv);

    newDiv.innerHTML += `<h3>${this.name}</h3>
    <div>Value: ${this.price} USD</div>`;
  }
}
