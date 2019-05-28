/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const borders = {}, keys = [];
    for (let i = 0 ; i < height.length; i++) {
        const h = height[i];
        if (h === 0) continue;
        if (typeof borders[h] === 'undefined') {
            borders[h] = {
                left: i,
                right: i,
                count: 1,
            }
            keys.push(h);
        } else {
            borders[h].right = i;
            borders[h].count += 1;
        }
    }
    let maxContainNum = 0, overCount = 0, overLeft = height.length, overRight = 0;
    const sortKeys = keys.sort((a, b) => b -a);
    for (let i = 0; i < sortKeys.length; i++) {
        const { count, left, right } = borders[sortKeys[i]];
        overCount += count;
        overLeft = Math.min(overLeft, left);
        overRight = Math.max(overRight, right);
        maxContainNum += (overRight - overLeft + 1 - overCount) * (sortKeys[i] - (i === sortKeys.length - 1 ? 0 : sortKeys[i + 1]));
    }
    // return [borders, maxContainNum];
    return maxContainNum;
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// console.log(trap([0,1,4,2,1,0,1,3,2,1,2,1]));

