const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let tempObj = {};
  let result = [];
  for (let name of names) {
    if (_isNameObjectKey(tempObj, name)) {
      tempObj[name] = 0;
    }
    if (tempObj[name] === undefined) {
      tempObj[name] = 0;
    } else {
      tempObj[name]++;
    }
    if (tempObj[name] === 0) {
      result.push(name);
    } else {
      result.push(`${name}(${tempObj[name]})`);
    }
  }
  return result;
}

function _isNameObjectKey(obj, name) {
  for (const key in obj) {
    if (`${key}(${obj[key]})` === name) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  renameFiles,
};
