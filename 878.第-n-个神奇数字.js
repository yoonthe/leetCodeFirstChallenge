/*
 * @lc app=leetcode.cn id=878 lang=javascript
 *
 * [878] 第 N 个神奇数字
 */
/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function (N, A, B) {
    // 算出 A B 最小公倍数 
    // a >= 1, b >= 1
    const euclidean = (a, b) => {
        let large = Math.max(a), small = Math.min(b);
        while (small > 1) {
            const t = large % small;
            if (t === 0) {
                return small;
            }
            large = small;
            small = t;
        }
        return small;
    };
    const e = euclidean(A, B);
    const period = A * B / e;
    const periodSize = (A + B) / e - 1; 
    const remainder = N % periodSize;
    let temp = 0, count = 0, tempA = A, tempB = B;
    while(count < remainder) {
        if (tempA < tempB) {
            temp = tempA;
            tempA += A;
        } else {
            temp = tempB;
            tempB += B;
        }
        count += 1;
    }
    return (temp + period * (N - remainder) / periodSize) % (Math.pow(10, 9) + 7);
};

