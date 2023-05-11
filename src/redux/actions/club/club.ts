import { createActionCreator } from 'deox';

import { TGetClubsMaterials, TGetClubsResponse } from '@/services/api/club';

// CONSTANTS

export enum EGetClubsAction {
  GET_CLUBS = 'GET_CLUBS',
  GET_CLUBS_REQUEST = 'GET_CLUBS_REQUEST',
  GET_CLUBS_SUCCESS = 'GET_CLUBS_SUCCESS',
  GET_CLUBS_FAILED = 'GET_CLUBS_FAILED',
}

// TYPES

export type TGetClubsRequest = {
  type: EGetClubsAction.GET_CLUBS_REQUEST;
  payload: {
    materials: TGetClubsMaterials;
    successCallback?: (response: TGetClubsResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetClubsSuccess = {
  type: EGetClubsAction.GET_CLUBS_SUCCESS;
  payload: { response: TGetClubsResponse };
};

export type TGetClubsFailed = { type: EGetClubsAction.GET_CLUBS_FAILED };

// FUNCTION

export const getClubsAction = {
  request: createActionCreator(
    EGetClubsAction.GET_CLUBS_REQUEST,
    (resolve) =>
      (
        materials: TGetClubsMaterials,
        successCallback?: (response: TGetClubsResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetClubsRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetClubsAction.GET_CLUBS_SUCCESS,
    (resolve) =>
      (response: TGetClubsResponse): TGetClubsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetClubsAction.GET_CLUBS_FAILED,
    (resolve) =>
      (error: unknown): TGetClubsFailed =>
        resolve({ error }),
  ),
};
