const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const tempArr = str.split("");
  let result = "";
  let count = 1;
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      result += count > 1 ? count + tempArr[i] : tempArr[i];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
