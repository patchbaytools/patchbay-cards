/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistDetailsRequest } from './ArtistDetailsRequest';
import type { ManagerRole } from './ManagerRole';
import type { PersonDetails } from './PersonDetails';
import type { SongwriterIdentityRequest } from './SongwriterIdentityRequest';
export type CreateClientRequest = {
    person_number?: (string | null);
    person_details?: (PersonDetails | null);
    artist_number?: (string | null);
    artist_details?: (ArtistDetailsRequest | null);
    songwriter_identity?: (SongwriterIdentityRequest | null);
    manager_role?: (ManagerRole | null);
    is_group?: (boolean | null);
};

