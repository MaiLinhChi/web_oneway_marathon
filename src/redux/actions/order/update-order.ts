import { createActionCreator } from 'deox';

import { TUpdateOrderMaterials, TUpdateOrderResponse } from '@/services/api/order';

// CONSTANTS

export enum EUpdateOrderAction {
  UPDATE_ORDER_BY_ID = 'UPDATE_ORDER_BY_ID',
  UPDATE_ORDER_BY_ID_REQUEST = 'UPDATE_ORDER_BY_ID_REQUEST',
  UPDATE_ORDER_BY_ID_SUCCESS = 'UPDATE_ORDER_BY_ID_SUCCESS',
  UPDATE_ORDER_BY_ID_FAILED = 'UPDATE_ORDER_BY_ID_FAILED',
}

// TYPES

export type TUpdateOrderRequest = {
  type: EUpdateOrderAction.UPDATE_ORDER_BY_ID_REQUEST;
  payload: {
    materials: TUpdateOrderMaterials;
    successCallback?: (response: TUpdateOrderResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TUpdateOrderSuccess = {
  type: EUpdateOrderAction.UPDATE_ORDER_BY_ID_SUCCESS;
  payload: { response: TUpdateOrderResponse };
};

export type TUpdateOrderFailed = { type: EUpdateOrderAction.UPDATE_ORDER_BY_ID_FAILED };

// FUNCTION

export const updateOrderAction = {
  request: createActionCreator(
    EUpdateOrderAction.UPDATE_ORDER_BY_ID_REQUEST,
    (resolve) =>
      (
        materials: TUpdateOrderMaterials,
        successCallback?: (response: TUpdateOrderResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TUpdateOrderRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EUpdateOrderAction.UPDATE_ORDER_BY_ID_SUCCESS,
    (resolve) =>
      (response: TUpdateOrderResponse): TUpdateOrderSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUpdateOrderAction.UPDATE_ORDER_BY_ID_FAILED,
    (resolve) =>
      (error: unknown): TUpdateOrderFailed =>
        resolve({ error }),
  ),
};
