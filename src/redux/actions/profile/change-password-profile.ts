import { createActionCreator } from 'deox';

import {
  TChangePasswordProfileMaterials,
  TChangePasswordProfileResponse,
} from '@/services/api/profile/change-password-profile';

// CONSTANTS

export enum EChangePasswordProfileAction {
  CHANGE_PASSWORD_PROFILE = 'CHANGE_PASSWORD_PROFILE',
  CHANGE_PASSWORD_PROFILE_REQUEST = 'CHANGE_PASSWORD_PROFILE_REQUEST',
  CHANGE_PASSWORD_PROFILE_SUCCESS = 'CHANGE_PASSWORD_PROFILE_SUCCESS',
  CHANGE_PASSWORD_PROFILE_FAILED = 'CHANGE_PASSWORD_PROFILE_FAILED',
}

// TYPES

export type TChangePasswordProfileRequest = {
  type: EChangePasswordProfileAction.CHANGE_PASSWORD_PROFILE_REQUEST;
  payload: {
    materials: TChangePasswordProfileMaterials;
    successCallback?: (response: TChangePasswordProfileResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TChangePasswordProfileSuccess = {
  type: EChangePasswordProfileAction.CHANGE_PASSWORD_PROFILE_SUCCESS;
  payload: { response: TChangePasswordProfileResponse };
};

export type TChangePasswordProfileFailed = { type: EChangePasswordProfileAction.CHANGE_PASSWORD_PROFILE_FAILED };

// FUNCTION

export const changePasswordProfileAction = {
  request: createActionCreator(
    EChangePasswordProfileAction.CHANGE_PASSWORD_PROFILE_REQUEST,
    (resolve) =>
      (
        materials: TChangePasswordProfileMaterials,
        successCallback?: (response: TChangePasswordProfileResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TChangePasswordProfileRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EChangePasswordProfileAction.CHANGE_PASSWORD_PROFILE_SUCCESS,
    (resolve) =>
      (response: TChangePasswordProfileResponse): TChangePasswordProfileSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EChangePasswordProfileAction.CHANGE_PASSWORD_PROFILE_FAILED,
    (resolve) =>
      (error: unknown): TChangePasswordProfileFailed =>
        resolve({ error }),
  ),
};
