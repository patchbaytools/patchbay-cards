import "server-only";

import { redirect } from "next/navigation";

import type { BusinessCardResponse } from "./BusinessCardResponse";

export async function getCardData(
  custom_endpoint: string
): Promise<BusinessCardResponse | null> {
  try {
    const url = `${process.env.NEXT_PUBLIC_PATCHBAY_API_URL}/api/v1/card/public/${custom_endpoint}`;

    const res = await fetch(url);
    if (!res.ok) {
      redirect("https://patchbay.xyz");
    }

    const data = (await res.json()) as BusinessCardResponse;

    return data;
  } catch (error) {
    console.error("Error fetching card data:", error);
    throw error;
  }
}
