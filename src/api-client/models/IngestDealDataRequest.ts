/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtractDealDataStatus } from './ExtractDealDataStatus';
export type IngestDealDataRequest = {
    job_id: string;
    book_number: string;
    contract_signed_url?: (string | null);
    deal_type?: (string | null);
    contract_file_key?: (string | null);
    /**
     * Temporary deal data in dictionary format
     */
    temp_deal_data?: (Record<string, any> | null);
    status: ExtractDealDataStatus;
};

