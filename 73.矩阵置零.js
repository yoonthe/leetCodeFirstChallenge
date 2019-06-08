/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // 先将应该置为0的置为NaN
    let i,j,x;
    for (i = 0; i< matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                // 填充行
                for (x = 0; x < matrix[i].length; x++) {
                    if (matrix[i][x] !== 0) {
                        matrix[i][x] = undefined;
                    }
                }
                // 填充列
                for (x = 0; x < matrix.length; x++) {
                    if (matrix[x][j] !== 0) {
                        matrix[x][j] = undefined;
                    }
                }
            }
        }
    }
    // 再把NaN置为0
    for (i = 0; i< matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === undefined) {
                matrix[i][j] = 0;
            }
        }
    }
};

