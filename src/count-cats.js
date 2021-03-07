const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let allCats = 0;
  let cat = "^^";
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((item) => {
      if (item == cat) allCats++;
    });
  }
  return allCats;
};
