/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseTerritory } from './ReleaseTerritory';
export type UpdateReleaseTerritoryRequest = {
    release_number: string;
    territory_type?: (ReleaseTerritory | null);
    included_territories?: (Array<string> | null);
    excluded_territories?: (Array<string> | null);
};

