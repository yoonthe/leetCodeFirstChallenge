/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let reverseKGroup = function (head, k) {
  if (k === 1) {
    return head;
  }
  let curr = { next: head };
  let tail = head;
  let next = null;
  let temp = null;
  let res = curr;
  let length = 1;
  while (curr.next) {
    while (tail.next && length < k) {
      tail = tail.next;
      length += 1;
    }
    if (length < k) {
      return res.next;
    }
    next = curr.next;
    while (curr.next !== tail) {
      // remove curr.next
      temp = curr.next;
      curr.next = temp.next;
      // insert after tail
      temp.next = tail.next;
      tail.next = temp;
    }
    curr = next;
    tail = curr.next;
    length = 1;
  }
  return res.next;
};
// @lc code=end
