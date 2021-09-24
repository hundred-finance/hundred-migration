import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-typechain"
import "hardhat-gas-reporter"
import { HardhatUserConfig } from "hardhat/types";
import * as dotenv from "dotenv";

dotenv.config();

const config : HardhatUserConfig ={
  solidity: "0.8.3",
  networks: {
    hardhat: {
      forking: {
        url: process.env.RPC_URL ?? "",
        //blockNumber: 7345264,
      },
      accounts: [
        { privateKey: process.env.HUNDRED_DEPLOYER_PRIVATE_KEY ?? "", balance: "100000000000000000000" },
        { privateKey: process.env.HUNDRED_OWNER_PRIVATE_KEY ?? "", balance: "100000000000000000000" } ,
      ]
    },
    mainnet: {
      url: process.env.RPC_URL ?? "",
      accounts: [ 
        process.env.HUNDRED_DEPLOYER_PRIVATE_KEY ?? "",
        process.env.HUNDRED_OWNER_PRIVATE_KEY ?? "",
      ]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    coinmarketcap: "da3d4240-99eb-40f7-b5c6-f0597741ec37"
  }
};

export default config;