pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CryptoCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("CryptoCoin", "CRYC") {
        _mint(msg.sender, initialSupply);
    }
}