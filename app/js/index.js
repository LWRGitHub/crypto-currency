
import Web3 from "web3";
import cryptoCoinArtifact from "../../build/contracts/CryptoCoin.json";

const App = {
    web3: null,
    account: null,
    cryptoContract: null,

    start: async function () {
        // Connect to Web3 instance.
        const { web3 } = this;

        try {
            // Get contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = cryptoCoinArtifact.networks[networkId];
            this.cryptoContract = new web3.eth.Contract(
                cryptoCoinArtifact.abi,
                deployedNetwork.address,
            );

            // Get accounts and refresh the balance.
            const accounts = await web3.eth.getAccounts();
            this.account = accounts[0];
            this.refreshBalance();
        } catch (error) {
            console.error("Could not connect to contract or chain: ", error);
        }
    },
    refreshBalance: async function () {
        // Fetch the balanceOf method from our contract.
        const { balanceOf } = this.cryptoContract.methods;

        // Fetch crypto amount by calling balanceOf in our contract.
        const balance = await balanceOf(this.account).call();

        // Update the page using jQuery.
        $('#balance').html(balance);
        $('#total-crypto').show();
        $('my-account').html(this.account);
    },
    _mint: async function (amount) {
        // Fetch the balanceOf method from our contract.
        const { _mint } = this.cryptoContract.methods;

        // Fetch crypto amount by calling balanceOf in our contract.
        const mint = await _mint(this.account, amount).call();

        // Update the page using jQuery.
        $('#balance').html(mint);
        $('#total-crypto').show();
        $('my-account').html(this.account);
    },
}

$(document).ready(function(){

    // Detect Web3 provider.
    if (window.ethereum) {
        // use MetaMask's provider
        App.web3 = new Web3(window.ethereum);
        window.ethereum.enable(); // get permission to access accounts
    } else {
        console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",);
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        App.web3 = new Web3(
            new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
        );
    }
    // Initialize Web3 connection.
    window.App.start();

    $("#crypto-coin-form").submit(function (e){
        e.preventDefault();

        // const from = $("#from").val();
        const to = $("#to").val();
        const amount = $("#amount").val();

        // metadata
        // window.App.storeMetadata(from, to, message);

        window.App.balanceOf(to, amount);
        window.App._mint(to, amount)

    })
})