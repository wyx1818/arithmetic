import { GNode } from './Graph'

function my_dfs(node: GNode) {
  if (node === null) {
    return
  }
  const stack: GNode[] = []
  const set = new Set<GNode>()

  stack.push(node)
  set.add(node)

  // 节点处理流程
  while (stack.length !==0) {
    const cur = stack.pop()

    for (let next of cur.nexts) {
      if (!set.has(next)) {
        stack.push(cur)
        stack.push(next)
        set.add(next)

        // 流程处理函数
        break
      }
    }
  }
}

function myBfs(node: GNode) {
  if (node === null) {
    return
  }

  const queue: GNode[] = []
  const set = new Set<GNode>()

  queue.unshift(node)
  set.add(node)

  while (queue.length !== 0) {
    const cur = queue.pop()
    // 节点处理函数

    for (let next of cur.nexts) {
      if (!set.has(next)) {
        queue.unshift(next)
        set.add(next)
      }
    }

  }
}