const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? 'dev/stdin'
    : '16-스택_큐_덱/12789/example.txt';
const [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');
const snackQueue = input.split(' ').map(Number);
const stack = [];
let current = 1;

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && stack[stack.length - 1] === current) {
    stack.pop();
    current++;
  }

  if (snackQueue[i] === current) {
    current++;
  } else {
    stack.push(snackQueue[i]);
  }
}

while (stack.length > 0 && stack[stack.length - 1] === current) {
  stack.pop();
  current++;
}

console.log(stack.length === 0 ? 'Nice' : 'Sad');
