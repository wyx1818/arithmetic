// 归并排序

function process(arr, L, R) {
  if (L === R) {
    return;
  }

  const mid = L + ((R - L) >> 1);

  process(arr, L, mid);
  process(arr, mid + 1, R);
  merge(arr, L, mid, R);
}

function merge(arr, L, M, R) {
  const help = [];
  let i = 0;
  let p1 = L; // 左指针
  let p2 = M + 1; // 右指针

  while (p1 <= M && p2 <= R) {
    // 未越界
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }

  while (p1 <= M) {
    help[i++] = arr[p1++];
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }

  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }
}

const rowArr = [1,6,8,5,4,9]

process(rowArr, 0, 5)

console.log(rowArr)


// 拓展1: 小和问题
