import { MAX_CACHE_SIZE, CACHE_TTL } from "@/utils/constants";

export type Environment = 'prod' | 'staging';

interface CacheEntry {
  env: Environment;
  timestamp: number;
}

// Cache to remember which environment has which business card
const environmentCache = new Map<string, CacheEntry>();

// Helper function to clean expired cache entries
function cleanExpiredCache(): void {
  const now = Date.now();
  for (const [key, value] of environmentCache.entries()) {
    if (now - value.timestamp > CACHE_TTL) {
      environmentCache.delete(key);
    }
  }
}

// Helper function to manage cache size
function manageCacheSize(): void {
  if (environmentCache.size >= MAX_CACHE_SIZE) {
    // Clear oldest entries (first 20% of cache)
    const entriesToDelete = Math.floor(MAX_CACHE_SIZE * 0.2);
    let deleted = 0;
    for (const key of environmentCache.keys()) {
      if (deleted >= entriesToDelete) break;
      environmentCache.delete(key);
      deleted++;
    }
  }
}

// Helper function to make a fetch request with timeout
export async function fetchWithTimeout(url: string, timeout: number): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Get cached environment for a business card
export function getCachedEnvironment(hash: string, customEndpoint: string): Environment | null {
  const cacheKey = `${hash}/${customEndpoint}`;
  const cachedEntry = environmentCache.get(cacheKey);
  
  if (cachedEntry && Date.now() - cachedEntry.timestamp <= CACHE_TTL) {
    return cachedEntry.env;
  }
  
  // Remove expired entry
  if (cachedEntry) {
    environmentCache.delete(cacheKey);
  }
  
  return null;
}

// Set cached environment for a business card
export function setCachedEnvironment(hash: string, customEndpoint: string, env: Environment): void {
  const cacheKey = `${hash}/${customEndpoint}`;
  
  // Clean expired cache entries periodically
  if (environmentCache.size > 0 && environmentCache.size % 100 === 0) {
    cleanExpiredCache();
  }
  
  // Manage cache size before adding new entry
  manageCacheSize();
  
  environmentCache.set(cacheKey, { env, timestamp: Date.now() });
}

// Remove cached environment for a business card
export function removeCachedEnvironment(hash: string, customEndpoint: string): void {
  const cacheKey = `${hash}/${customEndpoint}`;
  environmentCache.delete(cacheKey);
}

// Get cache statistics
export function getCacheStats(): { size: number; maxSize: number } {
  return {
    size: environmentCache.size,
    maxSize: MAX_CACHE_SIZE
  };
}

// Clear entire cache
export function clearCache(): void {
  environmentCache.clear();
} 