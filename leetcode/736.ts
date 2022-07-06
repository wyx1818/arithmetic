let cs: string[];
let s: string;

/**
 * 736. Lisp 语法解析
 * @see https://leetcode.cn/problems/parse-lisp-expression/
 * @param expression
 */
function evaluate(expression: string): number {
  s = expression;
  cs = expression.split("");

  return dfs(0, cs.length - 1, {});
}

/**
 *
 * @param l 左边
 * @param r 右边
 * @param map 关系作用域
 */
function dfs(l: number, r: number, map: Record<string, number>): number {
  if (cs[l] === "(") {
    // 指针的位置
    let idx = l;
    // 找到下一个距离左括号最近的关键字 let|add|mul
    while (cs[idx] !== " ") idx++;
    // 获取到关键字
    const op = s.substring(l + 1, idx);
    // 既然左边有括号，那么找需要跳过和他匹配的 ")"，即最右边一个字符
    r--;

    if (op === "let") {
      // 赋值操作
      // 根据题意，let 后的第一个关键字为变量名，第二个为值

      // 起始值为 idx + 1 是为了跳过 " "
      for (let i = idx + 1; i <= r; ) {
        // 第一步，获取变量名
        let j = getRight(i, r);
        // 获取子表达式字符串，即变量名
        const key = s.substring(i, j);

        // 什么情况下会大于？
        if (j >= r) {
          // 子作用域不能影响到父作用域，所以需要克隆对象
          return dfs(i, j - 1, Object.assign({}, map));
        }
        // 跳过" "，将之前的右侧设置为新的起始位置
        i = ++j;
        // 第二步，获取变量的值。因为已经获取了变量名，那么后面这个必定为变量值，即一定能走到 base 情况
        // 重新获取新的右侧
        j = getRight(i, r);
        const value = dfs(i, j - 1, Object.assign({}, map));
        // 建立作用域关系
        map[key] = value;

        // 继续往后推进
        i = ++j;
      }

      return  -1
    } else if (op === "add") {
      // 相加操作
      // 起始值为 idx + 1 是为了跳过 " "
      const j = getRight(idx + 1, r);
      const a = dfs(idx + 1, j - 1, Object.assign({}, map)),
        b = dfs(j + 1, r, Object.assign({}, map));

      return a + b;
    } else {
      // 相乘操作
      const j = getRight(idx + 1, r);
      const a = dfs(idx + 1, j - 1, Object.assign({}, map)),
        b = dfs(j + 1, r, Object.assign({}, map));

      return a * b
    }
  } else {
    // base 情况
    // why r+1 ? substring 不包含末尾，所以需要+1
    const cur = s.substring(l, r + 1);
    if (map[cur] !== undefined) return map[cur];

    return Number(cur);
  }
}

/**
 * 传入左端点，寻找右端点
 * @param start 左端点
 * @param end 右端点
 * @return 右端点，区间的内容为 合法的子表达式｜对应的值
 */
function getRight(start: number, end: number): number {
  let right = start,
    score = 0; // 左边括号的数量

  while (right <= end) {
    if (cs[right] === "(") {
      score++;
      right++;
    } else if (cs[right] === ")") {
      score--;
      right++;
    } else if (cs[right] === " ") {
      if (score === 0) break;
      right++;
    } else {
      right++;
    }
  }

  return right;
}

const expression = "(let x 2 (mult x (let x 3 y 4 (add x y))))";

console.log(evaluate(expression))
