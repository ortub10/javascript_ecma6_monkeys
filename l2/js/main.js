import { CryptoClass } from "./bit.js";

window.onload = () => {
  doRestApi();
};

const doRestApi = () => {
  let myUrl = "http://fs1.co.il/bus/bitcoin.php";
  fetch(myUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.map((item) => {
        let coin = new CryptoClass("#id_row", item.name, item.price_usd);
        coin.renderToHtml();
      });
    });
};
