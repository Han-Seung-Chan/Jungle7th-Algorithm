const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '27-이분 탐색/1920/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [_, target, __, list] = input.map((v) => v.split(' '));

const array = new Set(target);

const result = list.map((v) => (array.has(v) ? 1 : 0));

console.log(result.join('\n'));
