const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
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
}

module.exports = {
  dateSample,
};
