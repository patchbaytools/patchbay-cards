import "server-only";
import { redirect } from "next/navigation";

import {
  type BusinessCardResponse,
  BusinessCardsService,
  OpenAPI,
} from "@/api-client";

OpenAPI.BASE =
  process.env.NEXT_PUBLIC_PATCHBAY_API_URL || "https://api.patchbay.xyz";

export async function getCardData(
  custom_endpoint: string
): Promise<BusinessCardResponse> {
  try {
    const data =
      await BusinessCardsService.getPublicBusinessCardApiV1CardPublicCustomEndpointGet(
        custom_endpoint
      );

    if (!data) {
      redirect("https://patchbay.xyz");
    }

    return data;
  } catch (error) {
    console.error("Error fetching card data:", error);
    redirect("https://patchbay.xyz");
  }
}
