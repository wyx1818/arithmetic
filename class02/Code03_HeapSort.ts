import { swap } from "../utils";

/**
 * 数组转换完全二叉树
 *    0        i 位置
 *   1 2       左 2*i+1
 * 3 4 5 6     右 2*i+2
 *             父 (i-1)/2
 *
 * 堆是一个完全二叉树
 *
 * heap insert 新进来一个数，和父比较，大于父就交换位置，直到它不大于父
 */

/**
 * 堆排序
 * @param arr
 */
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
 * 某个数现在处在 index 位置，往上继续移动
 * @param arr
 * @param index 当前下标
 */
function heapInsert(arr: number[], index: number) {
  // 当前数大于父位置数
  while (arr[index] > arr[(index - 1) / 2]) {
    swap(arr, index, (index - 1) / 2);
    index = (index - 1) / 2;
  }
}

/**
 * heapify 返回并移除最大值，从顶部往下移动
 * @param arr
 * @param index 当前下标
 * @param heapSize 堆范围
 */
function heapify(arr: number[], index: number, heapSize: number) {
  let left = index * 2 + 1;

  while (left < heapSize) {
    // 两个孩子中，谁的值最大，把它的下标给 largest
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    // 父和孩子之间，谁的值最大，把它的下标给 largest
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest === index) {
      break;
    }

    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}

// 左程云