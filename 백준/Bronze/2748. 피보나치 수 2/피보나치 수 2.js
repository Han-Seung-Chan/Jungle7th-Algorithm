const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '26-동적_계획법/a/example.txt';
const n = +fs.readFileSync(filePath).toString().trim();

// javascript가 나타낼 수 있는 숫자의 최대범위는 9007199254740991
// 79번째 값 14472334024676221
// 저장할 수 있는 범위보다 큰 숫자가 와서 BinInt 해줘야 함
const arr = Array(n + 1)
  .fill()
  .map((_, i) => BigInt(i));

for (let i = 2; i <= n; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

console.log(arr[n].toString());
