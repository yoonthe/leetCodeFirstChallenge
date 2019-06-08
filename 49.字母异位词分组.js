/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const base = 'a'.charCodeAt();
    // 用素数觉得挺简单的
    const map = {};
    for (const str of strs) {
        const keys = new Array(26).fill(0);
        for (const char of str) {
            keys[char.charCodeAt() - base] += 1;
        }
        const key = keys.join('');
        if (typeof map[key] === 'undefined') {
            map[key] = [];
        }
        map[key].push(str);
    }
    return Object.keys(map).map(key => map[key]);
};

