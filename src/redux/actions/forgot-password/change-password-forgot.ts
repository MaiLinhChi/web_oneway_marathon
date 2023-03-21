import { createActionCreator } from 'deox';

import {
  TChangePasswordForgotMaterials,
  TChangePasswordForgotResponse,
} from '@/services/api/forgot-password/change-password-forgot';

// CONSTANTS

export enum EChangePasswordForgotAction {
  CHANGE_PASSWORD_FORGOT = 'CHANGE_PASSWORD_FORGOT',
  CHANGE_PASSWORD_FORGOT_REQUEST = 'CHANGE_PASSWORD_FORGOT_REQUEST',
  CHANGE_PASSWORD_FORGOT_SUCCESS = 'CHANGE_PASSWORD_FORGOT_SUCCESS',
  CHANGE_PASSWORD_FORGOT_FAILED = 'CHANGE_PASSWORD_FORGOT_FAILED',
}

// TYPES

export type TChangePasswordForgotRequest = {
  type: EChangePasswordForgotAction.CHANGE_PASSWORD_FORGOT_REQUEST;
  payload: {
    materials: TChangePasswordForgotMaterials;
    successCallback?: (response: TChangePasswordForgotResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TChangePasswordForgotSuccess = {
  type: EChangePasswordForgotAction.CHANGE_PASSWORD_FORGOT_SUCCESS;
  payload: { response: TChangePasswordForgotResponse };
};

export type TChangePasswordForgotFailed = { type: EChangePasswordForgotAction.CHANGE_PASSWORD_FORGOT_FAILED };

// FUNCTION

export const changePasswordForgotAction = {
  request: createActionCreator(
    EChangePasswordForgotAction.CHANGE_PASSWORD_FORGOT_REQUEST,
    (resolve) =>
      (
        materials: TChangePasswordForgotMaterials,
        successCallback?: (response: TChangePasswordForgotResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TChangePasswordForgotRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EChangePasswordForgotAction.CHANGE_PASSWORD_FORGOT_SUCCESS,
    (resolve) =>
      (response: TChangePasswordForgotResponse): TChangePasswordForgotSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EChangePasswordForgotAction.CHANGE_PASSWORD_FORGOT_FAILED,
    (resolve) =>
      (error: unknown): TChangePasswordForgotFailed =>
        resolve({ error }),
  ),
};
