const CustomError = require("../extensions/custom-error");

const chainMaker = {

  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  
  addLink(value) {
    if (value === undefined) {
      chain.push('( )');
    } else {
      chain.push(`( ${value} )`);
    }
    return chainMaker;
  },
  
  removeLink(position) {
    if (typeof position === 'number') {
      chain.splice(position - 1, 1);
    } else {
      chain = [];
      throw new Error ('Error');
    }
    return chainMaker;
  },
  
  reverseChain() {
    chain.reverse();
    return chainMaker;
  },
  
  finishChain() {
    let newStr = chain.join('~~');
    chain = [];
    return newStr;
  }
};

let chain = [];

module.exports = chainMaker;
