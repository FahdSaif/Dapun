let Web3 = require("web3");
//let url ="http://127.0.0.1:7545";

//connect to infura
const url_infura =  "wss://mainnet.infura.io/ws/v3/09e605c0c8dc496ca1e3c31f36cd4b4a";
let web3=  new Web3(url_infura);

//show all pending transactions
// web3.eth.subscribe('pendingTransactions',(error,txhash)=>{
//     if(!error)
//     {   
//         console.log(txhash);
//     }else{
//         console.log(error);
//     }
// })

//show pending transactions where value of Ether > 1
web3.eth.subscribe('pendingTransactions',(error,txhash)=>{
    if(!error){
        web3.eth.getTransaction(txhash,(error,tx)=>{
            if(tx!=null)
            {
                // view all transactions : console.log(tx)
                if(tx.value >= 1) //filter the transaction where value > 1 wei
                {
                    somevar = tx.value //store teh value in a variable
                    newsomevar = web3.utils.fromWei(somevar,'ether');
                    if(newsomevar>1){ //show only those > 1 ether
                        console.log(txhash); // or i 
                        console.log(newsomevar);     
                    }
                    
                }
            }
        })
    }else{
        console.log(error)
    }
})