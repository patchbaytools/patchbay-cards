/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateShowRequest } from './CreateShowRequest';
import type { LivePerformanceDealType } from './LivePerformanceDealType';
export type UpdateLivePerformanceDealRequest = {
    number: string;
    counterparty?: (string | null);
    show?: (CreateShowRequest | null);
    agreement_link?: (string | null);
    notes?: (string | null);
    original_file_name?: (string | null);
    type?: (LivePerformanceDealType | null);
    start_date?: (string | null);
};

