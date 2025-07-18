/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCardResponse } from "../models/BusinessCardResponse";
import type { UpdateBusinessCardSettingsRequest } from "../models/UpdateBusinessCardSettingsRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class BusinessCardsService {
  /**
   * Get Public Business Card
   * @param customEndpoint
   * @returns BusinessCardResponse Successful Response
   * @throws ApiError
   */
  public static getPublicBusinessCardApiV1CardPublicCustomEndpointGet(
    customEndpoint: string
  ): CancelablePromise<BusinessCardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/card/public/{custom_endpoint}",
      path: {
        custom_endpoint: customEndpoint,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Private Business Card
   * @param bookNumber
   * @param authorization
   * @returns BusinessCardResponse Successful Response
   * @throws ApiError
   */
  public static getPrivateBusinessCardApiV1CardPrivateBookNumberGet(
    bookNumber: string,
    authorization?: string
  ): CancelablePromise<BusinessCardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/card/private/{book_number}",
      path: {
        book_number: bookNumber,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update Business Card Settings
   * @param requestBody
   * @param authorization
   * @returns BusinessCardResponse Successful Response
   * @throws ApiError
   */
  public static updateBusinessCardSettingsApiV1CardPatch(
    requestBody: UpdateBusinessCardSettingsRequest,
    authorization?: string
  ): CancelablePromise<BusinessCardResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/card/",
      headers: {
        authorization: authorization,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
