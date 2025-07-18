import "server-only";

import { redirect } from "next/navigation";

export type CardSongwriterDetails = {
  songwriter_name: string | null;
  songwriter_PRO: string | null;
  songwriter_IPI: string | null;
};

export type Config = {
  custom_endpoint: string | null;
  enabled: boolean;
  show_contracting_info: boolean;
  show_studio_details: boolean;
  show_pub_line: boolean;
  show_bio: boolean;
  show_artist_projects: boolean;
  show_songwriter_details: boolean;
  show_representation: boolean;
  show_legal: boolean;
  show_socials_section: boolean;
};

export type Address = {
  name: string;
  address_line_1: string | null;
  address_line_2: string | null;
  city: string | null;
  state: string | null;
  postal_code: string | null;
  country: string | null;
};

export type ContractingInfo = {
  book_number: string;
  address: Address;
  care_of: string | null;
};

export type ContactInfo = {
  representation_contact_email: string | null;
  legal_contact_email: string | null;
};

export type CardData = {
  book_number: string | null;
  name: string | null;
  profile_image_url: string | null;
  featured_social_link: string | null;
  location: string | null;
  url_instagram: string | null;
  url_twitter: string | null;
  url_website: string | null;
  url_spotify: string | null;
  url_youtube: string | null;
  url_tiktok: string | null;
  bio: string | null;
  songwriter_details: CardSongwriterDetails | null;
  config: Config;
  pub_line: string | null;
  contracting_info: ContractingInfo | null;
  contact_info: ContactInfo | null;
  artist_projects: string[] | null;
  roles: string[] | null; // e.g., ["Songwriter", "Producer", ...]
};

const FALLBACK = undefined;

export async function getCardData(
  custom_endpoint: string
): Promise<CardData | null> {
  try {
    const url = `${process.env.NEXT_PUBLIC_PATCHBAY_API_URL}/api/v1/card/public/${custom_endpoint}`;

    const res = await fetch(url);
    if (!res.ok) {
      redirect("https://patchbay.xyz");
    }

    const data = (await res.json()) as CardData;

    return data;
  } catch (error) {
    console.error("Error fetching card data:", error);
    throw error;
  }
}
