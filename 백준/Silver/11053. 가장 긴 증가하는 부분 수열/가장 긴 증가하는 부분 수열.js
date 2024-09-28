const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '26-동적_계획법/11053/example.txt';
const [n, input] = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArr = input.trim().split(' ').map(Number);
const dp = new Array(+n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (inputArr[i] > inputArr[j] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
    }
  }
}
console.log(Math.max.apply(null, dp));

