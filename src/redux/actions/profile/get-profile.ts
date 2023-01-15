import { createActionCreator } from 'deox';

import { TGetProfileMaterials, TGetProfileResponse } from '@/services/api/profile/get-profile';

// CONSTANTS

export enum EGetProfileAction {
  GET_PROFILE = 'GET_PROFILE',
  GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILED = 'GET_PROFILE_FAILED',
}

// TYPES

export type TGetProfileRequest = {
  type: EGetProfileAction.GET_PROFILE_REQUEST;
  payload: {
    materials: TGetProfileMaterials;
    successCallback?: (response: TGetProfileResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetProfileSuccess = {
  type: EGetProfileAction.GET_PROFILE_SUCCESS;
  payload: { response?: TGetProfileResponse };
};

export type TGetProfileFailed = { type: EGetProfileAction.GET_PROFILE_FAILED };

// FUNCTION

export const getProfileAction = {
  request: createActionCreator(
    EGetProfileAction.GET_PROFILE_REQUEST,
    (resolve) =>
      (
        materials: TGetProfileMaterials,
        successCallback?: (response: TGetProfileResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetProfileRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetProfileAction.GET_PROFILE_SUCCESS,
    (resolve) =>
      (response?: TGetProfileResponse): TGetProfileSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetProfileAction.GET_PROFILE_FAILED,
    (resolve) =>
      (error: unknown): TGetProfileFailed =>
        resolve({ error }),
  ),
};
