/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistResponseSkinny } from './ArtistResponseSkinny';
export type ReleaseResponseSkinny = {
    number: string;
    name: string;
    book_number?: (string | null);
    spotify_id?: (string | null);
    cover_art_url?: (string | null);
    label?: (string | null);
    release_date?: (string | null);
    artists?: Array<ArtistResponseSkinny>;
    catalog_number?: (string | null);
    total_missing_fields?: (number | null);
};

