module.exports = function count(s, pairs) {
  var n = 1;
  var tmp = [];
  var tmp2 = [];
  for (var i = 0; i < pairs.length; i++) {
    n *= pairs[i][0] ** pairs[i][1];
  }
  if (n > 100000000 ) return 0;
  for (j = 0; j < s.length; j++) {
    if (s[j] === '0' && j === 0) {
      for (var k = 0; k <= n; k++) {
        var sum = k + j;
        if (nod(n, sum) !== 1) {
          tmp.push(k);
        }
      }   
    } else if (s[j] === '1' && j === 0) {
      for (var k = 0; k <= n; k++) {
        var sum = k + j;
        if (nod(n, sum) === 1) {
          tmp.push(k);
        }
      } 
    } else if (s[j] === '0') {
      for (var k = 0; k <= n; k++) {
        var sum = k + j;
        if (nod(n, sum) !== 1 && tmp.includes(k)) {
          tmp2.push(k);         
        }
      }
      tmp = tmp2;
      tmp2 = [];
    } else if (s[j] === '1') {
      for (var k = 0; k <= n; k++) {
        var sum = k + j;
        if (nod(n, sum) === 1 && tmp.includes(k)) {
          tmp2.push(k);      
        }
      }
      tmp = tmp2;
      tmp2 = []; 
    }
  }
  if (s[0] === '0') {
    return tmp.length - 1;
  } else {
    return tmp.length;
  };
};
function nod(a, b) {
  if (b === 0) return a;
  return nod(b, a % b);
}