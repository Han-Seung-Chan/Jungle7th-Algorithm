const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'b/example.txt';
let input = +fs.readFileSync(filePath).toString().trim();
let sum = 0;
let num = input;
let count = 0;

while (true) {
  sum = Math.floor(num / 10) + (num % 10);
  num = Number(String(num % 10) + (sum % 10));
  count++;

  if (num === input) break;
}

console.log(count);
