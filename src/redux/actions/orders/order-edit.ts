import { createActionCreator } from 'deox';

import { TOrderEditMaterials, TOrderEditResponse } from '@/services/api/orders';

// CONSTANTS

export enum EOrderEditAction {
  ORDER_EDIT = 'ORDER_EDIT',
  ORDER_EDIT_REQUEST = 'ORDER_EDIT_REQUEST',
  ORDER_EDIT_SUCCESS = 'ORDER_EDIT_SUCCESS',
  ORDER_EDIT_FAILED = 'ORDER_EDIT_FAILED',
}

// TYPES

export type TOrderEditRequest = {
  type: EOrderEditAction.ORDER_EDIT_REQUEST;
  payload: {
    materials: TOrderEditMaterials;
    successCallback?: (response: TOrderEditResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TOrderEditSuccess = {
  type: EOrderEditAction.ORDER_EDIT_SUCCESS;
  payload: { response?: TOrderEditResponse };
};

export type TOrderEditFailed = { type: EOrderEditAction.ORDER_EDIT_FAILED };

// FUNCTION

export const OrderEditAction = {
  request: createActionCreator(
    EOrderEditAction.ORDER_EDIT_REQUEST,
    (resolve) =>
      (
        materials: TOrderEditMaterials,
        successCallback?: (response: TOrderEditResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TOrderEditRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EOrderEditAction.ORDER_EDIT_SUCCESS,
    (resolve) =>
      (response?: TOrderEditResponse): TOrderEditSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EOrderEditAction.ORDER_EDIT_FAILED,
    (resolve) =>
      (error: unknown): TOrderEditFailed =>
        resolve({ error }),
  ),
};
