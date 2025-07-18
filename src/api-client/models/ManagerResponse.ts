/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessType } from './AccessType';
import type { ManagerRole } from './ManagerRole';
export type ManagerResponse = {
    manager_number?: (string | null);
    book_number?: (string | null);
    user_number?: (string | null);
    access_type: AccessType;
    role?: (ManagerRole | null);
    invite_pending?: boolean;
};

