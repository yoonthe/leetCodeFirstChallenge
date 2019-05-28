/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const max = matrix.length - 1;
    let t;
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        for (let j = i; j < max - i; j++) {
            t = matrix[i][j];
            matrix[i][j] = matrix[max - j][i];
            matrix[max - j][i] = matrix[max - i][max - j];
            matrix[max - i][max - j] = matrix[j][max - i];
            matrix[j][max - i] = t;
        }
    }
    // return matrix;
};

// console.log(rotate(
//     [
//         [5, 1, 9, 11],
//         [2, 4, 8, 10],
//         [13, 3, 6, 7],
//         [15, 14, 12, 16]
//     ],
// ));
