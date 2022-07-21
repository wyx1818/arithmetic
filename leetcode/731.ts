const MAX_RANGE = 1e9;

/**
 * 731. 我的日程安排表 II
 * @see https://leetcode.cn/problems/my-calendar-ii/
 */
class MyCalendarTwo {
  st: SegmentTree;

  constructor() {
    this.st = new SegmentTree();
  }

  book(start: number, end: number): boolean {
    if (this.st.query(this.st.root, 0, MAX_RANGE, start, end - 1) < 2) {
      this.st.update(this.st.root, 0, MAX_RANGE, start, end - 1, 1);

      return true;
    }
    return false;
  }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

class SegNode {
  /* 左孩子 */
  ls: SegNode;
  /* 右孩子 */
  rs: SegNode;
  /* 值 */
  val: number;
  /* 更新标记 */
  add: number;

  constructor() {
    this.ls = this.rs = null;
    this.val = this.add = 0;
  }
}

class SegmentTree {
  root: SegNode;

  constructor() {
    this.root = new SegNode();
  }

  /**
   * 更新
   * @param node
   * @param lc 树的左区间
   * @param rc 树的右区间
   * @param l 要查询的左区间
   * @param r 要查询的右区间
   * @param v 统一加的值
   */
  update(node: SegNode, lc: number, rc: number, l: number, r: number, v: number): void {
    // 完全包含区间
    if (l <= lc && rc <= r) {
      node.val += v;
      node.add += v;
      return;
    }

    // 更新下面
    this.pushdown(node);

    const mid = (lc + rc) >> 1;

    if (l <= mid) {
      this.update(node.ls, lc, mid, l, r, v);
    }
    if (r > mid) {
      this.update(node.rs, mid + 1, rc, l, r, v);
    }
    this.pushup(node);
  }

  query(node: SegNode, lc: number, rc: number, l: number, r: number): number {
    if (l <= lc && rc <= r) {
      return node.val;
    }
    this.pushdown(node);

    let ans = 0;
    const mid = (lc + rc) >> 1;
    if (l <= mid) {
      ans = this.query(node.ls, lc, mid, l, r);
    }
    if (r > mid) {
      ans = Math.max(ans, this.query(node.rs, mid + 1, rc, l, r));
    }

    return ans;
  }

  pushup(node: SegNode) {
    node.val = Math.max(node.ls.val, node.rs.val);
  }

  pushdown(node: SegNode): void {
    // 动态开点
    if (node.ls === null) {
      node.ls = new SegNode();
    }
    if (node.rs === null) {
      node.rs = new SegNode();
    }

    // 不存在懒标记，停止
    if (node.add === 0) {
      return;
    }

    // 传递标记
    node.ls.add += node.add;
    node.ls.val += node.add;
    node.rs.add += node.add;
    node.rs.val += node.add;

    // 传递完后，清空标记
    node.add = 0;
  }
}
