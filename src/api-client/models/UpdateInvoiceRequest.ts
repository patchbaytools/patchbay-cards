/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { InvoiceStatus } from './InvoiceStatus';
export type UpdateInvoiceRequest = {
    number: string;
    title?: (string | null);
    invoice_number?: (number | null);
    po_number?: (string | null);
    deal_number?: (string | null);
    status?: (InvoiceStatus | null);
    amount?: (number | null);
    currency?: (Currency | null);
    commissioned_collected?: (boolean | null);
    management_commission?: (number | null);
    management_commission_currency?: (Currency | null);
    legal_commissioned_collected?: (boolean | null);
    contact?: (string | null);
    details?: (string | null);
    paid_on?: (string | null);
    issued_on?: (string | null);
    due_on?: (string | null);
    customer_number?: (string | null);
    stale_pdf?: (boolean | null);
};

