/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealIngestionMetadata } from './DealIngestionMetadata';
import type { DealStatus } from './DealStatus';
import type { OrganizationSummaryResponse } from './OrganizationSummaryResponse';
import type { SimpleRoyaltyDealType } from './SimpleRoyaltyDealType';
export type SimpleRoyaltyDealDetailResponse = {
    number: string;
    book_number: (string | null);
    counterparty_number: (string | null);
    type: SimpleRoyaltyDealType;
    active?: (boolean | null);
    status: DealStatus;
    organization?: (OrganizationSummaryResponse | null);
    status_updated_at: string;
    agreement_on_file?: boolean;
    execution_date: (string | null);
    royalty_percentage: (number | null);
    notes?: (string | null);
    priority: (number | null);
    can_edit?: boolean;
    original_file_name?: (string | null);
    start_date?: (string | null);
    ingestion_metadata?: (DealIngestionMetadata | null);
};

