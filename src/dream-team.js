const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let temp = []
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] != "string") {
      continue
    }
    let temp2 = members[i].trim()
    temp.push(temp2[0])
  }

  let temp1 = temp.join("")
  let result = temp1.toUpperCase()
  return result.split("").sort().join("")
}

module.exports = {
  createDreamTeam,
}
