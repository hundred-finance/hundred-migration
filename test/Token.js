const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Migrator contract", function() {
    it("Deploy necessary contracts and check vesting", async function() {
        const [owner] = await ethers.getSigners();
        const supply = 1000000000;
        const vestingContractHundredBalance = 200000000;
        const claimAmount = 100000000
        // one year
        const period = 365 * 24 * 60 * 60;

        // Deploy PCT token
        const Token = await ethers.getContractFactory("MockERC20");
        const PCTToken = await Token.deploy("PCT", "PCT", owner.address, supply);

        // Deploy Hundred Token
        const HundredToken = await Token.deploy("Hundred Token", "Hundred", owner.address, supply);

        // Deploy Vesting Contract
        const vestingContract = await ethers.getContractFactory("HundredVesting");
        const Vesting = await vestingContract.deploy(HundredToken.address, 100);

        // Deploy Migrator Contract
        const migratorContract = await ethers.getContractFactory("PCTtoHundredMigrator");
        const Migrator = await migratorContract.deploy(PCTToken.address, HundredToken.address, Vesting.address);

        // Send 200000000 Hundred Token to Migrator Contract
        await HundredToken.connect(owner).transfer(Migrator.address, vestingContractHundredBalance);
        let hundredBalance = await HundredToken.balanceOf(Migrator.address);
        console.log('hundredBalance', hundredBalance.toNumber());
        expect(hundredBalance).to.equal(vestingContractHundredBalance);

        //claim Hundred token
        await PCTToken.connect(owner).approve(Migrator.address, supply);
        await Migrator.connect(owner).claim(claimAmount);

        // Check hundred token balance of vesting contract
        hundredBalance = await HundredToken.balanceOf(Vesting.address);
        console.log('hundredBalance of vesting contract', hundredBalance.toNumber());
        expect(hundredBalance).to.equal(claimAmount * 0.9);

        // Check Hundred token balance of owner address
        const hundredBalanceOfOwner = await HundredToken.balanceOf(owner.address);
        console.log('Hundred token balance of owner address', hundredBalanceOfOwner.toNumber());
        expect(hundredBalanceOfOwner).to.equal(supply - vestingContractHundredBalance + claimAmount * 0.1);

        // Get vested Amount
        const vestedAmount = await Vesting.connect(owner).getVestedAmount();
        console.log('Vested Amount', vestedAmount.toNumber());
        expect(vestedAmount).to.equal(claimAmount * 0.9);

        // Forward 1000 sec
        await owner.provider.send("evm_increaseTime", [1000]);
        await owner.provider.send("evm_mine");

        // Check claimable amount of vesting contract
        const firstClaimableAmount = await Vesting.connect(owner).getClaimableAmount();
        console.log('Claimable Amount', firstClaimableAmount.toNumber());
        expect(firstClaimableAmount).to.equal(parseInt(1000 * vestedAmount / period, 10));

        // Claim current claimable amount of vesting contract
        await Vesting.connect(owner).claim();


        //// Checking for second claim
        // Get hundred balance of vesting contract after claim
        const claimableAmount = await Vesting.connect(owner).getClaimableAmount();
        console.log('Claimable Amount after claim', claimableAmount.toNumber());

        const firstClaimedAmount = await Vesting.connect(owner).getClaimedAmount();
        console.log('firstClaimedAmount', 'firstClaimedAmount');
        expect(firstClaimedAmount).to.equal(firstClaimableAmount);

        hundredBalance = await HundredToken.balanceOf(Vesting.address);
        console.log('Get hundred balance of vesting contract after claim', hundredBalance.toNumber());
        expect(hundredBalance).to.equal(claimAmount * 0.9 - firstClaimableAmount);
        
        // Claim Hundred token again
        await Migrator.connect(owner).claim(claimAmount);

        // Check hundred token balance of vesting contract
        hundredBalance = await HundredToken.balanceOf(Vesting.address);
        console.log('second hundredBalance of vesting contract', hundredBalance.toNumber());
        expect(hundredBalance).to.equal((claimAmount * 0.9 - firstClaimableAmount) + claimAmount * 0.9);

        // Check vested amount after second vest;
        const secondVestedAmount = await Vesting.connect(owner).getVestedAmount();
        console.log('Second vested Amount', secondVestedAmount.toNumber());
        expect(secondVestedAmount).to.equal(vestedAmount * 2 - firstClaimedAmount);

        // Forward 1000 sec
        await owner.provider.send("evm_increaseTime", [1000]);
        await owner.provider.send("evm_mine");

        // Check second claimAbleAmount
        const secondClaimableAmount = await Vesting.connect(owner).getClaimableAmount();
        console.log('Second claimable amount', secondClaimableAmount.toNumber());
        expect(secondClaimableAmount).to.equal(parseInt(1000 * (vestedAmount * 2 - firstClaimableAmount) / period, 10))

        // Claim current claimable amount of vesting contract
        await Vesting.connect(owner).claim();


    });
})