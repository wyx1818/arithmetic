/*
 * Nlog(N) 排序应用
 * 小和问题
 * 在一个数组中，每一个左边比当前小的数累加起来，叫做这个数组的小和
 * 逆序对
 */
function processArr(arr: number[], l: number, r: number): number {
  if (l === r) {
    return 0;
  }
  const mid = l + ((r - l) >> 1); // 避免相加后溢出

  return (
    processArr(arr, l, mid) + // 左组小和
    processArr(arr, mid + 1, r) + // 右组小和
    merge(arr, l, mid, r) // merge 时的小和
  );
}

function merge(arr: number[], l: number, m: number, r: number) {
  const help: number[] = []; // 辅助数组
  let i = 0;
  let p1 = l; // 左指针
  let p2 = m + 1; // 右指针
  let res = 0;

  // 都不越界
  while (p1 <= m && p2 <= r) {
    // 右边有多少个数比左边大，就产生多少个左边数的小和
    res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0;
    // 排序
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }

  for (let j = 0; j < help.length; j++) {
    arr[l + j] = help[j]; // 排序原数组
  }

  return res;
}

// const testArr = [1, 9, 11, 7, 6, 2, 5, 3, 8, 6];
const testArr = [1, 3, 4, 2, 5];
const smallSum = processArr(testArr, 0, testArr.length - 1);

console.log(smallSum, testArr);
