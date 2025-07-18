/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { DealType } from './DealType';
import type { InvoiceStatus } from './InvoiceStatus';
export type CreateInvoiceRequest = {
    book_number: string;
    title?: (string | null);
    deal_number?: (string | null);
    deal_type?: (DealType | null);
    status: InvoiceStatus;
    amount: number;
    currency?: Currency;
    commissioned_collected?: boolean;
    management_commission?: (number | null);
    management_commission_currency?: (Currency | null);
    legal_commissioned_collected?: (boolean | null);
    contact?: (string | null);
    customer_number?: (string | null);
    po_number?: (string | null);
    issued_on?: (string | null);
    due_on?: (string | null);
    details?: (string | null);
};

