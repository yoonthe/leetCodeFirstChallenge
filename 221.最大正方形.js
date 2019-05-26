/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix.length === 0 ||matrix[0].length === 0) {
        return 0;
    }
    let hasOne = false;
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            result[i][j] = Number(matrix[i][j]);
            if (result[i][j] === 1 && !hasOne) {
                hasOne = true;
            }
        }
    }
    let maxSize = hasOne ? 1 : 0;
    for (let i = 1; i< matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                result[i][j] =
                    (result[i - 1][j - 1] > 0 && result[i - 1][j] > 0 && result[i][j - 1] > 0)
                    ? Math.min(result[i - 1][j - 1],result[i - 1][j], result[i][j - 1]) + 1 : 1;
                maxSize = Math.max(result[i][j], maxSize);
            }
        }
    }
    return maxSize * maxSize;
};

// console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));
// console.log(maximalSquare([["0","0","0","0","0"],["1","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]]));

