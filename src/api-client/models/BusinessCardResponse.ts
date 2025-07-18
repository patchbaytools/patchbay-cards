/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCardConfigResponse } from './BusinessCardConfigResponse';
import type { CardArtistProjects } from './CardArtistProjects';
import type { CardSongwriterDetails } from './CardSongwriterDetails';
import type { ContactInfo } from './ContactInfo';
import type { ContractingInfoResponse } from './ContractingInfoResponse';
import type { FeaturedSocialLinkChoices } from './FeaturedSocialLinkChoices';
import type { PersonRoleDescriptor } from './PersonRoleDescriptor';
export type BusinessCardResponse = {
    book_number?: (string | null);
    name?: string;
    profile_image_url?: (string | null);
    location?: (string | null);
    bio?: (string | null);
    pub_line?: (string | null);
    active_pub_deal_number?: (string | null);
    contracting_info?: (ContractingInfoResponse | null);
    config?: BusinessCardConfigResponse;
    songwriter_details?: (CardSongwriterDetails | null);
    contact_info?: (ContactInfo | null);
    artist_projects?: (Array<CardArtistProjects> | null);
    roles?: (Array<PersonRoleDescriptor> | null);
    featured_social_link?: (FeaturedSocialLinkChoices | null);
    url_instagram?: (string | null);
    url_twitter?: (string | null);
    url_website?: (string | null);
    url_spotify?: (string | null);
    url_tiktok?: (string | null);
    url_youtube?: (string | null);
};

