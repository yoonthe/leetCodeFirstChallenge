const isPalindrome = require('./isPalindrome');
const logFactory = require('./logFactory');

const d = logFactory(isPalindrome);

d('dcbaabcd')

d('abcddcba')

d('slls')

d('llssssll')

d('abcdedcba')

d('abcdefcba')

d('abcdddba')