import { createActionCreator } from 'deox';

import { TDistrictMaterials, TGetDistrictResponse } from '@/services/api/address/district';

// CONSTANTS

export enum EDistrictAction {
  DISTRICT = 'DISTRICT',
  DISTRICT_REQUEST = 'DISTRICT_REQUEST',
  DISTRICT_SUCCESS = 'DISTRICT_SUCCESS',
  DISTRICT_FAILED = 'DISTRICT_FAILED',
}

// TYPES

export type TDistrictRequest = {
  type: EDistrictAction.DISTRICT_REQUEST;
  payload: {
    materials: TDistrictMaterials;
    successCallback?: (response: TGetDistrictResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TDistrictSuccess = {
  type: EDistrictAction.DISTRICT_SUCCESS;
  payload: { response: TGetDistrictResponse };
};

export type TDistrictFailed = { type: EDistrictAction.DISTRICT_FAILED };

// FUNCTION

export const districtAction = {
  request: createActionCreator(
    EDistrictAction.DISTRICT_REQUEST,
    (resolve) =>
      (
        materials: TDistrictMaterials,
        successCallback?: (response: TGetDistrictResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TDistrictRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EDistrictAction.DISTRICT_SUCCESS,
    (resolve) =>
      (response: TGetDistrictResponse): TDistrictSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDistrictAction.DISTRICT_FAILED,
    (resolve) =>
      (error: unknown): TDistrictFailed =>
        resolve({ error }),
  ),
};
