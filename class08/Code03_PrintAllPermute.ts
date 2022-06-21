/**
 * 46. 全排列
 * @see https://leetcode.cn/problems/permutations/
 * @param nums
 */
function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  if (!nums || nums.length === 0) {
    return res;
  }
  permuteProcess(nums, 0, res);

  return res;
}

function permuteProcess(numArr: number[], i: number, resArr: number[][]) {
  if (i === numArr.length) {
    resArr.push(numArr);
  }
  for (let j = i; j < numArr.length; j++) {
    swap(numArr, i, j);
    permuteProcess(([] as any).concat(numArr), i + 1, resArr);
    swap(numArr, i, j);
  }
}

function swap(arr: any[], i: number, j: number) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

console.log(permute([1, 2, 3]));
