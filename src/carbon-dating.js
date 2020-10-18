const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity <= 0 || sampleActivity > 15 || isNaN(sampleActivity) || typeof(sampleActivity) !== 'string') {
    return false
  } else {
    rateConstant = 0.693 / 5700;
    years = Math.log(15 / sampleActivity) / rateConstant;
    return years;
  }
};
