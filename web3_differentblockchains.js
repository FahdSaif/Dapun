let Web3 = require("web3");

//ganache local blockchain
let url_ganache="http://127.0.0.1:7545";

//connect to infura
const url_infura =  "https://ropsten.infura.io/v3/60ba7abe4b2e4d5b97460804b2b07e16";

let web3 =  new Web3(url_ganache);

console.log(web3);
