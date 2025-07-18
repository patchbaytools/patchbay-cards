/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { DealSummaryResponse } from './DealSummaryResponse';
import type { InvoiceClientResponse } from './InvoiceClientResponse';
import type { InvoiceLineItem } from './InvoiceLineItem';
import type { InvoiceStatus } from './InvoiceStatus';
export type InvoiceResponse = {
    can_edit?: boolean;
    number: string;
    book_number?: (string | null);
    title?: (string | null);
    deal?: (DealSummaryResponse | null);
    invoice_number: string;
    po_number?: (string | null);
    status: InvoiceStatus;
    amount: number;
    currency: Currency;
    commissioned_collected: boolean;
    management_commission?: (number | null);
    management_commission_currency?: (Currency | null);
    legal_commissioned_collected?: (boolean | null);
    contact?: (string | null);
    details?: (string | null);
    paid_on?: (string | null);
    issued_on?: (string | null);
    due_on?: (string | null);
    customer?: (InvoiceClientResponse | null);
    pdf_on_file: boolean;
    stale_pdf?: boolean;
    line_items?: Array<InvoiceLineItem>;
    download_file_name?: (string | null);
    invoice_code?: (string | null);
    artist_image_url?: (string | null);
    artist_name?: (string | null);
};

