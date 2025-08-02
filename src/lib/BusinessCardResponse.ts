export type Address = {
  name: string;
  address_line_1?: string | null;
  address_line_2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
};

export type ContractingInfoResponse = {
  book_number: string;
  address: Address;
  care_of?: string | null;
};

export type ContactInfo = {
  representation_contact_email?: string | null;
  legal_contact_email?: string | null;
};

export enum FeaturedSocialLinkChoices {
  INSTAGRAM = "instagram",
  TIKTOK = "tiktok",
  X = "x",
  YOUTUBE = "youtube",
  WEBSITE = "website",
}

export enum PersonRoleDescriptor {
  SONGWRITER = "Songwriter",
  PRODUCER = "Producer",
  MIXER = "Mixer",
  ARTIST = "Artist",
}

export type CardArtistProjects = {
  artist?: string;
  spotify_url?: string | null;
};

export type BusinessCardConfigResponse = {
  custom_endpoint: string;
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

export type CardSongwriterDetails = {
  songwriter_name?: string | null;
  songwriter_PRO?: string | null;
  songwriter_IPI?: string | null;
};

export type BusinessCardResponse = {
  book_number?: string | null;
  name?: string;
  profile_image_url?: string | null;
  location?: string | null;
  bio?: string | null;
  pub_line?: string | null;
  active_pub_deal_number?: string | null;
  contracting_info?: ContractingInfoResponse | null;
  config?: BusinessCardConfigResponse;
  songwriter_details?: CardSongwriterDetails | null;
  contact_info?: ContactInfo | null;
  artist_projects?: CardArtistProjects[] | null;
  roles?: PersonRoleDescriptor[] | null;
  featured_social_link?: FeaturedSocialLinkChoices | null;
  url_instagram?: string | null;
  url_twitter?: string | null;
  url_website?: string | null;
  url_spotify?: string | null;
  url_tiktok?: string | null;
  url_youtube?: string | null;
};
