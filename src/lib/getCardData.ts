import "server-only";

import { redirect } from "next/navigation";

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

  // Determine which API URL to use based on environment
  const isProduction = process.env.NODE_ENV === "production";
  const apiUrl = isProduction 
    ? process.env.NEXT_PUBLIC_PATCHBAY_API_PROD_URL
    : process.env.NEXT_PUBLIC_PATCHBAY_API_STAGING_URL;

  // Type guard for environment variable - CHECK BEFORE URL CONSTRUCTION
  if (!apiUrl) {
    console.error(
      `API URL not set for ${isProduction ? 'production' : 'staging'} environment`
    );
    redirect("https://patchbay.xyz");
  }

  const url = `${apiUrl}/api/v1/card/public/${hash}/${custom_endpoint}`;
  
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`[API Error] Request failed with status: ${res.status}`);
      console.error(`[API Error] Failed URL: ${url}`);
      
      // Try to get error details from response
      try {
        const errorData = await res.text();
        console.error(`[API Error] Response body: ${errorData}`);
      } catch (e) {
        console.error(`[API Error] Could not read error response: ${String(e)}`);
      }
      
      redirect("https://patchbay.xyz");
    }

    const data = (await res.json()) as BusinessCardResponse;

    // Enhanced type guard for response data
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      console.error("[API Error] Invalid response format:", data);
      redirect("https://patchbay.xyz");
    }

    return data;
  } catch (error) {
    console.error(`[API Error] Fetch failed:`, error);
    console.error(`[API Error] URL: ${url}`);
    
    redirect("https://patchbay.xyz");
  }
}
