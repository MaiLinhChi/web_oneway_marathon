import { createActionCreator } from 'deox';

import { TVertifyRegisterGroupMaterials, TVertifyRegisterGroupResponse } from '@/services/registers';

// CONSTANTS

export enum EVertifyRegisterGroupAction {
  VERTIFY_REISTER_GROUP = 'VERTIFY_REISTER_GROUP',
  VERTIFY_REISTER_GROUP_REQUEST = 'VERTIFY_REISTER_GROUP_REQUEST',
  VERTIFY_REISTER_GROUP_SUCCESS = 'VERTIFY_REISTER_GROUP_SUCCESS',
  VERTIFY_REISTER_GROUP_FAILED = 'VERTIFY_REISTER_GROUP_FAILED',
}

// TYPES

export type TVertifyRegisterGroupRequest = {
  type: EVertifyRegisterGroupAction.VERTIFY_REISTER_GROUP_REQUEST;
  payload: {
    materials: TVertifyRegisterGroupMaterials;
    successCallback?: (response: TVertifyRegisterGroupResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TVertifyRegisterGroupSuccess = {
  type: EVertifyRegisterGroupAction.VERTIFY_REISTER_GROUP_SUCCESS;
  payload: { response: TVertifyRegisterGroupResponse };
};

export type TVertifyRegisterGroupFailed = { type: EVertifyRegisterGroupAction.VERTIFY_REISTER_GROUP_FAILED };

// FUNCTION

export const vertifyRegisterGroupAction = {
  request: createActionCreator(
    EVertifyRegisterGroupAction.VERTIFY_REISTER_GROUP_REQUEST,
    (resolve) =>
      (
        materials: TVertifyRegisterGroupMaterials,
        successCallback?: (response: TVertifyRegisterGroupResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TVertifyRegisterGroupRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EVertifyRegisterGroupAction.VERTIFY_REISTER_GROUP_SUCCESS,
    (resolve) =>
      (response: TVertifyRegisterGroupResponse): TVertifyRegisterGroupSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EVertifyRegisterGroupAction.VERTIFY_REISTER_GROUP_FAILED,
    (resolve) =>
      (error: unknown): TVertifyRegisterGroupFailed =>
        resolve({ error }),
  ),
};
