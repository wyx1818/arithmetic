function totalFruit(fruits: number[]): number {
  const n = fruits.length,
    cnts = new Array(n).fill(0);
  let ans = 0;

  for (let i = 0, j = 0, tot = 0; i < n; i++) {
    // 第一次遇到
    if (++cnts[fruits[i]] === 1) tot++;
    while (tot > 2) {
      if (--cnts[fruits[j]] === 0) tot--;
    }
    ans = Math.max(ans, i - j + 1);
  }

  return ans;
}

function totalFruitMap(fruits: number[]): number {
  const n = fruits.length,
    cnt = new Map();

  let left = 0,
    ans = 0;
  for (let right = 0; right < n; right++) {
    cnt.set(fruits[right], (cnt.get(fruits[right]) || 0) + 1);

    if (cnt.size > 2) {
      cnt.set(fruits[left], cnt.get(fruits[left]) - 1);
      if (cnt.get(fruits[left]) === 0) {
        cnt.delete(fruits[left]);
      }

      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}
//  j    i
// {3,3,3},1,2,1,1,2,3,3,4

const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];

console.log(totalFruitMap(fruits));

/**
 * 1: 001
 * 2: 010
 * 3: 011
 * 4: 100
 */
