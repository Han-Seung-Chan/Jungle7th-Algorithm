const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '100-구현/a/example.txt';

const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const sizeArr = [];
const answer = [];

input.forEach((size) => sizeArr.push(size.split(' ').map(Number)));

for (let i = 0; i < N; i++) {
  let count = 1;
  for (let j = 0; j < N; j++) {
    if (sizeArr[i][0] < sizeArr[j][0] && sizeArr[i][1] < sizeArr[j][1]) count++;
  }
  answer.push(count);
}

console.log(answer.join(' '));
