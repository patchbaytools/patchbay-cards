/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseAssetMediaType } from './ReleaseAssetMediaType';
import type { ReleaseAssetType } from './ReleaseAssetType';
export type AddReleaseAssetRequest = {
    release_number?: (string | null);
    type: ReleaseAssetType;
    media_type: ReleaseAssetMediaType;
    link?: (string | null);
    video_isrc?: (string | null);
};

