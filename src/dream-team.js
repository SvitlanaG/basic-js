const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newTeam = "";
  if (!Array.isArray(members)) return false;
  else {
    newTeam = members.map((elem) => {
      if (typeof elem == "string") {
        elem = elem.trimStart();
        return elem[0].toUpperCase();
      }
    });
  }
  return newTeam.sort().join("");
};
