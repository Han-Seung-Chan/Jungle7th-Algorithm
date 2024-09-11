const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '27-이분탐색/2805/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const M = +input[0].split(' ')[1];
const tree = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

solution(M, tree);
function solution(M, tree) {
  let mid = 0;
  let total = 0;
  let answer = 0;
  let min = 0;
  let max = tree[0];

  while (min <= max) {
    mid = Math.floor((max + min) / 2);
    total = 0;

    for (let i = 0; i < tree.length; i++) {
      if (tree[i] <= mid) break;
      total += tree[i] - mid;
    }

    if (total >= M) {
      answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  console.log(answer);
}
