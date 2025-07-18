/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistMemberResponse } from './ArtistMemberResponse';
import type { ArtistSummaryResponse } from './ArtistSummaryResponse';
import type { BookType } from './BookType';
import type { PersonRoleDescriptor } from './PersonRoleDescriptor';
export type ClientSummaryResponse = {
    can_edit?: boolean;
    verified?: boolean;
    name: string;
    location?: (string | null);
    profile_image_url?: (string | null);
    roles: Array<PersonRoleDescriptor>;
    book_number: string;
    book_type?: (BookType | null);
    person_number?: (string | null);
    artist_number?: (string | null);
    artist_spotify_id?: (string | null);
    members?: (Array<ArtistMemberResponse> | null);
    artist_memberships: (Array<ArtistSummaryResponse> | null);
    is_group?: (boolean | null);
};

