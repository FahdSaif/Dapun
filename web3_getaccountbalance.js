let Web3 = require("web3");

//ganache local blockchain
let url_livemainnet="https://mainnet.infura.io/v3/09e605c0c8dc496ca1e3c31f36cd4b4a";

//contract address
//0x00000000219ab540356cBB839Cbe05303d7705Fa

let address = "0x00000000219ab540356cbb839cbe05303d7705fa";

let web3 = new Web3(url_livemainnet);

web3.eth.getBalance(address, function(error,value){
    if(!error){
        console.log(value);
        console.log(web3.utils.fromWei(value,'ether'));
    }else{
        console.log(error);
    }
})