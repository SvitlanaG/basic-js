const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
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
      this.finishedChain = [];
      throw new Error("You can't remove incorrect link!");
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

module.exports = {
  chainMaker,
};
