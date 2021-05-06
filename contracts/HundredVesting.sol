// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.3;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract HundredVesting is Ownable {
    IERC20 public immutable Hundred;
    uint256 totalPeriod = 365 * 24 * 60 * 60;
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
        uint256 amount = (block.timestamp - timestamp) / timePerPeriod * addresses[vester].amount / totalPeriod;
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
        user.timestamp = block.timestamp;
        addresses[vester] = user;
    }

    function claim (address vester) public {
        require(vester != address(0), "Invalid address");
        uint256 amount = getRemainedAmount(vester);
        require(amount != 0, "No claimable hundred token");

        addresses[vester].claimedAmount = addresses[vester].claimedAmount + amount;
        Hundred.transfer(msg.sender, amount);
    }

    function getClaimableAmount (address vester) public view returns(uint) {
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