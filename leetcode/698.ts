let nums: number[];
/** 集合的长度 */
let n: number,
  /** 单个集合的总和 */
  t: number,
  /** 总共能划分的非空子集 */
  k: number;

/**
 * 698. 划分为k个相等的子集
 * @see https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/
 * @param _nums
 * @param _k
 */
function canPartitionKSubsets(_nums: number[], _k: number): boolean {
  (nums = _nums), (k = _k);
  /** 记录总和 */
  let tot = 0;
  for (let x of nums) tot += x;

  // 如果不是k倍无解
  if (tot % k != 0) return false;

  nums.sort((a, b) => a - b);
  n = nums.length;
  t = tot / k;

  // 从后面的最大值开始搜索
  return dfs(n - 1, 0, 0, new Array<boolean>(n).fill(false));
}

/**
 *
 * @param idx
 * @param cur 当前集合的元素和（初始为0）
 * @param cnt 已凑成多少个总和为t的集合
 * @param vis 用于记录那些 nums[i] 已被使用
 */
function dfs(idx: number, cur: number, cnt: number, vis: boolean[]): boolean {
  // 达到搜索深度，结素
  if (cnt === k) return true;
  // 已求的和和目标和相等，寻找下一个集合
  if (cur === t) return dfs(n - 1, 0, cnt + 1, vis);

  for (let i = idx; i >= 0; i--) {
    if (vis[i] || cur + nums[i] > t) continue;

    // 将当前元素标记为使用，尝试使用当前元素来寻找满足的集合
    vis[i] = true;
    if (dfs(idx - 1, cur + nums[i], cnt, vis)) return true;

    // 当前元素无法凑出满足要求的集合，将其标记为未使用
    vis[i] = false;

    // cur为0时，表示的是未凑成集合的最大数
    // 若搜索完它所有的左边仍然无法凑齐，则表示无解
    if (cur === 0) return false;
  }

  return false;
}

console.log(canPartitionKSubsets([3, 3, 10, 2, 6, 5, 10, 6, 8, 3, 2, 1, 6, 10, 7, 2], 6));
