import Redis from 'ioredis';

// Redis configuration
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_DB = parseInt(process.env.REDIS_DB || '0');

// Create Redis client
const redis = new Redis(REDIS_URL, {
  password: REDIS_PASSWORD,
  db: REDIS_DB,
  retryDelayOnFailover: 100,
  maxRetriesPerRequest: 3,
  lazyConnect: true,
  keepAlive: 30000,
});

// Cache configuration
const CACHE_TTL = {
  SHORT: 300, // 5 minutes
  MEDIUM: 3600, // 1 hour
  LONG: 86400, // 24 hours
  USER_SESSION: 1800, // 30 minutes
  API_RESPONSE: 600, // 10 minutes
  STATIC_CONTENT: 3600, // 1 hour
};

/**
 * Set cache with TTL
 */
export async function setCache(key: string, value: any, ttl: number = CACHE_TTL.MEDIUM): Promise<void> {
  try {
    const serializedValue = JSON.stringify(value);
    await redis.setex(key, ttl, serializedValue);
  } catch (error) {
    console.error('Redis set error:', error);
  }
}

/**
 * Get cache value
 */
export async function getCache<T>(key: string): Promise<T | null> {
  try {
    const value = await redis.get(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  } catch (error) {
    console.error('Redis get error:', error);
    return null;
  }
}

/**
 * Delete cache key
 */
export async function deleteCache(key: string): Promise<void> {
  try {
    await redis.del(key);
  } catch (error) {
    console.error('Redis delete error:', error);
  }
}

/**
 * Delete multiple cache keys by pattern
 */
export async function deleteCachePattern(pattern: string): Promise<void> {
  try {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
    }
  } catch (error) {
    console.error('Redis delete pattern error:', error);
  }
}

/**
 * Set cache with hash (for complex objects)
 */
export async function setHashCache(key: string, field: string, value: any, ttl: number = CACHE_TTL.MEDIUM): Promise<void> {
  try {
    const serializedValue = JSON.stringify(value);
    await redis.hset(key, field, serializedValue);
    await redis.expire(key, ttl);
  } catch (error) {
    console.error('Redis hset error:', error);
  }
}

/**
 * Get cache hash field
 */
export async function getHashCache<T>(key: string, field: string): Promise<T | null> {
  try {
    const value = await redis.hget(key, field);
    if (!value) return null;
    return JSON.parse(value) as T;
  } catch (error) {
    console.error('Redis hget error:', error);
    return null;
  }
}

/**
 * Cache API response with intelligent TTL
 */
export async function cacheApiResponse(
  key: string, 
  data: any, 
  type: 'user' | 'public' | 'static' = 'public'
): Promise<void> {
  const ttl = type === 'user' ? CACHE_TTL.USER_SESSION : 
              type === 'static' ? CACHE_TTL.STATIC_CONTENT : 
              CACHE_TTL.API_RESPONSE;
  
  await setCache(key, {
    data,
    cachedAt: new Date().toISOString(),
    ttl
  }, ttl);
}

/**
 * Get cached API response
 */
export async function getCachedApiResponse<T>(key: string): Promise<T | null> {
  const cached = await getCache<{ data: T; cachedAt: string; ttl: number }>(key);
  return cached?.data || null;
}

/**
 * Cache user session data
 */
export async function cacheUserSession(userId: string, sessionData: any): Promise<void> {
  const key = `user:session:${userId}`;
  await setCache(key, sessionData, CACHE_TTL.USER_SESSION);
}

/**
 * Get cached user session
 */
export async function getCachedUserSession<T>(userId: string): Promise<T | null> {
  const key = `user:session:${userId}`;
  return await getCache<T>(key);
}

/**
 * Invalidate user cache
 */
export async function invalidateUserCache(userId: string): Promise<void> {
  const patterns = [
    `user:session:${userId}`,
    `user:data:${userId}:*`,
    `api:user:${userId}:*`
  ];
  
  for (const pattern of patterns) {
    await deleteCachePattern(pattern);
  }
}

/**
 * Cache database query results
 */
export async function cacheQueryResult(
  queryKey: string, 
  result: any, 
  ttl: number = CACHE_TTL.MEDIUM
): Promise<void> {
  const key = `query:${queryKey}`;
  await setCache(key, result, ttl);
}

/**
 * Get cached query result
 */
export async function getCachedQueryResult<T>(queryKey: string): Promise<T | null> {
  const key = `query:${queryKey}`;
  return await getCache<T>(key);
}

/**
 * Rate limiting with Redis
 */
export async function checkRateLimit(
  identifier: string, 
  limit: number, 
  window: number
): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
  const key = `rate_limit:${identifier}`;
  
  try {
    const current = await redis.incr(key);
    
    if (current === 1) {
      await redis.expire(key, window);
    }
    
    const ttl = await redis.ttl(key);
    const remaining = Math.max(0, limit - current);
    
    return {
      allowed: current <= limit,
      remaining,
      resetTime: Date.now() + (ttl * 1000)
    };
  } catch (error) {
    console.error('Rate limit check error:', error);
    return { allowed: true, remaining: limit, resetTime: Date.now() };
  }
}

/**
 * Health check for Redis connection
 */
export async function redisHealthCheck(): Promise<boolean> {
  try {
    await redis.ping();
    return true;
  } catch (error) {
    console.error('Redis health check failed:', error);
    return false;
  }
}

/**
 * Get Redis statistics
 */
export async function getRedisStats(): Promise<any> {
  try {
    const info = await redis.info();
    const memory = await redis.memory('USAGE');
    
    return {
      connected: redis.status === 'ready',
      memory: memory,
      info: info
    };
  } catch (error) {
    console.error('Redis stats error:', error);
    return { connected: false, error: error.message };
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  await redis.quit();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await redis.quit();
  process.exit(0);
});

export default redis; 