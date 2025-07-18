/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompositionAgreementVisibilityStatus } from './CompositionAgreementVisibilityStatus';
import type { CompositionRole } from './CompositionRole';
import type { PublisherEntityResponse } from './PublisherEntityResponse';
import type { SongwriterIdentityResponse } from './SongwriterIdentityResponse';
export type CompositionAgreementResponse = {
    number: string;
    person_number: (string | null);
    person_name: string;
    song_number: string;
    song_name: (string | null);
    role: CompositionRole;
    songwriter_identity?: (SongwriterIdentityResponse | null);
    publishing_royalty: (number | null);
    collection_share: (number | null);
    publisher_entities?: Array<PublisherEntityResponse>;
    publishing_deal_number?: (string | null);
    created_by: (string | null);
    created_at?: string;
    start_date?: (string | null);
    status: CompositionAgreementVisibilityStatus;
    last_modified_by?: (string | null);
    updated_at?: (string | null);
    shared?: boolean;
    invited_via_split?: boolean;
    is_credited?: boolean;
};

