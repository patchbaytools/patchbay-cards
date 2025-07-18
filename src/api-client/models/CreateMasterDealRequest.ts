/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMasterAgreementRequest } from './CreateMasterAgreementRequest';
import type { Currency } from './Currency';
import type { DealStatus } from './DealStatus';
import type { DealType } from './DealType';
import type { FeeSchedule } from './FeeSchedule';
import type { MasterCreditType } from './MasterCreditType';
import type { PaymentStatus } from './PaymentStatus';
export type CreateMasterDealRequest = {
    active?: (boolean | null);
    artist_number: (string | null);
    book_number: (string | null);
    master_credits?: Array<MasterCreditType>;
    instruments?: Array<string>;
    work_for_hire?: boolean;
    executed_contract?: (string | null);
    execution_date?: (string | null);
    fee_amount?: (number | null);
    fee_currency?: (Currency | null);
    fee_schedule?: (FeeSchedule | null);
    kill_fee_amount?: (number | null);
    kill_fee_currency?: (Currency | null);
    master_agreements?: Array<CreateMasterAgreementRequest>;
    payment_status?: (PaymentStatus | null);
    percent_recoupable?: (number | null);
    priority?: number;
    person_number: (string | null);
    status?: DealStatus;
    type: DealType;
    notes?: (string | null);
    original_file_name?: (string | null);
    start_date?: (string | null);
    ai_extraction_job_id?: (string | null);
};

