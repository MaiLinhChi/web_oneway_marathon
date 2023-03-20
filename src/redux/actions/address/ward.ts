import { createActionCreator } from 'deox';

import { TWardMaterials, TWardResponse } from '@/services/api/address/ward';

// CONSTANTS

export enum EWardAction {
  WARD = 'WARD',
  WARD_REQUEST = 'WARD_REQUEST',
  WARD_SUCCESS = 'WARD_SUCCESS',
  WARD_FAILED = 'WARD_FAILED',
}

// TYPES

export type TWardRequest = {
  type: EWardAction.WARD_REQUEST;
  payload: {
    materials: TWardMaterials;
    successCallback?: (response: TWardResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TWardSuccess = {
  type: EWardAction.WARD_SUCCESS;
  payload: { response: TWardResponse };
};

export type TWardFailed = { type: EWardAction.WARD_FAILED };

// FUNCTION

export const wardAction = {
  request: createActionCreator(
    EWardAction.WARD_REQUEST,
    (resolve) =>
      (
        materials: TWardMaterials,
        successCallback?: (response: TWardResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TWardRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EWardAction.WARD_SUCCESS,
    (resolve) =>
      (response: TWardResponse): TWardSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EWardAction.WARD_FAILED,
    (resolve) =>
      (error: unknown): TWardFailed =>
        resolve({ error }),
  ),
};
