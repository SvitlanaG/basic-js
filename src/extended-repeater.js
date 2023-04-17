const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== "string") str = "" + str;

  let repeatTimes = 1;
  if (options.repeatTimes) repeatTimes = options.repeatTimes;

  let separator = "+";
  if (options.separator) separator = options.separator;

  let addition = "";
  if (
    options.addition ||
    options.addition === false ||
    options.addition === null
  ) {
    addition = options.addition;
    if (typeof addition !== "string") addition = "" + addition;
  }

  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes)
    additionRepeatTimes = options.additionRepeatTimes;

  let additionSeparator = "|";
  if (options.additionSeparator) additionSeparator = options.additionSeparator;

  let result = "" + str;

  if (additionRepeatTimes > 1) {
    let tempArr = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      tempArr.push(addition);
    }
    result += tempArr.join(additionSeparator);
  } else result = str + addition;

  if (repeatTimes > 1) {
    let tempArr = [];
    for (let i = 0; i < repeatTimes; i++) {
      tempArr.push(result);
    }
    result = tempArr.join(separator);
  }

  return result;
}

module.exports = {
  repeater,
};
