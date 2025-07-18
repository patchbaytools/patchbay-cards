/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealStatus } from './DealStatus';
import type { RecordDealType } from './RecordDealType';
import type { ReversionType } from './ReversionType';
export type UpdateRecordDealRequest = {
    status?: (DealStatus | null);
    active?: (boolean | null);
    deal_number?: (string | null);
    book_number?: (string | null);
    artist_number?: (string | null);
    label_number?: (string | null);
    label_split?: (number | null);
    distribution_split?: (number | null);
    reversion_type?: (ReversionType | null);
    reversion_period?: (number | null);
    record_deal_type?: (RecordDealType | null);
    distributor_number?: (string | null);
    execution_date?: (string | null);
};

