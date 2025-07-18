/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionMandate } from './CollectionMandate';
import type { DealParty } from './DealParty';
import type { DealStatus } from './DealStatus';
import type { Territory } from './Territory';
export type UpdateNeighboringRightsDealRequest = {
    number: string;
    book_number?: (string | null);
    person_number?: (string | null);
    artist_number?: (string | null);
    counterparty?: (DealParty | null);
    client_share?: (number | null);
    counterparty_share?: (number | null);
    execution_date?: (string | null);
    territories?: (Array<Territory> | null);
    collection_mandates?: (Array<CollectionMandate> | null);
    exclusivity?: (boolean | null);
    eligible_repertoire?: (string | null);
    executed_contract?: (string | null);
    agreement_link?: (string | null);
    agreement_on_file?: (boolean | null);
    status?: (DealStatus | null);
    notes?: (string | null);
    priority?: (number | null);
};

