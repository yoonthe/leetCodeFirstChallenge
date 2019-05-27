/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 解法1: 两端加戏，广度优先遍历 最大为 n^2
    if (s.length === 0) {
        return '';
    }
    const result = [
        new Array(s.length).fill(''),
        [...s],
    ];
    let nexts1 = [], t1 = 3, nexts2 = [], t2 = 2;
    for (let i = 0 ; i < s.length; i++) {
        nexts1.push(i);
        nexts2.push(i);
    }
    for (; t1 <= s.length; t1+=2) {
        const pre = result[t1 - 2];
        const res = [];
        const ns =[];
        const length =  Math.floor(t1 / 2);
        for (const i of nexts1) {
            const char = s[i + length];
            if (i < s.length - length && (s[i - length] === char)) {
                ns.push(i);
                res[i] = char + pre[i] + char;
            }
        }
        if (ns.length === 0) {
            break;
        }
        nexts1 = ns;
        result[t1] = res;
    }
    for (; t2 <= s.length; t2+=2) {
        const pre = result[t2 - 2];
        const res = [];
        const ns =[];
        const length =  Math.floor(t2 / 2);
        for (const i of nexts2) {
            const char = s[i + length];
            if (i < s.length - length && (s[i - length + 1] === char)) {
                ns.push(i);
                res[i] = char + pre[i] + char;
            }
        }
        if (ns.length === 0) {
            break;
        }
        nexts2 = ns;
        result[t2] = res;
    }
    if (t1 > t2) {
        return result[t1 - 2][nexts1[0]];
    }
    return result[t2 - 2][nexts2[0]];
};

// console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"));

