const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] == str[i+1]) {
      count++
      i++
    }
    if (count != 1) {
      result.push(count)
      result.push(str[i])
    }
    else {
      result.push(str[i])
    }
  }
  result = result.join('');
  return result;
}

module.exports = {
  encodeLine
};
