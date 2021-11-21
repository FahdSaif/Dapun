//get block number
//standard web3 connection
let Web3 = require("web3");
//let url ="http://127.0.0.1:7545";

//connect to infura
const url_infura =  "https://ropsten.infura.io/v3/60ba7abe4b2e4d5b97460804b2b07e16";


let web3=  new Web3(url_infura);
//standard web3 connection

web3.eth.getBlockNumber().then((result)=>{
   // console.log(result);
})

web3.eth.getBlock(11168236).then((block)=>{
    //console.log(block);
})


//get the latest block numbers of the 100 blocks

web3.eth.getBlockNumber().then((result)=>{
    for(let i=0;i<100;i++){
        web3.eth.getBlock(result-1).then((block)=>{
            //console.log(block.number);
        })
    }
});


web3.eth.getBlock('latest').then((block)=>{
    //console.log(block.number);
})

//the current pending block
web3.eth.getBlock('pending').then((block)=>{
    //console.log(block.number);
})

//the current pending block
web3.eth.getBlock('0x4527be8f31e2ebfbef4fcaddb5a17447b27d2aef').then((block)=>{
    //console.log(block.number);
})


web3.eth.getTransactionfromBlock(11168408,2);