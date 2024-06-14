const { task } = require("hardhat/config");
require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");

task("deploy", "Deploys a contract to the ZKSync network")
 .setAction(async (taskArgs, hre) => {
    const provider = await hre.zksync.getProvider("testnet");
    const signer = await hre.zksync.Wallet.fromEthSigner(
      new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider)
    );

    const factory = await hre.zksyncDeploy.deploy(
      "./contracts/SmartAccountContract.sol",
      [100], // Constructor arguments
      signer
    );

    console.log(`${factory.address} has been deployed to the ZKSync Testnet!`);
  });