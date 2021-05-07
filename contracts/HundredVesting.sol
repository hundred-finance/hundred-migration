// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract HundredVesting {
    using SafeERC20 for IERC20;
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

    function getRemainedAmount (address vestedAddress) internal view returns (uint256) {
        uint256 timestamp = addresses[vestedAddress].timestamp;
        uint256 amount = (block.timestamp - timestamp) / timePerPeriod * addresses[vestedAddress].amount / totalPeriod - addresses[vestedAddress].claimedAmount;
        return amount < 0 ? 0 : amount;
    }
    
    function vesting (address vestedAddress, uint256 amount) external {
        require(amount != 0, "Amount should bigger than 0");

        Hundred.safeTransferFrom(msg.sender, address(this), amount);
        UserInfo memory user = addresses[vestedAddress];
        if (user.amount != 0) {
            user.amount = user.amount - user.claimedAmount + amount;
            user.timestamp = block.timestamp;
            user.claimedAmount = 0;
        } else {
            user = UserInfo({ amount: amount, timestamp: block.timestamp, claimedAmount: 0 });
        }
        addresses[vestedAddress] = user;
    }

    function claim () public {
        require(msg.sender != address(0), "Invalid address");
        uint256 amount = getRemainedAmount(msg.sender);
        require(amount != 0, "No claimable hundred token");

        Hundred.safeTransfer(msg.sender, amount);
        addresses[msg.sender].claimedAmount = addresses[msg.sender].claimedAmount + amount;
    }

    function getClaimableAmount () public view returns(uint) {
        UserInfo memory user = addresses[msg.sender];
        require(user.amount != 0, "It's not a vested account");
        return getRemainedAmount(msg.sender);
    }

    function getClaimedAmount () public view returns(uint) {
        UserInfo memory user = addresses[msg.sender];
        require(user.amount != 0, "It's not a vested account");
        return user.claimedAmount;
    }

    function getVestedAmount () public view returns(uint) {
        UserInfo memory user = addresses[msg.sender];
        require(user.amount != 0, "It's not a vested account");
        return user.amount;
    }
}