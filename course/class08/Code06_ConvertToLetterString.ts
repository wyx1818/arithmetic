function convertToLetterString(str: string) {
  return processFunc(str.split(""), 0);
}

// TODO: 尝试把每种结果打印出来
function processFunc(str: string[], i: number): number {
  // 找到末尾了，返回一种结果
  if (i === str.length) {
    return 1;
  }
  // 改位置是0，无以它为起点匹配的结果
  if (str[i] === "0") {
    return 0;
  }

  if (str[i] === "1") {
    // i 自己作为单独的部分，后续有多少种方法
    let res = processFunc(str, i + 1);

    // i和 i+1 作为单独的部分，后续有多少种方法
    if (i + 1 < str.length) {
      res += processFunc(str, i + 2);
    }
    return res;
  }

  if (str[i] === "2") {
    // i 自己作为单独的部分，后续有多少种方法
    let res = processFunc(str, i + 1);

    // i和 i+1 作为单独的部分，后续有多少种方法
    if (i + 1 < str.length && str[i + 1] >= "0" && str[i + 1] <= "6") {
      res += processFunc(str, i + 2);
    }
    return res;
  }

  // str[i] 为 '3'~'9'
  return processFunc(str, i + 1);
}

console.log(convertToLetterString("111"));
