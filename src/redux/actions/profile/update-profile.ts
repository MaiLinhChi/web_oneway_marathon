import { createActionCreator } from 'deox';

import { TUpdateProfileMaterials, TUpdateProfileResponse } from '@/services/api/profile/update-profile';

// CONSTANTS

export enum EUpdateProfileAction {
  UPDATE_PROFILE = 'UPDATE_PROFILE',
  UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED',
}

// TYPES

export type TUpdateProfileRequest = {
  type: EUpdateProfileAction.UPDATE_PROFILE_REQUEST;
  payload: {
    materials: TUpdateProfileMaterials;
    successCallback?: (response: TUpdateProfileResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TUpdateProfileSuccess = {
  type: EUpdateProfileAction.UPDATE_PROFILE_SUCCESS;
  payload: { response: TUpdateProfileResponse };
};

export type TUpdateProfileFailed = { type: EUpdateProfileAction.UPDATE_PROFILE_FAILED };

// FUNCTION

export const updateProfileAction = {
  request: createActionCreator(
    EUpdateProfileAction.UPDATE_PROFILE_REQUEST,
    (resolve) =>
      (
        materials: TUpdateProfileMaterials,
        successCallback?: (response: TUpdateProfileResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TUpdateProfileRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EUpdateProfileAction.UPDATE_PROFILE_SUCCESS,
    (resolve) =>
      (response: TUpdateProfileResponse): TUpdateProfileSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUpdateProfileAction.UPDATE_PROFILE_FAILED,
    (resolve) =>
      (error: unknown): TUpdateProfileFailed =>
        resolve({ error }),
  ),
};
