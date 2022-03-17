import { swap } from "../utils";

// 选择排序
function selectionSort(arr: number[]): void {
  // 剔除异常
  if (!arr || arr.length < 2) {
    return;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    // i ~ N - 1
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      // i ~ N -1 上找最小下标
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }

    swap(arr, i, minIndex);
  }
}
