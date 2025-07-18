/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistSummaryResponse } from './ArtistSummaryResponse';
import type { CompositionAgreementResponse } from './CompositionAgreementResponse';
import type { Currency } from './Currency';
import type { DealIngestionMetadata } from './DealIngestionMetadata';
import type { DealInvoiceSummaryResponse } from './DealInvoiceSummaryResponse';
import type { DealStatus } from './DealStatus';
import type { DealType } from './DealType';
import type { FeeSchedule } from './FeeSchedule';
import type { MasterAgreementResponse } from './MasterAgreementResponse';
import type { PaymentStatus } from './PaymentStatus';
import type { PersonSummaryResponse } from './PersonSummaryResponse';
export type MasterDealDetailResponse = {
    active?: (boolean | null);
    agreement_on_file?: boolean;
    artist: (ArtistSummaryResponse | null);
    book_number: (string | null);
    can_edit?: boolean;
    work_for_hire: boolean;
    executed_contract: (string | null);
    execution_date: (string | null);
    fee_amount: (number | null);
    fee_currency: (Currency | null);
    fee_schedule: (FeeSchedule | null);
    invoices?: Array<DealInvoiceSummaryResponse>;
    kill_fee_amount?: (number | null);
    kill_fee_currency?: (Currency | null);
    master_agreements?: Array<MasterAgreementResponse>;
    notes?: (string | null);
    number: string;
    payment_status: (PaymentStatus | null);
    percent_recoupable?: (number | null);
    priority: (number | null);
    person: (PersonSummaryResponse | null);
    songs?: Array<CompositionAgreementResponse>;
    status: DealStatus;
    status_updated_at: (string | null);
    type: (DealType | null);
    original_file_name?: (string | null);
    start_date?: (string | null);
    ingestion_metadata?: (DealIngestionMetadata | null);
};

