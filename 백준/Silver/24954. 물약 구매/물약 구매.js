const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '100-구현/24954/example.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();
const prices = input.shift().split(' ').map(Number);

function generatePermutations(arr) {
  const result = [];
  const n = arr.length;
  const indices = Array(n).fill(0);
  let i = 0;

  result.push([...arr]);

  while (i < n) {
    if (indices[i] < i) {
      const swapIndex = i % 2 === 0 ? 0 : indices[i];
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      result.push([...arr]);
      indices[i]++;
      i = 0;
    } else {
      indices[i] = 0;
      i++;
    }
  }

  return result;
}

function simulatePurchase(order, prices, discounts) {
  let totalCost = 0;
  let currentPrices = [...prices];

  for (let potion of order) {
    totalCost += currentPrices[potion];

    for (let [targetPotion, discount] of discounts[potion]) {
      currentPrices[targetPotion] = Math.max(
        1,
        currentPrices[targetPotion] - discount,
      );
    }
  }

  return totalCost;
}

function solvePotionPurchase(N, prices, discounts) {
  let minCost = Infinity;
  const potions = Array.from({ length: N }, (_, i) => i);

  for (let order of generatePermutations(potions)) {
    const cost = simulatePurchase(order, prices, discounts);
    minCost = Math.min(minCost, cost);
  }

  return minCost;
}

function transformInput(input) {
  const discounts = [];
  for (let i = 0; i < input.length; ) {
    const count = Number(input[i++]);

    discounts.push(
      Array.from({ length: count }, () =>
        input[i++]
          .split(' ')
          .map((x, j) => (j === 0 ? Number(x) - 1 : Number(x))),
      ),
    );
  }
  return discounts;
}

const result = solvePotionPurchase(+N, prices, transformInput(input));
console.log(result);
