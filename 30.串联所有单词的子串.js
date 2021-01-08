/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
class TrieNode {
  constructor(letter, isEnd) {
    this.letter = letter;
    this.isEnd = isEnd;
    this.nextMap = {};
  }
  join(letter, isEnd) {
    if (!this.has(letter)) {
      const node = new TrieNode(letter, isEnd);
      this.nextMap[letter] = node;
    }
    const n = this.nextMap[letter];
    n.isEnd = isEnd || n.isEnd;
    return n;
  }
  has(letter) {
    return letter in this.nextMap;
  }
  next(letter) {
    if (this.has(letter)) {
      return this.nextMap[letter];
    }
    return false;
  }
}
class Trie {
  constructor(words) {
    this.root = new TrieNode('', false);
    words.forEach(word => this.add(word));
  }
  add(word) {
    let root = this.root;
    for (let i = 0; i < word.length; i++) {
      root = root.join(word[i], i === word.length - 1);
    }
  }
  walk(string, start) {
    let ends = [];
    let root = this.root;
    for (let i = 0; i < string.length; i++) {
      root = root.next(string[i]);
      if (!root) {
        return ends;
      }
      if (root.isEnd) {
        ends.push(i + start);
      }
    }
  }
}
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const preTree = new Trie(words);
  const res = [];
  let start = [0];
  while (start.length > 0) {
    const nextStart = [];
    for (let i = 0; i < start.length; i++) {
      const si = start[i];
      const ends = preTree.walk(s, si);
      if ()
    }
  }
};
// @lc code=end

