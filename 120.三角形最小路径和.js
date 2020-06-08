/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length === 0) {
      return 0;
    }
    const result = [triangle[0][0]];
    let temp, next;
    for (let i = 1; i < triangle.length; i++) {
      temp = result[0];
      result[0] = result[0] + triangle[i][0];
      for (let j = 1; j < i; j++) {
        next = result[j];
        result[j] = Math.min(temp, next) + triangle[i][j];
        temp = next;
      }
      result[i] = temp + triangle[i][i];
    }
    return Math.min(...result);
};

