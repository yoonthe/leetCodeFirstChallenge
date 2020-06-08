/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  const res = [];
  for (let i = 0; i < A.length; i++) {
    const line = [], rowSize = A[i].length;
    for (let j = 0; j < rowSize; j++) {
      line[rowSize - j - 1] = (A[i][j] + 1) % 2;
    }
    res[i] = line;
  }
  return res;
};

