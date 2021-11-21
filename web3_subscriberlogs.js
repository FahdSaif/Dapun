let Web3 = require("web3");
//let url ="http://127.0.0.1:7545";

//connect to infura
const url_infura =  "wss://mainnet.infura.io/ws/v3/09e605c0c8dc496ca1e3c31f36cd4b4a";
let web3=  new Web3(url_infura);

//subscribe to everything happening on ethereum
//{} - this means subscripbe to everything
//if I put something inside the brackets its a more specific filter
// web3.eth.subscribe('logs',{},(error,mylogs)=>{
//     if(!error){
//         console.log(mylogs);
//     }
// })

//0x06012c8cf97BEaD5deAe237070F9587f8E7A266d - this is teh cryptokitties contract address
    // web3.eth.subscribe('logs',{},(error,mylogs)=>{
    //     address=0x06012c8cf97BEaD5deAe237070F9587f8E7A266d; 
    //     if(!error){
    //         console.log(mylogs);
    //     }
    // })



    // event Pregnant(address owner, uint256 matronId, uint256 sireId, uint256 cooldownEndBlock);
    mypreg_event =  "Pregnant(address, uint256, uint256, uint256)";
    //now get the hash of this
    mypreg_event_hashed = web3.utils.sha3(mypreg_event);
    console.log(mypreg_event_hashed); //-> this is what i get 0x6b72145cd39e2a6fba0a95cf54f52ee8c8ed6f6fc53e22d98286b5ddc5ad7db6


    //subscribe to everything happening on ethereum
    //{} - this means subscripbe to everything
    //if I put something inside the brackets its a more specific filter

    //wherever thre is pregnant event happening inside the crypto kitties smart contract we are capturing that    
    web3.eth.subscribe('logs', {
        address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
        topics: ['0x6b72145cd39e2a6fba0a95cf54f52ee8c8ed6f6fc53e22d98286b5ddc5ad7db6'],
        fromBlock:'latest'    
    }, (error, result)=>{
        if (!error)
            console.log(result);
    })



// **************this is the result of the log**************
    // logIndex: 110,
    //   transactionIndex: 93,
    //   transactionHash: '0x9ba0b997543094916679c0e125a8c772a20da7c150434e24211aaee606775662',
    //   blockHash: '0xc829aba06627d2daf1c0a9799df020f83d037a0275b74912f3de6554cbdf6b76',
    //   blockNumber: 13382151,
    //   address: '0x4D184bf6F805Ee839517164D301f0C4e5d25c374',
    //   data: '0x000000000000000000000000000000000000000000001f2446bb2098086a7ff8000000000000000000000000000000000000000000000002d573c5df82e0e3be',
    //   topics: [
    //     '0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1'
    //   ],
    //   id: 'log_a8fc0999'
    // }
    // {
    //   removed: false,
    //   logIndex: 111,
    //   transactionIndex: 93,
    //   transactionHash: '0x9ba0b997543094916679c0e125a8c772a20da7c150434e24211aaee606775662',
    //   blockHash: '0xc829aba06627d2daf1c0a9799df020f83d037a0275b74912f3de6554cbdf6b76',
    //   blockNumber: 13382151,
    //   address: '0x4D184bf6F805Ee839517164D301f0C4e5d25c374',
    //   data: '0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c68af0bb14000000000000000000000000000000000000000000000000001e86e77e6e44ca8fe50000000000000000000000000000000000000000000000000000000000000000',
    //   topics: [
    //     '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822',
    //     '0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d',
    //     '0x000000000000000000000000e4c703ba575cee73a3a65c76bbff842a728e0a7c'
    //   ],
    //   id: 'log_14e75ccc'
    // }
// **************this is the result of the log**************


//Now lets say we are interested in the crupto kitty logs
// so we will do something like this
// search for crypto kitties on the etherscan.io
//this is the crypto kitty contract address: 0x06012c8cf97BEaD5deAe237070F9587f8E7A266d
// now I want to filter the logs of cruptokitties


