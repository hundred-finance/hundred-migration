import { expect } from "chai";
import hre from "hardhat";
const { ethers } = hre;
import {MockERC20__factory, HundredVesting__factory, PCTtoHundredMigrator__factory } from "../typechain"

describe("Migrator contract", function() {
    it("Deploy necessary contracts and check vesting", async function() {
        const [owner] = await ethers.getSigners();
        const supply = 1000000000;
        const vestingContractHundredBalance = 200000000;
        const claimAmount = 100000000
        // one year
        const period = 365 * 24 * 60 * 60;

        // Deploy PCT token
        const Token = <MockERC20__factory>await ethers.getContractFactory("MockERC20");
        const PCTToken = await Token.deploy("PCT", "PCT", owner.address, supply);

        // Deploy Hundred Token
        const HundredToken = await Token.deploy("Hundred Token", "Hundred", owner.address, supply);

        // Deploy Vesting Contract
        const vestingContract = <HundredVesting__factory> await ethers.getContractFactory("HundredVesting");
        const Vesting = await vestingContract.deploy(HundredToken.address, 100, period);

        // Deploy Migrator Contract
        const migratorContract = <PCTtoHundredMigrator__factory> await ethers.getContractFactory("PCTtoHundredMigrator");
        const Migrator = await migratorContract.deploy(PCTToken.address, HundredToken.address, Vesting.address);

        // Send 200000000 Hundred Token to Migrator Contract
        await HundredToken.connect(owner).transfer(Migrator.address, vestingContractHundredBalance);
        let hundredBalance = (await HundredToken.balanceOf(Migrator.address)).toNumber();
        console.log('hundredBalance', hundredBalance);
        expect(hundredBalance).to.equal(vestingContractHundredBalance);

        //claim Hundred token
        await PCTToken.connect(owner).approve(Migrator.address, supply);
        await Migrator.connect(owner).migrate(claimAmount);

        // Check hundred token balance of vesting contract
        hundredBalance = (await HundredToken.balanceOf(Vesting.address)).toNumber();
        console.log('hundredBalance of vesting contract', hundredBalance);
        expect(hundredBalance).to.equal(claimAmount * 0.9);

        // Check Hundred token balance of owner address
        const hundredBalanceOfOwner = (await HundredToken.balanceOf(owner.address)).toNumber();
        console.log('Hundred token balance of owner address', hundredBalanceOfOwner);
        expect(hundredBalanceOfOwner).to.equal(supply - vestingContractHundredBalance + claimAmount * 0.1);

        // Get vested Amount
        const vestedAmount = (await Vesting.getTotalVest(owner.address)).toNumber();
        console.log('Vested Amount', vestedAmount);
        expect(vestedAmount).to.equal(claimAmount * 0.9);

        // Forward 1000 sec
        await hre.network.provider.send("evm_increaseTime", [1000]);
        await hre.network.provider.send("evm_mine");

        // Check claimable amount of vesting contract
        const firstClaimableAmount = (await Vesting.getClaimableVest(owner.address)).toNumber();
        console.log('Claimable Amount', firstClaimableAmount);
        expect(firstClaimableAmount).to.be.closeTo(1000 * vestedAmount / period, 1);

        // Claim current claimable amount of vesting contract
        await Vesting.connect(owner).claimVested();


        //// Checking for second claim
        // Get hundred balance of vesting contract after claim
        const claimableAmount = (await Vesting.getClaimableVest(owner.address)).toNumber();
        console.log('Claimable Amount after claim', claimableAmount);

        const firstClaimedAmount = (await Vesting.getClaimedVest(owner.address)).toNumber();
        console.log('firstClaimedAmount', 'firstClaimedAmount');
        expect(firstClaimedAmount).to.equal(firstClaimableAmount);

        hundredBalance = (await HundredToken.balanceOf(Vesting.address)).toNumber();
        console.log('Get hundred balance of vesting contract after claim', hundredBalance);
        expect(hundredBalance).to.equal(claimAmount * 0.9 - firstClaimableAmount);
        
        // Claim Hundred token again
        await Migrator.connect(owner).migrate(claimAmount);

        // Check hundred token balance of vesting contract
        hundredBalance = (await HundredToken.balanceOf(Vesting.address)).toNumber();
        console.log('second hundredBalance of vesting contract', hundredBalance);
        expect(hundredBalance).to.equal((claimAmount * 0.9 - firstClaimableAmount) + claimAmount * 0.9);

        // Check vested amount after second vest;
        const secondVestedAmount = (await Vesting.getTotalVest(owner.address)).toNumber();
        console.log('Second vested Amount', secondVestedAmount);
        expect(secondVestedAmount).to.equal(vestedAmount * 2 - firstClaimedAmount);

        // Forward 1000 sec
        await hre.network.provider.send("evm_increaseTime", [1000]);
        await hre.network.provider.send("evm_mine");

        // Check second claimAbleAmount
        const secondClaimableAmount = (await Vesting.getClaimableVest(owner.address)).toNumber();
        console.log('Second claimable amount', secondClaimableAmount);
        expect(secondClaimableAmount).to.be.closeTo(1000 * (vestedAmount * 2 - firstClaimableAmount) / period, 1)

        // Claim current claimable amount of vesting contract
        await Vesting.connect(owner).claimVested();
    });
})