/**
 * 741. 摘樱桃
 * @see https://leetcode.cn/problems/cherry-pickup/
 * @param grid
 */
function cherryPickup(grid: number[][]): number {
  const n = grid.length;

  // 初始化
  // k：当前走了k步（横纵坐标之和）i1：第一个点在第i1行 i2：第二个点在第i2行
  for (let k = 0; k <= 2 * n; k++) {
    for (let i1 = 0; i1 <= n; i1++) {
      for (let i2 = 0; i2 <= n; i2++) {
        f[k][i1][i2] = INF;
      }
    }
  }

  // 起始状态
  // f[k][i1][i2] 代表最大得分
  f[2][1][1] = grid[0][0];
  for (let k = 3; k <= 2 * n; k++) {
    for (let i1 = 1; i1 <= n; i1++) {
      for (let i2 = 1; i2 <= n; i2++) {
        const j1 = k - i1,
          j2 = k - i2;
        // 边界情况判定
        if (j1 <= 0 || j1 > n || j2 <= 0 || j2 > n) continue;

        // 荆棘情况判定
        const A = grid[i1 - 1][j1 - 1],
          B = grid[i2 - 1][j2 - 1];
        if (A === -1 || B === -1) continue;

        // 状态转移方程
        const a = f[k - 1][i1 - 1][i2], // A下，B右
          b = f[k - 1][i1 - 1][i2 - 1], // A下，B下
          c = f[k - 1][i1][i2 - 1], // A右，B下
          d = f[k - 1][i1][i2]; // A右，B右

        let t = Math.max(Math.max(a, b), Math.max(c, d)) + A;
        // 判断位置是否相同，相同的话只能取一个
        if (i1 !== i2) t += B;
        f[k][i1][i2] = t;
      }
    }
  }

  return f[2 * n][n][n] <= 0 ? 0 : f[2 * n][n][n];
}

const N = 55,
  INF = -Infinity,
  f = new Array(2 * N).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N).fill(0)));

const grid = [
  [0, 1, -1],
  [1, 0, -1],
  [1, 1, 1],
];

cherryPickup(grid);
console.log(cherryPickup(grid));
