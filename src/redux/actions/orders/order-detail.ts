import { createActionCreator } from 'deox';

import { TGetOrderDetailMaterials, TGetOrderDetailResponse } from '@/services/api/orders';

// CONSTANTS

export enum EGetOrderDetailAction {
  GET_ORDER_DETAIL = 'GET_ORDER_DETAIL',
  GET_ORDER_DETAIL_REQUEST = 'GET_ORDER_DETAIL_REQUEST',
  GET_ORDER_DETAIL_SUCCESS = 'GET_ORDER_DETAIL_SUCCESS',
  GET_ORDER_DETAIL_FAILED = 'GET_ORDER_DETAIL_FAILED',
}

// TYPES

export type TGetOrderDetailRequest = {
  type: EGetOrderDetailAction.GET_ORDER_DETAIL_REQUEST;
  payload: {
    materials: TGetOrderDetailMaterials;
    successCallback?: (response: TGetOrderDetailResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetOrderDetailSuccess = {
  type: EGetOrderDetailAction.GET_ORDER_DETAIL_SUCCESS;
  payload: { response: TGetOrderDetailResponse };
};

export type TGetOrderDetailFailed = { type: EGetOrderDetailAction.GET_ORDER_DETAIL_FAILED };

// FUNCTION

export const getOrderDetailAction = {
  request: createActionCreator(
    EGetOrderDetailAction.GET_ORDER_DETAIL_REQUEST,
    (resolve) =>
      (
        materials: TGetOrderDetailMaterials,
        successCallback?: (response: TGetOrderDetailResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetOrderDetailRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetOrderDetailAction.GET_ORDER_DETAIL_SUCCESS,
    (resolve) =>
      (response: TGetOrderDetailResponse): TGetOrderDetailSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetOrderDetailAction.GET_ORDER_DETAIL_FAILED,
    (resolve) =>
      (error: unknown): TGetOrderDetailFailed =>
        resolve({ error }),
  ),
};
