const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Is not an Array");
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
};
