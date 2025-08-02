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

  const url = `${process.env.NEXT_PUBLIC_PATCHBAY_API_URL}/api/v1/card/public/${custom_endpoint}/${hash}`;

  // Type guard for environment variable
  if (!process.env.NEXT_PUBLIC_PATCHBAY_API_URL) {
    console.error(
      "NEXT_PUBLIC_PATCHBAY_API_URL environment variable is not set"
    );
    redirect("https://patchbay.xyz");
  }

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`API request failed with status: ${res.status}`);
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
