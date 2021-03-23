/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let results = 0;
  let res = [];
  const goRow = (row, i = 0, num = n) => {
    for(let c = i; c < num; c++) {
      if (typeof res.find((col, colRow) => (Math.abs(c - col) === row - colRow) || col === c) === 'undefined') {
        res.push(c);
        if (row === n - 1) {
          // save result
          results += 1;
        } else {
          // go next row
          goRow(row + 1);
        }
        res.pop();
      }
    }
  }
  const mid = Math.ceil((n - 1) / 2);
  goRow(0, 0, mid);
  // reverse
  results += results;
  if (mid === (n - 1) / 2) {
    goRow(0, mid, mid + 1);
  }
  return results;
};
// @lc code=end

