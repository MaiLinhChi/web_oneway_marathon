import { createActionCreator } from 'deox';

import { TGetMarathonMaterials, TGetMarathonResponse } from '@/services/api/marathons/marathons';

// CONSTANTS

export enum EGetMarathonsAction {
  GET_MARATHONS = 'GET_MARATHONS',
  GET_MARATHONS_REQUEST = 'GET_MARATHONS_REQUEST',
  GET_MARATHONS_SUCCESS = 'GET_MARATHONS_SUCCESS',
  GET_MARATHONS_FAILED = 'GET_MARATHONS_FAILED',
}

// TYPES

export type TGetMarathonsRequest = {
  type: EGetMarathonsAction.GET_MARATHONS_REQUEST;
  payload: {
    materials: TGetMarathonMaterials;
    successCallback?: (response: TGetMarathonResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMarathonsSuccess = {
  type: EGetMarathonsAction.GET_MARATHONS_SUCCESS;
  payload: { response: TGetMarathonResponse };
};

export type TGetMarathonsFailed = { type: EGetMarathonsAction.GET_MARATHONS_FAILED };

// FUNCTION

export const getMarathonsAction = {
  request: createActionCreator(
    EGetMarathonsAction.GET_MARATHONS_REQUEST,
    (resolve) =>
      (
        materials: TGetMarathonMaterials,
        successCallback?: (response: TGetMarathonResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMarathonsRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMarathonsAction.GET_MARATHONS_SUCCESS,
    (resolve) =>
      (response: TGetMarathonResponse): TGetMarathonsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMarathonsAction.GET_MARATHONS_FAILED,
    (resolve) =>
      (error: unknown): TGetMarathonsFailed =>
        resolve({ error }),
  ),
};
