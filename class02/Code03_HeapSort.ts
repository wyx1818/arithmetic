import { swap } from "../utils";

function heapSort(arr: number[]) {
  if (!arr || arr.length < 2) {
    return;
  }
  // O(N)
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i); // O(logN)
  }
  let heapSize = arr.length;
  // O(N)
  while (heapSize > 0) {
    heapify(arr, 0, heapSize); // O(logN)
    swap(arr, 0, --heapSize); // O(1)
  }
}

/**
 * 某个数现在处于index位置，往上继续移动
 * @param arr
 * @param index
 */
function heapInsert(arr: number[], index: number) {
  while (arr[index] > arr[(index - 1) / 2]) {
    swap(arr, index, (index - 1) / 2);
    index = (index - 1) / 2;
  }
}

/**
 * 某个数在index位置，能否往下移动
 * @param arr
 * @param index
 * @param heapSize
 */
function heapify(arr: number[], index, heapSize) {
  let left = index * 2 + 1; // 左孩子的下标

  while (left < heapSize) {
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;

    largest = arr[largest] > arr[index] ? largest : index;

    if (largest === index) {
      break;
    }
    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}
