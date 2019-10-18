/**
 * @param {Function} fn fn need convert log
 * @return {Function} fn
 */
module.exports = fn => (...args) => {
  const t = fn(...args);
  console.log('--------- input  -----------');
  console.log(...args);
  console.log('--------- output -----------');
  console.log(t);
};
