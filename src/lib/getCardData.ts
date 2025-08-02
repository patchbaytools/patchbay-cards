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
    console.error("Invalid parameters provided to getCardData");
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

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`API request failed with status: ${res.status}`);
    console.error(`Failed URL: ${url}`);
    redirect("https://patchbay.xyz");
  }

  const data = (await res.json()) as BusinessCardResponse;

  // Enhanced type guard for response data
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    console.error("Invalid response format:", data);
    redirect("https://patchbay.xyz");
  }

  return data;
}
