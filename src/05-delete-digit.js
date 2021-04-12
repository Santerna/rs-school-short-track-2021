/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = String(n);
  let curVal = 0;
  let maxVal = 0;
  for (let i = 0; i < strN.length; i++) {
    curVal = +(strN.slice(0, i) + strN.slice(i + 1));
    if (curVal > maxVal) {
      maxVal = curVal;
    }
  }
  return maxVal;
}

module.exports = deleteDigit;
