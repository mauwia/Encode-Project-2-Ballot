async function main() {
  const { deployer } = await getNamedAccounts();
  console.log(deployer);
  let BallotProvider = await ethers.getContractAt(
    "Ballot",
    "0x04F083A2EF7e0E46CD801c156ddf7972C467942C"
  );
  let address = ""; //provide your address here
  let giveVotingRights = await BallotProvider.giveRightToVote(address);
  console.log(giveVotingRights);
  //   let votingRights = await votingRights(deployer);
}
let votingRights = async (account) => {};
main();
