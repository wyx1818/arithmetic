/**
 * 不使用额外的数据结构，逆序栈
 * 递归的技巧调用
 * @param stack
 */
function reverse (stack: number[]) {
  if (stack.length === 0) {
    return
  }
  const i = f(stack)
  reverse(stack)
  stack.push(i)
}

function  f (stack: number[]): number {
  const result = stack.pop()
  if (stack.length === 0) {
    return result!
  } else {
    const last = f(stack)
    stack.push(result!)
    return last
  }
}

const stack = [1, 2, 3, 4]
reverse(stack)
console.log(stack)