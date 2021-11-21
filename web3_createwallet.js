let Web3 = require("web3");

let url ="http://127.0.0.1:7545";

let web3=  new Web3(url);

let mywallet = web3.eth.accounts.wallet.create(2,'some random');

console.log(mywallet);