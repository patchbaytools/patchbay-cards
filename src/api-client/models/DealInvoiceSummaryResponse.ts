/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
export type DealInvoiceSummaryResponse = {
    amount: number;
    book_number?: (string | null);
    can_edit?: boolean;
    currency: Currency;
    invoice_number: number;
    number: string;
    status: string;
};

