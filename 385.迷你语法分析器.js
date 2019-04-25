/*
 * @lc app=leetcode.cn id=385 lang=javascript
 *
 * [385] 迷你语法分析器
 *
 * https://leetcode-cn.com/problems/mini-parser/description/
 *
 * algorithms
 * Medium (36.37%)
 * Total Accepted:    455
 * Total Submissions: 1.3K
 * Testcase Example:  '"324"'
 *
 * 给定一个用字符串表示的整数的嵌套列表，实现一个解析它的语法分析器。
 * 
 * 列表中的每个元素只可能是整数或整数嵌套列表
 * 
 * 提示：你可以假定这些字符串都是格式良好的：
 * 
 * 
 * 字符串非空
 * 字符串不包含空格
 * 字符串只包含数字0-9, [, - ,, ]
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 给定 s = "324",
 * 
 * 你应该返回一个 NestedInteger 对象，其中只包含整数值 324。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 给定 s = "[123,[456,[789]]]",
 * 
 * 返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：
 * 
 * 1. 一个 integer 包含值 123
 * 2. 一个包含两个元素的嵌套列表：
 * ⁠   i.  一个 integer 包含值 456
 * ⁠   ii. 一个包含一个元素的嵌套列表
 * ⁠        a. 一个 integer 包含值 789
 * 
 * 
 * 
 * 
 */
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  const stack = [];
  let numTemp = '';
  let current;
  let stackTop;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '[') {
      // 添加 新的 list 
      const ni = new NestedInteger();
      stack.push(ni);
      stackTop = ni;
      continue;
    }
    if (char === ',' || char === ']') {
      if (current) {
        // 如果有current 说明前面的值为 一个数组, 添加到栈顶list，删除 current
        stackTop.add(current);
        current = false;
      } else if (numTemp.length > 0) {
        // 将当前numTemp转为数字，并添加到栈顶list
        const ni = new NestedInteger();
        ni.setInteger(Number(numTemp));
        numTemp = '';
        stackTop.add(ni);
      }
      if (char === ']') {
        current = stack.pop();
        stackTop = stack[stack.length - 1];
      }
      continue;
    }
    numTemp += char;
  }
  if (current) {
    return current;
  }
  if (numTemp) {
    const ni = new NestedInteger();
    ni.setInteger(Number(numTemp));
    return ni;
  }
};
// "123"
// "[123,[456,[789]]]"
// "[123,[456,[789],21,[4,5,1,2,[-2,-23,12],3,12,1,1]]]"
// "[]"
// "[523]"
// "[[],[[],[],[123]]]"

