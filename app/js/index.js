$(document).ready(function(){
    // Initialize 
    // let accounts = web3.eth.accounts
    CryptoCoin.detectNetwork();

    $("#crypto-coin-form").submit(function (e){
        e.preventDefault();

        CryptoCoin.deployed().then(function (instance){

            let metadata = {
                "receiver": $("#receiver").val(),
                "amount": $("#amount").val()
            }

            CryptoCoin.awardItem(receiver, amount);
        })
    })
})