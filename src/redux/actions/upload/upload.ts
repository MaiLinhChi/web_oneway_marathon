import { createActionCreator } from 'deox';

import { TUploadMaterials, TUploadResponse } from '@/services/api/upload/upload';

// CONSTANTS

export enum EUploadAction {
  UPLOAD = 'UPLOAD',
  UPLOAD_REQUEST = 'UPLOAD_REQUEST',
  UPLOAD_SUCCESS = 'UPLOAD_SUCCESS',
  UPLOAD_FAILED = 'UPLOAD_FAILED',
}

// TYPES

export type TUploadRequest = {
  type: EUploadAction.UPLOAD_REQUEST;
  payload: {
    materials: TUploadMaterials;
    successCallback?: (response: TUploadResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TUploadSuccess = {
  type: EUploadAction.UPLOAD_SUCCESS;
  payload: { response: TUploadResponse };
};

export type TUploadFailed = { type: EUploadAction.UPLOAD_FAILED };

// FUNCTION

export const uploadAction = {
  request: createActionCreator(
    EUploadAction.UPLOAD_REQUEST,
    (resolve) =>
      (
        materials: TUploadMaterials,
        successCallback?: (response: TUploadResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TUploadRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EUploadAction.UPLOAD_SUCCESS,
    (resolve) =>
      (response: TUploadResponse): TUploadSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUploadAction.UPLOAD_FAILED,
    (resolve) =>
      (error: unknown): TUploadFailed =>
        resolve({ error }),
  ),
};
