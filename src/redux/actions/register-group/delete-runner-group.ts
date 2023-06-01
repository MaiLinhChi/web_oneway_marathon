import { createActionCreator } from 'deox';

import { TDeleteRunnerGroupMaterials, TDeleteRunnerGroupResponse } from '@/services/registers';

// CONSTANTS

export enum EDeleteRunnerGroupAction {
  DELETE_RUNNER_GROUP = 'DELETE_RUNNER_GROUP',
  DELETE_RUNNER_GROUP_REQUEST = 'DELETE_RUNNER_GROUP_REQUEST',
  DELETE_RUNNER_GROUP_SUCCESS = 'DELETE_RUNNER_GROUP_SUCCESS',
  DELETE_RUNNER_GROUP_FAILED = 'DELETE_RUNNER_GROUP_FAILED',
}

// TYPES

export type TDeleteRunnerGroupRequest = {
  type: EDeleteRunnerGroupAction.DELETE_RUNNER_GROUP_REQUEST;
  payload: {
    materials: TDeleteRunnerGroupMaterials;
    successCallback?: (response: TDeleteRunnerGroupResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TDeleteRunnerGroupSuccess = {
  type: EDeleteRunnerGroupAction.DELETE_RUNNER_GROUP_SUCCESS;
  payload: { response: TDeleteRunnerGroupResponse };
};

export type TDeleteRunnerGroupFailed = { type: EDeleteRunnerGroupAction.DELETE_RUNNER_GROUP_FAILED };

// FUNCTION

export const deleteRunnerGroupAction = {
  request: createActionCreator(
    EDeleteRunnerGroupAction.DELETE_RUNNER_GROUP_REQUEST,
    (resolve) =>
      (
        materials: TDeleteRunnerGroupMaterials,
        successCallback?: (response: TDeleteRunnerGroupResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TDeleteRunnerGroupRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EDeleteRunnerGroupAction.DELETE_RUNNER_GROUP_SUCCESS,
    (resolve) =>
      (response: TDeleteRunnerGroupResponse): TDeleteRunnerGroupSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDeleteRunnerGroupAction.DELETE_RUNNER_GROUP_FAILED,
    (resolve) =>
      (error: unknown): TDeleteRunnerGroupFailed =>
        resolve({ error }),
  ),
};
