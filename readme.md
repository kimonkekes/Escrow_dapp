# Decentralized Escrow Application

This is a simple blockchain Escrow dapp built with [Hardhat](https://hardhat.org/). It transfers funds Ether from a depositor to a beneficiary, via the approval of a third-party arbiter.

## Project Layout

There are three top-level folders:

1. `/app` - contains the front-end application
2. `/contracts` - contains the solidity contract
3. `/tests` - contains tests for the solidity contract

## Hardhat Setup

Install dependencies in the top-level directory with `npm install`.

After you have installed hardhat locally, you can use commands to test and compile the contracts, among other things. To learn more about these commands run `npx hardhat help`.

Compile the contracts using `npx hardhat compile`. The artifacts will be placed in the `/app` folder, which will make it available to the front-end. This path configuration can be found in the `hardhat.config.js` file.

You can start your local blockchain with `npx hardhat node`. With that the local blockchain is up and running with network id 31337 (aka: chain id). This blockchain will respond to test JSON RPC calls on your localhost port 8545 [http://localhost:8545/](http://localhost:8545/)! 

## Front-End

`cd` into the `/app` directory and run `npm install`

To run the front-end application run `npm start` from the `/app` directory. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

