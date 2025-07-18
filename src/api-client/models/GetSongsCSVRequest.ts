/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegistrationStatus } from './RegistrationStatus';
import type { SongStatus } from './SongStatus';
export type GetSongsCSVRequest = {
    book_number?: (string | null);
    status?: (SongStatus | null);
    registration_status?: (RegistrationStatus | null);
    song_numbers?: (Array<string> | null);
};

