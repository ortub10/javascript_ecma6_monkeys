window.onload = () => {
  createBtns();
};

const createBtns = () => {
  let btn1 = new BtnCountry("#id_parent", "israel", 9.5);
  btn1.render();

  let btn2 = new BtnCountry("#id_parent", "USA", 350);
  btn2.render();

  BtnCountry.changeBtnsToYellow();
  // BtnCountry.changeBtnsToBlue();
};
