const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'a/example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const arr = Array(+input[0])
  .fill()
  .map((_, i) => i + 1);

let result = '<';
for (let i = 0; i < input[0]; i++) {
  let target = input[1] - 1;

  while (target-- > 0) {
    let temp = arr.shift();
    arr.push(temp);
  }
  result += arr.shift();
  if (arr.length === 0) result += '>';
  else result += ', ';
}

console.log(result);
