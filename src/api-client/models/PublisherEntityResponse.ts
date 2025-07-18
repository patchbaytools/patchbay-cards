/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationSummaryResponse } from './OrganizationSummaryResponse';
import type { PubDealEntityResponse } from './PubDealEntityResponse';
export type PublisherEntityResponse = {
    number: string;
    organization: (OrganizationSummaryResponse | null);
    ipi_name_number?: (string | null);
    ipi_base_number?: (string | null);
    name: string;
    pro?: (OrganizationSummaryResponse | null);
    verified?: boolean;
    performance_royalty?: (number | null);
    collection_share?: (number | null);
    pub_deal_entity?: (PubDealEntityResponse | null);
};

