/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterArtistRole } from './MasterArtistRole';
import type { MasterPerformanceRole } from './MasterPerformanceRole';
export type CreateMasterArtistRequest = {
    number?: (string | null);
    master_number?: (string | null);
    role?: (MasterArtistRole | null);
    performance_role?: (MasterPerformanceRole | null);
};

