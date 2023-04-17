const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let newDreamTeam = "";
  if (!Array.isArray(members)) return false;
  else {
    newDreamTeam = members.map((element) => {
      if (typeof element == "string") {
        element = element.trimStart();
        return element[0].toUpperCase();
      }
    });
  }
  return newDreamTeam.sort().join("");
}

module.exports = {
  createDreamTeam,
};
