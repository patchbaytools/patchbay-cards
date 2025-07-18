/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseAssetMediaType } from './ReleaseAssetMediaType';
import type { ReleaseAssetType } from './ReleaseAssetType';
export type UpdateReleaseAssetRequest = {
    release_number?: (string | null);
    asset_number?: (string | null);
    type?: (ReleaseAssetType | null);
    media_type?: (ReleaseAssetMediaType | null);
    file?: (Blob | null);
    link?: (string | null);
    size_in_bytes?: (number | null);
    video_isrc?: (string | null);
};

