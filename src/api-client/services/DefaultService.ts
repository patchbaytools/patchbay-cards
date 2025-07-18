/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCompositionToPubDealRequest } from '../models/AddCompositionToPubDealRequest';
import type { AddMasterToDealRequest } from '../models/AddMasterToDealRequest';
import type { AddReleaseAssetRequest } from '../models/AddReleaseAssetRequest';
import type { AddTeamMemberRequest } from '../models/AddTeamMemberRequest';
import type { ArtistDetailResponse } from '../models/ArtistDetailResponse';
import type { ArtistSearchResult } from '../models/ArtistSearchResult';
import type { ArtistSummaryResponse } from '../models/ArtistSummaryResponse';
import type { BankingInfoResponse } from '../models/BankingInfoResponse';
import type { Body_add_file_asset_api_v1_releases__release_number__assets__media_type___asset_type__post } from '../models/Body_add_file_asset_api_v1_releases__release_number__assets__media_type___asset_type__post';
import type { Body_add_track_file_asset_api_v1_releases__release_number__track__track_number__asset__asset_type__post } from '../models/Body_add_track_file_asset_api_v1_releases__release_number__track__track_number__asset__asset_type__post';
import type { Body_extract_deal_data_api_v1_deals_extract_deal_data_post } from '../models/Body_extract_deal_data_api_v1_deals_extract_deal_data_post';
import type { Body_upload_agreement_api_v1_livePerformanceDeals__deal_number__agreement_post } from '../models/Body_upload_agreement_api_v1_livePerformanceDeals__deal_number__agreement_post';
import type { Body_upload_agreement_api_v1_masterDeals__deal_number__agreement_post } from '../models/Body_upload_agreement_api_v1_masterDeals__deal_number__agreement_post';
import type { Body_upload_agreement_api_v1_neighboringRightsDeals__deal_number__agreement_post } from '../models/Body_upload_agreement_api_v1_neighboringRightsDeals__deal_number__agreement_post';
import type { Body_upload_agreement_api_v1_publishingDeals__deal_number__agreement_post } from '../models/Body_upload_agreement_api_v1_publishingDeals__deal_number__agreement_post';
import type { Body_upload_agreement_api_v1_recordDeals__deal_number__agreement_post } from '../models/Body_upload_agreement_api_v1_recordDeals__deal_number__agreement_post';
import type { Body_upload_agreement_api_v1_simpleRoyaltyDeals__deal_number__agreement_post } from '../models/Body_upload_agreement_api_v1_simpleRoyaltyDeals__deal_number__agreement_post';
import type { Body_upload_agreement_api_v1_syncLicenseDeals__deal_number__agreement_post } from '../models/Body_upload_agreement_api_v1_syncLicenseDeals__deal_number__agreement_post';
import type { Body_upload_pro_csv_api_v1_clients__book_number__proExtract__pro__post } from '../models/Body_upload_pro_csv_api_v1_clients__book_number__proExtract__pro__post';
import type { Body_upload_profile_image_api_v1_artists__artist_number__profile_image_post } from '../models/Body_upload_profile_image_api_v1_artists__artist_number__profile_image_post';
import type { Body_upload_profile_image_api_v1_people__person_number__profile_image_post } from '../models/Body_upload_profile_image_api_v1_people__person_number__profile_image_post';
import type { Body_upload_w9_api_v1_clients__book_number__w9_post } from '../models/Body_upload_w9_api_v1_clients__book_number__w9_post';
import type { BulkDeleteMastersRequest } from '../models/BulkDeleteMastersRequest';
import type { BulkDeleteSongsRequest } from '../models/BulkDeleteSongsRequest';
import type { CachedExtractionData } from '../models/CachedExtractionData';
import type { Clearance } from '../models/Clearance';
import type { ClientDetailResponse } from '../models/ClientDetailResponse';
import type { ClientSummaryResponse } from '../models/ClientSummaryResponse';
import type { CompositionAgreementResponse } from '../models/CompositionAgreementResponse';
import type { ConfirmMasterUploadRequest } from '../models/ConfirmMasterUploadRequest';
import type { ContractingInfoResponse } from '../models/ContractingInfoResponse';
import type { ContributorResponse } from '../models/ContributorResponse';
import type { CreateArtistMembershipRequest } from '../models/CreateArtistMembershipRequest';
import type { CreateArtistRequest } from '../models/CreateArtistRequest';
import type { CreateClientBankingInfoRequest } from '../models/CreateClientBankingInfoRequest';
import type { CreateClientRequest } from '../models/CreateClientRequest';
import type { CreateCompositionAgreementRequest } from '../models/CreateCompositionAgreementRequest';
import type { CreateContractingInfoRequest } from '../models/CreateContractingInfoRequest';
import type { CreateContributorRequest } from '../models/CreateContributorRequest';
import type { CreateInvoiceClientRequest } from '../models/CreateInvoiceClientRequest';
import type { CreateInvoiceRequest } from '../models/CreateInvoiceRequest';
import type { CreateISRCRequest } from '../models/CreateISRCRequest';
import type { CreateLivePerformanceDealRequest } from '../models/CreateLivePerformanceDealRequest';
import type { CreateManagerRequest } from '../models/CreateManagerRequest';
import type { CreateMasterAgreementRequest } from '../models/CreateMasterAgreementRequest';
import type { CreateMasterArtistRequest } from '../models/CreateMasterArtistRequest';
import type { CreateMasterBonusRequest } from '../models/CreateMasterBonusRequest';
import type { CreateMasterCreditRequest } from '../models/CreateMasterCreditRequest';
import type { CreateMasterDealRequest } from '../models/CreateMasterDealRequest';
import type { CreateMasterRequest } from '../models/CreateMasterRequest';
import type { CreateNeighboringRightsDealRequest } from '../models/CreateNeighboringRightsDealRequest';
import type { CreatePubDealContactRequest } from '../models/CreatePubDealContactRequest';
import type { CreatePubDealRequest } from '../models/CreatePubDealRequest';
import type { CreatePublisherEntityRequest } from '../models/CreatePublisherEntityRequest';
import type { CreateRecordDealRequest } from '../models/CreateRecordDealRequest';
import type { CreateReleaseEventRequest } from '../models/CreateReleaseEventRequest';
import type { CreateReleasePermissionsRequest } from '../models/CreateReleasePermissionsRequest';
import type { CreateReleaseRequest } from '../models/CreateReleaseRequest';
import type { CreateSimpleRoyaltyDealRequest } from '../models/CreateSimpleRoyaltyDealRequest';
import type { CreateSongRequest } from '../models/CreateSongRequest';
import type { CreateSongwriterIdentityRequest } from '../models/CreateSongwriterIdentityRequest';
import type { CreateSyncLicenseDealRequest } from '../models/CreateSyncLicenseDealRequest';
import type { CreateTeamRequest } from '../models/CreateTeamRequest';
import type { CreateTrackRequest } from '../models/CreateTrackRequest';
import type { CreateUserIntegrationRequest } from '../models/CreateUserIntegrationRequest';
import type { DealStatus } from '../models/DealStatus';
import type { DealSummaryResponse } from '../models/DealSummaryResponse';
import type { DealType } from '../models/DealType';
import type { DeliverReleaseDDEXRequest } from '../models/DeliverReleaseDDEXRequest';
import type { EnrichBookRequest } from '../models/EnrichBookRequest';
import type { EventModel } from '../models/EventModel';
import type { ExtractDealDataJobCreationResponse } from '../models/ExtractDealDataJobCreationResponse';
import type { FirebaseUserStub } from '../models/FirebaseUserStub';
import type { GetSongsCSVRequest } from '../models/GetSongsCSVRequest';
import type { IncompleteSongsResponse } from '../models/IncompleteSongsResponse';
import type { IngestDealDataRequest } from '../models/IngestDealDataRequest';
import type { IntegrationResponse } from '../models/IntegrationResponse';
import type { InvoiceClientResponse } from '../models/InvoiceClientResponse';
import type { InvoiceFilenameConfigResponse } from '../models/InvoiceFilenameConfigResponse';
import type { InvoiceResponse } from '../models/InvoiceResponse';
import type { ISRCInfoResponse } from '../models/ISRCInfoResponse';
import type { LabelRegistrantResponse } from '../models/LabelRegistrantResponse';
import type { LivePerformanceDealResponse } from '../models/LivePerformanceDealResponse';
import type { ManagerResponse } from '../models/ManagerResponse';
import type { MasterAgreementResponse } from '../models/MasterAgreementResponse';
import type { MasterArtistSummary } from '../models/MasterArtistSummary';
import type { MasterCreditType } from '../models/MasterCreditType';
import type { MasterDealDetailResponse } from '../models/MasterDealDetailResponse';
import type { MasterDetailResponse } from '../models/MasterDetailResponse';
import type { MasterStatus } from '../models/MasterStatus';
import type { MasterSummaryResponse } from '../models/MasterSummaryResponse';
import type { MasterTechnicalDetailsRequest } from '../models/MasterTechnicalDetailsRequest';
import type { MasterTechnicalDetailsResponse } from '../models/MasterTechnicalDetailsResponse';
import type { MasterType } from '../models/MasterType';
import type { NeighboringRightsDealResponse } from '../models/NeighboringRightsDealResponse';
import type { OrganizationRequest } from '../models/OrganizationRequest';
import type { OrganizationResponse } from '../models/OrganizationResponse';
import type { OrganizationType } from '../models/OrganizationType';
import type { OverviewResponse } from '../models/OverviewResponse';
import type { PersonDetailResponse } from '../models/PersonDetailResponse';
import type { PersonDetails } from '../models/PersonDetails';
import type { PersonSummaryResponse } from '../models/PersonSummaryResponse';
import type { PersonUpdateRequest } from '../models/PersonUpdateRequest';
import type { PROCsvType } from '../models/PROCsvType';
import type { PROExtractHistoryResponse } from '../models/PROExtractHistoryResponse';
import type { ProfessionalRole } from '../models/ProfessionalRole';
import type { PubDealContactResponse } from '../models/PubDealContactResponse';
import type { PubDealResponse } from '../models/PubDealResponse';
import type { PubDealResponseSkinny } from '../models/PubDealResponseSkinny';
import type { PublisherEntityResponse } from '../models/PublisherEntityResponse';
import type { RecordDealResponse } from '../models/RecordDealResponse';
import type { RecordDealResponseSkinny } from '../models/RecordDealResponseSkinny';
import type { RedeemReferralRequest } from '../models/RedeemReferralRequest';
import type { RegistrationStatus } from '../models/RegistrationStatus';
import type { ReleaseArtistRequest } from '../models/ReleaseArtistRequest';
import type { ReleaseArtistSummary } from '../models/ReleaseArtistSummary';
import type { ReleaseAssetMediaType } from '../models/ReleaseAssetMediaType';
import type { ReleaseAssetPlaybackUrlResponse } from '../models/ReleaseAssetPlaybackUrlResponse';
import type { ReleaseAssetResponse } from '../models/ReleaseAssetResponse';
import type { ReleaseAssetType } from '../models/ReleaseAssetType';
import type { ReleaseAssetUploadLinkResponse } from '../models/ReleaseAssetUploadLinkResponse';
import type { ReleaseDetailResponse } from '../models/ReleaseDetailResponse';
import type { ReleaseMasterUploadConfirmResponse } from '../models/ReleaseMasterUploadConfirmResponse';
import type { ReleaseMasterUploadLinkResponse } from '../models/ReleaseMasterUploadLinkResponse';
import type { ReleasePermissionsResponse } from '../models/ReleasePermissionsResponse';
import type { ReleaseSummaryResponse } from '../models/ReleaseSummaryResponse';
import type { ReleaseTerritory } from '../models/ReleaseTerritory';
import type { ReleaseTerritoryDetailResponse } from '../models/ReleaseTerritoryDetailResponse';
import type { ReleaseTerritoryResponse } from '../models/ReleaseTerritoryResponse';
import type { ReportType } from '../models/ReportType';
import type { SelfResponse } from '../models/SelfResponse';
import type { SendSongSplitsRequest } from '../models/SendSongSplitsRequest';
import type { ShareCompositionAgreementRequest } from '../models/ShareCompositionAgreementRequest';
import type { SimpleQuoteResponse } from '../models/SimpleQuoteResponse';
import type { SimpleRoyaltyDealDetailResponse } from '../models/SimpleRoyaltyDealDetailResponse';
import type { SongDetailResponse } from '../models/SongDetailResponse';
import type { SongStatus } from '../models/SongStatus';
import type { SongSummaryResponse } from '../models/SongSummaryResponse';
import type { SongwriterIdentityResponse } from '../models/SongwriterIdentityResponse';
import type { StatisticsResponse } from '../models/StatisticsResponse';
import type { SyncLicenseDealResponse } from '../models/SyncLicenseDealResponse';
import type { TeamDetailResponse } from '../models/TeamDetailResponse';
import type { TeamMemberRequest } from '../models/TeamMemberRequest';
import type { TeamSummaryResponse } from '../models/TeamSummaryResponse';
import type { TrackAssetsResponse } from '../models/TrackAssetsResponse';
import type { TrackResponse } from '../models/TrackResponse';
import type { UpdateArtistRequest } from '../models/UpdateArtistRequest';
import type { UpdateClientBankingInfoRequest } from '../models/UpdateClientBankingInfoRequest';
import type { UpdateCompositionAgreementPublisherEntityRequest } from '../models/UpdateCompositionAgreementPublisherEntityRequest';
import type { UpdateCompositionAgreementRequest } from '../models/UpdateCompositionAgreementRequest';
import type { UpdateContractingInfoRequest } from '../models/UpdateContractingInfoRequest';
import type { UpdateContributorRequest } from '../models/UpdateContributorRequest';
import type { UpdateInvoiceClientRequest } from '../models/UpdateInvoiceClientRequest';
import type { UpdateInvoiceRequest } from '../models/UpdateInvoiceRequest';
import type { UpdateLivePerformanceDealRequest } from '../models/UpdateLivePerformanceDealRequest';
import type { UpdateManagerRequest } from '../models/UpdateManagerRequest';
import type { UpdateMasterAgreementRequest } from '../models/UpdateMasterAgreementRequest';
import type { UpdateMasterArtistRequest } from '../models/UpdateMasterArtistRequest';
import type { UpdateMasterDealRequest } from '../models/UpdateMasterDealRequest';
import type { UpdateMasterRequest } from '../models/UpdateMasterRequest';
import type { UpdateNeighboringRightsDealRequest } from '../models/UpdateNeighboringRightsDealRequest';
import type { UpdatePubDealContactRequest } from '../models/UpdatePubDealContactRequest';
import type { UpdatePubDealRequest } from '../models/UpdatePubDealRequest';
import type { UpdatePublisherEntityRequest } from '../models/UpdatePublisherEntityRequest';
import type { UpdateRecordDealRequest } from '../models/UpdateRecordDealRequest';
import type { UpdateReleaseAssetRequest } from '../models/UpdateReleaseAssetRequest';
import type { UpdateReleaseEventRequest } from '../models/UpdateReleaseEventRequest';
import type { UpdateReleaseIntegrationStatusRequest } from '../models/UpdateReleaseIntegrationStatusRequest';
import type { UpdateReleasePermissionsRequest } from '../models/UpdateReleasePermissionsRequest';
import type { UpdateReleaseRequest } from '../models/UpdateReleaseRequest';
import type { UpdateReleaseTerritoryRequest } from '../models/UpdateReleaseTerritoryRequest';
import type { UpdateSimpleRoyaltyDealRequest } from '../models/UpdateSimpleRoyaltyDealRequest';
import type { UpdateSongRequest } from '../models/UpdateSongRequest';
import type { UpdateSongwriterIdentityRequest } from '../models/UpdateSongwriterIdentityRequest';
import type { UpdateSyncLicenseDealRequest } from '../models/UpdateSyncLicenseDealRequest';
import type { UpdateTeamRequest } from '../models/UpdateTeamRequest';
import type { UpdateTrackRequest } from '../models/UpdateTrackRequest';
import type { UpdateUserPreferencesRequest } from '../models/UpdateUserPreferencesRequest';
import type { UserPreferencesResponse } from '../models/UserPreferencesResponse';
import type { UserSummaryResponse } from '../models/UserSummaryResponse';
import type { VerifiedClientBookResponse } from '../models/VerifiedClientBookResponse';
import type { W9UploadResponse } from '../models/W9UploadResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Get Artists
     * @param name
     * @param spotifyId
     * @param onlyMyClients
     * @param page
     * @param pageSize
     * @param authorization
     * @returns ArtistSummaryResponse Successful Response
     * @throws ApiError
     */
    public static getArtistsApiV1ArtistsGet(
        name?: (string | null),
        spotifyId?: (string | null),
        onlyMyClients: boolean = false,
        page: number = 1,
        pageSize: number = 100,
        authorization?: string,
    ): CancelablePromise<Array<ArtistSummaryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/artists',
            headers: {
                'authorization': authorization,
            },
            query: {
                'name': name,
                'spotify_id': spotifyId,
                'only_my_clients': onlyMyClients,
                'page': page,
                'pageSize': pageSize,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Artist
     * @param requestBody
     * @param authorization
     * @returns ArtistDetailResponse Successful Response
     * @throws ApiError
     */
    public static createArtistApiV1ArtistsPost(
        requestBody: CreateArtistRequest,
        authorization?: string,
    ): CancelablePromise<ArtistDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/artists',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Artist
     * @param requestBody
     * @param authorization
     * @returns ArtistDetailResponse Successful Response
     * @throws ApiError
     */
    public static updateArtistApiV1ArtistsPatch(
        requestBody: UpdateArtistRequest,
        authorization?: string,
    ): CancelablePromise<ArtistDetailResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/artists',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search Artists
     * @param name
     * @param spotifyId
     * @param authorization
     * @returns ArtistSearchResult Successful Response
     * @throws ApiError
     */
    public static searchArtistsApiV1ArtistsSearchGet(
        name?: (string | null),
        spotifyId?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<ArtistSearchResult>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/artists/search',
            headers: {
                'authorization': authorization,
            },
            query: {
                'name': name,
                'spotify_id': spotifyId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Artist
     * @param artistNumber
     * @param authorization
     * @returns ArtistDetailResponse Successful Response
     * @throws ApiError
     */
    public static getArtistApiV1ArtistsArtistNumberGet(
        artistNumber: string,
        authorization?: string,
    ): CancelablePromise<ArtistDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/artists/{artist_number}',
            path: {
                'artist_number': artistNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Profile Image
     * @param artistNumber
     * @param formData
     * @param authorization
     * @returns ArtistSummaryResponse Successful Response
     * @throws ApiError
     */
    public static uploadProfileImageApiV1ArtistsArtistNumberProfileImagePost(
        artistNumber: string,
        formData: Body_upload_profile_image_api_v1_artists__artist_number__profile_image_post,
        authorization?: string,
    ): CancelablePromise<ArtistSummaryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/artists/{artist_number}/profile_image',
            path: {
                'artist_number': artistNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Artist Membership
     * @param artistNumber
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createArtistMembershipApiV1ArtistsArtistNumberMembersPost(
        artistNumber: string,
        requestBody: CreateArtistMembershipRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/artists/{artist_number}/members',
            path: {
                'artist_number': artistNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Artist Membership
     * @param artistNumber
     * @param personNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteArtistMembershipApiV1ArtistsArtistNumberMembersPersonNumberDelete(
        artistNumber: string,
        personNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/artists/{artist_number}/members/{person_number}',
            path: {
                'artist_number': artistNumber,
                'person_number': personNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Client
     * @param requestBody
     * @param authorization
     * @returns ClientDetailResponse Successful Response
     * @throws ApiError
     */
    public static createClientApiV1ClientsPost(
        requestBody: CreateClientRequest,
        authorization?: string,
    ): CancelablePromise<ClientDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/clients',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Clients
     * @param authorization
     * @returns ClientSummaryResponse Successful Response
     * @throws ApiError
     */
    public static getClientsApiV1ClientsGet(
        authorization?: string,
    ): CancelablePromise<Array<ClientSummaryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients',
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Client
     * @param identifier
     * @param identifierType
     * @param authorization
     * @returns ClientDetailResponse Successful Response
     * @throws ApiError
     */
    public static getClientApiV1ClientsIdentifierGet(
        identifier: string,
        identifierType: 'book' | 'person' | 'artist' = 'book',
        authorization?: string,
    ): CancelablePromise<ClientDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/{identifier}',
            path: {
                'identifier': identifier,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'identifier_type': identifierType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Manager
     * @param bookNumber
     * @param requestBody
     * @param authorization
     * @returns ManagerResponse Successful Response
     * @throws ApiError
     */
    public static createManagerApiV1ClientsBookNumberManagersPost(
        bookNumber: string,
        requestBody: CreateManagerRequest,
        authorization?: string,
    ): CancelablePromise<ManagerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/clients/{book_number}/managers',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Manager
     * @param bookNumber
     * @param managerNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteManagerApiV1ClientsBookNumberManagersManagerNumberDelete(
        bookNumber: string,
        managerNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/clients/{book_number}/managers/{manager_number}',
            path: {
                'book_number': bookNumber,
                'manager_number': managerNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Manager
     * @param bookNumber
     * @param managerNumber
     * @param requestBody
     * @param authorization
     * @returns ManagerResponse Successful Response
     * @throws ApiError
     */
    public static updateManagerApiV1ClientsBookNumberManagersManagerNumberPatch(
        bookNumber: string,
        managerNumber: string,
        requestBody: UpdateManagerRequest,
        authorization?: string,
    ): CancelablePromise<ManagerResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/clients/{book_number}/managers/{manager_number}',
            path: {
                'book_number': bookNumber,
                'manager_number': managerNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Manager Invite
     * @param bookNumber
     * @param toEmail
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteManagerInviteApiV1ClientsBookNumberInvitesToEmailDelete(
        bookNumber: string,
        toEmail: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/clients/{book_number}/invites/{to_email}',
            path: {
                'book_number': bookNumber,
                'to_email': toEmail,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Banking Info
     * @param bookNumber
     * @param requestBody
     * @param authorization
     * @returns BankingInfoResponse Successful Response
     * @throws ApiError
     */
    public static createBankingInfoApiV1ClientsBookNumberBankingInfoPost(
        bookNumber: string,
        requestBody: CreateClientBankingInfoRequest,
        authorization?: string,
    ): CancelablePromise<BankingInfoResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/clients/{book_number}/bankingInfo',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Banking Info
     * @param bookNumber
     * @param authorization
     * @returns BankingInfoResponse Successful Response
     * @throws ApiError
     */
    public static getBankingInfoApiV1ClientsBookNumberBankingInfoGet(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<BankingInfoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/{book_number}/bankingInfo',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Banking Info
     * @param bookNumber
     * @param requestBody
     * @param authorization
     * @returns BankingInfoResponse Successful Response
     * @throws ApiError
     */
    public static updateBankingInfoApiV1ClientsBookNumberBankingInfoPatch(
        bookNumber: string,
        requestBody: UpdateClientBankingInfoRequest,
        authorization?: string,
    ): CancelablePromise<BankingInfoResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/clients/{book_number}/bankingInfo',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Banking Info
     * @param bookNumber
     * @param authorization
     * @returns BankingInfoResponse Successful Response
     * @throws ApiError
     */
    public static deleteBankingInfoApiV1ClientsBookNumberBankingInfoDelete(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<BankingInfoResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/clients/{book_number}/bankingInfo',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Invoice Client
     * @param bookNumber
     * @param requestBody
     * @param authorization
     * @returns InvoiceClientResponse Successful Response
     * @throws ApiError
     */
    public static createInvoiceClientApiV1ClientsBookNumberInvoiceClientsPost(
        bookNumber: string,
        requestBody: CreateInvoiceClientRequest,
        authorization?: string,
    ): CancelablePromise<InvoiceClientResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/clients/{book_number}/invoiceClients',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Invoice Clients
     * @param bookNumber
     * @param authorization
     * @returns InvoiceClientResponse Successful Response
     * @throws ApiError
     */
    public static getInvoiceClientsApiV1ClientsBookNumberInvoiceClientsGet(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<Array<InvoiceClientResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/{book_number}/invoiceClients',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Invoice Client
     * @param bookNumber
     * @param clientNumber
     * @param authorization
     * @returns InvoiceClientResponse Successful Response
     * @throws ApiError
     */
    public static getInvoiceClientApiV1ClientsBookNumberInvoiceClientsClientNumberGet(
        bookNumber: string,
        clientNumber: string,
        authorization?: string,
    ): CancelablePromise<InvoiceClientResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/{book_number}/invoiceClients/{client_number}',
            path: {
                'book_number': bookNumber,
                'client_number': clientNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Invoice Client
     * @param clientNumber
     * @param requestBody
     * @param authorization
     * @returns InvoiceClientResponse Successful Response
     * @throws ApiError
     */
    public static updateInvoiceClientApiV1ClientsBookNumberInvoiceClientsClientNumberPatch(
        clientNumber: string,
        requestBody: UpdateInvoiceClientRequest,
        authorization?: string,
    ): CancelablePromise<InvoiceClientResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/clients/{book_number}/invoiceClients/{client_number}',
            path: {
                'client_number': clientNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Invoice Client
     * @param bookNumber
     * @param clientNumber
     * @param authorization
     * @returns InvoiceClientResponse Successful Response
     * @throws ApiError
     */
    public static deleteInvoiceClientApiV1ClientsBookNumberInvoiceClientsClientNumberDelete(
        bookNumber: string,
        clientNumber: string,
        authorization?: string,
    ): CancelablePromise<InvoiceClientResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/clients/{book_number}/invoiceClients/{client_number}',
            path: {
                'book_number': bookNumber,
                'client_number': clientNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Pro Csv
     * @param bookNumber
     * @param pro
     * @param formData
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadProCsvApiV1ClientsBookNumberProExtractProPost(
        bookNumber: string,
        pro: PROCsvType,
        formData: Body_upload_pro_csv_api_v1_clients__book_number__proExtract__pro__post,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/clients/{book_number}/proExtract/{pro}',
            path: {
                'book_number': bookNumber,
                'pro': pro,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Pro Extract History
     * @param bookNumber
     * @param authorization
     * @returns PROExtractHistoryResponse Successful Response
     * @throws ApiError
     */
    public static getProExtractHistoryApiV1ClientsBookNumberProExtractGet(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<Array<PROExtractHistoryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/{book_number}/proExtract',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Verified Client Book
     * @param personNumber
     * @param authorization
     * @returns VerifiedClientBookResponse Successful Response
     * @throws ApiError
     */
    public static getVerifiedClientBookApiV1ClientsVerifiedBookPersonNumberGet(
        personNumber: string,
        authorization?: string,
    ): CancelablePromise<VerifiedClientBookResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/verified-book/{person_number}',
            path: {
                'person_number': personNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Verified Books
     * @param personNumber
     * @param authorization
     * @returns VerifiedClientBookResponse Successful Response
     * @throws ApiError
     */
    public static getVerifiedBooksApiV1ClientsVerifiedBooksPersonNumberGet(
        personNumber: string,
        authorization?: string,
    ): CancelablePromise<Array<VerifiedClientBookResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/verified-books/{person_number}',
            path: {
                'person_number': personNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Contracting Info
     * @param bookNumber
     * @param requestBody
     * @param authorization
     * @returns ContractingInfoResponse Successful Response
     * @throws ApiError
     */
    public static createContractingInfoApiV1ClientsBookNumberContractingInfoPost(
        bookNumber: string,
        requestBody: CreateContractingInfoRequest,
        authorization?: string,
    ): CancelablePromise<ContractingInfoResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/clients/{book_number}/contractingInfo',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Contracting Info
     * @param bookNumber
     * @param authorization
     * @returns ContractingInfoResponse Successful Response
     * @throws ApiError
     */
    public static getContractingInfoApiV1ClientsBookNumberContractingInfoGet(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<ContractingInfoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/{book_number}/contractingInfo',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Contracting Info
     * @param bookNumber
     * @param requestBody
     * @param authorization
     * @returns ContractingInfoResponse Successful Response
     * @throws ApiError
     */
    public static updateContractingInfoApiV1ClientsBookNumberContractingInfoPatch(
        bookNumber: string,
        requestBody: UpdateContractingInfoRequest,
        authorization?: string,
    ): CancelablePromise<ContractingInfoResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/clients/{book_number}/contractingInfo',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Contracting Info
     * @param bookNumber
     * @param authorization
     * @returns ContractingInfoResponse Successful Response
     * @throws ApiError
     */
    public static deleteContractingInfoApiV1ClientsBookNumberContractingInfoDelete(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<ContractingInfoResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/clients/{book_number}/contractingInfo',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload W9
     * @param bookNumber
     * @param formData
     * @param authorization
     * @returns W9UploadResponse Successful Response
     * @throws ApiError
     */
    public static uploadW9ApiV1ClientsBookNumberW9Post(
        bookNumber: string,
        formData: Body_upload_w9_api_v1_clients__book_number__w9_post,
        authorization?: string,
    ): CancelablePromise<W9UploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/clients/{book_number}/w9',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete W9
     * @param bookNumber
     * @param authorization
     * @returns void
     * @throws ApiError
     */
    public static deleteW9ApiV1ClientsBookNumberW9Delete(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/clients/{book_number}/w9',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get W9 Download Link
     * @param bookNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getW9DownloadLinkApiV1ClientsBookNumberW9DownloadGet(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/{book_number}/w9/download',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Enrich Book
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static enrichBookApiV1ClientEnrichmentPost(
        requestBody: EnrichBookRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/clientEnrichment',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Enrichment
     * @param bookNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static cancelEnrichmentApiV1ClientEnrichmentBookNumberDelete(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/clientEnrichment/{book_number}',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreements
     * @param songNumber
     * @param bookNumber
     * @param authorization
     * @returns CompositionAgreementResponse Successful Response
     * @throws ApiError
     */
    public static getAgreementsApiV1CompositionAgreementsGet(
        songNumber?: (string | null),
        bookNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<CompositionAgreementResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/compositionAgreements',
            headers: {
                'authorization': authorization,
            },
            query: {
                'song_number': songNumber,
                'book_number': bookNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Agreement
     * @param requestBody
     * @param authorization
     * @returns CompositionAgreementResponse Successful Response
     * @throws ApiError
     */
    public static createAgreementApiV1CompositionAgreementsPost(
        requestBody: CreateCompositionAgreementRequest,
        authorization?: string,
    ): CancelablePromise<CompositionAgreementResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/compositionAgreements',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreement
     * @param agreementNumber
     * @param bookNumber
     * @param authorization
     * @returns CompositionAgreementResponse Successful Response
     * @throws ApiError
     */
    public static getAgreementApiV1CompositionAgreementsAgreementNumberGet(
        agreementNumber: string,
        bookNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<CompositionAgreementResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/compositionAgreements/{agreement_number}',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Agreement
     * @param agreementNumber
     * @param requestBody
     * @param authorization
     * @returns CompositionAgreementResponse Successful Response
     * @throws ApiError
     */
    public static updateAgreementApiV1CompositionAgreementsAgreementNumberPatch(
        agreementNumber: string,
        requestBody: UpdateCompositionAgreementRequest,
        authorization?: string,
    ): CancelablePromise<CompositionAgreementResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/compositionAgreements/{agreement_number}',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Agreement
     * @param agreementNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteAgreementApiV1CompositionAgreementsAgreementNumberDelete(
        agreementNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/compositionAgreements/{agreement_number}',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Publisher Entity
     * @param agreementNumber
     * @param publisherEntityNumber
     * @param authorization
     * @returns CompositionAgreementResponse Successful Response
     * @throws ApiError
     */
    public static addPublisherEntityApiV1CompositionAgreementsAgreementNumberPublisherEntitiesPost(
        agreementNumber: string,
        publisherEntityNumber: string,
        authorization?: string,
    ): CancelablePromise<CompositionAgreementResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/compositionAgreements/{agreement_number}/publisherEntities',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'publisher_entity_number': publisherEntityNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Publisher Entity
     * @param agreementNumber
     * @param publisherEntityNumber
     * @param authorization
     * @returns void
     * @throws ApiError
     */
    public static removePublisherEntityApiV1CompositionAgreementsAgreementNumberPublisherEntitiesPublisherEntityNumberDelete(
        agreementNumber: string,
        publisherEntityNumber: string,
        authorization?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/compositionAgreements/{agreement_number}/publisherEntities/{publisher_entity_number}',
            path: {
                'agreement_number': agreementNumber,
                'publisher_entity_number': publisherEntityNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Composition Agreement Publisher Entity
     * @param agreementNumber
     * @param publisherEntityNumber
     * @param requestBody
     * @param authorization
     * @returns CompositionAgreementResponse Successful Response
     * @throws ApiError
     */
    public static updateCompositionAgreementPublisherEntityApiV1CompositionAgreementsAgreementNumberPublisherEntitiesPublisherEntityNumberPatch(
        agreementNumber: string,
        publisherEntityNumber: string,
        requestBody: UpdateCompositionAgreementPublisherEntityRequest,
        authorization?: string,
    ): CancelablePromise<CompositionAgreementResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/compositionAgreements/{agreement_number}/publisherEntities/{publisher_entity_number}',
            path: {
                'agreement_number': agreementNumber,
                'publisher_entity_number': publisherEntityNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Composition To Pub Deal
     * @param requestBody
     * @param authorization
     * @returns CompositionAgreementResponse Successful Response
     * @throws ApiError
     */
    public static addCompositionToPubDealApiV1CompositionAgreementsAddCompositionToPubDealPost(
        requestBody: AddCompositionToPubDealRequest,
        authorization?: string,
    ): CancelablePromise<CompositionAgreementResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/compositionAgreements/add_composition_to_pub_deal',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Share Composition Agreement
     * Specific endpoint for sharing a song with another book and creating the associated agreement.
     * This better represents the business logic of sharing splits with another writer.
     * @param requestBody
     * @param authorization
     * @returns CompositionAgreementResponse Successful Response
     * @throws ApiError
     */
    public static shareCompositionAgreementApiV1CompositionAgreementsSharePost(
        requestBody: ShareCompositionAgreementRequest,
        authorization?: string,
    ): CancelablePromise<CompositionAgreementResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/compositionAgreements/share',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deals
     * @param bookNumber
     * @param status
     * @param type
     * @param page
     * @param pageSize
     * @param orderBy
     * @param searchTerm
     * @param authorization
     * @returns DealSummaryResponse Successful Response
     * @throws ApiError
     */
    public static getDealsApiV1DealsGet(
        bookNumber?: (string | null),
        status?: (DealStatus | null),
        type?: (DealType | null),
        page: number = 1,
        pageSize: number = 100,
        orderBy?: Array<string>,
        searchTerm?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<DealSummaryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/deals',
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
                'status': status,
                'type': type,
                'page': page,
                'pageSize': pageSize,
                'orderBy': orderBy,
                'search_term': searchTerm,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deals Without Invoices
     * @param bookNumber
     * @param authorization
     * @returns DealSummaryResponse Successful Response
     * @throws ApiError
     */
    public static getDealsWithoutInvoicesApiV1DealsNoInvoicesGet(
        bookNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<DealSummaryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/deals/no_invoices',
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Extract Deal Data
     * @param bookNumber
     * @param formData
     * @param authorization
     * @returns ExtractDealDataJobCreationResponse Successful Response
     * @throws ApiError
     */
    public static extractDealDataApiV1DealsExtractDealDataPost(
        bookNumber: string,
        formData: Body_extract_deal_data_api_v1_deals_extract_deal_data_post,
        authorization?: string,
    ): CancelablePromise<ExtractDealDataJobCreationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/deals/extract-deal-data',
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Extract Deal Data Status
     * @param jobId
     * @param authorization
     * @returns CachedExtractionData Successful Response
     * @throws ApiError
     */
    public static getExtractDealDataStatusApiV1DealsExtractDealDataStatusGet(
        jobId: string,
        authorization?: string,
    ): CancelablePromise<CachedExtractionData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/deals/extract-deal-data/status',
            headers: {
                'authorization': authorization,
            },
            query: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Handle Extraction Ingestion
     * @param requestBody
     * @param authorization
     * @returns CachedExtractionData Successful Response
     * @throws ApiError
     */
    public static handleExtractionIngestionApiV1DealsExtractDealDataIngestPost(
        requestBody: IngestDealDataRequest,
        authorization?: string,
    ): CancelablePromise<CachedExtractionData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/deals/extract-deal-data/ingest',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Health Check
     * @returns any Successful Response
     * @throws ApiError
     */
    public static healthCheckApiV1HealthGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/health',
        });
    }
    /**
     * Health Check Security
     * @returns any Successful Response
     * @throws ApiError
     */
    public static healthCheckSecurityApiV1HealthProtectedGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/health/protected',
        });
    }
    /**
     * Health Check Redis
     * @returns any Successful Response
     * @throws ApiError
     */
    public static healthCheckRedisApiV1HealthRedisGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/health/redis',
        });
    }
    /**
     * Health Check Postgres
     * @returns any Successful Response
     * @throws ApiError
     */
    public static healthCheckPostgresApiV1HealthPostgresGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/health/postgres',
        });
    }
    /**
     * Get Invoices
     * @param bookNumber
     * @param status
     * @param page
     * @param pageSize
     * @param orderBy
     * @param authorization
     * @returns InvoiceResponse Successful Response
     * @throws ApiError
     */
    public static getInvoicesApiV1InvoicesGet(
        bookNumber?: (string | null),
        status?: (Array<string> | null),
        page: number = 1,
        pageSize: number = 100,
        orderBy?: Array<string>,
        authorization?: string,
    ): CancelablePromise<Array<InvoiceResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/invoices',
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
                'status': status,
                'page': page,
                'pageSize': pageSize,
                'orderBy': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Invoice
     * @param requestBody
     * @param authorization
     * @returns InvoiceResponse Successful Response
     * @throws ApiError
     */
    public static createInvoiceApiV1InvoicesPost(
        requestBody: CreateInvoiceRequest,
        authorization?: string,
    ): CancelablePromise<InvoiceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/invoices',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Invoice Summary Stats
     * @param bookNumber
     * @param authorization
     * @returns StatisticsResponse Successful Response
     * @throws ApiError
     */
    public static getInvoiceSummaryStatsApiV1InvoicesSummaryStatsGet(
        bookNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<StatisticsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/invoices/summary-stats',
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Invoice
     * @param invoiceNumber
     * @param requestBody
     * @param authorization
     * @returns InvoiceResponse Successful Response
     * @throws ApiError
     */
    public static updateInvoiceApiV1InvoicesInvoiceNumberPatch(
        invoiceNumber: string,
        requestBody: UpdateInvoiceRequest,
        authorization?: string,
    ): CancelablePromise<InvoiceResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/invoices/{invoice_number}',
            path: {
                'invoice_number': invoiceNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Invoice
     * @param invoiceNumber
     * @param authorization
     * @returns InvoiceResponse Successful Response
     * @throws ApiError
     */
    public static getInvoiceApiV1InvoicesInvoiceNumberGet(
        invoiceNumber: string,
        authorization?: string,
    ): CancelablePromise<InvoiceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/invoices/{invoice_number}',
            path: {
                'invoice_number': invoiceNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Invoice
     * @param invoiceNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteInvoiceApiV1InvoicesInvoiceNumberDelete(
        invoiceNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/invoices/{invoice_number}',
            path: {
                'invoice_number': invoiceNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Invoice Customer
     * @param invoiceNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteInvoiceCustomerApiV1InvoicesInvoiceNumberCustomerDelete(
        invoiceNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/invoices/{invoice_number}/customer',
            path: {
                'invoice_number': invoiceNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Invoice Pdf
     * @param invoiceNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static generateInvoicePdfApiV1InvoicesInvoiceNumberPdfPost(
        invoiceNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/invoices/{invoice_number}/pdf',
            path: {
                'invoice_number': invoiceNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Invoice Pdf
     * @param invoiceNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getInvoicePdfApiV1InvoicesInvoiceNumberPdfGet(
        invoiceNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/invoices/{invoice_number}/pdf',
            path: {
                'invoice_number': invoiceNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Invoice Code
     * @param bookNumber
     * @param invoiceCode
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static updateInvoiceCodeApiV1InvoicesBookNumberCodePut(
        bookNumber: string,
        invoiceCode: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/invoices/{book_number}/code',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'invoice_code': invoiceCode,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Invoice Filename Config
     * @param bookNumber
     * @param requestBody
     * @param authorization
     * @returns InvoiceFilenameConfigResponse Successful Response
     * @throws ApiError
     */
    public static updateInvoiceFilenameConfigApiV1InvoicesBookNumberFilenameConfigPut(
        bookNumber: string,
        requestBody: Array<Record<string, any>>,
        authorization?: string,
    ): CancelablePromise<InvoiceFilenameConfigResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/invoices/{book_number}/filename-config',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Invoice Contact
     * @param bookNumber
     * @param contact
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static updateInvoiceContactApiV1InvoicesBookNumberContactPut(
        bookNumber: string,
        contact: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/invoices/{book_number}/contact',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'contact': contact,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Integration
     * @param integrationId
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getIntegrationApiV1IntegrationsIntegrationIdGet(
        integrationId: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/integrations/{integration_id}',
            path: {
                'integration_id': integrationId,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Integration
     * Creates a new integration for a provider-book combination.
     *
     * Key operations:
     * 1. Verify user can access this integration
     * 2. Get integration record
     * 3. Return formatted integration details
     *
     * Returns: Integration configuration/status
     * @param requestBody
     * @param authorization
     * @returns IntegrationResponse Successful Response
     * @throws ApiError
     */
    public static createIntegrationApiV1IntegrationsCreatePost(
        requestBody: CreateUserIntegrationRequest,
        authorization?: string,
    ): CancelablePromise<IntegrationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/integrations/create',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreements
     * @param dealNumber
     * @param masterNumber
     * @param authorization
     * @returns MasterAgreementResponse Successful Response
     * @throws ApiError
     */
    public static getAgreementsApiV1MasterAgreementsGet(
        dealNumber?: (string | null),
        masterNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<MasterAgreementResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/masterAgreements',
            headers: {
                'authorization': authorization,
            },
            query: {
                'deal_number': dealNumber,
                'master_number': masterNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Agreement
     * @param requestBody
     * @param authorization
     * @returns MasterAgreementResponse Successful Response
     * @throws ApiError
     */
    public static createAgreementApiV1MasterAgreementsPost(
        requestBody: CreateMasterAgreementRequest,
        authorization?: string,
    ): CancelablePromise<MasterAgreementResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/masterAgreements',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreement
     * @param agreementNumber
     * @param authorization
     * @returns MasterAgreementResponse Successful Response
     * @throws ApiError
     */
    public static getAgreementApiV1MasterAgreementsAgreementNumberGet(
        agreementNumber: string,
        authorization?: string,
    ): CancelablePromise<MasterAgreementResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/masterAgreements/{agreement_number}',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Agreement
     * @param agreementNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteAgreementApiV1MasterAgreementsAgreementNumberDelete(
        agreementNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/masterAgreements/{agreement_number}',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Agreement
     * @param agreementNumber
     * @param requestBody
     * @param authorization
     * @returns MasterAgreementResponse Successful Response
     * @throws ApiError
     */
    public static updateAgreementApiV1MasterAgreementsAgreementNumberPatch(
        agreementNumber: string,
        requestBody: UpdateMasterAgreementRequest,
        authorization?: string,
    ): CancelablePromise<MasterAgreementResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/masterAgreements/{agreement_number}',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Master Credit
     * @param agreementNumber
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addMasterCreditApiV1MasterAgreementsAgreementNumberCreditsPost(
        agreementNumber: string,
        requestBody: CreateMasterCreditRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/masterAgreements/{agreement_number}/credits',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Master Bonus
     * @param agreementNumber
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addMasterBonusApiV1MasterAgreementsAgreementNumberBonusesPost(
        agreementNumber: string,
        requestBody: CreateMasterBonusRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/masterAgreements/{agreement_number}/bonuses',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Master Bonus
     * @param agreementNumber
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateMasterBonusApiV1MasterAgreementsAgreementNumberBonusesPatch(
        agreementNumber: string,
        requestBody: CreateMasterBonusRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/masterAgreements/{agreement_number}/bonuses',
            path: {
                'agreement_number': agreementNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Master Bonus
     * @param number
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteMasterBonusApiV1MasterAgreementsAgreementNumberBonusesNumberDelete(
        number: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/masterAgreements/{agreement_number}/bonuses/{number}',
            path: {
                'number': number,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Master Credit
     * @param agreementNumber
     * @param credit
     * @param instrument
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeMasterCreditApiV1MasterAgreementsAgreementNumberCreditsCreditDelete(
        agreementNumber: string,
        credit: MasterCreditType,
        instrument?: (string | null),
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/masterAgreements/{agreement_number}/credits/{credit}',
            path: {
                'agreement_number': agreementNumber,
                'credit': credit,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'instrument': instrument,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deal
     * @param dealNumber
     * @param authorization
     * @returns MasterDealDetailResponse Successful Response
     * @throws ApiError
     */
    public static getDealApiV1MasterDealsDealNumberGet(
        dealNumber: (string | null),
        authorization?: string,
    ): CancelablePromise<MasterDealDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/masterDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Deal
     * @param dealNumber
     * @param requestBody
     * @param authorization
     * @returns MasterDealDetailResponse Successful Response
     * @throws ApiError
     */
    public static updateDealApiV1MasterDealsDealNumberPatch(
        dealNumber: string,
        requestBody: UpdateMasterDealRequest,
        authorization?: string,
    ): CancelablePromise<MasterDealDetailResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/masterDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Deal
     * @param dealNumber
     * @param authorization
     * @returns MasterDealDetailResponse Successful Response
     * @throws ApiError
     */
    public static deleteDealApiV1MasterDealsDealNumberDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<MasterDealDetailResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/masterDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Deal
     * @param requestBody
     * @param authorization
     * @returns MasterDealDetailResponse Successful Response
     * @throws ApiError
     */
    public static createDealApiV1MasterDealsPost(
        requestBody: CreateMasterDealRequest,
        authorization?: string,
    ): CancelablePromise<MasterDealDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/masterDeals',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Master
     * @param dealNumber
     * @param requestBody
     * @param authorization
     * @returns MasterDealDetailResponse Successful Response
     * @throws ApiError
     */
    public static addMasterApiV1MasterDealsDealNumberMastersPost(
        dealNumber: string,
        requestBody: AddMasterToDealRequest,
        authorization?: string,
    ): CancelablePromise<MasterDealDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/masterDeals/{deal_number}/masters',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Agreement
     * @param dealNumber
     * @param formData
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadAgreementApiV1MasterDealsDealNumberAgreementPost(
        dealNumber: string,
        formData: Body_upload_agreement_api_v1_masterDeals__deal_number__agreement_post,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/masterDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Agreement
     * @param dealNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeAgreementApiV1MasterDealsDealNumberAgreementDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/masterDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreement Download Link
     * @param dealNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getAgreementDownloadLinkApiV1MasterDealsDealNumberAgreementGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/masterDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Invoices For Deal
     * @param dealNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createInvoicesForDealApiV1MasterDealsDealNumberInvoicesPost(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/masterDeals/{deal_number}/invoices',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deal
     * @param dealNumber
     * @param authorization
     * @returns SimpleRoyaltyDealDetailResponse Successful Response
     * @throws ApiError
     */
    public static getDealApiV1SimpleRoyaltyDealsDealNumberGet(
        dealNumber: (string | null),
        authorization?: string,
    ): CancelablePromise<SimpleRoyaltyDealDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/simpleRoyaltyDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Deal
     * @param dealNumber
     * @param requestBody
     * @param authorization
     * @returns SimpleRoyaltyDealDetailResponse Successful Response
     * @throws ApiError
     */
    public static updateDealApiV1SimpleRoyaltyDealsDealNumberPatch(
        dealNumber: string,
        requestBody: UpdateSimpleRoyaltyDealRequest,
        authorization?: string,
    ): CancelablePromise<SimpleRoyaltyDealDetailResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/simpleRoyaltyDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Deal
     * @param dealNumber
     * @param authorization
     * @returns SimpleRoyaltyDealDetailResponse Successful Response
     * @throws ApiError
     */
    public static deleteDealApiV1SimpleRoyaltyDealsDealNumberDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<SimpleRoyaltyDealDetailResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/simpleRoyaltyDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Deal
     * @param requestBody
     * @param authorization
     * @returns SimpleRoyaltyDealDetailResponse Successful Response
     * @throws ApiError
     */
    public static createDealApiV1SimpleRoyaltyDealsPost(
        requestBody: CreateSimpleRoyaltyDealRequest,
        authorization?: string,
    ): CancelablePromise<SimpleRoyaltyDealDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/simpleRoyaltyDeals',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Agreement
     * @param dealNumber
     * @param formData
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadAgreementApiV1SimpleRoyaltyDealsDealNumberAgreementPost(
        dealNumber: string,
        formData: Body_upload_agreement_api_v1_simpleRoyaltyDeals__deal_number__agreement_post,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/simpleRoyaltyDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Agreement
     * @param dealNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeAgreementApiV1SimpleRoyaltyDealsDealNumberAgreementDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/simpleRoyaltyDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreement Download Link
     * @param dealNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getAgreementDownloadLinkApiV1SimpleRoyaltyDealsDealNumberAgreementGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/simpleRoyaltyDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deal
     * @param dealNumber
     * @param authorization
     * @returns LivePerformanceDealResponse Successful Response
     * @throws ApiError
     */
    public static getDealApiV1LivePerformanceDealsDealNumberGet(
        dealNumber: (string | null),
        authorization?: string,
    ): CancelablePromise<LivePerformanceDealResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/livePerformanceDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Deal
     * @param dealNumber
     * @param requestBody
     * @param authorization
     * @returns LivePerformanceDealResponse Successful Response
     * @throws ApiError
     */
    public static updateDealApiV1LivePerformanceDealsDealNumberPatch(
        dealNumber: string,
        requestBody: UpdateLivePerformanceDealRequest,
        authorization?: string,
    ): CancelablePromise<LivePerformanceDealResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/livePerformanceDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Deal
     * @param dealNumber
     * @param authorization
     * @returns LivePerformanceDealResponse Successful Response
     * @throws ApiError
     */
    public static deleteDealApiV1LivePerformanceDealsDealNumberDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<LivePerformanceDealResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/livePerformanceDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Deal
     * @param requestBody
     * @param authorization
     * @returns LivePerformanceDealResponse Successful Response
     * @throws ApiError
     */
    public static createDealApiV1LivePerformanceDealsPost(
        requestBody: CreateLivePerformanceDealRequest,
        authorization?: string,
    ): CancelablePromise<LivePerformanceDealResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/livePerformanceDeals',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Agreement
     * @param dealNumber
     * @param formData
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadAgreementApiV1LivePerformanceDealsDealNumberAgreementPost(
        dealNumber: string,
        formData: Body_upload_agreement_api_v1_livePerformanceDeals__deal_number__agreement_post,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/livePerformanceDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Agreement
     * @param dealNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeAgreementApiV1LivePerformanceDealsDealNumberAgreementDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/livePerformanceDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreement Download Link
     * @param dealNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getAgreementDownloadLinkApiV1LivePerformanceDealsDealNumberAgreementGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/livePerformanceDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deal
     * @param dealNumber
     * @param authorization
     * @returns SyncLicenseDealResponse Successful Response
     * @throws ApiError
     */
    public static getDealApiV1SyncLicenseDealsDealNumberGet(
        dealNumber: (string | null),
        authorization?: string,
    ): CancelablePromise<SyncLicenseDealResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/syncLicenseDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Deal
     * @param dealNumber
     * @param requestBody
     * @param authorization
     * @returns SyncLicenseDealResponse Successful Response
     * @throws ApiError
     */
    public static updateDealApiV1SyncLicenseDealsDealNumberPatch(
        dealNumber: string,
        requestBody: UpdateSyncLicenseDealRequest,
        authorization?: string,
    ): CancelablePromise<SyncLicenseDealResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/syncLicenseDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Deal
     * @param dealNumber
     * @param authorization
     * @returns SyncLicenseDealResponse Successful Response
     * @throws ApiError
     */
    public static deleteDealApiV1SyncLicenseDealsDealNumberDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<SyncLicenseDealResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/syncLicenseDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Deal
     * @param requestBody
     * @param authorization
     * @returns SyncLicenseDealResponse Successful Response
     * @throws ApiError
     */
    public static createDealApiV1SyncLicenseDealsPost(
        requestBody: CreateSyncLicenseDealRequest,
        authorization?: string,
    ): CancelablePromise<SyncLicenseDealResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/syncLicenseDeals',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Agreement
     * @param dealNumber
     * @param formData
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadAgreementApiV1SyncLicenseDealsDealNumberAgreementPost(
        dealNumber: string,
        formData: Body_upload_agreement_api_v1_syncLicenseDeals__deal_number__agreement_post,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/syncLicenseDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Agreement
     * @param dealNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeAgreementApiV1SyncLicenseDealsDealNumberAgreementDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/syncLicenseDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreement Download Link
     * @param dealNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getAgreementDownloadLinkApiV1SyncLicenseDealsDealNumberAgreementGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/syncLicenseDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deals
     * @param page
     * @param pageSize
     * @param orderBy
     * @param authorization
     * @returns NeighboringRightsDealResponse Successful Response
     * @throws ApiError
     */
    public static getDealsApiV1NeighboringRightsDealsGet(
        page: number = 1,
        pageSize: number = 10,
        orderBy?: Array<string>,
        authorization?: string,
    ): CancelablePromise<Array<NeighboringRightsDealResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/neighboringRightsDeals/',
            headers: {
                'authorization': authorization,
            },
            query: {
                'page': page,
                'page_size': pageSize,
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deal
     * @param dealNumber
     * @param authorization
     * @returns NeighboringRightsDealResponse Successful Response
     * @throws ApiError
     */
    public static getDealApiV1NeighboringRightsDealsDealNumberGet(
        dealNumber: (string | null),
        authorization?: string,
    ): CancelablePromise<NeighboringRightsDealResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/neighboringRightsDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Deal
     * @param dealNumber
     * @param requestBody
     * @param authorization
     * @returns NeighboringRightsDealResponse Successful Response
     * @throws ApiError
     */
    public static updateDealApiV1NeighboringRightsDealsDealNumberPatch(
        dealNumber: string,
        requestBody: UpdateNeighboringRightsDealRequest,
        authorization?: string,
    ): CancelablePromise<NeighboringRightsDealResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/neighboringRightsDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Deal
     * @param dealNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteDealApiV1NeighboringRightsDealsDealNumberDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/neighboringRightsDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Deal
     * @param requestBody
     * @param authorization
     * @returns NeighboringRightsDealResponse Successful Response
     * @throws ApiError
     */
    public static createDealApiV1NeighboringRightsDealsPost(
        requestBody: CreateNeighboringRightsDealRequest,
        authorization?: string,
    ): CancelablePromise<NeighboringRightsDealResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/neighboringRightsDeals',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Agreement
     * @param dealNumber
     * @param formData
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadAgreementApiV1NeighboringRightsDealsDealNumberAgreementPost(
        dealNumber: string,
        formData: Body_upload_agreement_api_v1_neighboringRightsDeals__deal_number__agreement_post,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/neighboringRightsDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Agreement
     * @param dealNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeAgreementApiV1NeighboringRightsDealsDealNumberAgreementDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/neighboringRightsDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreement Download Link
     * @param dealNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getAgreementDownloadLinkApiV1NeighboringRightsDealsDealNumberAgreementGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/neighboringRightsDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Master
     * @param requestBody
     * @param authorization
     * @returns MasterDetailResponse Successful Response
     * @throws ApiError
     */
    public static createMasterApiV1MastersPost(
        requestBody: CreateMasterRequest,
        authorization?: string,
    ): CancelablePromise<MasterDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/masters',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Masters
     * @param bookNumber
     * @param personNumber
     * @param artistNumber
     * @param name
     * @param status
     * @param page
     * @param pageSize
     * @param orderBy
     * @param authorization
     * @returns MasterSummaryResponse Successful Response
     * @throws ApiError
     */
    public static getMastersApiV1MastersGet(
        bookNumber?: (string | null),
        personNumber?: (string | null),
        artistNumber?: (string | null),
        name?: (string | null),
        status?: (MasterStatus | null),
        page: number = 1,
        pageSize: number = 100,
        orderBy?: Array<string>,
        authorization?: string,
    ): CancelablePromise<Array<MasterSummaryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/masters',
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
                'person_number': personNumber,
                'artist_number': artistNumber,
                'name': name,
                'status': status,
                'page': page,
                'pageSize': pageSize,
                'orderBy': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Master Detail
     * @param masterNumber
     * @param authorization
     * @returns MasterDetailResponse Successful Response
     * @throws ApiError
     */
    public static getMasterDetailApiV1MastersMasterNumberGet(
        masterNumber: string,
        authorization?: string,
    ): CancelablePromise<MasterDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/masters/{master_number}',
            path: {
                'master_number': masterNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Master
     * @param masterNumber
     * @param requestBody
     * @param authorization
     * @returns MasterDetailResponse Successful Response
     * @throws ApiError
     */
    public static updateMasterApiV1MastersMasterNumberPatch(
        masterNumber: string,
        requestBody: UpdateMasterRequest,
        authorization?: string,
    ): CancelablePromise<MasterDetailResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/masters/{master_number}',
            path: {
                'master_number': masterNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Master
     * @param masterNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteMasterApiV1MastersMasterNumberDelete(
        masterNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/masters/{master_number}',
            path: {
                'master_number': masterNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Bulk Delete Masters
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static bulkDeleteMastersApiV1MastersBulkDeleteDelete(
        requestBody: BulkDeleteMastersRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/masters/bulk-delete',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Master Artist
     * @param masterNumber
     * @param requestBody
     * @param authorization
     * @returns MasterArtistSummary Successful Response
     * @throws ApiError
     */
    public static addMasterArtistApiV1MastersMasterNumberArtistsPost(
        masterNumber: string,
        requestBody: CreateMasterArtistRequest,
        authorization?: string,
    ): CancelablePromise<MasterArtistSummary> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/masters/{master_number}/artists',
            path: {
                'master_number': masterNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Master Artist
     * @param masterNumber
     * @param artistNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeMasterArtistApiV1MastersMasterNumberArtistsArtistNumberDelete(
        masterNumber: string,
        artistNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/masters/{master_number}/artists/{artist_number}',
            path: {
                'master_number': masterNumber,
                'artist_number': artistNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Master Artist
     * @param masterNumber
     * @param artistNumber
     * @param requestBody
     * @param authorization
     * @returns MasterArtistSummary Successful Response
     * @throws ApiError
     */
    public static updateMasterArtistApiV1MastersMasterNumberArtistsArtistNumberPatch(
        masterNumber: string,
        artistNumber: string,
        requestBody: UpdateMasterArtistRequest,
        authorization?: string,
    ): CancelablePromise<MasterArtistSummary> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/masters/{master_number}/artists/{artist_number}',
            path: {
                'master_number': masterNumber,
                'artist_number': artistNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Master Technical Details
     * @param masterNumber
     * @param requestBody
     * @param authorization
     * @returns MasterTechnicalDetailsResponse Successful Response
     * @throws ApiError
     */
    public static updateMasterTechnicalDetailsApiV1MastersMasterNumberTechnicalDetailsPatch(
        masterNumber: string,
        requestBody: MasterTechnicalDetailsRequest,
        authorization?: string,
    ): CancelablePromise<MasterTechnicalDetailsResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/masters/{master_number}/technical-details',
            path: {
                'master_number': masterNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Master Technical Details
     * @param masterNumber
     * @param authorization
     * @returns MasterTechnicalDetailsResponse Successful Response
     * @throws ApiError
     */
    public static getMasterTechnicalDetailsApiV1MastersMasterNumberTechnicalDetailsGet(
        masterNumber: string,
        authorization?: string,
    ): CancelablePromise<MasterTechnicalDetailsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/masters/{master_number}/technical-details',
            path: {
                'master_number': masterNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Organizations
     * @param type
     * @param authorization
     * @returns OrganizationResponse Successful Response
     * @throws ApiError
     */
    public static getOrganizationsApiV1OrganizationsGet(
        type?: (OrganizationType | null),
        authorization?: string,
    ): CancelablePromise<Array<OrganizationResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/organizations',
            headers: {
                'authorization': authorization,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Organization
     * @param requestBody
     * @param authorization
     * @returns OrganizationResponse Successful Response
     * @throws ApiError
     */
    public static createOrganizationApiV1OrganizationsPost(
        requestBody: OrganizationRequest,
        authorization?: string,
    ): CancelablePromise<OrganizationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/organizations',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get People
     * @param name
     * @param page
     * @param pageSize
     * @param authorization
     * @returns PersonSummaryResponse Successful Response
     * @throws ApiError
     */
    public static getPeopleApiV1PeopleGet(
        name?: (string | null),
        page: number = 1,
        pageSize: number = 100,
        authorization?: string,
    ): CancelablePromise<Array<PersonSummaryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/people',
            headers: {
                'authorization': authorization,
            },
            query: {
                'name': name,
                'page': page,
                'pageSize': pageSize,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Person
     * @param requestBody
     * @param authorization
     * @returns PersonDetailResponse Successful Response
     * @throws ApiError
     */
    public static createPersonApiV1PeoplePost(
        requestBody: PersonDetails,
        authorization?: string,
    ): CancelablePromise<PersonDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/people',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search People
     * @param name
     * @param ipiNameNumber
     * @param urlSpotifyDiscography
     * @param urlSpotifySongwriterPage
     * @param artistSpotifyId
     * @param authorization
     * @returns PersonSummaryResponse Successful Response
     * @throws ApiError
     */
    public static searchPeopleApiV1PeopleSearchGet(
        name?: (string | null),
        ipiNameNumber?: (string | null),
        urlSpotifyDiscography?: (string | null),
        urlSpotifySongwriterPage?: (string | null),
        artistSpotifyId?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<PersonSummaryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/people/search',
            headers: {
                'authorization': authorization,
            },
            query: {
                'name': name,
                'ipi_name_number': ipiNameNumber,
                'url_spotify_discography': urlSpotifyDiscography,
                'url_spotify_songwriter_page': urlSpotifySongwriterPage,
                'artist_spotify_id': artistSpotifyId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Person
     * @param personNumber
     * @param authorization
     * @returns PersonDetailResponse Successful Response
     * @throws ApiError
     */
    public static getPersonApiV1PeoplePersonNumberGet(
        personNumber: string,
        authorization?: string,
    ): CancelablePromise<PersonDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/people/{person_number}',
            path: {
                'person_number': personNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Person
     * @param personNumber
     * @param requestBody
     * @param authorization
     * @returns PersonDetailResponse Successful Response
     * @throws ApiError
     */
    public static updatePersonApiV1PeoplePersonNumberPatch(
        personNumber: string,
        requestBody: PersonUpdateRequest,
        authorization?: string,
    ): CancelablePromise<PersonDetailResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/people/{person_number}',
            path: {
                'person_number': personNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Profile Image
     * @param personNumber
     * @param formData
     * @param authorization
     * @returns PersonSummaryResponse Successful Response
     * @throws ApiError
     */
    public static uploadProfileImageApiV1PeoplePersonNumberProfileImagePost(
        personNumber: string,
        formData: Body_upload_profile_image_api_v1_people__person_number__profile_image_post,
        authorization?: string,
    ): CancelablePromise<PersonSummaryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/people/{person_number}/profile_image',
            path: {
                'person_number': personNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Person Role
     * @param personNumber
     * @param role
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addPersonRoleApiV1PeoplePersonNumberRolesPost(
        personNumber: string,
        role: ProfessionalRole,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/people/{person_number}/roles',
            path: {
                'person_number': personNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'role': role,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Person Role
     * @param personNumber
     * @param role
     * @param authorization
     * @returns void
     * @throws ApiError
     */
    public static deletePersonRoleApiV1PeoplePersonNumberRolesDelete(
        personNumber: string,
        role: ProfessionalRole,
        authorization?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/people/{person_number}/roles',
            path: {
                'person_number': personNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'role': role,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deals
     * @param personNumber
     * @param bookNumber
     * @param authorization
     * @returns PubDealResponseSkinny Successful Response
     * @throws ApiError
     */
    public static getDealsApiV1PublishingDealsGet(
        personNumber?: (string | null),
        bookNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<PubDealResponseSkinny>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/publishingDeals',
            headers: {
                'authorization': authorization,
            },
            query: {
                'person_number': personNumber,
                'book_number': bookNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Deal
     * @param requestBody
     * @param authorization
     * @returns PubDealResponse Successful Response
     * @throws ApiError
     */
    public static createDealApiV1PublishingDealsPost(
        requestBody: CreatePubDealRequest,
        authorization?: string,
    ): CancelablePromise<PubDealResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/publishingDeals',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Deal
     * @param dealNumber
     * @param requestBody
     * @param authorization
     * @returns PubDealResponse Successful Response
     * @throws ApiError
     */
    public static updateDealApiV1PublishingDealsDealNumberPatch(
        dealNumber: string,
        requestBody: UpdatePubDealRequest,
        authorization?: string,
    ): CancelablePromise<PubDealResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/publishingDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deal
     * @param dealNumber
     * @param authorization
     * @returns PubDealResponse Successful Response
     * @throws ApiError
     */
    public static getDealApiV1PublishingDealsDealNumberGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<PubDealResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/publishingDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Deal
     * @param dealNumber
     * @param authorization
     * @returns PubDealResponse Successful Response
     * @throws ApiError
     */
    public static deleteDealApiV1PublishingDealsDealNumberDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<PubDealResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/publishingDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Entities By Person
     * @param personNumber
     * @param authorization
     * @returns PublisherEntityResponse Successful Response
     * @throws ApiError
     */
    public static getEntitiesByPersonApiV1PublishingDealsEntitiesByPersonPersonNumberGet(
        personNumber: string,
        authorization?: string,
    ): CancelablePromise<Array<PublisherEntityResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/publishingDeals/entities/by-person/{person_number}',
            path: {
                'person_number': personNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Contacts
     * @param dealNumber
     * @param authorization
     * @returns PubDealContactResponse Successful Response
     * @throws ApiError
     */
    public static getContactsApiV1PublishingDealsDealNumberContactsGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<Array<PubDealContactResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/publishingDeals/{deal_number}/contacts',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Contact
     * @param dealNumber
     * @param requestBody
     * @param authorization
     * @returns PubDealContactResponse Successful Response
     * @throws ApiError
     */
    public static createContactApiV1PublishingDealsDealNumberContactsPost(
        dealNumber: string,
        requestBody: CreatePubDealContactRequest,
        authorization?: string,
    ): CancelablePromise<PubDealContactResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/publishingDeals/{deal_number}/contacts',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Contact
     * @param dealNumber
     * @param contactNumber
     * @param requestBody
     * @param authorization
     * @returns PubDealContactResponse Successful Response
     * @throws ApiError
     */
    public static updateContactApiV1PublishingDealsDealNumberContactsContactNumberPatch(
        dealNumber: string,
        contactNumber: string,
        requestBody: UpdatePubDealContactRequest,
        authorization?: string,
    ): CancelablePromise<PubDealContactResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/publishingDeals/{deal_number}/contacts/{contact_number}',
            path: {
                'deal_number': dealNumber,
                'contact_number': contactNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Contact
     * @param dealNumber
     * @param contactNumber
     * @param authorization
     * @returns void
     * @throws ApiError
     */
    public static deleteContactApiV1PublishingDealsDealNumberContactsContactNumberDelete(
        dealNumber: string,
        contactNumber: string,
        authorization?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/publishingDeals/{deal_number}/contacts/{contact_number}',
            path: {
                'deal_number': dealNumber,
                'contact_number': contactNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Agreement
     * @param dealNumber
     * @param formData
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadAgreementApiV1PublishingDealsDealNumberAgreementPost(
        dealNumber: string,
        formData: Body_upload_agreement_api_v1_publishingDeals__deal_number__agreement_post,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/publishingDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Agreement
     * @param dealNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeAgreementApiV1PublishingDealsDealNumberAgreementDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/publishingDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreement Download Link
     * @param dealNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getAgreementDownloadLinkApiV1PublishingDealsDealNumberAgreementGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/publishingDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Publisher Entity
     * @param requestBody
     * @param authorization
     * @returns PublisherEntityResponse Successful Response
     * @throws ApiError
     */
    public static createPublisherEntityApiV1PublisherEntitiesPost(
        requestBody: CreatePublisherEntityRequest,
        authorization?: string,
    ): CancelablePromise<PublisherEntityResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/publisherEntities',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Publisher Entities
     * @param orgNumber
     * @param authorization
     * @returns PublisherEntityResponse Successful Response
     * @throws ApiError
     */
    public static getPublisherEntitiesApiV1PublisherEntitiesGet(
        orgNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<PublisherEntityResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/publisherEntities',
            headers: {
                'authorization': authorization,
            },
            query: {
                'org_number': orgNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Publisher Entity
     * @param entityNumber
     * @param requestBody
     * @param authorization
     * @returns PublisherEntityResponse Successful Response
     * @throws ApiError
     */
    public static updatePublisherEntityApiV1PublisherEntitiesEntityNumberPatch(
        entityNumber: string,
        requestBody: UpdatePublisherEntityRequest,
        authorization?: string,
    ): CancelablePromise<PublisherEntityResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/publisherEntities/{entity_number}',
            path: {
                'entity_number': entityNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Publisher Entity
     * @param entityNumber
     * @param authorization
     * @returns void
     * @throws ApiError
     */
    public static deletePublisherEntityApiV1PublisherEntitiesEntityNumberDelete(
        entityNumber: string,
        authorization?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/publisherEntities/{entity_number}',
            path: {
                'entity_number': entityNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deals
     * @param artistNumber
     * @param bookNumber
     * @param authorization
     * @returns RecordDealResponseSkinny Successful Response
     * @throws ApiError
     */
    public static getDealsApiV1RecordDealsGet(
        artistNumber?: (string | null),
        bookNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<RecordDealResponseSkinny>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/recordDeals',
            headers: {
                'authorization': authorization,
            },
            query: {
                'artist_number': artistNumber,
                'book_number': bookNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Deal
     * @param requestBody
     * @param authorization
     * @returns RecordDealResponse Successful Response
     * @throws ApiError
     */
    public static createDealApiV1RecordDealsPost(
        requestBody: CreateRecordDealRequest,
        authorization?: string,
    ): CancelablePromise<RecordDealResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/recordDeals',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Deal
     * @param dealNumber
     * @param requestBody
     * @param authorization
     * @returns RecordDealResponse Successful Response
     * @throws ApiError
     */
    public static updateDealApiV1RecordDealsDealNumberPatch(
        dealNumber: string,
        requestBody: UpdateRecordDealRequest,
        authorization?: string,
    ): CancelablePromise<RecordDealResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/recordDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Deal
     * @param dealNumber
     * @param authorization
     * @returns RecordDealResponse Successful Response
     * @throws ApiError
     */
    public static getDealApiV1RecordDealsDealNumberGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<RecordDealResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/recordDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Deal
     * @param dealNumber
     * @param authorization
     * @returns RecordDealResponse Successful Response
     * @throws ApiError
     */
    public static deleteDealApiV1RecordDealsDealNumberDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<RecordDealResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/recordDeals/{deal_number}',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Agreement
     * @param dealNumber
     * @param formData
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadAgreementApiV1RecordDealsDealNumberAgreementPost(
        dealNumber: string,
        formData: Body_upload_agreement_api_v1_recordDeals__deal_number__agreement_post,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/recordDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Agreement
     * @param dealNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeAgreementApiV1RecordDealsDealNumberAgreementDelete(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/recordDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Agreement Download Link
     * @param dealNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getAgreementDownloadLinkApiV1RecordDealsDealNumberAgreementGet(
        dealNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/recordDeals/{deal_number}/agreement',
            path: {
                'deal_number': dealNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Releases
     * @param bookNumber
     * @param artistNumber
     * @param masterNumber
     * @param includeCoverArt
     * @param isReleased
     * @param page
     * @param pageSize
     * @param orderBy
     * @param authorization
     * @returns ReleaseSummaryResponse Successful Response
     * @throws ApiError
     */
    public static getReleasesApiV1ReleasesGet(
        bookNumber?: (string | null),
        artistNumber?: (string | null),
        masterNumber?: (string | null),
        includeCoverArt: boolean = true,
        isReleased?: (boolean | null),
        page: number = 1,
        pageSize: number = 100,
        orderBy?: Array<string>,
        authorization?: string,
    ): CancelablePromise<Array<ReleaseSummaryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases',
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
                'artist_number': artistNumber,
                'master_number': masterNumber,
                'includeCoverArt': includeCoverArt,
                'isReleased': isReleased,
                'page': page,
                'pageSize': pageSize,
                'orderBy': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Release
     * @param requestBody
     * @param authorization
     * @returns ReleaseDetailResponse Successful Response
     * @throws ApiError
     */
    public static createReleaseApiV1ReleasesPost(
        requestBody: CreateReleaseRequest,
        authorization?: string,
    ): CancelablePromise<ReleaseDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Release Labels
     * @param authorization
     * @returns LabelRegistrantResponse Successful Response
     * @throws ApiError
     */
    public static getReleaseLabelsApiV1ReleasesLabelsGet(
        authorization?: string,
    ): CancelablePromise<Array<LabelRegistrantResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/labels',
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Release
     * @param releaseNumber
     * @param authorization
     * @returns ReleaseDetailResponse Successful Response
     * @throws ApiError
     */
    public static getReleaseApiV1ReleasesReleaseNumberGet(
        releaseNumber: string,
        authorization?: string,
    ): CancelablePromise<ReleaseDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Release
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns ReleaseDetailResponse Successful Response
     * @throws ApiError
     */
    public static updateReleaseApiV1ReleasesReleaseNumberPatch(
        releaseNumber: string,
        requestBody: UpdateReleaseRequest,
        authorization?: string,
    ): CancelablePromise<ReleaseDetailResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/releases/{release_number}',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Release
     * @param releaseNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteReleaseApiV1ReleasesReleaseNumberDelete(
        releaseNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/releases/{release_number}',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Release Artist
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns ReleaseArtistSummary Successful Response
     * @throws ApiError
     */
    public static addReleaseArtistApiV1ReleasesReleaseNumberArtistsPost(
        releaseNumber: string,
        requestBody: ReleaseArtistRequest,
        authorization?: string,
    ): CancelablePromise<ReleaseArtistSummary> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/artists',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Release Artist
     * @param releaseNumber
     * @param artistNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeReleaseArtistApiV1ReleasesReleaseNumberArtistsArtistNumberDelete(
        releaseNumber: string,
        artistNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/releases/{release_number}/artists/{artist_number}',
            path: {
                'release_number': releaseNumber,
                'artist_number': artistNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Release Artist
     * @param releaseNumber
     * @param artistNumber
     * @param requestBody
     * @param authorization
     * @returns ReleaseArtistSummary Successful Response
     * @throws ApiError
     */
    public static updateReleaseArtistApiV1ReleasesReleaseNumberArtistsArtistNumberPatch(
        releaseNumber: string,
        artistNumber: string,
        requestBody: ReleaseArtistRequest,
        authorization?: string,
    ): CancelablePromise<ReleaseArtistSummary> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/releases/{release_number}/artists/{artist_number}',
            path: {
                'release_number': releaseNumber,
                'artist_number': artistNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Insert Track
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns TrackResponse Successful Response
     * @throws ApiError
     */
    public static insertTrackApiV1ReleasesReleaseNumberTracksPost(
        releaseNumber: string,
        requestBody: CreateTrackRequest,
        authorization?: string,
    ): CancelablePromise<TrackResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/tracks',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Track
     * @param releaseNumber
     * @param trackNumber
     * @param shouldDeleteMaster
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteTrackApiV1ReleasesReleaseNumberTracksTrackNumberDelete(
        releaseNumber: string,
        trackNumber: string,
        shouldDeleteMaster: boolean = false,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/releases/{release_number}/tracks/{track_number}',
            path: {
                'release_number': releaseNumber,
                'track_number': trackNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'should_delete_master': shouldDeleteMaster,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Track
     * @param releaseNumber
     * @param trackNumber
     * @param requestBody
     * @param authorization
     * @returns TrackResponse Successful Response
     * @throws ApiError
     */
    public static updateTrackApiV1ReleasesReleaseNumberTracksTrackNumberPatch(
        releaseNumber: string,
        trackNumber: string,
        requestBody: UpdateTrackRequest,
        authorization?: string,
    ): CancelablePromise<TrackResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/releases/{release_number}/tracks/{track_number}',
            path: {
                'release_number': releaseNumber,
                'track_number': trackNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Link Asset
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns ReleaseAssetResponse Successful Response
     * @throws ApiError
     */
    public static addLinkAssetApiV1ReleasesReleaseNumberAssetsPost(
        releaseNumber: string,
        requestBody: AddReleaseAssetRequest,
        authorization?: string,
    ): CancelablePromise<ReleaseAssetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/assets',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add File Asset
     * @param releaseNumber
     * @param mediaType
     * @param assetType
     * @param formData
     * @param sizeInBytes
     * @param videoIsrc
     * @param authorization
     * @returns ReleaseAssetResponse Successful Response
     * @throws ApiError
     */
    public static addFileAssetApiV1ReleasesReleaseNumberAssetsMediaTypeAssetTypePost(
        releaseNumber: string,
        mediaType: ReleaseAssetMediaType,
        assetType: ReleaseAssetType,
        formData: Body_add_file_asset_api_v1_releases__release_number__assets__media_type___asset_type__post,
        sizeInBytes?: (number | null),
        videoIsrc?: (string | null),
        authorization?: string,
    ): CancelablePromise<ReleaseAssetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/assets/{media_type}/{asset_type}',
            path: {
                'release_number': releaseNumber,
                'media_type': mediaType,
                'asset_type': assetType,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'size_in_bytes': sizeInBytes,
                'video_isrc': videoIsrc,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Asset Upload Link
     * @param releaseNumber
     * @param mediaType
     * @param assetType
     * @param fileName
     * @param sizeInBytes
     * @param videoIsrc
     * @param authorization
     * @returns ReleaseAssetUploadLinkResponse Successful Response
     * @throws ApiError
     */
    public static getAssetUploadLinkApiV1ReleasesReleaseNumberAssetsMediaTypeAssetTypeUploadGet(
        releaseNumber: string,
        mediaType: ReleaseAssetMediaType,
        assetType: ReleaseAssetType,
        fileName: string,
        sizeInBytes: number,
        videoIsrc?: (string | null),
        authorization?: string,
    ): CancelablePromise<ReleaseAssetUploadLinkResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/assets/{media_type}/{asset_type}/upload',
            path: {
                'release_number': releaseNumber,
                'media_type': mediaType,
                'asset_type': assetType,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'file_name': fileName,
                'size_in_bytes': sizeInBytes,
                'video_isrc': videoIsrc,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Audio Playback Url
     * @param releaseNumber
     * @param fileName
     * @param authorization
     * @returns ReleaseAssetPlaybackUrlResponse Successful Response
     * @throws ApiError
     */
    public static getAudioPlaybackUrlApiV1ReleasesReleaseNumberAudioFileNamePlayGet(
        releaseNumber: string,
        fileName: string,
        authorization?: string,
    ): CancelablePromise<ReleaseAssetPlaybackUrlResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/audio/{file_name}/play',
            path: {
                'release_number': releaseNumber,
                'file_name': fileName,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Master Upload Link
     * @param releaseNumber
     * @param fileName
     * @param authorization
     * @returns ReleaseMasterUploadLinkResponse Successful Response
     * @throws ApiError
     */
    public static getMasterUploadLinkApiV1ReleasesReleaseNumberMasterUploadGet(
        releaseNumber: string,
        fileName: string,
        authorization?: string,
    ): CancelablePromise<ReleaseMasterUploadLinkResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/master/upload',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'file_name': fileName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Confirm Master Upload
     * @param releaseNumber
     * @param uploadId
     * @param requestBody
     * @param authorization
     * @returns ReleaseMasterUploadConfirmResponse Successful Response
     * @throws ApiError
     */
    public static confirmMasterUploadApiV1ReleasesReleaseNumberMasterConfirmUploadPost(
        releaseNumber: string,
        uploadId: string,
        requestBody: ConfirmMasterUploadRequest,
        authorization?: string,
    ): CancelablePromise<ReleaseMasterUploadConfirmResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/master/confirm-upload',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'upload_id': uploadId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Confirm Upload
     * @param releaseNumber
     * @param uploadId
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static confirmUploadApiV1ReleasesReleaseNumberAssetsConfirmUploadPost(
        releaseNumber: string,
        uploadId: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/assets/confirm-upload',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'upload_id': uploadId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Asset
     * @param releaseNumber
     * @param assetNumber
     * @param requestBody
     * @param authorization
     * @returns ReleaseAssetResponse Successful Response
     * @throws ApiError
     */
    public static updateAssetApiV1ReleasesReleaseNumberAssetsAssetNumberPatch(
        releaseNumber: string,
        assetNumber: string,
        requestBody: UpdateReleaseAssetRequest,
        authorization?: string,
    ): CancelablePromise<ReleaseAssetResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/releases/{release_number}/assets/{asset_number}',
            path: {
                'release_number': releaseNumber,
                'asset_number': assetNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Asset
     * @param releaseNumber
     * @param assetNumber
     * @param authorization
     * @returns ReleaseAssetResponse Successful Response
     * @throws ApiError
     */
    public static deleteAssetApiV1ReleasesReleaseNumberAssetsAssetNumberDelete(
        releaseNumber: string,
        assetNumber: string,
        authorization?: string,
    ): CancelablePromise<ReleaseAssetResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/releases/{release_number}/assets/{asset_number}',
            path: {
                'release_number': releaseNumber,
                'asset_number': assetNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Asset Download Link
     * @param releaseNumber
     * @param assetNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getAssetDownloadLinkApiV1ReleasesReleaseNumberAssetsAssetNumberDownloadGet(
        releaseNumber: string,
        assetNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/assets/{asset_number}/download',
            path: {
                'release_number': releaseNumber,
                'asset_number': assetNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Clearances
     * @param releaseNumber
     * @param authorization
     * @returns Clearance Successful Response
     * @throws ApiError
     */
    public static getClearancesApiV1ReleasesReleaseNumberClearancesGet(
        releaseNumber: string,
        authorization?: string,
    ): CancelablePromise<Array<Clearance>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/clearances',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Track Assets
     * @param releaseNumber
     * @param authorization
     * @returns TrackAssetsResponse Successful Response
     * @throws ApiError
     */
    public static getTrackAssetsApiV1ReleasesReleaseNumberTrackAssetsGet(
        releaseNumber: string,
        authorization?: string,
    ): CancelablePromise<Array<TrackAssetsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/trackAssets',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Release Event
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns EventModel Successful Response
     * @throws ApiError
     */
    public static addReleaseEventApiV1ReleasesReleaseNumberEventsPost(
        releaseNumber: string,
        requestBody: CreateReleaseEventRequest,
        authorization?: string,
    ): CancelablePromise<EventModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/events',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Release Events
     * @param releaseNumber
     * @param authorization
     * @returns EventModel Successful Response
     * @throws ApiError
     */
    public static getReleaseEventsApiV1ReleasesReleaseNumberEventsGet(
        releaseNumber: string,
        authorization?: string,
    ): CancelablePromise<Array<EventModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/events',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Release Event
     * @param releaseNumber
     * @param eventNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeReleaseEventApiV1ReleasesReleaseNumberEventsEventNumberDelete(
        releaseNumber: string,
        eventNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/releases/{release_number}/events/{event_number}',
            path: {
                'release_number': releaseNumber,
                'event_number': eventNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Release Event
     * @param releaseNumber
     * @param eventNumber
     * @param requestBody
     * @param authorization
     * @returns EventModel Successful Response
     * @throws ApiError
     */
    public static updateReleaseEventApiV1ReleasesReleaseNumberEventsEventNumberPatch(
        releaseNumber: string,
        eventNumber: string,
        requestBody: UpdateReleaseEventRequest,
        authorization?: string,
    ): CancelablePromise<EventModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/releases/{release_number}/events/{event_number}',
            path: {
                'release_number': releaseNumber,
                'event_number': eventNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Add Track File Asset
     * [DEPRECATED] Please use the new asset upload endpoints instead. This endpoint will be removed in a future version.
     * @param releaseNumber
     * @param trackNumber
     * @param assetType
     * @param authorization
     * @param formData
     * @returns TrackResponse Successful Response
     * @throws ApiError
     */
    public static addTrackFileAssetApiV1ReleasesReleaseNumberTrackTrackNumberAssetAssetTypePost(
        releaseNumber: string,
        trackNumber: string,
        assetType: MasterType,
        authorization?: string,
        formData?: Body_add_track_file_asset_api_v1_releases__release_number__track__track_number__asset__asset_type__post,
    ): CancelablePromise<TrackResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/track/{track_number}/asset/{asset_type}',
            path: {
                'release_number': releaseNumber,
                'track_number': trackNumber,
                'asset_type': assetType,
            },
            headers: {
                'authorization': authorization,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Track Asset Download Link
     * @param trackNumber
     * @param assetType
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getTrackAssetDownloadLinkApiV1ReleasesTrackTrackNumberAssetAssetTypeDownloadGet(
        trackNumber: string,
        assetType: MasterType,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/track/{track_number}/asset/{asset_type}/download',
            path: {
                'track_number': trackNumber,
                'asset_type': assetType,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Users
     * @param releaseNumber
     * @param authorization
     * @returns ReleasePermissionsResponse Successful Response
     * @throws ApiError
     */
    public static getUsersApiV1ReleasesReleaseNumberUsersGet(
        releaseNumber: string,
        authorization?: string,
    ): CancelablePromise<Array<ReleasePermissionsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/users',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create User Permissions
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns ReleasePermissionsResponse Successful Response
     * @throws ApiError
     */
    public static createUserPermissionsApiV1ReleasesReleaseNumberUsersPost(
        releaseNumber: string,
        requestBody: CreateReleasePermissionsRequest,
        authorization?: string,
    ): CancelablePromise<ReleasePermissionsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/users',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update User Permissions
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns ReleasePermissionsResponse Successful Response
     * @throws ApiError
     */
    public static updateUserPermissionsApiV1ReleasesReleaseNumberUsersPatch(
        releaseNumber: string,
        requestBody: UpdateReleasePermissionsRequest,
        authorization?: string,
    ): CancelablePromise<ReleasePermissionsResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/releases/{release_number}/users',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete User Permissions
     * @param releaseNumber
     * @param userNumber
     * @param authorization
     * @returns ReleasePermissionsResponse Successful Response
     * @throws ApiError
     */
    public static deleteUserPermissionsApiV1ReleasesReleaseNumberUsersUserNumberDelete(
        releaseNumber: string,
        userNumber: string,
        authorization?: string,
    ): CancelablePromise<ReleasePermissionsResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/releases/{release_number}/users/{user_number}',
            path: {
                'release_number': releaseNumber,
                'user_number': userNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Release Invite
     * @param releaseNumber
     * @param email
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteReleaseInviteApiV1ReleasesReleaseNumberInvitesEmailDelete(
        releaseNumber: string,
        email: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/releases/{release_number}/invites/{email}',
            path: {
                'release_number': releaseNumber,
                'email': email,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Deprecated: Use the new contributor system instead
     * This endpoint is deprecated and will be removed in a future version. Please use collaborators instead.
     * @param releaseNumber
     * @param authorization
     * @returns void
     * @throws ApiError
     */
    public static getReleaseContributorsApiV1ReleasesReleaseNumberContributorsGet(
        releaseNumber: string,
        authorization?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/contributors',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                410: `Successful Response`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Deprecated: Use the new collaborators system instead
     * This endpoint is deprecated and will be removed in a future version. Please use collaborators instead.
     * @param requestBody
     * @param authorization
     * @returns void
     * @throws ApiError
     */
    public static addContributorApiV1ReleasesReleaseNumberContributorsPost(
        requestBody: CreateContributorRequest,
        authorization?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/contributors',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                410: `Successful Response`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Contributor
     * @param releaseNumber
     * @param contributorNumber
     * @param deprecated
     * @param summary
     * @param description
     * @param authorization
     * @returns ContributorResponse Successful Response
     * @throws ApiError
     */
    public static deleteContributorApiV1ReleasesReleaseNumberContributorsContributorNumberDelete(
        releaseNumber: string,
        contributorNumber: string,
        deprecated?: any,
        summary?: any,
        description?: any,
        authorization?: string,
    ): CancelablePromise<ContributorResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/releases/{release_number}/contributors/{contributor_number}',
            path: {
                'release_number': releaseNumber,
                'contributor_number': contributorNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'deprecated': deprecated,
                'summary': summary,
                'description': description,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Contributor
     * @param releaseNumber
     * @param contributorNumber
     * @param requestBody
     * @param deprecated
     * @param summary
     * @param description
     * @param authorization
     * @returns ContributorResponse Successful Response
     * @throws ApiError
     */
    public static updateContributorApiV1ReleasesReleaseNumberContributorsContributorNumberPatch(
        releaseNumber: string,
        contributorNumber: string,
        requestBody: UpdateContributorRequest,
        deprecated?: any,
        summary?: any,
        description?: any,
        authorization?: string,
    ): CancelablePromise<ContributorResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/releases/{release_number}/contributors/{contributor_number}',
            path: {
                'release_number': releaseNumber,
                'contributor_number': contributorNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'deprecated': deprecated,
                'summary': summary,
                'description': description,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Territory Regions
     * Get list of available regions (WORLD, AMERICAS, ASIA, etc)
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getTerritoryRegionsApiV1ReleasesTerritoriesRegionsGet(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/territories/regions',
        });
    }
    /**
     * Get Territory Details
     * Get territory details, optionally filtered by region
     * @param region
     * @param authorization
     * @returns ReleaseTerritoryDetailResponse Successful Response
     * @throws ApiError
     */
    public static getTerritoryDetailsApiV1ReleasesTerritoriesDetailsGet(
        region?: (ReleaseTerritory | null),
        authorization?: string,
    ): CancelablePromise<Array<ReleaseTerritoryDetailResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/territories/details',
            headers: {
                'authorization': authorization,
            },
            query: {
                'region': region,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Release Territories
     * Update territory settings for a release
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns ReleaseTerritoryResponse Successful Response
     * @throws ApiError
     */
    public static updateReleaseTerritoriesApiV1ReleasesReleaseNumberTerritoriesPatch(
        releaseNumber: string,
        requestBody: UpdateReleaseTerritoryRequest,
        authorization?: string,
    ): CancelablePromise<ReleaseTerritoryResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/releases/{release_number}/territories',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Deliver Release Ddex
     * Deliver the release in DDEX 4.3 XML format to the specified integration.
     *
     * Takes a release number and an integration name.
     *
     *
     * Key operations:
     * 1. Verify user membership in book
     * 2. Verify user has access to this integration
     * 3. Send file to integration
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deliverReleaseDdexApiV1ReleasesReleaseNumberDeliverDdexPost(
        releaseNumber: string,
        requestBody: DeliverReleaseDDEXRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/deliver-ddex',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Delivery Job Status
     * @param taskId
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getDeliveryJobStatusApiV1ReleasesReleaseNumberDdexStatusGet(
        taskId?: (string | null),
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/releases/{release_number}/ddex-status',
            headers: {
                'authorization': authorization,
            },
            query: {
                'task_id': taskId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Release Integration
     * Update the delivery status for a specific integration on a release.
     * This endpoint is used to manually update the status of an integration,
     * for example when validating delivery requirements in the frontend.
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateReleaseIntegrationApiV1ReleasesReleaseNumberIntegrationsUpdatePatch(
        releaseNumber: string,
        requestBody: UpdateReleaseIntegrationStatusRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/releases/{release_number}/integrations/update',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Catalog Number
     * Generate a catalog number for a release.
     * @param releaseNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static generateCatalogNumberApiV1ReleasesReleaseNumberGenerateCatalogNumberPost(
        releaseNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/generate-catalog-number',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Isrc
     * @param releaseNumber
     * @param requestBody
     * @param authorization
     * @returns ISRCInfoResponse Successful Response
     * @throws ApiError
     */
    public static generateIsrcApiV1ReleasesReleaseNumberGenerateIsrcPost(
        releaseNumber: string,
        requestBody: CreateISRCRequest,
        authorization?: string,
    ): CancelablePromise<ISRCInfoResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/releases/{release_number}/generate-isrc',
            path: {
                'release_number': releaseNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Self
     * @param authorization
     * @returns SelfResponse Successful Response
     * @throws ApiError
     */
    public static getSelfApiV1SelfGet(
        authorization?: string,
    ): CancelablePromise<SelfResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/self',
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Invite New User
     * @param email
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static inviteNewUserApiV1SelfInvitePost(
        email: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/self/invite',
            headers: {
                'authorization': authorization,
            },
            query: {
                'email': email,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Teams
     * @param authorization
     * @returns TeamDetailResponse Successful Response
     * @throws ApiError
     */
    public static getTeamsApiV1SelfTeamsGet(
        authorization?: string,
    ): CancelablePromise<Array<TeamDetailResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/self/teams',
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Team
     * @param requestBody
     * @param authorization
     * @returns TeamSummaryResponse Successful Response
     * @throws ApiError
     */
    public static createTeamApiV1SelfTeamsPost(
        requestBody: CreateTeamRequest,
        authorization?: string,
    ): CancelablePromise<TeamSummaryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/self/teams',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Team
     * @param teamNumber
     * @param requestBody
     * @param authorization
     * @returns TeamSummaryResponse Successful Response
     * @throws ApiError
     */
    public static updateTeamApiV1SelfTeamsTeamNumberPatch(
        teamNumber: string,
        requestBody: UpdateTeamRequest,
        authorization?: string,
    ): CancelablePromise<TeamSummaryResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/self/teams/{team_number}',
            path: {
                'team_number': teamNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Team Member
     * @param teamNumber
     * @param requestBody
     * @param authorization
     * @returns TeamSummaryResponse Successful Response
     * @throws ApiError
     */
    public static addTeamMemberApiV1SelfTeamsTeamNumberMembersPost(
        teamNumber: string,
        requestBody: AddTeamMemberRequest,
        authorization?: string,
    ): CancelablePromise<TeamSummaryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/self/teams/{team_number}/members',
            path: {
                'team_number': teamNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Team Member
     * @param teamNumber
     * @param userNumber
     * @param requestBody
     * @param authorization
     * @returns TeamSummaryResponse Successful Response
     * @throws ApiError
     */
    public static updateTeamMemberApiV1SelfTeamsTeamNumberMembersUserNumberPatch(
        teamNumber: string,
        userNumber: string,
        requestBody: TeamMemberRequest,
        authorization?: string,
    ): CancelablePromise<TeamSummaryResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/self/teams/{team_number}/members/{user_number}',
            path: {
                'team_number': teamNumber,
                'user_number': userNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Team Member
     * @param teamNumber
     * @param userNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeTeamMemberApiV1SelfTeamsTeamNumberMembersUserNumberDelete(
        teamNumber: string,
        userNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/self/teams/{team_number}/members/{user_number}',
            path: {
                'team_number': teamNumber,
                'user_number': userNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Team Invite
     * @param teamNumber
     * @param toEmail
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeTeamInviteApiV1SelfTeamsTeamNumberInvitesToEmailDelete(
        teamNumber: string,
        toEmail: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/self/teams/{team_number}/invites/{to_email}',
            path: {
                'team_number': teamNumber,
                'to_email': toEmail,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User Preferences
     * @param authorization
     * @returns UserPreferencesResponse Successful Response
     * @throws ApiError
     */
    public static getUserPreferencesApiV1SelfPreferencesGet(
        authorization?: string,
    ): CancelablePromise<UserPreferencesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/self/preferences',
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update User Preferences
     * @param requestBody
     * @param authorization
     * @returns UserPreferencesResponse Successful Response
     * @throws ApiError
     */
    public static updateUserPreferencesApiV1SelfPreferencesPatch(
        requestBody: UpdateUserPreferencesRequest,
        authorization?: string,
    ): CancelablePromise<UserPreferencesResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/self/preferences',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Song
     * @param requestBody
     * @param authorization
     * @returns SongDetailResponse Successful Response
     * @throws ApiError
     */
    public static createSongApiV1SongsPost(
        requestBody: CreateSongRequest,
        authorization?: string,
    ): CancelablePromise<SongDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/songs',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Songs
     * @param bookNumber
     * @param personNumber
     * @param artistNumber
     * @param name
     * @param status
     * @param registrationStatus
     * @param page
     * @param pageSize
     * @param orderBy
     * @param clientBookNumber
     * @param authorization
     * @returns SongSummaryResponse Successful Response
     * @throws ApiError
     */
    public static getSongsApiV1SongsGet(
        bookNumber?: (string | null),
        personNumber?: (string | null),
        artistNumber?: (string | null),
        name?: (string | null),
        status?: (SongStatus | null),
        registrationStatus?: (RegistrationStatus | null),
        page: number = 1,
        pageSize: number = 100,
        orderBy?: Array<string>,
        clientBookNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<Array<SongSummaryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/songs',
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
                'person_number': personNumber,
                'artist_number': artistNumber,
                'name': name,
                'status': status,
                'registration_status': registrationStatus,
                'page': page,
                'pageSize': pageSize,
                'orderBy': orderBy,
                'client_book_number': clientBookNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Songs Csv
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSongsCsvApiV1SongsCsvPost(
        requestBody: GetSongsCSVRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/songs/csv',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Incomplete Songs
     * @param bookNumber
     * @param personNumber
     * @param artistNumber
     * @param page
     * @param pageSize
     * @param orderBy
     * @param authorization
     * @returns IncompleteSongsResponse Successful Response
     * @throws ApiError
     */
    public static getIncompleteSongsApiV1SongsIncompleteSongsGet(
        bookNumber?: (string | null),
        personNumber?: (string | null),
        artistNumber?: (string | null),
        page: number = 1,
        pageSize: number = 100,
        orderBy?: Array<string>,
        authorization?: string,
    ): CancelablePromise<IncompleteSongsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/songs/incomplete-songs',
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
                'person_number': personNumber,
                'artist_number': artistNumber,
                'page': page,
                'pageSize': pageSize,
                'orderBy': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Song Detail
     * @param songNumber
     * @param bookNumber
     * @param authorization
     * @returns SongDetailResponse Successful Response
     * @throws ApiError
     */
    public static getSongDetailApiV1SongsSongNumberGet(
        songNumber: string,
        bookNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<SongDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/songs/{song_number}',
            path: {
                'song_number': songNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Song
     * @param songNumber
     * @param requestBody
     * @param authorization
     * @returns SongDetailResponse Successful Response
     * @throws ApiError
     */
    public static updateSongApiV1SongsSongNumberPatch(
        songNumber: string,
        requestBody: UpdateSongRequest,
        authorization?: string,
    ): CancelablePromise<SongDetailResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/songs/{song_number}',
            path: {
                'song_number': songNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Song
     * @param songNumber
     * @param authorization
     * @returns SongDetailResponse Successful Response
     * @throws ApiError
     */
    public static deleteSongApiV1SongsSongNumberDelete(
        songNumber: string,
        authorization?: string,
    ): CancelablePromise<SongDetailResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/songs/{song_number}',
            path: {
                'song_number': songNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Song Splits Html
     * @param songNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getSongSplitsHtmlApiV1SongsSongNumberSplitsHtmlGet(
        songNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/songs/{song_number}/splits-html',
            path: {
                'song_number': songNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Send Song Splits Email
     * @param songNumber
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static sendSongSplitsEmailApiV1SongsSongNumberSplitsEmailPost(
        songNumber: string,
        requestBody: SendSongSplitsRequest,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/songs/{song_number}/splits-email',
            path: {
                'song_number': songNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Bulk Delete Songs
     * @param requestBody
     * @param authorization
     * @returns SongDetailResponse Successful Response
     * @throws ApiError
     */
    public static bulkDeleteSongsApiV1SongsBulkDeleteDelete(
        requestBody: BulkDeleteSongsRequest,
        authorization?: string,
    ): CancelablePromise<Array<SongDetailResponse>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/songs/bulk-delete',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Associate Song With Book
     * @param songNumber
     * @param bookNumber
     * @param authorization
     * @returns SongDetailResponse Successful Response
     * @throws ApiError
     */
    public static associateSongWithBookApiV1SongsSongNumberBooksPost(
        songNumber: string,
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<SongDetailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/songs/{song_number}/books',
            path: {
                'song_number': songNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'book_number': bookNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Songwriter Identity
     * @param requestBody
     * @param authorization
     * @returns SongwriterIdentityResponse Successful Response
     * @throws ApiError
     */
    public static createSongwriterIdentityApiV1SongwriterIdentitiesPost(
        requestBody: CreateSongwriterIdentityRequest,
        authorization?: string,
    ): CancelablePromise<SongwriterIdentityResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/songwriterIdentities',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Songwriter Identity
     * @param songwriterIdentityNumber
     * @param requestBody
     * @param authorization
     * @returns SongwriterIdentityResponse Successful Response
     * @throws ApiError
     */
    public static updateSongwriterIdentityApiV1SongwriterIdentitiesSongwriterIdentityNumberPatch(
        songwriterIdentityNumber: string,
        requestBody: UpdateSongwriterIdentityRequest,
        authorization?: string,
    ): CancelablePromise<SongwriterIdentityResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/songwriterIdentities/{songwriter_identity_number}',
            path: {
                'songwriter_identity_number': songwriterIdentityNumber,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Songwriter Identity
     * @param songwriterIdentityNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteSongwriterIdentityApiV1SongwriterIdentitiesSongwriterIdentityNumberDelete(
        songwriterIdentityNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/songwriterIdentities/{songwriter_identity_number}',
            path: {
                'songwriter_identity_number': songwriterIdentityNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Artist
     * @param artistId
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getArtistApiV1SpotifyArtistArtistIdGet(
        artistId: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/spotify/artist/{artist_id}',
            path: {
                'artist_id': artistId,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Track
     * @param spotifyId
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getTrackApiV1SpotifyTrackSpotifyIdGet(
        spotifyId: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/spotify/track/{spotify_id}',
            path: {
                'spotify_id': spotifyId,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search Track
     * @param title
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static searchTrackApiV1SpotifySearchTrackGet(
        title: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/spotify/search/track',
            headers: {
                'authorization': authorization,
            },
            query: {
                'title': title,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Redeem Referral Code
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static redeemReferralCodeApiV1AuthenticationRedeemReferralCodePost(
        requestBody: RedeemReferralRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/authentication/redeemReferralCode',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Check Signup Eligibility
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static checkSignupEligibilityApiV1AuthenticationCheckEligibilityPost(
        requestBody: FirebaseUserStub,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/authentication/checkEligibility',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Signup
     * @param requestBody
     * @returns UserSummaryResponse Successful Response
     * @throws ApiError
     */
    public static signupApiV1AuthenticationSignupPost(
        requestBody: FirebaseUserStub,
    ): CancelablePromise<UserSummaryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/authentication/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User By Email
     * @param email
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserByEmailApiV1AuthenticationUserEmailGet(
        email: string,
        authorization?: string,
    ): CancelablePromise<(UserSummaryResponse | null)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/authentication/user/email',
            headers: {
                'authorization': authorization,
            },
            query: {
                'email': email,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Health Check
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static healthCheckApiV1AdminGet(
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/admin/',
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Waitlist Signups
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getWaitlistSignupsApiV1AdminSignupsGet(
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/admin/signups',
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Stats
     * @param type
     * @param aggregator
     * @param groupBy
     * @param bookNumber
     * @param personNumber
     * @param artistNumber
     * @param authorization
     * @returns StatisticsResponse Successful Response
     * @throws ApiError
     */
    public static getStatsApiV1StatsGet(
        type: ReportType,
        aggregator: 'count' | 'sum' = 'count',
        groupBy?: (string | null),
        bookNumber?: (string | null),
        personNumber?: (string | null),
        artistNumber?: (string | null),
        authorization?: string,
    ): CancelablePromise<StatisticsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/stats',
            headers: {
                'authorization': authorization,
            },
            query: {
                'type': type,
                'aggregator': aggregator,
                'group_by': groupBy,
                'book_number': bookNumber,
                'person_number': personNumber,
                'artist_number': artistNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Overview
     * Get brief overview reports for all product areas:
     * - Deals: status counts and recent activity
     * - Invoices: status counts and outstanding amounts
     * - Catalog: master/composition counts by status
     * - Releases: upcoming releases and status counts
     * @param bookNumber
     * @param authorization
     * @returns OverviewResponse Successful Response
     * @throws ApiError
     */
    public static getOverviewApiV1OverviewBookNumberGet(
        bookNumber: (string | null),
        authorization?: string,
    ): CancelablePromise<OverviewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/overview/{book_number}',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Simple Quote
     * @param seatCount
     * @param billingFrequency
     * @param authorization
     * @returns SimpleQuoteResponse Successful Response
     * @throws ApiError
     */
    public static getSimpleQuoteApiV1StripeSimpleQuoteGet(
        seatCount: number,
        billingFrequency: 'monthly' | 'yearly',
        authorization?: string,
    ): CancelablePromise<SimpleQuoteResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/stripe/simple-quote',
            headers: {
                'authorization': authorization,
            },
            query: {
                'seat_count': seatCount,
                'billing_frequency': billingFrequency,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Checkout Session
     * @param teamNumber
     * @param seatCount
     * @param billingFrequency
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static createCheckoutSessionApiV1StripeCheckoutSessionPost(
        teamNumber: string,
        seatCount: number,
        billingFrequency: 'monthly' | 'yearly',
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/stripe/checkout-session',
            headers: {
                'authorization': authorization,
            },
            query: {
                'team_number': teamNumber,
                'seat_count': seatCount,
                'billing_frequency': billingFrequency,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Portal Session
     * @param teamNumber
     * @param authorization
     * @returns string Successful Response
     * @throws ApiError
     */
    public static createPortalSessionApiV1StripePortalSessionPost(
        teamNumber: string,
        authorization?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/stripe/portal-session',
            headers: {
                'authorization': authorization,
            },
            query: {
                'team_number': teamNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Receive Webhook
     * @returns any Successful Response
     * @throws ApiError
     */
    public static receiveWebhookApiV1StripeWebhookPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/stripe/webhook',
        });
    }
    /**
     * Artist Links By Spotify
     * @param spotifyId
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static artistLinksBySpotifyApiV1ViberateArtistSpotifyIdLinksGet(
        spotifyId: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/viberate/artist/{spotify_id}/links',
            path: {
                'spotify_id': spotifyId,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Track Alltime Stats
     * @param masterNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static trackAlltimeStatsApiV1ViberateTrackMasterNumberStatsAlltimeGet(
        masterNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/viberate/track/{master_number}/stats-alltime',
            path: {
                'master_number': masterNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Artist Catalog Alltime Stats
     * @param bookNumber
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static artistCatalogAlltimeStatsApiV1ViberateArtistBookNumberStatsAlltimeGet(
        bookNumber: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/viberate/artist/{book_number}/stats-alltime',
            path: {
                'book_number': bookNumber,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Track Spins By Country
     * @param masterNumber
     * @param timeframe
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static trackSpinsByCountryApiV1ViberateTrackMasterNumberSpinsByCountryGet(
        masterNumber: string,
        timeframe: string = '12m',
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/viberate/track/{master_number}/spins-by-country',
            path: {
                'master_number': masterNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'timeframe': timeframe,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Track Spins By City
     * @param masterNumber
     * @param timeframe
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    public static trackSpinsByCityApiV1ViberateTrackMasterNumberSpinsByCityGet(
        masterNumber: string,
        timeframe: string = '12m',
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/viberate/track/{master_number}/spins-by-city',
            path: {
                'master_number': masterNumber,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'timeframe': timeframe,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
