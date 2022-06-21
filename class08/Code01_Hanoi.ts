// 汉诺塔问题
function hanoi(n: number) {
  if (n > 0) {
    func(n, "左", "右", "中");
  }
}

function func(i: number, start: string, end: string, other: string) {
  if (i === 1) {
    console.log("Move 1 from " + start + " to " + end);
  } else {
    func(i - 1, start, other, end);
    console.log("Move " + i + " from " + start + " to " + end);
    func(i - 1, other, end, start);
  }
}

hanoi(3);
