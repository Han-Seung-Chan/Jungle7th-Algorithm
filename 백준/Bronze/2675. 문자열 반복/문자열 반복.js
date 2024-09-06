const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '5-문자열/a/example.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().split('\n');

let result = '';
for (let i = 0; i < n; i++) {
  const [num, str] = input[i].split(' ');
  const strArr = str.split('');
  for (let j = 0; j < strArr.length; j++) {
    for (let k = 0; k < num; k++) {
      result += strArr[j];
    }
  }
  result += '\n';
}

console.log(result);
