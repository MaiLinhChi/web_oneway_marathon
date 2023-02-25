import { createActionCreator } from 'deox';

import { TRunnerRegisterGroupMaterials, TRunnerRegisterGroupResponse } from '@/services/registers';

// CONSTANTS

export enum ERunnerRegisterGroupAction {
  VERTIFY_REISTER_GROUP = 'VERTIFY_REISTER_GROUP',
  VERTIFY_REISTER_GROUP_REQUEST = 'VERTIFY_REISTER_GROUP_REQUEST',
  VERTIFY_REISTER_GROUP_SUCCESS = 'VERTIFY_REISTER_GROUP_SUCCESS',
  VERTIFY_REISTER_GROUP_FAILED = 'VERTIFY_REISTER_GROUP_FAILED',
}

// TYPES

export type TRunnerRegisterGroupRequest = {
  type: ERunnerRegisterGroupAction.VERTIFY_REISTER_GROUP_REQUEST;
  payload: {
    materials: TRunnerRegisterGroupMaterials;
    successCallback?: (response: TRunnerRegisterGroupResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TRunnerRegisterGroupSuccess = {
  type: ERunnerRegisterGroupAction.VERTIFY_REISTER_GROUP_SUCCESS;
  payload: { response: TRunnerRegisterGroupResponse };
};

export type TRunnerRegisterGroupFailed = { type: ERunnerRegisterGroupAction.VERTIFY_REISTER_GROUP_FAILED };

// FUNCTION

export const runnerRegisterGroupAction = {
  request: createActionCreator(
    ERunnerRegisterGroupAction.VERTIFY_REISTER_GROUP_REQUEST,
    (resolve) =>
      (
        materials: TRunnerRegisterGroupMaterials,
        successCallback?: (response: TRunnerRegisterGroupResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TRunnerRegisterGroupRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ERunnerRegisterGroupAction.VERTIFY_REISTER_GROUP_SUCCESS,
    (resolve) =>
      (response: TRunnerRegisterGroupResponse): TRunnerRegisterGroupSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ERunnerRegisterGroupAction.VERTIFY_REISTER_GROUP_FAILED,
    (resolve) =>
      (error: unknown): TRunnerRegisterGroupFailed =>
        resolve({ error }),
  ),
};
