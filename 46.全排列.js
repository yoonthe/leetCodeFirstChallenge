/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // const res = [], curr = [], arr = nums;
  // const iterator = () => {
  //   if (arr.length === 1) {
  //     res.push([...curr, arr[0]]);
  //     return;
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     curr.push(arr[i]);
  //     const [num] = arr.splice(i, 1);
  //     iterator();
  //     curr.pop();
  //     arr.splice(i, 0, num);
  //   }
  // };
  // iterator();
  const res = [],  curr = [], stack = [];
  let i = 0, index, arr = [...nums];
  if (nums.length < 2) {
    return [nums];
  }
  while(i > -1) {
    if (arr.length === 0) {
      res.push([...curr]);
      // console.log('o', curr);
      i-= 2;
      const [index1,val1] = stack.pop();
      arr.splice(index1, 0, val1);
      const [index2,val2] = stack.pop();
      arr.splice(index2, 0, val2);
    }
    index = arr.indexOf(curr[i]);
    if (index < arr.length - 1) {
      curr[i] = arr[index + 1];
      stack.push([index + 1, arr.splice(index + 1, 1)[0]]);
      i++;
    } else {
      curr[i] = void 0;
      if (i === 0) {
        break;
      }
      const [index, val] = stack.pop();
      arr.splice(index, 0 , val);
      i--;
    }
  }
  return res;
};
// @lc code=end

console.log(permute([1,2]));
