window.onload = () => {
  createBtns();
  makeDateHeb();
};

const makeDateHeb = () => {
  Date.prototype.hebDate = function () {
    let days_ar = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
    return days_ar[this.getDay()];
  };
  let dt = new Date();
  alert(dt.hebDate());
};

const createBtns = () => {
  let btn1 = new BtnCountry("#id_parent", "israel", 9.5);
  btn1.render();

  let btn2 = new BtnCountry("#id_parent", "USA", 350);
  btn2.render();

  BtnCountry.changeBtnsToYellow();
  // BtnCountry.changeBtnsToBlue();
};
