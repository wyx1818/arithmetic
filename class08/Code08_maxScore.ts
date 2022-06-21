/**
 * 1423. 可获得的最大点数
 * @see https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/
 * @param cardPoints
 * @param k
 */
function maxScore(cardPoints: number[], k: number): number {
  if (!cardPoints || cardPoints.length === 0) {
    return 0;
  }
  // return dfs(cardPoints, 0, cardPoints.length - 1, k);
  return preSumArr(cardPoints, k);
}

/**
 * 暴力递归法
 * @param arr
 * @param i 左边界
 * @param j 右边界
 * @param k 剩余步数
 */
function dfs(arr: number[], i: number, j: number, k: number): number {
  if (k === 0) return 0;

  const removeLeft = arr[i] + dfs(arr, i + 1, j, k - 1);
  const removeRight = arr[j] + dfs(arr, i, j - 1, k - 1);
  return Math.max(removeLeft, removeRight);
}

function preSumArr(arr: number[], k: number): number {
  const N = arr.length;
  const preSum: any[] = Array.from({ length: N + 1 }).fill(0);

  // 预选算出所有的值
  for (let i = 0; i < N; i++) {
    preSum[i + 1] = preSum[i] + arr[i];
  }

  let res = Number.MAX_VALUE;
  const windowSize = N - k;
  for (let i = 0; i < k + 1; i++) {
    res = Math.min(res, preSum[windowSize + i] - preSum[i]);
  }

  return preSum[N] - res;
}

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
