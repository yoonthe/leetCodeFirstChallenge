/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let answer = '';
  const getStr = (n, one, five, ten) => {
    if (n === 0) {
      return '';
    }
    if (n < 4) {
      return new Array(n).fill(one).join('');
    }
    if (n === 4) {
      return one + five;
    }
    if (n < 9) {
      return five + new Array(n - 5).fill(one).join('');
    }
    return one + ten;
  };
  let number = num;
  const thousand = Math.floor(number / 1000);
  answer += getStr(thousand, 'M');
  number -= thousand * 1000;
  const hundred = Math.floor(number / 100);
  answer += getStr(hundred, 'C', 'D', 'M');
  number -= hundred * 100;
  const ten = Math.floor(number / 10);
  answer += getStr(ten, 'X', 'L', 'C');
  number -= ten * 10;
  answer += getStr(number, 'I', 'V', 'X');
  return answer;
};
// @lc code=end

