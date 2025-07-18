/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistDetailsRequest } from './ArtistDetailsRequest';
import type { DealStatus } from './DealStatus';
import type { RecordDealType } from './RecordDealType';
import type { ReversionType } from './ReversionType';
export type CreateRecordDealRequest = {
    status?: DealStatus;
    active?: (boolean | null);
    book_number?: (string | null);
    artist_number?: (string | null);
    artist_details?: (ArtistDetailsRequest | null);
    label_number?: (string | null);
    label_split?: (number | null);
    distribution_split?: (number | null);
    reversion_type?: (ReversionType | null);
    reversion_period?: (number | null);
    record_deal_type?: (RecordDealType | null);
    distributor_number?: (string | null);
    masters?: (Array<string> | null);
    execution_date?: (string | null);
};

