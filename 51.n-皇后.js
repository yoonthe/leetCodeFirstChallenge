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
  // let res = [], curr = new Set(new Array(n).fill(0).map((v, i) => v + i));
  // const goRow = (row) => {
  //   for(let c of [...curr]) {
  //     if (typeof res.find((col, colRow) => Math.abs(c - col) === row - colRow) === 'undefined') {
  //       res.push(c);
  //       curr.delete(c);
  //       if (row === n - 1) {
  //         // save result
  //         results.push([...res]);
  //       } else {
  //         // go next row
  //         goRow(row + 1);
  //       }
  //       curr.add(c);
  //       res.pop();
  //     }
  //   }
  // }
  let res = [];
  const goRow = (row) => {
    for(let c = 0; c < n; c++) {
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
  goRow(0);
  if (results.length === 0) {
    return results;
  }
  const strings = [];
  for(let i = 0; i < n; i++) {
    strings[i] = new Array(n).fill('.');
    strings[i][i] = 'Q';
    strings[i] = strings[i].join('');
  }
  return results.map(res => res.map(num => strings[num]));
};
// @lc code=end
