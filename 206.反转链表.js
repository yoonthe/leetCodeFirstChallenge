/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (59.93%)
 * Total Accepted:    49.2K
 * Total Submissions: 82K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) {
    return null;
  }
  // 迭代
  // let h = head;
  // let pcurr = h;
  // let curr = pcurr.next;
  // while(curr) {
  //   // 删掉 curr
  //   pcurr.next = curr.next;
  //   // 把curr 加到 最前头
  //   curr.next = h;
  //   // 把头 设为 curr
  //   h = curr;
  //   // curr 跳到下一位
  //   curr = pcurr.next;
  // }
  // return h;
  // 递归
  const reverse = (subs, h) => {
    if (subs === null) {
      return h;
    }
    let subHead = subs;
    let subList = subHead.next;
    subHead.next = h;
    return reverse(subList, subHead);
  } 
  let subList = head.next;
  head.next = null;
  return reverse(subList, head);
};

