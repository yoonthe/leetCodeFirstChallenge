/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this._stack = [];
    this._minPoses = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const index = this._stack.push(x);
    if (this._minPoses.length === 0 || x < this._stack[this._minPoses[this._minPoses.length - 1]]) {
        this._minPoses.push(index - 1);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._stack.pop();
    if (this._stack.length <= this._minPoses[this._minPoses.length - 1]) {
        this._minPoses.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._stack[this._stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // console.log(this._stack, this._minPoses);
    return this._stack[this._minPoses[this._minPoses.length - 1]]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.top());
// console.log(minStack.getMin()); 
