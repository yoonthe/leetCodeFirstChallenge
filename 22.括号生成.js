/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
    if (n <= 0) {
        return [''];
    }
    let right = '';
    const rightParens = {};
    for (let i = 0; i < n; i += 1) {
      right += ')';
      rightParens[i + 1] = right;
    }
    const res = [];
    const generate = (template, leftParenNum) => {
      if (template.length + leftParenNum === 2 * n) {
        res.push(template + rightParens[leftParenNum]);
        return;
      }
      if (leftParenNum < n) {
        // (
        generate(`${template}(`, leftParenNum + 1);
      }
      if (leftParenNum > 0) {
        // )
        generate(`${template})`, leftParenNum - 1);
      }
    }
    generate('(', 1);
    return res;
}
// console.log(generateParenthesis(14).length);
