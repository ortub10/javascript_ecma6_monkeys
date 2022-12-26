window.onload = () => {
  init();
};

const init = async () => {
  let myUrl = "http://fs1.co.il/bus/bitcoin.php";
  let resp = await fetch(myUrl);
  let data = await resp.json();
  console.log(data);
};
