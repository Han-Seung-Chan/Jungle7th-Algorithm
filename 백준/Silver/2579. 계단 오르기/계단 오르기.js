const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '26-동적_계획법/2579/example.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const stairs = input.map(Number);
const dp = new Array(+n).fill(0);

if (n >= 1) dp[0] = stairs[0];
if (n >= 2) dp[1] = stairs[0] + stairs[1];
if (n >= 3) dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

for (let i = 3; i < +n; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i],
    dp[i - 3] + stairs[i - 1] + stairs[i],
  );
}

console.log(dp[n - 1]);
