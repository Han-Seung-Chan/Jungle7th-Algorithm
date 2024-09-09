const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '21-재귀함수/d/example.txt';
const input = fs.readFileSync(filePath).toString().trim();

function fac(n) {
  if (n < 1) return 1;
  return fac(n - 1) * n;
}

console.log(fac(input));
