// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./HundredVesting.sol";

contract PCTtoHundredMigrator {
    // not sure SafeMath is needed here...
    using SafeMath for uint256;

    IERC20 public immutable PCT;
    IERC20 public Hundred;
    HundredVesting public immutable Vesting;
    uint256 public UserPercent = 10;
    uint256 public VestingPercent = 90;
    uint256 public PercentMax = 100;

    constructor(IERC20 pct, IERC20 hundred, address vesting) {
        PCT = pct;
        Hundred = hundred;
        Vesting = HundredVesting(vesting);
        Hundred.approve(vesting, type(uint256).max);
    }

    function claim(uint256 amount) public {
        require(amount != 0, "Amount should bigger than 0");

        uint256 immediateAmount = amount * UserPercent / PercentMax;
        uint256 vestingAmount = amount - immediateAmount;

        // should use a safe transferFrom or check
        // output before going further
        PCT.transferFrom(msg.sender, address(this), amount);

        Hundred.transfer(msg.sender, immediateAmount);
        Vesting.vesting(msg.sender, vestingAmount);
    }
}