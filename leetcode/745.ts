/**
 * 745. 前缀和后缀搜索
 * @see https://leetcode.cn/problems/prefix-and-suffix-search/
 */
class WordFilter {
  dictionary: Map<string, number>;

  constructor(words: string[]) {
    this.dictionary = new Map();
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const m = words.length;

      for (let prefixLength = 1; prefixLength <= m; prefixLength++) {
        for (let suffixLength = 1; suffixLength <= m; suffixLength++) {
          this.dictionary.set(word.substring(0, prefixLength) + '#' + word.substring(m - suffixLength), i)
        }
      }
    }
  }

  f(pref: string, suff: string): number {
    if (this.dictionary.has(pref + '#' + suff)){
      return this.dictionary.get(pref + '#' + suff)
    }

    return  -1
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
