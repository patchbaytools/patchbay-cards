/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealStatus } from './DealStatus';
import type { DealUser } from './DealUser';
import type { MasterSummaryResponse } from './MasterSummaryResponse';
import type { RecordDealType } from './RecordDealType';
import type { ReversionType } from './ReversionType';
export type RecordDealResponse = {
    active?: (boolean | null);
    artist_name: string;
    artist_number: string;
    book_number?: (string | null);
    can_edit?: boolean;
    distribution_split?: (number | null);
    label_name: string;
    label_number: string;
    label_split?: (number | null);
    masters?: Array<MasterSummaryResponse>;
    number: string;
    reversion_period?: (number | null);
    reversion_type?: (ReversionType | null);
    status: DealStatus;
    status_updated_at: (string | null);
    users?: Array<DealUser>;
    original_file_name?: (string | null);
    agreement_on_file?: boolean;
    agreement_link?: (string | null);
    record_deal_type?: (RecordDealType | null);
    distributor_name?: (string | null);
    distributor_number?: (string | null);
    execution_date?: (string | null);
};

