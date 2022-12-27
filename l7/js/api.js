const init = () => {
  doApi();
};

const doApi = async () => {
  let url = " http://fs1.co.il/bus/xbox2.php";
  let resp = await axios.get(url);
  // console.log(resp.data);
  createList(resp.data);
};

const createList = (_ar) => {
  _ar.forEach((item) => {
    document.querySelector("#id_ul").innerHTML += `
    <li>${item.Game} - ${item.Publisher}</li>`;
  });
};

init();
