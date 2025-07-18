/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { OrganizationSummaryResponse } from './OrganizationSummaryResponse';
export type InvoiceClientResponse = {
    book_number: string;
    client_number: string;
    address: Address;
    bank_address?: (Address | null);
    organization?: (OrganizationSummaryResponse | null);
};

