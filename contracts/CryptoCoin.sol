pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CryptoCoin is ERC20 {
    constructor() ERC20("CryptoCoin", "CRYC") {
        _mint(msg.sender, 100);
    }
}