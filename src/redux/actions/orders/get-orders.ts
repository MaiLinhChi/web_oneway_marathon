import { createActionCreator } from 'deox';

import { TGetOrdersMaterials, TGetOrdersResponse } from '@/services/api/orders';

// CONSTANTS

export enum EGetOrdersAction {
  GET_ORDERS = 'GET_ORDERS',
  GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST',
  GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS',
  GET_ORDERS_FAILED = 'GET_ORDERS_FAILED',
}

// TYPES

export type TGetOrdersRequest = {
  type: EGetOrdersAction.GET_ORDERS_REQUEST;
  payload: {
    materials: TGetOrdersMaterials;
    successCallback?: (response: TGetOrdersResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetOrdersSuccess = {
  type: EGetOrdersAction.GET_ORDERS_SUCCESS;
  payload: { response: TGetOrdersResponse };
};

export type TGetOrdersFailed = { type: EGetOrdersAction.GET_ORDERS_FAILED };

// FUNCTION

export const getOrdersAction = {
  request: createActionCreator(
    EGetOrdersAction.GET_ORDERS_REQUEST,
    (resolve) =>
      (
        materials: TGetOrdersMaterials,
        successCallback?: (response: TGetOrdersResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetOrdersRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetOrdersAction.GET_ORDERS_SUCCESS,
    (resolve) =>
      (response: TGetOrdersResponse): TGetOrdersSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetOrdersAction.GET_ORDERS_FAILED,
    (resolve) =>
      (error: unknown): TGetOrdersFailed =>
        resolve({ error }),
  ),
};
