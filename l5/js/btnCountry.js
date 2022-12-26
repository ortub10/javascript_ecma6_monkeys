class BtnCountry {
  constructor(_parent, _name, _pop) {
    this.parent = _parent;
    this.name = _name;
    this.pop = _pop;
  }

  static changeBtnsToBlue() {
    document.querySelectorAll(".myBtn").forEach((item) => {
      item.className = "btn btn-info mx-2 myBtn";
    });
  }

  render() {
    let btn = document.createElement("button");
    btn.className = "btn btn-danger mx-2 myBtn";
    btn.innerHTML = this.name;
    document.querySelector(this.parent).append(btn);

    btn.addEventListener("click", () => {
      this.showPop();
    });
  }

  // showPop() {
  //   alert("pop:" + this.pop + " M");
  // }
}

BtnCountry.prototype.showPop = function () {
  alert("pop:" + this.pop + " M");
};

BtnCountry.changeBtnsToYellow = function () {
  document.querySelectorAll(".myBtn").forEach((item) => {
    item.className = "btn btn-warning mx-2 myBtn";
  });
};
