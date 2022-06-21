function Graph() {
  this.nodes = {};
  this.edges = new Set();
}

function GNode(value) {
  this.value = value;
  this.in = 0; // 入度
  this.out = 0; // 出度
  this.nexts = []; // out 的点
  this.edges = []; // out 的边
}

function Edge(weight, from, to) {
  this.weight = weight; // 权重
  this.from = from; // 从哪个点来
  this.to = to; // 去哪个点
}

export type GNode<T extends unknown = string | number> = {
  value: T;
  in: number; // 入度
  out: number; // 出度
  nexts: GNode<T>[]; // out 的点
  edges: Edge<T>[]; // out 的边
};
type Edge<T> = {
  weight: number; // 权重
  from: GNode<T>; // 从哪个点来
  to: GNode<T>; // 去哪个点
};

export type Graph<T extends unknown = string | number | symbol> = {
  nodes: Record<string, GNode<T>>;
  edges: Edge<T>[];
};
