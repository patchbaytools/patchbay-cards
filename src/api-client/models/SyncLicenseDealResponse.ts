/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { DealStatus } from './DealStatus';
export type SyncLicenseDealResponse = {
    number: string;
    licensor: boolean;
    book_number: (string | null);
    artist_number: (string | null);
    master_number: (string | null);
    spotify_id: (string | null);
    status: DealStatus;
    status_updated_at: string;
    fee_amount: (number | null);
    fee_currency: Currency;
    agreement_link: (string | null);
    agreement_on_file?: boolean;
    notes?: (string | null);
    priority: (number | null);
    can_edit?: boolean;
    original_file_name?: (string | null);
    start_date?: (string | null);
};

