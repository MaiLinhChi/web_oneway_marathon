import { createActionCreator } from 'deox';

import { TCityMaterials, TCityResponse } from '@/services/api/address/city';

// CONSTANTS

export enum ECityAction {
  CITY = 'CITY',
  CITY_REQUEST = 'CITY_REQUEST',
  CITY_SUCCESS = 'CITY_SUCCESS',
  CITY_FAILED = 'CITY_FAILED',
}

// TYPES

export type TCityRequest = {
  type: ECityAction.CITY_REQUEST;
  payload: {
    materials: TCityMaterials;
    successCallback?: (response: TCityResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TCitySuccess = {
  type: ECityAction.CITY_SUCCESS;
  payload: { response: TCityResponse };
};

export type TCityFailed = { type: ECityAction.CITY_FAILED };

// FUNCTION

export const cityAction = {
  request: createActionCreator(
    ECityAction.CITY_REQUEST,
    (resolve) =>
      (
        materials: TCityMaterials,
        successCallback?: (response: TCityResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TCityRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ECityAction.CITY_SUCCESS,
    (resolve) =>
      (response: TCityResponse): TCitySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ECityAction.CITY_FAILED,
    (resolve) =>
      (error: unknown): TCityFailed =>
        resolve({ error }),
  ),
};
