const{expect}=require('chai');
const { ethers } = require('hardhat');
describe('multisign wallet',()=>{
  let contract;
  // let accounts;

  before(async()=>{
   const accounts=await ethers.getSigners();
    const MultiSigWallet1=await ethers.getContractFactory("MultiSigWallet");
    contract=await MultiSigWallet1.deploy([accounts[0].address,accounts[1].address,accounts[2].address],1);
    await contract.deployed();
   
  });

// it('should store the balance',async()=>{
//   const balance= await ethers.getBalance(contract.address);
//   expect(balance.toString(),oneEther.toString()).equal;
// });

it("Atleast one owner is required",async()=>{
  expect(await contract.getOwners()).to.have.length.at.least(1);
});
it("Atleast one confirmation required",async()=>{
  expect(await contract.numConfirmationsRequired()).to.greaterThanOrEqual(1);
});
it("owner cannot be null",async()=>{
  expect(await contract.getOwners()).to.not.be.null;
})
it("owner not duplicate",async()=>{
  const duplicatearr=(arr)=>{
    return new Set(arr).size !== arr.length
  }
  const arr=await contract.getOwners();
  const jsarr=Array.from(arr);
  const duplicate=duplicatearr(jsarr);
  expect(duplicate).to.equal(false);
})
it("submit transaction",async()=>{
  const accounts=await ethers.getSigners();
const to=accounts[3].address;
 const value=300;
const data="0xab";
expect(await contract.getTransactionCount()).to.be.equal(0);
await contract.submitTransaction(to,value,data);
expect(await contract.getTransactionCount()).to.be.equal(1);
});
it("submit transaction before confirm",async()=>{
  const accounts=await ethers.getSigners();
const txindex=0;
const wallet=contract.connect(accounts[0].address);
const TransactionCount=await wallet.getTransactionCount();
expect(txindex).lessThan(TransactionCount);
})
it("transaction is confirmed",async()=>{
  const accounts=await ethers.getSigners();
  const msgsender= accounts[2];
  const wallet=await contract.connect(msgsender).confirmTransaction(0);
  const transaction=await contract.getTransaction(0);
  expect(transaction.numConfirmations).to.be.equal(1);
});
it("revoke transaction",async()=>{
  const accounts=await ethers.getSigners();
  const msgsender= accounts[2];
  const wallet=await contract.connect(msgsender).revokeConfirmation(0);
  const transaction=await contract.getTransaction(0);
  expect(transaction.numConfirmations).to.be.equal(0);
});
it("deposite ETH",async()=>{
  const value=ethers.utils.parseEther("1");
  const option={value:value}
  const accounts=await ethers.getSigners();
  const msgsender= accounts[4];
 const wallet=await contract.connect(msgsender);
 await wallet.DepositETH(option);
//  expect (await contract.getBalance()).to.equal(value);
});
// it("execute transaction",async()=>{
//   const accounts=await ethers.getSigners();
//   const msgsender= accounts[2];
//   const wallet=await contract.connect(msgsender).executeTransaction(0);
//   const transaction=await contract.getTransaction(0);
//   expect(transaction.executed).to.be.equal(true);
// });
  });