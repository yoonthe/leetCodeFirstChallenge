/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // return eval(s);
    const add = (a,b) => a+b, minus = (a,b) => a-b, multiple = (a,b) => a * b, divide = (a, b) => Math.floor(a/b),
        opMap = { '+': add, '-': minus, '*': multiple, '/': divide}, numbers = [], ops = [];
    let curr = 0;
    for(let i = 0; i<= s.length; i++) {
        if (s[i] !== ' ') {
            if (typeof opMap[s[i]] === 'function' || i === s.length) {
                const num = Number(s.slice(curr, i));
                if (ops.length > 0 && (ops[ops.length - 1] === '*' || ops[ops.length - 1] === '/')) {
                    numbers.push(opMap[ops.pop()](numbers.pop(), num));
                } else {
                    numbers.push(num);
                }
                if (s[i]) {
                    ops.push(s[i]);
                    curr = i + 1;
                }
            }
        }
    }
    let res = numbers[0];
    for (let i = 0; i< ops.length; i++) {
        res = opMap[ops[i]](res, numbers[i + 1]);
    }
    return res;
};

// console.log(calculate('3 + 2 * 2'));

