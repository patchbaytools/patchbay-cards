/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterArtistRole } from './MasterArtistRole';
import type { MasterPerformanceRole } from './MasterPerformanceRole';
export type MasterArtistSummary = {
    can_edit?: boolean;
    name?: (string | null);
    number: string;
    role: MasterArtistRole;
    performance_role: MasterPerformanceRole;
    profile_image_url?: (string | null);
};

