import { createActionCreator } from 'deox';

import { TGetBibDetailMaterials, TGetBibDetailResponse } from '@/services/api/bib';

// CONSTANTS

export enum EGetBibDetailAction {
  GET_BIB_DETAIL = 'GET_BIB_DETAIL',
  GET_BIB_DETAIL_REQUEST = 'GET_BIB_DETAIL_REQUEST',
  GET_BIB_DETAIL_SUCCESS = 'GET_BIB_DETAIL_SUCCESS',
  GET_BIB_DETAIL_FAILED = 'GET_BIB_DETAIL_FAILED',
}

// TYPES

export type TGetBibDetailRequest = {
  type: EGetBibDetailAction.GET_BIB_DETAIL_REQUEST;
  payload: {
    materials: TGetBibDetailMaterials;
    successCallback?: (response: TGetBibDetailResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetBibDetailSuccess = {
  type: EGetBibDetailAction.GET_BIB_DETAIL_SUCCESS;
  payload: { response: TGetBibDetailResponse };
};

export type TGetBibDetailFailed = { type: EGetBibDetailAction.GET_BIB_DETAIL_FAILED };

// FUNCTION

export const getBibDetailAction = {
  request: createActionCreator(
    EGetBibDetailAction.GET_BIB_DETAIL_REQUEST,
    (resolve) =>
      (
        materials: TGetBibDetailMaterials,
        successCallback?: (response: TGetBibDetailResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetBibDetailRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetBibDetailAction.GET_BIB_DETAIL_SUCCESS,
    (resolve) =>
      (response: TGetBibDetailResponse): TGetBibDetailSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetBibDetailAction.GET_BIB_DETAIL_FAILED,
    (resolve) =>
      (error: unknown): TGetBibDetailFailed =>
        resolve({ error }),
  ),
};
