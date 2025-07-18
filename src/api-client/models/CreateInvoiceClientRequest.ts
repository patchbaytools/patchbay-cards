/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
export type CreateInvoiceClientRequest = {
    book_number: string;
    invoice_number?: (string | null);
    address: Address;
    bank_address?: (Address | null);
    organization_number?: (string | null);
};

