/**
 * 交换数组下标的值
 * @param arr 数组
 * @param i 下标
 * @param j 下标
 */
export function swap(arr: number[], i: number, j: number) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
