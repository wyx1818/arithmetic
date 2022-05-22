import { GNode } from "./Graph";

/**
 * 图的宽度优先遍历
 * 利用队列实现
 * 从源节点开始依次按照宽度进队列，然后弹出
 * 每弹出一个点，把该节点所有没有进入过队列的邻接点放入队列
 * 直到队列为空
 * @param node
 */
function graphBfs(node: GNode) {
  if (node === null) {
    return;
  }
  const queue: GNode[] = []; // 队列
  const set = new Set<GNode>(); // 注册进入过队列的点

  queue.unshift(node);
  set.add(node);

  while (queue.length !== 0) {
    const cur = queue.pop();
    // 节点处理流程

    for (let next of cur.nexts) {
      if (!set.has(next)) {
        set.add(next);
        queue.unshift(next);
      }
    }
  }
}
