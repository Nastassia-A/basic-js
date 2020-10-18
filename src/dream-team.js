const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let name = '';
  let newArr = [];
  if (typeof members !== 'object' || members === null) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].trimLeft();
      newArr.push(members[i][0].toUpperCase());
    }
  }
  newArr = newArr.sort();
  return newArr.join('');
};
