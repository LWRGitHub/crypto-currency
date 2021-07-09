const CryptoCoin = artifacts.requite("CryptoCoin");

module.export = function (deployer){
    deployer.deploy(CryptoCoin)
}