const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  throw new NotImplementedError("Not implemented")
  // let donext = '--double-next'
  // let diprev = '--discard-prev'
  // let doprev = '--double-prev'
  // let dipnext = '--discard-next'

  // let temp = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == donext) {
  //     arr[i] = arr[i+1]
  //     continue
  //   }
  //   if (arr[i] == doprev) {
  //     arr[i] = arr[i-1]
  //     continue
  //   }
  //   if (arr[i] == diprev) {
  //     arr.splice(i-1, 2)
  //     continue
  //   }
  //   if (arr[i] == dipnext) {
  //     arr.splice(i, 2)
  //     continue
  //   }
  // }
  // temp.push
}

module.exports = {
  transform,
}
