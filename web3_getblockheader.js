let Web3 = require("web3");
//let url ="http://127.0.0.1:7545";

//connect to infura
const url_infura =  "wss://mainnet.infura.io/ws/v3/09e605c0c8dc496ca1e3c31f36cd4b4a";
let web3=  new Web3(url_infura);

//everytime a new block comes in we subscribe to it and print out its data

web3.eth.subscribe('newBlockHeaders',(error,blockheader)=>{
    if(!error)
    {
        console.log(blockheader);
    }else{
        console.log(error);
    }
})