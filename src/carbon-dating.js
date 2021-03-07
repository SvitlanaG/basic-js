const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleAge = 0;
  let validateDigits = parseFloat(sampleActivity);
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    sampleActivity >= MODERN_ACTIVITY ||
    sampleActivity <= 0 ||
    !validateDigits
  )
    return false;
  else {
    let rateConstant = 0.693 / HALF_LIFE_PERIOD;
    let lnFromDividedActivity = Math.log(MODERN_ACTIVITY / sampleActivity);
    sampleAge = Math.ceil(lnFromDividedActivity / rateConstant);
  }
  return sampleAge;
};
