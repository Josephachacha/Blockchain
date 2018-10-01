function Blockchain(){
  this.chain = [];
  this.pendingTransaction = [];

}

//If we were using a class insead we would write it this way.

/*
class Blockchain {
  constructor() {
    this.chain[];
    this.pendingTransaction[];
  }
}
Note: When using a different Programming
language like Python most appropriate will be to use classes.
*/
Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash){
  const newBlock = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions:this.pendingTransaction,
      nonce:nonce,
      hash:hash,
      previousBlockHash:previousBlockHash,
   };

   this.pendingTransaction = [];
   this.chain.push(newBlock);

   return newBlock;

}


Blockchain.prototype.getLastBlock = function(){
  return this.chain [this.chain.length-1];
}



Blockchain.prototype.newTransaction = function(amount, sender, recipient){

  const newTransaction = {
    amount:amount,
    sender:sender,
    recipient:recipient,
  };
  this.pendingTransaction.push(newTransaction);

  return this.getLastBlock()['index'] +1;
}



module.exports = Blockchain;

   //module.exorts = Blockchain;
