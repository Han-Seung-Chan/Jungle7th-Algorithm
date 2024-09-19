const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '31-그래프_순회/a/example.txt';
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

graph.map((v) => v.sort((a, b) => b - a));

const visited = Array(n).fill(0);
let cnt = 1;

const dfs = (node) => {
  if (visited[node - 1] === 0) {
    visited[node - 1] = cnt;
    cnt++;
    for (let next of graph[node]) dfs(next); // 재귀
  }
};

dfs(r);

console.log(visited.join('\n'));
