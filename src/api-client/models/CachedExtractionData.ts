/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealType } from './DealType';
import type { ExtractDealDataStatus } from './ExtractDealDataStatus';
import type { LivePerformanceDealResponse } from './LivePerformanceDealResponse';
import type { LivePerformanceDealType } from './LivePerformanceDealType';
import type { MasterDealDetailResponse } from './MasterDealDetailResponse';
import type { SimpleRoyaltyDealDetailResponse } from './SimpleRoyaltyDealDetailResponse';
/**
 * Model for data stored in cache during deal extraction process
 */
export type CachedExtractionData = {
    job_id: string;
    book_number?: (string | null);
    contract_signed_url?: (string | null);
    contract_file_key?: (string | null);
    deal_type?: (DealType | LivePerformanceDealType | null);
    status: ExtractDealDataStatus;
    extracted_data?: (Record<string, any> | null);
    temp_deal_data?: (MasterDealDetailResponse | LivePerformanceDealResponse | SimpleRoyaltyDealDetailResponse | null);
    user_id?: (string | null);
    created_at?: string;
    updated_at?: string;
};

