import "server-only";

import { redirect } from "next/navigation";

import type { BusinessCardResponse } from "./BusinessCardResponse";

export async function getCardData(
  custom_endpoint: string,
  hash: string
): Promise<BusinessCardResponse> {
  try {
    const url = `${process.env.NEXT_PUBLIC_PATCHBAY_API_URL}/api/v1/card/public/${custom_endpoint}/${hash}`;

    const res = await fetch(url);
    if (!res.ok) {
      redirect("https://patchbay.xyz");
    }

    const data = (await res.json()) as BusinessCardResponse;

    // Basic type check
    if (!data || typeof data !== "object") {
      console.error("Invalid response format:", data);
      redirect("https://patchbay.xyz");
    }

    return data;
  } catch (error) {
    console.error("Error fetching card data:", error);
    throw error;
  }
}
