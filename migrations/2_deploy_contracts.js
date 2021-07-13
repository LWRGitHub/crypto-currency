const CryptoCoin = artifacts.require("CryptoCoin");

module.exports = function(deployer){
    deployer.deploy(CryptoCoin, 100)
}