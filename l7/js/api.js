const init = () => {
  doApi();
};

const doApi = async () => {
  let url = " http://fs1.co.il/bus/xbox1.php";
  let url2 = " http://fs1.co.il/bus/xbox2.php";

  let urls_ar = [url, url2];
  let gets_ar = urls_ar.map((getUrl) => {
    return axios.get(getUrl);
  });

  let resp = await axios.all(gets_ar);
  let ar = [];
  resp.forEach((item) => {
    ar.push(...item.data);
  });
  console.log(resp);
  console.log(ar);

  // let resp = await axios.get(url);
  // console.log(resp.data);
  // createList(resp.data);
};

const createList = (_ar) => {
  _ar.forEach((item) => {
    document.querySelector("#id_ul").innerHTML += `
    <li>${item.Game} - ${item.Publisher}</li>`;
  });
};

init();
