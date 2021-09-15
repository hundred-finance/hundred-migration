import hre from "hardhat";
import * as dotenv from "dotenv";
const { ethers } = hre;
import {HundredVesting__factory, PCTtoHundredMigrator__factory, MockERC20, PCTtoHundredMigrator } from "../typechain"


const getFastGas = async () => {
    if (hre.network.config.chainId == 1) {
        const res = await fetch("https://www.gasnow.org/api/v3/gas/price")
        const json = await res.json()
        return ethers.utils.parseUnits(Math.floor(json.data.fast).toString(), "gwei");
    }
    return undefined;
}

const getGasOptions = async() => {
    return {
        gasPrice: await getFastGas(),
        maxFeePerGas: (await ethers.provider.getBlock("latest")).baseFeePerGas!.toNumber() * 2, 
        maxPriorityFeePerGas: ethers.utils.parseUnits("1", "gwei")
    }
}

const deploy = async () => {
    dotenv.config();
    const period = 365 * 24 * 60 * 60;
    const hundredAddress = process.env.HUNDRED_ADDRESS ?? ""
    const percentAddress = process.env.PERCENT_ADDRESS ?? ""

    // Deploy Vesting Contract
    const vestingFactory = <HundredVesting__factory> await ethers.getContractFactory("HundredVesting");
    const VestingContract = await vestingFactory.deploy(hundredAddress, 1, period, 
        {
            gasPrice: await getFastGas(),
            maxFeePerGas: (await ethers.provider.getBlock("latest")).baseFeePerGas!.toNumber() * 2, 
            maxPriorityFeePerGas: ethers.utils.parseUnits("1", "gwei")
        });
    await VestingContract.deployed();
    
    // Deploy Migrator Contract
    const migratorContract = <PCTtoHundredMigrator__factory> await ethers.getContractFactory("PCTtoHundredMigrator");
    const Migrator = await migratorContract.deploy(percentAddress, hundredAddress, VestingContract.address, 
        {
            gasPrice: await getFastGas(),
            maxFeePerGas: (await ethers.provider.getBlock("latest")).baseFeePerGas!.toNumber() * 2, 
            maxPriorityFeePerGas: ethers.utils.parseUnits("1", "gwei")
        });

    await Migrator.deployed();

    return { VestingContract, Migrator }
}

const test = async (Migrator: PCTtoHundredMigrator) => {
    const [, owner] = await ethers.getSigners();
    const hundredAddress = process.env.HUNDRED_ADDRESS ?? ""
    const percentAddress = process.env.PERCENT_ADDRESS ?? ""

    const percentWhaleAddress = "0x4299d864bbda0fe3272da750f8f7e8757a8ef534"
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [percentWhaleAddress]}
    )
    const percentWhale = await ethers.getSigner(percentWhaleAddress);

    const PercentToken = <MockERC20>await ethers.getContractAt("MockERC20", percentAddress, owner)
    const HundredToken = <MockERC20>await ethers.getContractAt("MockERC20", hundredAddress, owner)
    console.log("Hundred Total Supply", ethers.utils.formatEther(await HundredToken.totalSupply()));

    await HundredToken.connect(owner).transfer(Migrator.address, await HundredToken.balanceOf(owner.address));

    console.log("HND balance of migrator before migrating", ethers.utils.formatEther(await HundredToken.balanceOf(owner.address)));

    console.log("PCT balance of whale before transfer", ethers.utils.formatEther(await PercentToken.balanceOf(percentWhaleAddress)));

    await PercentToken.connect(percentWhale).transfer(owner.address, ethers.utils.parseEther("100000"));

    console.log("PCT balance of whale after transfer", ethers.utils.formatEther(await PercentToken.balanceOf(percentWhaleAddress)));

    console.log("PCT balance of owner before migrating", ethers.utils.formatEther(await PercentToken.balanceOf(owner.address)));

    console.log("HND balance of owner before migrating", ethers.utils.formatEther(await HundredToken.balanceOf(owner.address)));

    await PercentToken.connect(owner).approve(Migrator.address, ethers.constants.MaxUint256);
    await Migrator.connect(owner).migrateAll();

    console.log("PCT balance of owner after migrating", ethers.utils.formatEther(await PercentToken.balanceOf(owner.address)));

    console.log("HND balance of owner after migrating", ethers.utils.formatEther(await HundredToken.balanceOf(owner.address)));
}

const deployAndTest = async () => {
    const { Migrator } = await deploy();
    await test(Migrator);
}

deploy()