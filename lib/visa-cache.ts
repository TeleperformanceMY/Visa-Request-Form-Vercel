// This can be expanded to use Upstash Redis for distributed caching

interface CacheConfig {
  ttl: number // in seconds
}

class VisaCache {
  private memory: Map<string, { data: unknown; expires: number }> = new Map()
  private config: CacheConfig

  constructor(config: CacheConfig = { ttl: 86400 }) {
    this.config = config
  }

  set(key: string, value: unknown): void {
    const expires = Date.now() + this.config.ttl * 1000
    this.memory.set(key, { data: value, expires })
  }

  get(key: string): unknown | null {
    const cached = this.memory.get(key)
    if (!cached) return null

    if (Date.now() > cached.expires) {
      this.memory.delete(key)
      return null
    }

    return cached.data
  }

  clear(): void {
    this.memory.clear()
  }
}

export const visaCache = new VisaCache({ ttl: 86400 }) // 24 hours
