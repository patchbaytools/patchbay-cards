/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistMemberResponse } from './ArtistMemberResponse';
import type { ArtistSummaryResponse } from './ArtistSummaryResponse';
import type { BookType } from './BookType';
import type { InviteSummaryResponse } from './InviteSummaryResponse';
import type { InvoiceFilenameConfigField } from './InvoiceFilenameConfigField';
import type { ManagerSummaryResponse } from './ManagerSummaryResponse';
import type { PersonRoleDescriptor } from './PersonRoleDescriptor';
import type { SongwriterIdentityResponse } from './SongwriterIdentityResponse';
export type ClientDetailResponse = {
    catalogue_enriching?: boolean;
    catalogue_enriching_masters?: boolean;
    catalogue_enriching_compositions?: boolean;
    banking_info_exists?: boolean;
    can_edit?: boolean;
    verified?: boolean;
    name: string;
    location?: (string | null);
    profile_image_url?: (string | null);
    roles: Array<PersonRoleDescriptor>;
    website?: (string | null);
    url_instagram?: (string | null);
    url_linkedin?: (string | null);
    url_twitter?: (string | null);
    url_spotify_discography?: (string | null);
    url_spotify_songwriter_page?: (string | null);
    url_genius?: (string | null);
    book_number: string;
    book_type?: (BookType | null);
    person_number?: (string | null);
    artist_number?: (string | null);
    artist_spotify_id?: (string | null);
    members?: (Array<ArtistMemberResponse> | null);
    artist_memberships: (Array<ArtistSummaryResponse> | null);
    songwriter_identities?: (Array<SongwriterIdentityResponse> | null);
    team?: (Array<ManagerSummaryResponse> | null);
    team_invites?: (Array<InviteSummaryResponse> | null);
    invoice_code?: (string | null);
    invoice_filename_config?: (Array<InvoiceFilenameConfigField> | null);
    invoice_contact?: (string | null);
    is_group?: (boolean | null);
    w9_file_key?: (string | null);
    w9_original_filename?: (string | null);
    w9_uploaded_at?: (string | null);
    w9_download_link?: (string | null);
};

