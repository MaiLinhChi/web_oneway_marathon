import { createActionCreator } from 'deox';

import { TAuthSignUpMaterials, TAuthSignUpResponse } from '@/services/api/auth/signup';

// CONSTANTS

export enum EAuthSignUpAction {
  SIGNUP = 'SIGNUP',
  SIGNUP_REQUEST = 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILED = 'SIGNUP_FAILED',
}

// TYPES

export type TAuthSignUpRequest = {
  type: EAuthSignUpAction.SIGNUP_REQUEST;
  payload: {
    materials: TAuthSignUpMaterials;
    successCallback?: (response: TAuthSignUpResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthSignUpSuccess = {
  type: EAuthSignUpAction.SIGNUP_SUCCESS;
  payload: { response: TAuthSignUpResponse };
};

export type TAuthSignUpFailed = { type: EAuthSignUpAction.SIGNUP_FAILED };

// FUNCTION

export const authSignUpAction = {
  request: createActionCreator(
    EAuthSignUpAction.SIGNUP_REQUEST,
    (resolve) =>
      (
        materials: TAuthSignUpMaterials,
        successCallback?: (response: TAuthSignUpResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthSignUpRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthSignUpAction.SIGNUP_SUCCESS,
    (resolve) =>
      (response: TAuthSignUpResponse): TAuthSignUpSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthSignUpAction.SIGNUP_FAILED,
    (resolve) =>
      (error: unknown): TAuthSignUpFailed =>
        resolve({ error }),
  ),
};
