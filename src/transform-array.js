const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let transformedArray = arr.slice();

  for (let i = 0; i < transformedArray.length; i++) {
    let indexDoubleNext = transformedArray.indexOf("--double-next");
    let indexDoublePrev = transformedArray.indexOf("--double-prev");
    let indexDiscardNext = transformedArray.indexOf("--discard-next");
    let indexDiscardPrev = transformedArray.indexOf("--discard-prev");

    if (i === indexDoubleNext) {
      if (i === transformedArray.length - 1) {
        transformedArray.splice(-1, 1, "");
      } else {
        let digit = transformedArray[i + 1];
        transformedArray.splice(i, 1, digit);
      }
    }
    if (i === indexDoublePrev) {
      if (i === 0) {
        transformedArray.splice(i, 1, "");
      } else {
        let digit = transformedArray[i - 1];
        transformedArray.splice(i, 1, digit);
      }
    }
    if (i === indexDiscardNext) {
      if (i === transformedArray.length - 1) {
        transformedArray.splice(-1, 1, "");
      } else {
        transformedArray.splice(i, 2, "");
      }
    }
    if (i === indexDiscardPrev) {
      if (i === 0) {
        transformedArray.splice(i, 1, "");
      } else {
        transformedArray.splice(i - 1, 2, "");
      }
    }
  }
  return transformedArray.filter((elem) => elem !== "");
}

module.exports = {
  transform,
};
