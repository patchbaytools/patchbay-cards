/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterArtistRole } from './MasterArtistRole';
import type { MasterPerformanceRole } from './MasterPerformanceRole';
export type MasterArtistRequest = {
    number?: (string | null);
    spotify_id?: (string | null);
    role: MasterArtistRole;
    performance_role?: (MasterPerformanceRole | null);
};

