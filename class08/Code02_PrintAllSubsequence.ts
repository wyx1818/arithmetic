// 打印一个字符串的全部子序列
function printAllSubsequence(str: string) {
  const chs = str.split("");
  charProcess(chs, 0);
}

// 当前来到i位置，要和不要，走两条路
function charProcess(str: string[], i: number) {
  if (i === str.length) {
    console.log('res:', str.join(""));
    return;
  }
  charProcess(str, i + 1); // 要
  const tmp = str[i]; // 系统压栈了，所以可以保留
  str[i] = "";
  charProcess(str, i + 1); // 不要
  str[i] = tmp;
}

printAllSubsequence("abc");
