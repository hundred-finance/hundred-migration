import hre from "hardhat";
import * as dotenv from "dotenv";
const { ethers } = hre;
import {HundredVesting, HundredVesting__factory, MockERC20 } from "../typechain"


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
    const period = 365 * 24 * 60 * 60 * 4;
    const hundredAddress = process.env.HUNDRED_ADDRESS ?? ""

    // Deploy Vesting Contract
    const vestingFactory = <HundredVesting__factory> await ethers.getContractFactory("HundredVesting");
    const VestingContract = await vestingFactory.deploy(hundredAddress, 24 * 60 * 60, period, await getGasOptions());
    await VestingContract.deployed();

    console.log(VestingContract.address);
    return VestingContract.address;
}

const testMigrator = async (address : string | undefined) => {
    const [, owner] = await ethers.getSigners();
    const hundredAddress = process.env.HUNDRED_ADDRESS ?? ""
    const vestingAddress = address ?? "0x6bb6ebCf3aC808E26545d59EA60F27A202cE8586"
    const devMultisigAddress = "0x83307D16C4dCebC69162Ad7444A38cbF569E3603"
    await owner.sendTransaction({to: devMultisigAddress, value: ethers.utils.parseEther("10")});

    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [devMultisigAddress]}
    )
    const devMultisig = await ethers.getSigner(devMultisigAddress);

    const HundredToken = <MockERC20>await ethers.getContractAt("MockERC20", hundredAddress, owner)
    console.log("Hundred Total Supply", ethers.utils.formatEther(await HundredToken.totalSupply()));
    
    await HundredToken.connect(owner).approve(vestingAddress, await HundredToken.balanceOf(owner.address));

    const Vesting = <HundredVesting> await ethers.getContractAt("HundredVesting", vestingAddress);
    await Vesting.connect(owner).beginVesting(devMultisigAddress, ethers.constants.WeiPerEther.mul(20000000n));

    await hre.network.provider.request({
        method: "evm_increaseTime",
        params: [365 * 24 * 60 * 60]
    });

    await Vesting.connect(devMultisig).claimVested();

    console.log(ethers.utils.formatEther(await HundredToken.balanceOf(devMultisigAddress)));
}

const deployAndTest = async() => {
    const address = await deploy();
    await testMigrator(address);
}

describe("4-Year Vesting contract", () => {
    it("Deploy contract and check vesting", deployAndTest);
});