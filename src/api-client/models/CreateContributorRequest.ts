/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContributorRole } from './ContributorRole';
export type CreateContributorRequest = {
    person_number?: (string | null);
    artist_number?: (string | null);
    release_number?: (string | null);
    track_number?: (string | null);
    roles: Array<ContributorRole>;
};

