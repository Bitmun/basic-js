const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  let number = String(n)
  let result1 = 0
  let result2 = 0
  for (let i = 0; i < number.length; i++) {
    result1 = result1 + +number[i]
  }
  result1 = String(result1)
  for (let i = 0; i < result1.length; i++) {
    result2 = result2 + +result1[i]
  }
  return result2
}

module.exports = {
  getSumOfDigits,
}
