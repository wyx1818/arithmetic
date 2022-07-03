import { GNode, Graph } from "./Graph";

function sortedTopology(graph: Graph) {
  // 记录node的入度
  const inMap: Record<GNode, number> = {};

  // 入度为0的点，才能进这个队列
  const zeroInQueue: GNode[] = []

  for (let node of Object.values(graph.nodes)) {
    inMap[node] = node.in
    if (node.in === 0) {
      zeroInQueue.unshift(node)
    }
  }

  // 拓扑排序的结果，依次加入result
  const result: GNode[] = []
  while (zeroInQueue.length !== 0) {
    const cur = zeroInQueue.pop()
    result.push(cur)

    for (let next of cur.nexts) {
      inMap[next] -= 1

      if (inMap[next] === 0) {
        zeroInQueue.push(next)
      }
    }
  }

  return result

}
