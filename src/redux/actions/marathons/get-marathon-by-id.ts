import { createActionCreator } from 'deox';

import { TGetMarathonByIdMaterials, TGetMarathonByIdResponse } from '@/services/api/marathons/get-marathon-by-id';

// CONSTANTS

export enum EGetMarathonByIdAction {
  GET_MARATHON_BY_ID = 'GET_MARATHON_BY_ID',
  GET_MARATHON_BY_ID_REQUEST = 'GET_MARATHON_BY_ID_REQUEST',
  GET_MARATHON_BY_ID_SUCCESS = 'GET_MARATHON_BY_ID_SUCCESS',
  GET_MARATHON_BY_ID_FAILED = 'GET_MARATHON_BY_ID_FAILED',
}

// TYPES

export type TGetMarathonByIdRequest = {
  type: EGetMarathonByIdAction.GET_MARATHON_BY_ID_REQUEST;
  payload: {
    materials: TGetMarathonByIdMaterials;
    successCallback?: (response: TGetMarathonByIdResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMarathonByIdSuccess = {
  type: EGetMarathonByIdAction.GET_MARATHON_BY_ID_SUCCESS;
  payload: { response: TGetMarathonByIdResponse };
};

export type TGetMarathonByIdFailed = { type: EGetMarathonByIdAction.GET_MARATHON_BY_ID_FAILED };

// FUNCTION

export const getMarathonByIdAction = {
  request: createActionCreator(
    EGetMarathonByIdAction.GET_MARATHON_BY_ID_REQUEST,
    (resolve) =>
      (
        materials: TGetMarathonByIdMaterials,
        successCallback?: (response: TGetMarathonByIdResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMarathonByIdRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMarathonByIdAction.GET_MARATHON_BY_ID_SUCCESS,
    (resolve) =>
      (response: TGetMarathonByIdResponse): TGetMarathonByIdSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMarathonByIdAction.GET_MARATHON_BY_ID_FAILED,
    (resolve) =>
      (error: unknown): TGetMarathonByIdFailed =>
        resolve({ error }),
  ),
};
