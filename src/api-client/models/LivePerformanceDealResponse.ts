/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LivePerformanceDealType } from './LivePerformanceDealType';
import type { ShowResponse } from './ShowResponse';
export type LivePerformanceDealResponse = {
    number: string;
    book_number: (string | null);
    counterparty: (string | null);
    type: LivePerformanceDealType;
    agreement_link: (string | null);
    agreement_on_file?: boolean;
    show?: (ShowResponse | null);
    notes?: (string | null);
    can_edit?: boolean;
    original_file_name?: (string | null);
    start_date?: (string | null);
};

