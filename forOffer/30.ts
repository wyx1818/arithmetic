/**
 * 剑指 Offer 30. 包含min函数的栈
 * @see https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof
 */
class MinStack {
  private stack: number[];
  private minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    this.minStack.push(
      Math.min(this.minStack[this.minStack.length - 1] ?? Infinity, val)
    );
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
