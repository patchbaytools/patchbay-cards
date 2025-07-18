/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessType } from './AccessType';
import type { ReleaseAccessType } from './ReleaseAccessType';
import type { ViewEditAccessType } from './ViewEditAccessType';
export type UpdateReleasePermissionsRequest = {
    release_number: string;
    user_number: string;
    access_type?: (AccessType | null);
    all_assets?: (ViewEditAccessType | null);
    clearance?: (boolean | null);
    overview_access?: (ReleaseAccessType | null);
    product_access?: (ReleaseAccessType | null);
    assets_access?: (ReleaseAccessType | null);
    analytics_access?: (ReleaseAccessType | null);
    clearances_access?: (ReleaseAccessType | null);
};

