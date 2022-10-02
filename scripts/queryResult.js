async function main() {
  const { deployer } = await getNamedAccounts();
  console.log(deployer);
  let BallotProvider = await ethers.getContractAt(
    "Ballot",
    "0x04F083A2EF7e0E46CD801c156ddf7972C467942C"
  );
  console.log(BallotProvider);
  //getChairPerson

  let chairPerson = await BallotProvider.chairperson();
  console.log(chairPerson);
  // get Proposal
  let proposal = await BallotProvider.proposals(0);
  console.log(proposal);
  //get VoterInfo
  let address = "0xCD02feDc82139DfD5F638D3bBB753c109B90b553";
  let voterinfo = await BallotProvider.voters(address);
  console.log(voterinfo);
}
let votingRights = async (account) => {};
main();
