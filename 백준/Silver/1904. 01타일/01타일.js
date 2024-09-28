const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '26-동적_계획법/aa/example.txt';
const n = +fs.readFileSync(filePath).toString().trim();

const dp = new Array();
dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[n]);
