const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '0-test/1182/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [num, target] = input[0].split(' ');
const arr = input[1].split(' ').map(Number);

function generateAllSubsets(data) {
  const allSubsets = [];

  function backtrack(start, currentSubset) {
    allSubsets.push(
      [...currentSubset].reduce((prev, curr) => (prev += curr), 0),
    );

    for (let i = start; i < num; i++) {
      currentSubset.push(data[i]);
      backtrack(i + 1, currentSubset);
      currentSubset.pop();
    }
  }

  backtrack(0, []);
  return allSubsets;
}

const result = generateAllSubsets(arr);
result.shift();
const answer = result.filter((data) => data === +target).length;
console.log(answer);
