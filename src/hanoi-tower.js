const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let obj = {
    'turns': Math.pow(2, disksNumber) - 1,
  }
  let sec = Math.floor(obj.turns / turnsSpeed * 3600);
  obj.seconds = sec;
  return obj;
};
