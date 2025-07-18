/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseAssetMediaType } from './ReleaseAssetMediaType';
import type { ReleaseAssetType } from './ReleaseAssetType';
export type ReleaseAssetResponse = {
    asset_number: string;
    type: ReleaseAssetType;
    media_type: ReleaseAssetMediaType;
    link?: (string | null);
    file_key?: (string | null);
    original_filename?: (string | null);
    download_link?: (string | null);
    video_isrc?: (string | null);
    size_in_bytes?: (number | null);
};

