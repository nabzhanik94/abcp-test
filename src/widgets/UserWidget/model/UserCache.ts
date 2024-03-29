import { User } from "./types";

interface CacheEntry {
  data: User;
  timestamp: number;
}

export class UserCache {
  private cache: Map<number, CacheEntry>;
  private ttl: number;

  constructor(ttl: number = 60000) {
    this.cache = new Map<number, CacheEntry>();
    this.ttl = ttl;
  }

  public get(id: number): User | null {
    const entry = this.cache.get(id);
    if (!entry) return null;

    const isExpired = Date.now() - entry.timestamp > this.ttl;
    if (isExpired) {
      this.cache.delete(id);
      return null;
    }
    return entry.data;
  }

  public has(id: number): boolean {
    return Boolean(this.get(id));
  }

  public set(id: number, data: User): void {
    const entry: CacheEntry = { data, timestamp: Date.now() };
    this.cache.set(id, entry);
  }
}
