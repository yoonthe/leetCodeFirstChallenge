function getNext(str) {
  // 求出每个子串的前后缀的共有长度，然后全部整体后移一位，首项为定值-1，得到next数组：
  //首先可以肯定的是第一位的next值为0，第二位的next值为1，后面求解每一位的next值时，
  //根据前一位的next值对应的字符与当前字符比较，相同，在前一位的next值加1，
  //否则直接让它与第一个字符比较，求得共有长度
  //比如说ababcabc
  var next = [0] //第一个子串只有一个字母，不用比较，没有公共部分，为0
  for (var i = 1, n = str.length; i < n; i++) {
    var c = str[i]
    var index = next[i - 1]
    if (str[index] === c) { // a, a
      next[i] = index + 1
    } else {
      next[i] = str[0] === c ? 1 : 0 //第一次比较a, b
    }
  }
  // [0, 0, 1, 2, 0, 1, 2, 0]
  next.unshift(-1)
  next.pop();
  // -1, 0 , 0, 1,2 ,0,1,2
  return next
}

function getNextVal(str) {
  //http://blog.csdn.net/liuhuanjun222/article/details/48091547
  var next = getNext(str);
  // console.log(next);
  //我们令 nextval[0] = -1。从 nextval[1] 开始，如果某位(字符)与它 next 值指向的位(字符)相同，
  //则该位的 nextval 值就是指向位的 nextval 值(nextval[i] = nextval[ next[i] ])；
  //如果不同，则该位的 nextval 值就是它自己的 next 值(nextvalue[i] = next[i])。
  var nextval = [-1]
  for (var i = 0, n = str.length; i < n; i++) {
    if (str[i] === str[next[i]]) {
      nextval[i] = nextval[next[i]]
    } else {
      nextval[i] = next[i]
    }
  }
  return nextval
}

/**
* KMP 算法分三分，第一步求next数组，第二步求nextval数组，第三步匹配
* http://blog.csdn.net/v_july_v/article/details/7041827
* 
* 前两步的求法
* http://blog.csdn.net/liuhuanjun222/article/details/48091547
* 
*/
function KmpSearch(s, p) {
  var i = 0;
  var j = 0;
  var sLen = s.length;
  var pLen = p.length;
  var next = getNextVal(p);
  // console.log(next);
  while (i < sLen && j < pLen) {
    //①如果j = -1，或者当前字符匹配成功（即S[i] == P[j]），都令i++，j++      
    if (j == -1 || s[i] == p[j]) {
      i++;
      j++;
    } else {
      //②如果j != -1，且当前字符匹配失败（即S[i] != P[j]），则令 i 不变，j = next[j]      
      //next[j]即为j所对应的next值        
      j = next[j];
    }
  }
  if (j == pLen)
    return i - j;
  else
    return -1;
}

const logFactory = require('../utils/logFactory');
const d = logFactory(KmpSearch);

// d('abacababc', 'abab');

d('abacababc', 'ababcabc');