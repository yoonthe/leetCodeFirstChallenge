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
  nnext(letter) {
    if (this.has(letter)) {
      return this.nextMap[letter];
    }
    return false;
  }
}
export default class Trie {
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
  search(word) {
    let root = this.root;
    for (let i = 0; i < word.length; i++) {
      root = this.go(word[i]);
      if (root === false) {
        return false;
      }
    }
    return root.isEnd;
  }
}