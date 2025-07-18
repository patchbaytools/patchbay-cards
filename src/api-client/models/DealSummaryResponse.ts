/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { DealParty } from './DealParty';
import type { DealStatus } from './DealStatus';
import type { DealType } from './DealType';
import type { MasterSummaryResponse } from './MasterSummaryResponse';
import type { PaymentStatus } from './PaymentStatus';
import type { PublishingDealType } from './PublishingDealType';
export type DealSummaryResponse = {
    active?: (boolean | null);
    book_number: (string | null);
    client: (DealParty | null);
    counterparty: (DealParty | null);
    fee_amount?: (number | null);
    fee_currency?: (Currency | null);
    has_invoice?: boolean;
    masters?: (Array<MasterSummaryResponse> | null);
    number: string;
    payment_status?: (PaymentStatus | null);
    status: (DealStatus | null);
    status_updated_at: (string | null);
    type: (DealType | null);
    created_at: (string | null);
    publishing_deal_type?: (PublishingDealType | null);
    original_file_name?: (string | null);
    notes?: (string | null);
    start_date?: (string | null);
};

