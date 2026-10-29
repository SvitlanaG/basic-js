const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countAllCats = 0;
  let oneCat = "^^";

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((elem) => {
      if (elem === oneCat) {
        countAllCats++;
      }
    });
  }
  return countAllCats;
}

module.exports = {
  countCats,
};
