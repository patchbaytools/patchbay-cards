/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompositionRole } from './CompositionRole';
import type { CreateSongwriterIdentityRequest } from './CreateSongwriterIdentityRequest';
export type CreateCompositionAgreementRequest = {
    person_number: (string | null);
    song_number: string;
    role: CompositionRole;
    songwriter_identity_number?: (string | null);
    songwriter_identity_request?: (CreateSongwriterIdentityRequest | null);
    publishing_deal_number?: (string | null);
    publishing_royalty?: (number | null);
    collection_share?: (number | null);
    start_date?: (string | null);
    shared?: boolean;
    is_credited?: boolean;
};

