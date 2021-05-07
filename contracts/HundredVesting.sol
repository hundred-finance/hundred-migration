// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.3;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// no Ownable modifiers are used
// does it really need to inherit
// from Ownable ?
contract HundredVesting is Ownable {
    IERC20 public immutable Hundred;
    uint256 totalPeriod = 365 * 24 * 60 * 60;
    // timePerPeriod seems to be used once
    // in a formulae where its value is canceled
    // after expanding the expression
    // which indicate it is not needed
    uint256 timePerPeriod;
    struct UserInfo {
        uint256 amount;
        uint256 timestamp;
        uint256 claimedAmount;
    }
    mapping(address => UserInfo) addresses; 

    constructor(IERC20 hundred, uint256 period) {
        Hundred = hundred;
        timePerPeriod = period;
        totalPeriod = totalPeriod / period;
    }

    function getRemainedAmount (address vester) internal view returns (uint256) {
        uint256 timestamp = addresses[vester].timestamp;
        // should probably have a require here to avoid negative values
        // or use a int256
        uint256 amount = (block.timestamp - timestamp) / timePerPeriod * addresses[vester].amount / totalPeriod;
        // check return value is always > 0, this can lead to user getting
        // more tokens after the end of the vesting period
        return amount - addresses[vester].claimedAmount;
    }

    function vesting (address vester, uint256 amount) external {
        require(vester != address(0), "Invalid address");
        require(amount != 0, "Amount should bigger than 0");

        Hundred.transferFrom(msg.sender, address(this), amount);
        UserInfo memory user = addresses[vester];
        if (user.amount != 0) {
            user.amount = user.amount - user.claimedAmount + amount;
            user.timestamp = block.timestamp;
            user.claimedAmount = 0;
        } else {
            user = UserInfo({ amount: amount, timestamp: block.timestamp, claimedAmount: 0 });
        }
        // redundant assignment
        user.timestamp = block.timestamp;
        addresses[vester] = user;
    }

    // why vester is a param, shouldn't it be msg.sender ?
    // also vester is a misleading name, should
    // probably be more vestedAddress or similar
    function claim (address vester) public {
        require(vester != address(0), "Invalid address");
        uint256 amount = getRemainedAmount(vester);
        require(amount != 0, "No claimable hundred token");

        // not sure if it happens in real life
        // but either use safeTransfer or increment
        // claimedAmount after checking transfer
        // is successful
        addresses[vester].claimedAmount = addresses[vester].claimedAmount + amount;
        Hundred.transfer(msg.sender, amount);
    }

    function getClaimableAmount (address vester) public view returns(uint) {
        // do we really need to check the 0 address ?
        // if so, can be factored into a modifier maybe...
        require(vester != address(0), "Invalid address");
        UserInfo memory user = addresses[vester];
        require(user.amount != 0, "It's not a vested account");
        return getRemainedAmount(vester);
    }

    function getClaimedAmount (address vester) public view returns(uint) {
        require(vester != address(0), "Invalid address");
        UserInfo memory user = addresses[vester];
        require(user.amount != 0, "It's not a vested account");
        return user.claimedAmount;
    }

    function getVestedAmount (address vester) public view returns(uint) {
        require(vester != address(0), "Invalid address");
        UserInfo memory user = addresses[vester];
        require(user.amount != 0, "It's not a vested account");
        return user.amount;
    }
}