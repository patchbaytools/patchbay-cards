/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessType } from './AccessType';
import type { UserSummaryResponse } from './UserSummaryResponse';
export type InviteSummaryResponse = {
    from_user: (UserSummaryResponse | null);
    to_user: (UserSummaryResponse | null);
    to_email: (string | null);
    object_number: string;
    access_type: AccessType;
};

