const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '31-그래프_순회/24444/example.txt';
const [a, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m, r] = a.split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));

const graph = Array(n + 1)
  .fill()
  .map(() => []);

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.map((v) => v.sort((a, b) => a - b));
const visited = Array(n).fill(0);
let cnt = 1;

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    if (this.length === 0) return;
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }

  size() {
    return this.length;
  }
}

const queue = new Queue();

function bfs(start) {
  queue.push(start);
  while (queue.size() > 0) {
    const node = queue.pop();

    if (visited[node - 1] === 0) {
      visited[node - 1] = cnt;
      cnt++;
      for (let i = 0; i < graph[node].length; i++) {
        queue.push(graph[node][i]);
      }
    }
  }
  return visited;
}
bfs(r);
console.log(visited.join('\n'));
