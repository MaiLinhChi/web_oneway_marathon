import { createActionCreator } from 'deox';

import { TGetOtpForgotMaterials, TGetOtpForgotResponse } from '@/services/api/forgot-password/opt-password-forgot';

// CONSTANTS

export enum EOtpPasswordForgotAction {
  GET_OTP = 'GET_OTP',
  GET_OTP_REQUEST = 'GET_OTP_REQUEST',
  GET_OTP_SUCCESS = 'GET_OTP_SUCCESS',
  GET_OTP_FAILED = 'GET_OTP_FAILED',
}

// TYPES

export type TGetOtpPassForgotRequest = {
  type: EOtpPasswordForgotAction.GET_OTP_REQUEST;
  payload: {
    materials: TGetOtpForgotMaterials;
    successCallback?: (response: TGetOtpForgotResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetOtpPasForgotSuccess = {
  type: EOtpPasswordForgotAction.GET_OTP_SUCCESS;
  payload: { response: TGetOtpForgotResponse };
};

export type TGetOtpPasswordFailed = { type: EOtpPasswordForgotAction.GET_OTP_FAILED };

// FUNCTION

export const getOtpPasswordForgotAction = {
  request: createActionCreator(
    EOtpPasswordForgotAction.GET_OTP_REQUEST,
    (resolve) =>
      (
        materials: TGetOtpForgotMaterials,
        successCallback?: (response: TGetOtpForgotResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetOtpPassForgotRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EOtpPasswordForgotAction.GET_OTP_SUCCESS,
    (resolve) =>
      (response: TGetOtpForgotResponse): TGetOtpPasForgotSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EOtpPasswordForgotAction.GET_OTP_FAILED,
    (resolve) =>
      (error: unknown): TGetOtpPasswordFailed =>
        resolve({ error }),
  ),
};
