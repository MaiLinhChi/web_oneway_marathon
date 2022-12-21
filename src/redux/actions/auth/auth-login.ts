import { createActionCreator } from 'deox';

import { TAuthLoginMaterials, TAuthLoginResponse } from '@/services/api/auth/auth-login';

// CONSTANTS

export enum EAuthLoginAction {
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST',
  AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED',
}

// TYPES

export type TAuthLoginRequest = {
  type: EAuthLoginAction.AUTH_LOGIN_REQUEST;
  payload: {
    materials: TAuthLoginMaterials;
    successCallback?: (response: TAuthLoginResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthLoginSuccess = {
  type: EAuthLoginAction.AUTH_LOGIN_SUCCESS;
  payload: { response: TAuthLoginResponse };
};

export type TAuthLoginFailed = { type: EAuthLoginAction.AUTH_LOGIN_FAILED };

// FUNCTION

export const authLoginAction = {
  request: createActionCreator(
    EAuthLoginAction.AUTH_LOGIN_REQUEST,
    (resolve) =>
      (
        materials: TAuthLoginMaterials,
        successCallback?: (response: TAuthLoginResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthLoginRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthLoginAction.AUTH_LOGIN_SUCCESS,
    (resolve) =>
      (response: TAuthLoginResponse): TAuthLoginSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthLoginAction.AUTH_LOGIN_FAILED,
    (resolve) =>
      (error: unknown): TAuthLoginFailed =>
        resolve({ error }),
  ),
};
