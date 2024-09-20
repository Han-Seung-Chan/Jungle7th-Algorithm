const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '31-그래프_순회/a/example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((el) => el.split(''));

const N = +input.shift();
const grid = input.map((arr) => arr.map(Number));

function createGraphFromGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const graph = {};

  const isValidCell = (r, c) => r >= 0 && r < rows && c >= 0 && c < cols;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        const cellId = `${r},${c}`;
        graph[cellId] = [];

        const neighbors = [
          [r - 1, c],
          [r + 1, c],
          [r, c - 1],
          [r, c + 1],
        ];

        for (const [nr, nc] of neighbors) {
          if (isValidCell(nr, nc) && grid[nr][nc] === 1) {
            graph[cellId].push(`${nr},${nc}`);
          }
        }
      }
    }
  }

  return graph;
}

function findComplexes(graph) {
  const visited = new Set();
  const complexes = [];

  function dfsRecursive(graph, start) {
    visited.add(start);
    let size = 1;

    for (let neighbor of graph[start]) {
      if (!visited.has(neighbor)) {
        size += dfsRecursive(graph, neighbor);
      }
    }

    return size;
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      const complexSize = dfsRecursive(graph, node);
      complexes.push(complexSize);
    }
  }

  return complexes;
}

const graph = createGraphFromGrid(grid);
const answer = findComplexes(graph).sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join('\n'));
