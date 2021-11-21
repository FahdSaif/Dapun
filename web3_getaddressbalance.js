// Connect to the metamask wallet and get the amount of ether it has

const Web3 = require("Web3");
const rpcURL =  "https://ropsten.infura.io/v3/60ba7abe4b2e4d5b97460804b2b07e16";
const account = "0x5CB41C9cE92Db12E956538841943F0830D24599F"; //address of my metamask account

const web3 = new Web3(rpcURL);

console.log(web3);

console.log("before retrieve call");
// web3.eth.getBalance(account,(err,wei)=>{
//     console.log("Amount in Wei");
//     console.log(wei);
//     balance = web3.utils.fromWei(wei,'ether');
//     console.log("Amount in Ether");
//     console.log(balance);
// }
// )


 function myDisplay() {

    var bal =  web3.eth.getBalance(account);
            console.log("new Amount in Wei");
            
            balance = web3.utils.fromWei(bal,'ether');
            console.log("new Amount in Ether");
            console.log(balance);
        
    

    console.log(myPromise);
  }
  
  myDisplay();

  console.log("After retrieve call");