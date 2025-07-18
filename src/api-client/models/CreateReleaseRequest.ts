/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetCatalogTier } from './AssetCatalogTier';
import type { CreateTrackRequest } from './CreateTrackRequest';
import type { IntegrationType } from './IntegrationType';
import type { PreorderType } from './PreorderType';
import type { ReleaseArtistRequest } from './ReleaseArtistRequest';
import type { ReleaseAssetResponse } from './ReleaseAssetResponse';
import type { ReleaseProduct } from './ReleaseProduct';
import type { ReleaseTerritoryRequest } from './ReleaseTerritoryRequest';
import type { ReleaseTiming } from './ReleaseTiming';
export type CreateReleaseRequest = {
    name: string;
    upc?: (string | null);
    release_date?: (string | null);
    pre_save_date?: (string | null);
    original_release_date?: (string | null);
    release_timing?: (ReleaseTiming | null);
    product?: (ReleaseProduct | null);
    p_line?: (string | null);
    p_line_year?: (number | null);
    p_line_text?: (string | null);
    c_line?: (string | null);
    label?: (string | null);
    rights_holder_name?: (string | null);
    rights_ownership_name?: (string | null);
    rights_contract_begin_date?: (string | null);
    spotify_id?: (string | null);
    bio?: (string | null);
    blurb?: (string | null);
    genre_primary?: (string | null);
    genre_secondary?: (string | null);
    subgenre_primary?: (string | null);
    subgenre_secondary?: (string | null);
    language?: (string | null);
    audio_locale?: (string | null);
    preorder_type?: (PreorderType | null);
    preview_release_date_time?: (string | null);
    preview_release_date_time_zone?: (string | null);
    asset_catalog_tier?: (AssetCatalogTier | null);
    assets?: Array<ReleaseAssetResponse>;
    tracks?: Array<CreateTrackRequest>;
    artists?: Array<ReleaseArtistRequest>;
    book_number?: (string | null);
    deal_number?: (string | null);
    territory_code?: (string | null);
    excluded_territories?: Array<string>;
    parental_advisory?: boolean;
    is_multi_artist_compilation?: boolean;
    territories?: (ReleaseTerritoryRequest | null);
    catalog_number?: (string | null);
    display_artist_name?: (string | null);
    total_discs?: (number | null);
    integration?: (IntegrationType | null);
};

