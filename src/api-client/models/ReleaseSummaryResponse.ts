/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationType } from './IntegrationType';
import type { ReleaseArtistResponse } from './ReleaseArtistResponse';
import type { ReleaseProduct } from './ReleaseProduct';
import type { ReleaseStatus } from './ReleaseStatus';
import type { ReleaseTiming } from './ReleaseTiming';
export type ReleaseSummaryResponse = {
    book_number?: (string | null);
    number: string;
    name: string;
    upc?: (string | null);
    catalog_number?: (string | null);
    release_date?: (string | null);
    release_timing?: (ReleaseTiming | null);
    product?: (ReleaseProduct | null);
    label?: (string | null);
    spotify_id?: (string | null);
    artists?: Array<ReleaseArtistResponse>;
    cover_art_url?: (string | null);
    status?: (ReleaseStatus | null);
    is_released?: (boolean | null);
    total_discs?: (number | null);
    last_updated?: (string | null);
    integration?: (IntegrationType | null);
    total_missing_fields?: (number | null);
};

