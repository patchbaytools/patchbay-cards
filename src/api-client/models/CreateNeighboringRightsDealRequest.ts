/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionMandate } from './CollectionMandate';
import type { DealParty } from './DealParty';
import type { DealStatus } from './DealStatus';
import type { DealType } from './DealType';
import type { Territory } from './Territory';
export type CreateNeighboringRightsDealRequest = {
    book_number: string;
    person_number: (string | null);
    artist_number: (string | null);
    counterparty: DealParty;
    execution_date: string;
    territories: Array<Territory>;
    collection_mandates: Array<CollectionMandate>;
    client_share?: (number | null);
    counterparty_share?: (number | null);
    executed_contract?: (string | null);
    exclusivity: boolean;
    eligible_repertoire: string;
    status?: DealStatus;
    notes?: (string | null);
    priority?: (number | null);
    type?: DealType;
    agreement_link?: (string | null);
};

