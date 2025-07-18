/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { DealStatus } from './DealStatus';
import type { DealType } from './DealType';
import type { FeeSchedule } from './FeeSchedule';
import type { PaymentStatus } from './PaymentStatus';
import type { UpdateMasterAgreementRequest } from './UpdateMasterAgreementRequest';
export type UpdateMasterDealRequest = {
    active?: (boolean | null);
    artist_number?: (string | null);
    book_number?: (string | null);
    work_for_hire?: (boolean | null);
    executed_contract?: (string | null);
    execution_date?: (string | null);
    fee_amount?: (number | null);
    fee_currency?: (Currency | null);
    fee_schedule?: (FeeSchedule | null);
    kill_fee_amount?: (number | null);
    kill_fee_currency?: (Currency | null);
    notes?: (string | null);
    number?: (string | null);
    payment_status?: (PaymentStatus | null);
    percent_recoupable?: (number | null);
    priority?: (number | null);
    person_number?: (string | null);
    status?: (DealStatus | null);
    type?: (DealType | null);
    original_file_name?: (string | null);
    start_date?: (string | null);
    master_agreements?: Array<UpdateMasterAgreementRequest>;
    agreement_link?: (string | null);
};

