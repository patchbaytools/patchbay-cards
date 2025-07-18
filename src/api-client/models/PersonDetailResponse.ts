/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistSummaryResponse } from './ArtistSummaryResponse';
import type { PersonRoleDescriptor } from './PersonRoleDescriptor';
import type { SongwriterIdentityResponse } from './SongwriterIdentityResponse';
export type PersonDetailResponse = {
    can_edit?: boolean;
    artist_memberships: Array<ArtistSummaryResponse>;
    has_verified_book?: boolean;
    legal_name: (string | null);
    performer_name: (string | null);
    location?: (string | null);
    person_number: string;
    profile_image_url?: (string | null);
    default_pro_number?: (string | null);
    default_pro_name?: (string | null);
    roles: Array<PersonRoleDescriptor>;
    website?: (string | null);
    url_instagram?: (string | null);
    url_linkedin?: (string | null);
    url_twitter?: (string | null);
    url_spotify_discography?: (string | null);
    url_spotify_songwriter_page?: (string | null);
    url_genius?: (string | null);
    songwriter_identities: Array<SongwriterIdentityResponse>;
};

