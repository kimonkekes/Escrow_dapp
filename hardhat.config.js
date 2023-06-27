require("dotenv").config();
require('@nomicfoundation/hardhat-toolbox');
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const SEPOLIA_URL = process.env.ALCHEMY_SEPOLIA_URL;
const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "sepolia",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  networks: {
      hardhat: {},
      sepolia: {
         url: SEPOLIA_URL,
         accounts: [PRIVATE_KEY]
      }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};