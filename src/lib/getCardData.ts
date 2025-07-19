import "server-only";

import { redirect } from "next/navigation";

import type { BusinessCardResponse } from "./BusinessCardResponse";

export async function getCardData(
  hash: string,
  custom_endpoint: string
): Promise<BusinessCardResponse> {
  try {
    console.log("LOG FOR US: custom_endpoint", custom_endpoint);
    console.log("LOG FOR US: hash", hash);
    const url = `${process.env.NEXT_PUBLIC_PATCHBAY_API_URL}/api/v1/card/public/${custom_endpoint}`;

    const res = await fetch(url);
    if (!res.ok) {
      redirect("https://patchbay.xyz");
    }

    const data = await res.json();

    // Basic type check
    if (!data || typeof data !== "object") {
      console.error("Invalid response format:", data);
      redirect("https://patchbay.xyz");
    }

    return data as BusinessCardResponse;
  } catch (error) {
    console.error("Error fetching card data:", error);
    throw error;
  }
}
