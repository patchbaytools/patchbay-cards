/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealStatus } from './DealStatus';
import type { SimpleRoyaltyDealType } from './SimpleRoyaltyDealType';
export type CreateSimpleRoyaltyDealRequest = {
    counterparty_number?: (string | null);
    organization_number?: (string | null);
    book_number: string;
    type: SimpleRoyaltyDealType;
    active?: boolean;
    status?: DealStatus;
    execution_date: (string | null);
    royalty_percentage: (number | null);
    notes?: (string | null);
    priority: (number | null);
    original_file_name?: (string | null);
    start_date?: (string | null);
    ai_extraction_job_id?: (string | null);
};

