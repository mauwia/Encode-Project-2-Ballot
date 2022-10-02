const { network, ethers } = require("hardhat");
let { verify } = require("../utils/verify");
module.exports = async function ({ getNamedAccounts, deployments }) {
  let { deploy, log } = deployments;
  let { deployer } = await getNamedAccounts();
  let hex = ethers.utils.hexlify(10);
  let args = [["0x00000000000000000000000000000000000000000000000000000000686f6c61"]];
  let ballot = await deploy("Ballot", {
    from: deployer,
    args,
    log: true,
    waitConfirmations: network.config.blockConfirmation || 1,
  });

  if (process.env.ETHERSCAN_API) {
    log("Verifying...");
    await verify(ballot.address, args);
  }
};
module.exports.tags = ["all", "raffle"];
