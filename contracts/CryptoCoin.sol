pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CryptoCoin is ERC20 {
    constructor() ERC20("CryptoCoin", "CRYC") {
        _mint(msg.sender, 100);
    }

    function decimals() public view virtual override returns (uint8) {
        return 0; // we will ONLY support whole number amount of tokens
    }


}
