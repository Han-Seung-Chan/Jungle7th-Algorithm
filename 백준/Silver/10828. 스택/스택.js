const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '16-스택_큐_덱/c/example.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().split('\n');

const stack = [];
const answer = [];
input.forEach((line) => {
  let isPush = line.split(' ');
  if (isPush.length !== 1) {
    const target = isPush[1];
    const targetNum = Number(target);
    stack.push(targetNum);
  } else {
    if (line === 'pop') {
      if (stack.length === 0) return answer.push(-1);
      return answer.push(stack.pop());
    } else if (line === 'size') {
      answer.push(stack.length);
    } else if (line === 'empty') {
      if (stack.length === 0) return answer.push(1);
      else return answer.push(0);
    } else if (line === 'top') {
      if (stack.length === 0) return answer.push(-1);
      return answer.push(stack[stack.length - 1]);
    }
  }
});

console.log(answer.join('\n'));
