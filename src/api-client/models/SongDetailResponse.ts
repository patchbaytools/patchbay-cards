/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompositionAgreementResponse } from './CompositionAgreementResponse';
import type { MasterSummaryResponse } from './MasterSummaryResponse';
import type { RegistrationStatus } from './RegistrationStatus';
import type { SongStatus } from './SongStatus';
export type SongDetailResponse = {
    number: string;
    book_number?: (string | null);
    name: string;
    status: SongStatus;
    registration_status: RegistrationStatus;
    client_book_number?: (string | null);
    can_edit?: boolean;
    iswc?: (string | null);
    link?: (string | null);
    lyrics?: (string | null);
    writers: Array<CompositionAgreementResponse>;
    masters: Array<MasterSummaryResponse>;
    agreements_last_sent_at?: (string | null);
};

