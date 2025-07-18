/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetCatalogTier } from './AssetCatalogTier';
import type { IntegrationType } from './IntegrationType';
import type { PreorderType } from './PreorderType';
import type { ReleaseProduct } from './ReleaseProduct';
import type { ReleaseStatus } from './ReleaseStatus';
import type { ReleaseTiming } from './ReleaseTiming';
export type UpdateReleaseRequest = {
    number?: (string | null);
    name?: (string | null);
    preorder_type?: (PreorderType | null);
    upc?: (string | null);
    release_date?: (string | null);
    pre_save_date?: (string | null);
    original_release_date?: (string | null);
    release_timing?: (ReleaseTiming | null);
    product?: (ReleaseProduct | null);
    p_line_year?: (number | null);
    p_line_text?: (string | null);
    c_line_year?: (number | null);
    c_line_text?: (string | null);
    asset_catalog_tier?: (AssetCatalogTier | null);
    label?: (string | null);
    spotify_id?: (string | null);
    bio?: (string | null);
    blurb?: (string | null);
    genre_primary?: (string | null);
    genre_secondary?: (string | null);
    subgenre_primary?: (string | null);
    subgenre_secondary?: (string | null);
    book_number?: (string | null);
    deal_number?: (string | null);
    metadata_complete?: boolean;
    status?: (ReleaseStatus | null);
    catalog_number?: (string | null);
    display_artist_name?: (string | null);
    total_discs?: (number | null);
    integration?: (IntegrationType | null);
    is_released?: (boolean | null);
};

