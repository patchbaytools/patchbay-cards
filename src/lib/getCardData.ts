import "server-only";

import { redirect } from "next/navigation";

import { 
  getCachedEnvironment, 
  setCachedEnvironment, 
  removeCachedEnvironment,
  fetchWithTimeout, 
} from "@/lib/cache";
import { REQUEST_TIMEOUT } from "@/utils/constants";

import type { BusinessCardResponse } from "./BusinessCardResponse";

export async function getCardData(
  custom_endpoint: string,
  hash: string
): Promise<BusinessCardResponse> {
  // Type guard for parameters
  if (
    !custom_endpoint ||
    !hash ||
    typeof custom_endpoint !== "string" ||
    typeof hash !== "string"
  ) {
    console.error("Invalid parameters provided");
    redirect("https://patchbay.xyz");
  }
  
  // Check cache first - if we know which environment has this data
  const cachedEnv = getCachedEnvironment(hash, custom_endpoint);
  if (cachedEnv) {
    const apiUrl = cachedEnv === 'prod' 
      ? process.env.NEXT_PUBLIC_PATCHBAY_API_PROD_URL
      : process.env.NEXT_PUBLIC_PATCHBAY_API_STAGING_URL;
    
    if (!apiUrl) {
      console.error(`API URL not set for ${cachedEnv} environment`);
      redirect("https://patchbay.xyz");
    }

    const url = `${apiUrl}/api/v1/card/public/${custom_endpoint}/${hash}`;

    try {
      const res = await fetchWithTimeout(url, REQUEST_TIMEOUT);
      if (res.ok) {
        const data = await res.json() as BusinessCardResponse;
        if (data && typeof data === "object" && !Array.isArray(data)) {
          return data;
        }
      }
    } catch (error) {
      console.error(`[API Error] Cached environment failed:`, error);
    }
    
    // If cached environment failed, remove from cache and try both
    removeCachedEnvironment(hash, custom_endpoint);
  }

  // Try prod first
  const prodUrl = `${process.env.NEXT_PUBLIC_PATCHBAY_API_PROD_URL}/api/v1/card/public/${custom_endpoint}/${hash}`;
  
  try {
    const prodRes = await fetchWithTimeout(prodUrl, REQUEST_TIMEOUT);
    if (prodRes.ok) {
      const data = await prodRes.json() as BusinessCardResponse;
      if (data && typeof data === "object" && !Array.isArray(data)) {
        setCachedEnvironment(hash, custom_endpoint, 'prod');
        return data;
      }
    }
  } catch (error) {
    console.error(`[API Error] Prod lookup failed:`, error);
  }

  // Try staging if prod doesn't have it
  const stagingUrl = `${process.env.NEXT_PUBLIC_PATCHBAY_API_STAGING_URL}/api/v1/card/public/${custom_endpoint}/${hash}`;
  
  try {
    const stagingRes = await fetchWithTimeout(stagingUrl, REQUEST_TIMEOUT);
    if (stagingRes.ok) {
      const data = await stagingRes.json() as BusinessCardResponse;
      if (data && typeof data === "object" && !Array.isArray(data)) {
        setCachedEnvironment(hash, custom_endpoint, 'staging');
        return data;
      }
    }
  } catch (error) {
    console.error(`[API Error] Staging lookup failed:`, error);
  }

  // Neither environment has the data
  redirect("https://patchbay.xyz");
}
