import { createActionCreator } from 'deox';

import { TUpdateBibMaterials, TUpdateBibResponse } from '@/services/api/bib';

// CONSTANTS

export enum EUpdateBibAction {
  UPDATE_BIB = 'UPDATE_BIB',
  UPDATE_BIB_REQUEST = 'UPDATE_BIB_REQUEST',
  UPDATE_BIB_SUCCESS = 'UPDATE_BIB_SUCCESS',
  UPDATE_BIB_FAILED = 'UPDATE_BIB_FAILED',
}

// TYPES

export type TUpdateBibRequest = {
  type: EUpdateBibAction.UPDATE_BIB_REQUEST;
  payload: {
    materials: TUpdateBibMaterials;
    successCallback?: (response: TUpdateBibResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TUpdateBibSuccess = {
  type: EUpdateBibAction.UPDATE_BIB_SUCCESS;
  payload: { response?: TUpdateBibResponse };
};

export type TUpdateBibFailed = { type: EUpdateBibAction.UPDATE_BIB_FAILED };

// FUNCTION

export const UpdateBibAction = {
  request: createActionCreator(
    EUpdateBibAction.UPDATE_BIB_REQUEST,
    (resolve) =>
      (
        materials: TUpdateBibMaterials,
        successCallback?: (response: TUpdateBibResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TUpdateBibRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EUpdateBibAction.UPDATE_BIB_SUCCESS,
    (resolve) =>
      (response?: TUpdateBibResponse): TUpdateBibSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUpdateBibAction.UPDATE_BIB_FAILED,
    (resolve) =>
      (error: unknown): TUpdateBibFailed =>
        resolve({ error }),
  ),
};
