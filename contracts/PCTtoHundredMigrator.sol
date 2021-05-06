// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./HundredVesting.sol";

contract PCTtoHundredMigrator {
    using SafeMath for uint256;

    IERC20 public immutable PCT;
    IERC20 public immutable Hundred;
    HundredVesting public immutable Vesting;
    uint256 public UserPercent = 10;
    uint256 public VestingPercent = 90;
    uint256 public PercentMax = 100;

    constructor(IERC20 pct, IERC20 hundred, address vesting) {
        PCT = pct;
        Hundred = hundred;
        Vesting = HundredVesting(vesting);
    }

    function claim(uint256 amount) public {
        require(amount != 0, "Amount should bigger than 0");

        PCT.transferFrom(msg.sender, address(this), amount);
        Hundred.transfer(msg.sender, amount.mul(UserPercent).div(PercentMax));
        Hundred.transfer(address(Vesting), amount.mul(VestingPercent).div(PercentMax));
        Vesting.vesting(msg.sender, amount.mul(VestingPercent).div(PercentMax));
    }
}