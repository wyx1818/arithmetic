class AuthenticationManager {
  private readonly timeToLive: number = 0;
  private readonly tokenMap: Map<string, number>;

  constructor(timeToLive: number) {
    this.timeToLive = timeToLive;
    this.tokenMap = new Map();
  }

  generate(tokenId: string, currentTime: number): void {
    this.tokenMap.set(tokenId, currentTime + this.timeToLive);
  }

  renew(tokenId: string, currentTime: number): void {
    if (!this.tokenMap.has(tokenId)) return;
    if (this.tokenMap.get(tokenId)! <= currentTime) return;

    this.tokenMap.set(tokenId, currentTime + this.timeToLive);
  }

  countUnexpiredTokens(currentTime: number): number {
    for (const [token, time] of this.tokenMap) {
      if (time <= currentTime) this.tokenMap.delete(token);
    }

    return this.tokenMap.size;
  }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
