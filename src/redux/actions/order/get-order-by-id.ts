import { createActionCreator } from 'deox';

import { TGetOrderByIdMaterials, TGetOrderByIdResponse } from '@/services/api/order';

// CONSTANTS

export enum EGetOrderByIdAction {
  GET_ORDER_BY_ID = 'GET_ORDER_BY_ID',
  GET_ORDER_BY_ID_REQUEST = 'GET_ORDER_BY_ID_REQUEST',
  GET_ORDER_BY_ID_SUCCESS = 'GET_ORDER_BY_ID_SUCCESS',
  GET_ORDER_BY_ID_FAILED = 'GET_ORDER_BY_ID_FAILED',
}

// TYPES

export type TGetOrderByIdRequest = {
  type: EGetOrderByIdAction.GET_ORDER_BY_ID_REQUEST;
  payload: {
    materials: TGetOrderByIdMaterials;
    successCallback?: (response: TGetOrderByIdResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetOrderByIdSuccess = {
  type: EGetOrderByIdAction.GET_ORDER_BY_ID_SUCCESS;
  payload: { response: TGetOrderByIdResponse };
};

export type TGetOrderByIdFailed = { type: EGetOrderByIdAction.GET_ORDER_BY_ID_FAILED };

// FUNCTION

export const getOrderByIdAction = {
  request: createActionCreator(
    EGetOrderByIdAction.GET_ORDER_BY_ID_REQUEST,
    (resolve) =>
      (
        materials: TGetOrderByIdMaterials,
        successCallback?: (response: TGetOrderByIdResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetOrderByIdRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetOrderByIdAction.GET_ORDER_BY_ID_SUCCESS,
    (resolve) =>
      (response: TGetOrderByIdResponse): TGetOrderByIdSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetOrderByIdAction.GET_ORDER_BY_ID_FAILED,
    (resolve) =>
      (error: unknown): TGetOrderByIdFailed =>
        resolve({ error }),
  ),
};
