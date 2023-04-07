// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AD3 is ERC20 {
    constructor() ERC20("AD3", "AD3") {}

    function mint(address account, uint256 amount) external virtual {
        super._mint(account, amount);
    }

    function burn(address account, uint256 amount) external virtual {
        super._burn(account, amount);
    }
}