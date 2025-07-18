/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegistrationStatus } from './RegistrationStatus';
import type { SongStatus } from './SongStatus';
export type SongSummary = {
    number: string;
    book_number?: (string | null);
    name: string;
    status: SongStatus;
    registration_status: RegistrationStatus;
    client_book_number?: (string | null);
};

