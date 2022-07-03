function knapsack(weights: number[], values: number[], maxWeight: number) {
  return processFunc(weights, values, 0, 0, maxWeight);
}

/**
 *
 * @param weights 货物重量数组
 * @param values 货物价值数组
 * @param i 第几个货物
 * @param alreadyWeight 之前货物重量
 * @param bag 背包总重量
 */
function processFunc(weights: number[], values: number[], i: number, alreadyWeight: number, bag: number): number {
  // 超重的情况，需要把上一个货物价值减掉
  if (alreadyWeight > bag) {
    return -values[i - 1];
  }
  // 货物拿完了
  if (i === weights.length) {
    return 0;
  }

  return Math.max(
    processFunc(weights, values, i + 1, alreadyWeight, bag), // 不要货物
    values[i] + processFunc(weights, values, i + 1, alreadyWeight + weights[i], bag) // 要货物
  );
}

const weights = [10, 2, 99, 1, 8];
const values = [10, 3, 11, 7, 9];

console.log(knapsack(weights, values, 2))