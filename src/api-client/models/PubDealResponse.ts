/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealStatus } from './DealStatus';
import type { DealUser } from './DealUser';
import type { PublisherEntityResponse } from './PublisherEntityResponse';
import type { PublishingDealType } from './PublishingDealType';
import type { ReversionType } from './ReversionType';
import type { SongSummaryResponse } from './SongSummaryResponse';
export type PubDealResponse = {
    active?: (boolean | null);
    book_number?: (string | null);
    can_edit?: boolean;
    compositions?: Array<SongSummaryResponse>;
    entities?: Array<PublisherEntityResponse>;
    mechanical_split?: (number | null);
    number: string;
    other_pub_split?: (number | null);
    performance_split?: (number | null);
    person_name: string;
    person_number: string;
    pub_line?: (string | null);
    publisher_name: string;
    publisher_number: string;
    reversion_period?: (number | null);
    reversion_type?: (ReversionType | null);
    status: DealStatus;
    status_updated_at: (string | null);
    sync_split?: (number | null);
    users?: Array<DealUser>;
    publishing_deal_type?: (PublishingDealType | null);
    original_file_name?: (string | null);
    agreement_on_file?: boolean;
    agreement_link?: (string | null);
    administrator_name?: (string | null);
    administrator_number?: (string | null);
};

