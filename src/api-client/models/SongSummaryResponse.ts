/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookPublishingDealInfo } from './BookPublishingDealInfo';
import type { CollaboratorOutput } from './CollaboratorOutput';
import type { NamedNumberedObject } from './NamedNumberedObject';
import type { RegistrationStatus } from './RegistrationStatus';
import type { SongStatus } from './SongStatus';
export type SongSummaryResponse = {
    number: string;
    book_number?: (string | null);
    name: string;
    status: SongStatus;
    registration_status: RegistrationStatus;
    client_book_number?: (string | null);
    collaborators: Array<CollaboratorOutput>;
    masters?: (Array<NamedNumberedObject> | null);
    book_publishing_deal_info?: (BookPublishingDealInfo | null);
};

