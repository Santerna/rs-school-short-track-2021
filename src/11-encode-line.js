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
function encodeLine(str) {
  if (str.length === 0) return '';
  let newStr = str;
  let res = '';
  if (newStr[0] === newStr[str.length - 1]) {
    newStr = str.substr(1);
    const obj = {};
    newStr.split('').map((elem) => {
      if (!obj[elem]) {
        obj[elem] = 1;
      } else {
        obj[elem]++;
      }
      return obj;
    });
    Object.entries(obj).forEach(([key, value]) => {
      if (value !== 1) {
        res += String(`${value}${key}`);
      } else {
        res += String(`${key}`);
      }
      return res;
    });
    res = str[0] + res;
  } else {
    const obj = {};
    str.split('').map((elem) => {
      if (!obj[elem]) {
        obj[elem] = 1;
      } else {
        obj[elem]++;
      }
      return obj;
    });
    Object.entries(obj).forEach(([key, value]) => {
      if (value !== 1) {
        res += String(`${value}${key}`);
      } else {
        res += String(`${key}`);
      }
      return res;
    });
  }
  return res;
}

module.exports = encodeLine;
