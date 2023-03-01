import { createActionCreator } from 'deox';

import { TGetPaymentMethodMaterials, TGetPaymentMethodResponse } from '@/services/api/payments';

// CONSTANTS

export enum EGetPaymentMethodAction {
  GET_PAYMENT_METHOD = 'GET_PAYMENT_METHOD',
  GET_PAYMENT_METHOD_REQUEST = 'GET_PAYMENT_METHOD_REQUEST',
  GET_PAYMENT_METHOD_SUCCESS = 'GET_PAYMENT_METHOD_SUCCESS',
  GET_PAYMENT_METHOD_FAILED = 'GET_PAYMENT_METHOD_FAILED',
}

// TYPES

export type TGetPaymentMethodRequest = {
  type: EGetPaymentMethodAction.GET_PAYMENT_METHOD_REQUEST;
  payload: {
    materials: TGetPaymentMethodMaterials;
    successCallback?: (response: TGetPaymentMethodResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetPaymentMethodSuccess = {
  type: EGetPaymentMethodAction.GET_PAYMENT_METHOD_SUCCESS;
  payload: { response?: TGetPaymentMethodResponse };
};

export type TGetPaymentMethodFailed = { type: EGetPaymentMethodAction.GET_PAYMENT_METHOD_FAILED };

// FUNCTION

export const getPaymentMethodAction = {
  request: createActionCreator(
    EGetPaymentMethodAction.GET_PAYMENT_METHOD_REQUEST,
    (resolve) =>
      (
        materials: TGetPaymentMethodMaterials,
        successCallback?: (response: TGetPaymentMethodResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetPaymentMethodRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetPaymentMethodAction.GET_PAYMENT_METHOD_SUCCESS,
    (resolve) =>
      (response?: TGetPaymentMethodResponse): TGetPaymentMethodSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetPaymentMethodAction.GET_PAYMENT_METHOD_FAILED,
    (resolve) =>
      (error: unknown): TGetPaymentMethodFailed =>
        resolve({ error }),
  ),
};
