function kthGrammar(n: number, k: number): number {
  // 确定终点的位置
  if (k === 1) return 0;

  // 1 << n 指的 2 的n次方
  // 第一行为 2 的 0 次方， 所有第n行为 2^(n-1) 次方，即 1 << (n - 1)
  // 通过规律，我们能发现，下一行新增的内容，与本行对应位置相反
  // 即若 k 在新增的部分时，与上一行取反
  if (k > 1 << (n - 2)) return 1 ^ kthGrammar(n - 1, k - (1 << (n - 2)));
  else return kthGrammar(n - 1, k);
}
