/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateShowRequest } from './CreateShowRequest';
import type { LivePerformanceDealType } from './LivePerformanceDealType';
export type CreateLivePerformanceDealRequest = {
    book_number: string;
    counterparty?: (string | null);
    show?: (CreateShowRequest | null);
    agreement_link?: (string | null);
    notes?: (string | null);
    original_file_name?: (string | null);
    type?: (LivePerformanceDealType | null);
    ai_extraction_job_id?: (string | null);
};

