const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '16-스택_큐_덱/2164/example.txt';
const input = fs.readFileSync(filePath).toString().trim();

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();

for (let i = 1; i <= input; i++) {
  queue.enqueue(i);
}

while (queue.size() > 1) {
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}

console.log(queue.peek());
