/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistMemberResponse } from './ArtistMemberResponse';
export type ArtistDetailResponse = {
    can_edit?: boolean;
    name: string;
    number: string;
    spotify_id?: (string | null);
    profile_image_url?: (string | null);
    city?: (string | null);
    url_instagram?: (string | null);
    url_twitter?: (string | null);
    url_website?: (string | null);
    members?: (Array<ArtistMemberResponse> | null);
    is_group?: (boolean | null);
};

