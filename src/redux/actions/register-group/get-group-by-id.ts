import { createActionCreator } from 'deox';

import { TGetGroupByIdMaterials, TGetGroupByIdResponse } from '@/services/registers/register-group';

// CONSTANTS

export enum EGetGroupByIdAction {
  GET_GROUP_BY_ID = 'GET_GROUP_BY_ID',
  GET_GROUP_BY_ID_REQUEST = 'GET_GROUP_BY_ID_REQUEST',
  GET_GROUP_BY_ID_SUCCESS = 'GET_GROUP_BY_ID_SUCCESS',
  GET_GROUP_BY_ID_FAILED = 'GET_GROUP_BY_ID_FAILED',
}

// TYPES

export type TGetGroupByIdRequest = {
  type: EGetGroupByIdAction.GET_GROUP_BY_ID_REQUEST;
  payload: {
    materials: TGetGroupByIdMaterials;
    successCallback?: (response: TGetGroupByIdResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetGroupByIdSuccess = {
  type: EGetGroupByIdAction.GET_GROUP_BY_ID_SUCCESS;
  payload: { response: TGetGroupByIdResponse };
};

export type TGetGroupByIdFailed = { type: EGetGroupByIdAction.GET_GROUP_BY_ID_FAILED };

// FUNCTION

export const getGroupByIdAction = {
  request: createActionCreator(
    EGetGroupByIdAction.GET_GROUP_BY_ID_REQUEST,
    (resolve) =>
      (
        materials: TGetGroupByIdMaterials,
        successCallback?: (response: TGetGroupByIdResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetGroupByIdRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetGroupByIdAction.GET_GROUP_BY_ID_SUCCESS,
    (resolve) =>
      (response: TGetGroupByIdResponse): TGetGroupByIdSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetGroupByIdAction.GET_GROUP_BY_ID_FAILED,
    (resolve) =>
      (error: unknown): TGetGroupByIdFailed =>
        resolve({ error }),
  ),
};
