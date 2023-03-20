import { createActionCreator } from 'deox';

import { TAuthLogoutMaterials, TAuthLogoutResponse } from '@/services/api/auth/auth-logout';

// CONSTANTS

export enum EAuthLogoutAction {
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST',
  AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS',
  AUTH_LOGOUT_FAILED = 'AUTH_LOGOUT_FAILED',
}

// TYPES

export type TAuthLogoutRequest = {
  type: EAuthLogoutAction.AUTH_LOGOUT_REQUEST;
  payload: {
    materials: TAuthLogoutMaterials;
    successCallback?: (response: TAuthLogoutResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthLogoutSuccess = {
  type: EAuthLogoutAction.AUTH_LOGOUT_SUCCESS;
  payload: { response: TAuthLogoutResponse };
};

export type TAuthLogoutFailed = { type: EAuthLogoutAction.AUTH_LOGOUT_FAILED };

// FUNCTION

export const authLogoutAction = {
  request: createActionCreator(
    EAuthLogoutAction.AUTH_LOGOUT_REQUEST,
    (resolve) =>
      (
        materials: TAuthLogoutMaterials,
        successCallback?: (response: TAuthLogoutResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthLogoutRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthLogoutAction.AUTH_LOGOUT_SUCCESS,
    (resolve) =>
      (response: TAuthLogoutResponse): TAuthLogoutSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthLogoutAction.AUTH_LOGOUT_FAILED,
    (resolve) =>
      (error: unknown): TAuthLogoutFailed =>
        resolve({ error }),
  ),
};
