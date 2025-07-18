/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { BankingInformation } from './BankingInformation';
export type CreateClientBankingInfoRequest = {
    book_number: string;
    banking: BankingInformation;
    address: Address;
    bank_address?: (Address | null);
};

