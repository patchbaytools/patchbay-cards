/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { DealStatus } from './DealStatus';
export type UpdateSyncLicenseDealRequest = {
    number: string;
    licensor?: (boolean | null);
    artist_number?: (string | null);
    master_number?: (string | null);
    spotify_id?: (string | null);
    status?: (DealStatus | null);
    fee_amount?: (number | null);
    fee_currency?: (Currency | null);
    agreement_link?: (string | null);
    notes?: (string | null);
    priority?: (number | null);
    original_file_name?: (string | null);
    start_date?: (string | null);
};

