const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date == "undefined") {
    return "Unable to determine the time of year!";
  }
  if (isNaN(date.getTime())) {
    throw new CustomError("Date is invalid");
  }
  let myDate = date.toString().split(" ");

  switch (myDate[1]) {
    case "Jan":
    case "Feb":
    case "Dec":
      return "winter";
      break;
    case "Mar":
    case "Apr":
    case "May":
      return "spring";
      break;
    case "Jun":
    case "Jul":
    case "Aug":
      return "summer";
      break;
    case "Sep":
    case "Oct":
    case "Nov":
      return "autumn|fall";
      break;
  }
};
