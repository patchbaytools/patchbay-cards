/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionMandate } from './CollectionMandate';
import type { DealParty } from './DealParty';
import type { DealStatus } from './DealStatus';
import type { DealType } from './DealType';
import type { Territory } from './Territory';
export type NeighboringRightsDealResponse = {
    number: string;
    book_number: (string | null);
    person_number: (string | null);
    artist_number: (string | null);
    counterparty: DealParty;
    type?: DealType;
    execution_date: string;
    territories: Array<Territory>;
    collection_mandates: Array<CollectionMandate>;
    client_share: (number | null);
    counterparty_share: (number | null);
    exclusivity: boolean;
    eligible_repertoire: string;
    status: DealStatus;
    status_updated_at: string;
    executed_contract?: (string | null);
    agreement_link?: (string | null);
    agreement_on_file?: boolean;
    notes?: (string | null);
    priority?: (number | null);
    can_edit?: boolean;
};

