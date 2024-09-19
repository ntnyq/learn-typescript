/**
 * @file LRUCache
 */

export class LRUCache<K = string, V = any> {
  #cache: Map<K, V>
  #maxSize: number

  constructor(maxSize: number = 5000) {
    this.#cache = new Map<K, V>()
    this.#maxSize = maxSize
  }

  get(key: K) {
    const value = this.#cache.get(key)
    if (value !== undefined) {
      this.#cache.delete(key)
      this.#cache.set(key, value)
    }
    return value
  }

  set(key: K, value: V) {
    if (this.#cache.size >= this.#maxSize) {
      const oldestKey = this.#cache.keys().next().value
      if (!oldestKey) return
      this.#cache.delete(oldestKey)
    }
    this.#cache.set(key, value)
  }

  has(key: K) {
    return this.#cache.has(key)
  }

  clear() {
    this.#cache.clear()
  }
}

export const cacheMap = new LRUCache()
