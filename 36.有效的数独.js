/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const valid = arr => {
    // console.log(arr);
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '.') {
        continue;
      }
      if (set.has(arr[i])) {
        return false;
      }
      set.add(arr[i]);
    }
    return true;
  }
  for (let i = 0; i < 9; i++) {
    // 校验行
    if (!valid(board[i])) {
      return false;
    }
    // // 校验列
    // if (!valid(board.map(row => row[i]))) {
    //   return false;
    // }
    // // 校验块
    // const t = i % 3, l = i - t, r = t * 3;
    // if (!valid(board[l].slice(r, r + 3).concat(board[l + 1].slice(r, r + 3), board[l + 2].slice(r, r + 3)))) {
    //   return false;
    // }
  }
  for (let i = 0; i < 9; i++) {
    // 校验列
    if (!valid(board.map(row => row[i]))) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    // 校验块
    const t = i % 3, l = i - t, r = t * 3;
    if (!valid(board[l].slice(r, r + 3).concat(board[l + 1].slice(r, r + 3), board[l + 2].slice(r, r + 3)))) {
      return false;
    }
  }
  return true;
};
// @lc code=end

const logFactory = require('./utils/logFactory');

const d = logFactory(isValidSudoku);

d([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])

d([
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])

