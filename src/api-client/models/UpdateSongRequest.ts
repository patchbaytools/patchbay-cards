/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegistrationStatus } from './RegistrationStatus';
import type { SongStatus } from './SongStatus';
export type UpdateSongRequest = {
    number?: (string | null);
    name?: (string | null);
    status?: (SongStatus | null);
    registration_status?: (RegistrationStatus | null);
    iswc?: (string | null);
    link?: (string | null);
    lyrics?: (string | null);
    agreements_last_sent_at?: (string | null);
};

