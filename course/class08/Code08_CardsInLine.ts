/**
 * 486. 预测赢家
 * @see https://leetcode.cn/problems/predict-the-winner/
 * @param nums
 * @constructor
 */
function PredictTheWinner(nums: number[]): boolean {
  if (nums === null || nums.length === 0) {
    return true;
  }

  return f(nums, 0, nums.length - 1) - s(nums, 0, nums.length - 1) >= 0;
}

/**
 * 先手函数
 * 保证能拿到最大值
 */
function f(arr: number[], i: number, j: number) {
  if (i === j) return arr[i];

  return Math.max(arr[i] + s(arr, i + 1, j), arr[j] + s(arr, i, j - 1));
}

/**
 * 后手函数
 * 对手拿最大值，所以返回给自己小的那个方法
 */
function s(arr: number[], i: number, j: number) {
  if (i === j) return 0;

  return Math.min(f(arr, i + 1, j), f(arr, i, j - 1));
}
