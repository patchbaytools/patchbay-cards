/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
export type BankingInfoResponse = {
    book_number: string;
    account_number: string;
    routing_number: string;
    aba_number?: (string | null);
    swift_number?: (string | null);
    address: Address;
    bank_address?: (Address | null);
};

