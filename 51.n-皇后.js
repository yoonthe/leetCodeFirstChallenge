/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const results = [];
  let res = [];
  const goRow = (row, i = 0, num = n) => {
    for(let c = i; c < num; c++) {
      if (typeof res.find((col, colRow) => (Math.abs(c - col) === row - colRow) || col === c) === 'undefined') {
        res.push(c);
        if (row === n - 1) {
          // save result
          results.push([...res]);
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
  const reverseRes = [...results].reverse().map(res => res.map(i => n - 1 - i));
  if (mid === (n - 1) / 2) {
    goRow(0, mid, mid + 1);
  }

  if (results.length === 0) {
    return results;
  }
  
  const strings = [];
  for(let i = 0; i < n; i++) {
    strings[i] = new Array(n).fill('.');
    strings[i][i] = 'Q';
    strings[i] = strings[i].join('');
  }
  return [...results, ...reverseRes].map(res => res.map(num => strings[num]));
};
// @lc code=end
