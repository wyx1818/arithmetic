import { GNode } from "./Graph";

/**
 * 利用栈实现
 * 从源节点开始把节点按照深度放入栈，然后弹出
 * 每弹出一个点，把该节点下一个没有进过栈的邻接点放入栈
 * 直到栈为空
 */
function graphDfs(node: GNode) {
  if (node === null) {
    return;
  }

  const stack: GNode[] = [];
  const set = new Set<GNode>();

  stack.push(node);
  set.add(node);

  // 节点处理函数

  while (stack.length !== 0) {
    const cur = stack.pop();
    for (let next of cur.nexts) {
      if (!set.has(next)) {
        stack.push(cur);
        stack.push(next);

        // 节点处理函数
        break;
      }
    }
  }
}
