/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let curr = head;
    let result = null;
    let resPre = null;
    let resCurr = null;
    const wm = new WeakMap();
    while(curr !== null) {
        if (wm.has(curr))  {
            resCurr = wm.get(curr);
        } else {
            resCurr = new Node(curr.val, null, null);
            wm.set(curr, resCurr);
        }
        if (result === null) {
            result = resCurr;
        }
        if (resPre !== null) {
            resPre.next = resCurr;
        }
        if (curr.random !== null) {
            if(wm.has(curr.random)) {
                resCurr.random = wm.get(curr.random);
            } else {
                const resRandom = new Node(curr.random.val, null, null);
                wm.set(curr.random, resRandom);
                resCurr.random = resRandom;
            }
        }
        curr = curr.next;
        resPre = resCurr;
    }
    return result;
};

