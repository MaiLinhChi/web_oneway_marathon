import { createActionCreator } from 'deox';

import { TPayOrderMaterials, TPayOrderResponse } from '@/services/api/order';

// CONSTANTS

export enum EPayOrderAction {
  PAY_ORDER = 'PAY_ORDER',
  PAY_ORDER_REQUEST = 'PAY_ORDER_REQUEST',
  PAY_ORDER_SUCCESS = 'PAY_ORDER_SUCCESS',
  PAY_ORDER_FAILED = 'PAY_ORDER_FAILED',
}

// TYPES

export type TPayOrderRequest = {
  type: EPayOrderAction.PAY_ORDER_REQUEST;
  payload: {
    materials: TPayOrderMaterials;
    successCallback?: (response: TPayOrderResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TPayOrderSuccess = {
  type: EPayOrderAction.PAY_ORDER_SUCCESS;
  payload: { response: TPayOrderResponse };
};

export type TPayOrderFailed = { type: EPayOrderAction.PAY_ORDER_FAILED };

// FUNCTION

export const payOrderAction = {
  request: createActionCreator(
    EPayOrderAction.PAY_ORDER_REQUEST,
    (resolve) =>
      (
        materials: TPayOrderMaterials,
        successCallback?: (response: TPayOrderResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TPayOrderRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EPayOrderAction.PAY_ORDER_SUCCESS,
    (resolve) =>
      (response: TPayOrderResponse): TPayOrderSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPayOrderAction.PAY_ORDER_FAILED,
    (resolve) =>
      (error: unknown): TPayOrderFailed =>
        resolve({ error }),
  ),
};
