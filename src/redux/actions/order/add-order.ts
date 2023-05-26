import { createActionCreator } from 'deox';

import { TAddOrderMaterials, TAddOrderResponse } from '@/services/api/order';

// CONSTANTS

export enum EAddOrderAction {
  ADD_ORDER = 'ADD_ORDER',
  ADD_ORDER_REQUEST = 'ADD_ORDER_REQUEST',
  ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS',
  ADD_ORDER_FAILED = 'ADD_ORDER_FAILED',
}

// TYPES

export type TAddOrderRequest = {
  type: EAddOrderAction.ADD_ORDER_REQUEST;
  payload: {
    materials: TAddOrderMaterials;
    successCallback?: (response: TAddOrderResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAddOrderSuccess = {
  type: EAddOrderAction.ADD_ORDER_SUCCESS;
  payload: { response: TAddOrderResponse };
};

export type TAddOrderFailed = { type: EAddOrderAction.ADD_ORDER_FAILED };

// FUNCTION

export const addOrderAction = {
  request: createActionCreator(
    EAddOrderAction.ADD_ORDER_REQUEST,
    (resolve) =>
      (
        materials: TAddOrderMaterials,
        successCallback?: (response: TAddOrderResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAddOrderRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAddOrderAction.ADD_ORDER_SUCCESS,
    (resolve) =>
      (response: TAddOrderResponse): TAddOrderSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAddOrderAction.ADD_ORDER_FAILED,
    (resolve) =>
      (error: unknown): TAddOrderFailed =>
        resolve({ error }),
  ),
};
