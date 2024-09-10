const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? 'dev/stdin'
    : '12-브루트포스/10971/example.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]);

const cities = Array.from(Array(n), () => new Array(n).fill(null));
const visited = new Array(+n).fill(null);

for (let i = 0; i < n; i++) {
  const first = input[i + 1].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    cities[i][j] = first[j];
  }
}
let min = 1e9;

function solution(visitedCities, currentCity, totalCost) {
  if (visitedCities === n - 1 && cities[currentCity][0] !== 0) {
    min = Math.min(min, totalCost + cities[currentCity][0]);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i] && cities[currentCity][i] !== 0) {
      visited[i] = true;
      solution(visitedCities + 1, i, totalCost + cities[currentCity][i]);
      visited[i] = false;
    }
  }
}

visited[0] = true;
solution(0, 0, 0);
console.log(min);
