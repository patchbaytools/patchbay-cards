/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeaturedSocialLinkChoices } from './FeaturedSocialLinkChoices';
export type UpdateBusinessCardSettingsRequest = {
    book_number: string;
    custom_endpoint?: (string | null);
    enabled?: (boolean | null);
    featured_social_link?: (FeaturedSocialLinkChoices | null);
    legal_contact_email?: (string | null);
    representation_contact_email?: (string | null);
    bio?: (string | null);
    show_contracting_info?: (boolean | null);
    show_studio_details?: (boolean | null);
    show_pub_line?: (boolean | null);
    show_bio?: (boolean | null);
    show_artist_projects?: (boolean | null);
    show_songwriter_details?: (boolean | null);
    show_socials_section?: (boolean | null);
    show_legal?: (boolean | null);
    show_representation?: (boolean | null);
    show_location?: (boolean | null);
    location?: (string | null);
};

