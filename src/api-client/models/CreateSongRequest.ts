/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddSongwriterRequest } from './AddSongwriterRequest';
import type { CreateMasterRequest } from './CreateMasterRequest';
import type { RegistrationStatus } from './RegistrationStatus';
import type { SongStatus } from './SongStatus';
export type CreateSongRequest = {
    name: string;
    book_number: string;
    status?: SongStatus;
    registration_status?: RegistrationStatus;
    writers: Array<AddSongwriterRequest>;
    iswc?: (string | null);
    link?: (string | null);
    lyrics?: (string | null);
    masters?: Array<CreateMasterRequest>;
    master_numbers?: Array<string>;
};

