const CustomError = require("../extensions/custom-error");

const chainMaker = {
  finishedChain: [],
  getLength() {
    return this.finishedChain.length;
  },
  addLink(value) {
    if (typeof value === undefined) {
      this.finishedChain.push(`( )`);
    } else {
      this.finishedChain.push(`( ${value} )`);
    }

    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position > this.getLength() ||
      position <= 0
    ) {
      throw new Error("Wrong number");
    } else {
      this.finishedChain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.finishedChain.reverse();
    return this;
  },
  newStr: "",
  finishChain() {
    this.newStr = this.finishedChain.join("~~");
    this.finishedChain = [];
    return this.newStr;
  },
};

module.exports = chainMaker;

//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()/* , '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )' */);
