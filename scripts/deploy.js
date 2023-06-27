const { utils } = require('ethers');
const {ethers} = require('hardhat');

async function main() {
  // deploys the escrow contract
  const contractName = "Escrow";
  const Escrow = await hre.ethers.getContractFactory(contractName);
  const escrow = await Escrow.deploy('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
                                     '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'); // you put the constructor params inside the ()

  console.log(`${contractName} deployed to address: ${escrow.address}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });