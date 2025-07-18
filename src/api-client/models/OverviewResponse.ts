/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogOverview } from './CatalogOverview';
import type { DealsOverview } from './DealsOverview';
import type { InvoicesOverview } from './InvoicesOverview';
import type { ReleasesOverview } from './ReleasesOverview';
export type OverviewResponse = {
    catalog: CatalogOverview;
    releases: ReleasesOverview;
    deals: DealsOverview;
    invoices: InvoicesOverview;
    last_updated: string;
    book_number?: (string | null);
};

