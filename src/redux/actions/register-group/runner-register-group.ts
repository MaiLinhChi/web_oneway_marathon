import { createActionCreator } from 'deox';

import { TRunnerRegisterGroupMaterials, TRunnerRegisterGroupResponse } from '@/services/registers';

// CONSTANTS

export enum ERunnerRegisterGroupAction {
  RUNNER_REISTER_GROUP = 'RUNNER_REISTER_GROUP',
  RUNNER_REISTER_GROUP_REQUEST = 'RUNNER_REISTER_GROUP_REQUEST',
  RUNNER_REISTER_GROUP_SUCCESS = 'RUNNER_REISTER_GROUP_SUCCESS',
  RUNNER_REISTER_GROUP_FAILED = 'RUNNER_REISTER_GROUP_FAILED',
}

// TYPES

export type TRunnerRegisterGroupRequest = {
  type: ERunnerRegisterGroupAction.RUNNER_REISTER_GROUP_REQUEST;
  payload: {
    materials: TRunnerRegisterGroupMaterials;
    successCallback?: (response: TRunnerRegisterGroupResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TRunnerRegisterGroupSuccess = {
  type: ERunnerRegisterGroupAction.RUNNER_REISTER_GROUP_SUCCESS;
  payload: { response: TRunnerRegisterGroupResponse };
};

export type TRunnerRegisterGroupFailed = { type: ERunnerRegisterGroupAction.RUNNER_REISTER_GROUP_FAILED };

// FUNCTION

export const runnerRegisterGroupAction = {
  request: createActionCreator(
    ERunnerRegisterGroupAction.RUNNER_REISTER_GROUP_REQUEST,
    (resolve) =>
      (
        materials: TRunnerRegisterGroupMaterials,
        successCallback?: (response: TRunnerRegisterGroupResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TRunnerRegisterGroupRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ERunnerRegisterGroupAction.RUNNER_REISTER_GROUP_SUCCESS,
    (resolve) =>
      (response: TRunnerRegisterGroupResponse): TRunnerRegisterGroupSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ERunnerRegisterGroupAction.RUNNER_REISTER_GROUP_FAILED,
    (resolve) =>
      (error: unknown): TRunnerRegisterGroupFailed =>
        resolve({ error }),
  ),
};
