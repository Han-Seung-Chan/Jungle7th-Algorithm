const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '31-그래프_순회/1388/example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const grid = input.map((el) => el.split(''));
let count = 0;

for (let row = 0; row < N; row++) {
  let flag = true;
  for (let col = 0; col < M; col++) {
    if (flag && grid[row][col] === '-') {
      count++;
      flag = false;
    } else if (grid[row][col] === '|') {
      flag = true;
    }
  }
}

for (let col = 0; col < M; col++) {
  let flag = true;
  for (let row = 0; row < N; row++) {
    if (flag && grid[row][col] === '|') {
      count++;
      flag = false;
    } else if (grid[row][col] === '-') {
      flag = true;
    }
  }
}

console.log(count);
