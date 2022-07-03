import { swap } from "../utils";

const MAX = 2147483647;
/**
 * 556. 下一个更大元素 III
 * 既然是找满足要求的最小整数，那么就从低位开始找起
 * 当发现高位idx比低位小时，将这个高位换成[0, idx)上最小的低位，然后[0,idx)升序排列即可
 * @see https://leetcode.cn/problems/next-greater-element-iii/
 * @param n
 */

function nextGreaterElement(n: number): number {
  const nums = []; // 数组从低位到高位排序
  while (n !== 0) {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  }

  let idx = -1; // 记录高位比低位小的位置
  // 通过这一过程，即确保了[0, idx)上的值由小到大排列
  for (let i = 0; i < nums.length && idx === -1; i++) {
    if (nums[i + 1] < nums[i]) idx = i + 1;
  }

  // 如果高位都比低位大，不满足题目要求
  if (idx === -1) return -1;

  // 从低位开始寻找第一个比idx位置大的数
  for (let i = 0; i < idx; i++) {
    if (nums[i] > nums[idx]) {
      swap(nums, i, idx);
      // 只用找到第一个就行
      // 为什么这个位置只用一次交换就可以了？因为前面步骤保证了后续高位要比低位大
      // 所以从0开始找到的第一个比idx大的数行了
      break;
    }
  }

  // 通过双指针，将[0,idx)区间内的最高位和最低位调换，以获取最小值
  for (let l = 0, r = idx - 1; l < r; l++, r--) {
    swap(nums, l, r);
  }

  // 将nums还原为数值
  let ans = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans = ans * 10 + nums[i];
  }

  if (ans > MAX) return -1;

  return ans;
}

console.log(nextGreaterElement(2147483648));
