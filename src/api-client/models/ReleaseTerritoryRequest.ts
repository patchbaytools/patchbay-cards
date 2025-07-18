/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseTerritory } from './ReleaseTerritory';
export type ReleaseTerritoryRequest = {
    release_number: string;
    territory_type: ReleaseTerritory;
    included_territories?: Array<string>;
    excluded_territories?: Array<string>;
};

