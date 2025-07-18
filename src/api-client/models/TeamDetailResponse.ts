/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InviteSummaryResponse } from './InviteSummaryResponse';
import type { TeamMemberResponse } from './TeamMemberResponse';
export type TeamDetailResponse = {
    number: string;
    name: string;
    admin_email: string;
    is_admin: boolean;
    billing_setup_complete: boolean;
    members?: (Array<TeamMemberResponse> | null);
    team_invites?: (Array<InviteSummaryResponse> | null);
    billed_seat_count: number;
};

