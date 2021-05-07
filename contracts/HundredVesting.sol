// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract HundredVesting {
    using SafeERC20 for IERC20;
    IERC20 public immutable Hundred;
    uint256 numberOfEpochs = 365 * 24 * 60 * 60;
    uint256 epochLength;
    struct UserInfo {
        uint256 amount;
        uint256 timestamp;
        uint256 claimedAmount;
    }
    mapping(address => UserInfo) addresses; 

    constructor(IERC20 hundred, uint256 period) {
        Hundred = hundred;
        epochLength = period;
        numberOfEpochs = numberOfEpochs / period;
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
        uint256 amount = getClaimableAmount();
        require(amount != 0, "No claimable hundred token");

        Hundred.safeTransfer(msg.sender, amount);
        addresses[msg.sender].claimedAmount = addresses[msg.sender].claimedAmount + amount;
    }

    function getClaimableAmount () public view returns(uint) {
        UserInfo memory user = addresses[msg.sender];
        require(user.timestamp != 0, "Invalid address");
        uint256 amount = (block.timestamp - user.timestamp) / epochLength * user.amount / numberOfEpochs;
        return amount < user.claimedAmount ? 0 : amount - user.claimedAmount;
    }

    function getClaimedAmount () public view returns(uint) {
        UserInfo memory user = addresses[msg.sender];
        return user.claimedAmount;
    }

    function getVestedAmount () public view returns(uint) {
        UserInfo memory user = addresses[msg.sender];
        return user.amount;
    }
}