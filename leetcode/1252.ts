/**
 * 1252. 奇数值单元格的数目
 * @see https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix/
 * @param m
 * @param n
 * @param indices
 */
function oddCells(m: number, n: number, ins: number[][]): number {
  const r = new Array<boolean>(m).fill(false),
    c = new Array<boolean>(n).fill(false);
  let a = 0,
    b = 0;
  for (const [i, j] of ins) {
    a += (r[i] = !r[i]) ? 1 : -1;
    b += (c[j] = !c[j]) ? 1 : -1;
  }
  return a * (n - b) + (m - a) * b;
}

function oddCells2(m: number, n: number, ins: number[][]): number {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  for (const index of ins) {
    rows[index[0]]++;
    cols[index[1]]++;
  }

  let res = 0;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (((rows[i] + cols[j]) & 1) !== 0) {
        res++;
      }
    }
  }

  return res;
}

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
);
