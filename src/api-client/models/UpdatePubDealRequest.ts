/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealStatus } from './DealStatus';
import type { PublishingDealType } from './PublishingDealType';
import type { ReversionType } from './ReversionType';
export type UpdatePubDealRequest = {
    deal_number?: (string | null);
    status?: (DealStatus | null);
    active?: (boolean | null);
    person_number?: (string | null);
    publisher_number?: (string | null);
    book_number?: (string | null);
    mechanical_split?: (number | null);
    performance_split?: (number | null);
    sync_split?: (number | null);
    other_pub_split?: (number | null);
    reversion_type?: (ReversionType | null);
    reversion_period?: (number | null);
    pub_line?: (string | null);
    publishing_deal_type?: (PublishingDealType | null);
    administrator_number?: (string | null);
    execution_date?: (string | null);
};

