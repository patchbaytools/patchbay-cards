/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessType } from './AccessType';
import type { PermissionAxis } from './PermissionAxis';
import type { ReleaseAccessType } from './ReleaseAccessType';
export type ReleasePermissionsResponse = {
    permission_axis: PermissionAxis;
    release_number: string;
    user_number: (string | null);
    user_name: (string | null);
    access_type: AccessType;
    invited?: boolean;
    overview_access?: (ReleaseAccessType | null);
    product_access?: (ReleaseAccessType | null);
    assets_access?: (ReleaseAccessType | null);
    analytics_access?: (ReleaseAccessType | null);
    clearances_access?: (ReleaseAccessType | null);
    can_view_clearances?: boolean;
    can_share?: boolean;
};

