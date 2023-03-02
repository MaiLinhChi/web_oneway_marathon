import { createActionCreator } from 'deox';

import { TGetPaymentSuccessMaterials, TGetPaymentSuccessResponse } from '@/services/api/payments';

// CONSTANTS

export enum EGetPaymentSuccessAction {
  GET_PAYMENT_SUCCESS = 'GET_PAYMENT_SUCCESS',
  GET_PAYMENT_SUCCESS_REQUEST = 'GET_PAYMENT_SUCCESS_REQUEST',
  GET_PAYMENT_SUCCESS_SUCCESS = 'GET_PAYMENT_SUCCESS_SUCCESS',
  GET_PAYMENT_SUCCESS_FAILED = 'GET_PAYMENT_SUCCESS_FAILED',
}

// TYPES

export type TGetPaymentSuccessRequest = {
  type: EGetPaymentSuccessAction.GET_PAYMENT_SUCCESS_REQUEST;
  payload: {
    materials: TGetPaymentSuccessMaterials;
    successCallback?: (response: TGetPaymentSuccessResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetPaymentSuccessSuccess = {
  type: EGetPaymentSuccessAction.GET_PAYMENT_SUCCESS_SUCCESS;
  payload: { response?: TGetPaymentSuccessResponse };
};

export type TGetPaymentSuccessFailed = { type: EGetPaymentSuccessAction.GET_PAYMENT_SUCCESS_FAILED };

// FUNCTION

export const getPaymentSuccessAction = {
  request: createActionCreator(
    EGetPaymentSuccessAction.GET_PAYMENT_SUCCESS_REQUEST,
    (resolve) =>
      (
        materials: TGetPaymentSuccessMaterials,
        successCallback?: (response: TGetPaymentSuccessResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetPaymentSuccessRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetPaymentSuccessAction.GET_PAYMENT_SUCCESS_SUCCESS,
    (resolve) =>
      (response?: TGetPaymentSuccessResponse): TGetPaymentSuccessSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetPaymentSuccessAction.GET_PAYMENT_SUCCESS_FAILED,
    (resolve) =>
      (error: unknown): TGetPaymentSuccessFailed =>
        resolve({ error }),
  ),
};
