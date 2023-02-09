/**
 * 剑指 Offer 09. 用两个栈实现队列
 *
 * @see https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=bce0mj5
 */

class CQueue {
  private inStack: number[];
  private outStack: number[];
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  appendTail(value: number): void {
    this.inStack.push(value);
  }

  deleteHead(): number {
    if (!this.outStack.length) {
      if (!this.inStack.length) {
        return -1;
      }
      this.in2out();
    }

    return this.outStack.pop()!;
  }

  in2out() {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop()!);
    }
  }
}

/*
未按照要求做题，不得分
class CQueue {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  appendTail(value: number): void {
    this.queue.push(value);
  }

  deleteHead(): number {
    if (this.queue[0]) {
      return this.queue.shift()!;
    }

    return -1;
  }
}*/

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
