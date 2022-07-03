/*
 * 荷兰国旗问题
 */

function helan(arr: number[], num: number) {
  let pl = -1; // 左指针
  let pr = arr.length; // 右指针
  let tmp;

  for (let i = 0; i < arr.length; i++) {
    if (i >= pr) break

    //  情况1 [i]< num
    if (arr[i] < num) {
      tmp = arr[i];
      arr[i] = arr[++pl];
      arr[pl] = tmp;
    } else if (arr[i] === num) {
      continue;
    } else if (arr[i] > num) {
      tmp = arr[i]
      arr[i] = arr[--pr]
      arr[pr] = tmp
      i--
    }
  }
}

const arr = [3, 5, 6, 3, 4, 5, 2, 6, 9, 0];


helan(arr, 5)
console.log(arr)
