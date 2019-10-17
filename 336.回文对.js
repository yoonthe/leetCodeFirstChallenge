/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const isPalindrome = str => {
    let i = 0, j = str.length - 1;
    while (str[i] === str[j]) {
      if (i >= j) {
        return true;
      }
      i++;
      j--;
    }
    return false;
  }
  class TrieNode {
    constructor(letter, index) {
      this.letter = letter;
      this.index = index;
      this.nextMap = {};
    }
    join(letter, index) {
      if (!this.has(letter)) {
        const node = new TrieNode(letter, index);
        this.nextMap[letter] = node;
        return node;
      }
      const n = this.nextMap[letter];
      n.index = index || n.index;
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
    constructor(words, isSuffix = false) {
      this.root = new TrieNode('', false);
      this.isSuffix = isSuffix;
      words.forEach((word, index) => this.add(word, index));
    }
    add(word, index) {
      let root = this.root;
      if (word === '') {
        this.root.index = index;
        return;
      }
      if (this.isSuffix) {
        for (let i = word.length - 1; i >= 0; i--) {
          root = root.join(word[i], i === 0 ? index : false);
        }
      } else {
        for (let i = 0; i < word.length; i++) {
          root = root.join(word[i], i === word.length - 1 ? index : false);
        }
      }
    }
  }
  const trie = new Trie(words), suffix = new Trie(words, true);
  // console.log(trie);
  const result = [];
  let trieRoot = trie.root, suffixRoot = suffix.root, next;
  words.forEach((word, index) => {
    trieRoot = trie.root;
    for (let i = word.length - 1; i >= 0; i--) {
      next = trieRoot.next(word[i]);
      // 判断剩余的是否回文
      if (trieRoot.index !== false && trieRoot.index !== index && isPalindrome(word.slice(0, i + 1))) {
        result.push([trieRoot.index, index]);
      }
      if (next === false) {
        break;
      }
      trieRoot = next;
    }
    suffixRoot = suffix.root;
    for (let i = 0; i < word.length; i++) {
      next = suffixRoot.next(word[i]);
      // 判断剩余的是否回文
      if (suffixRoot.index !== false && suffixRoot.index !== index && isPalindrome(word.slice(i))) {
        result.push([index, suffixRoot.index]);
      }
      if (next === false) {
        return;
      }
      suffixRoot = next;
    }
    if (suffixRoot.index !== false && suffixRoot.index !== index) {
      // 刚好互反
      // result.push([trieRoot.index, index], [index, trieRoot.index]);
      result.push([index, suffixRoot.index]);
    }
  });
  return result;
};

// @lc code=end

const logFactory = require('./logFactory');

const d = logFactory(palindromePairs);

d(["abcd", "dcba", "lls", "s", "sssll"])

d(["bat","tab","cat"])

d(["a",""])

d(["a","b","c","ab","ac","aa"])
