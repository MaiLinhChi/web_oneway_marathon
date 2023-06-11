import { createActionCreator } from 'deox';

import { TDeleteGroupMaterials, TDeleteGroupResponse } from '@/services/registers';

// CONSTANTS

export enum EDeleteGroupAction {
  DELETE_GROUP = 'DELETE_GROUP',
  DELETE_GROUP_REQUEST = 'DELETE_GROUP_REQUEST',
  DELETE_GROUP_SUCCESS = 'DELETE_GROUP_SUCCESS',
  DELETE_GROUP_FAILED = 'DELETE_GROUP_FAILED',
}

// TYPES

export type TDeleteGroupRequest = {
  type: EDeleteGroupAction.DELETE_GROUP_REQUEST;
  payload: {
    materials: TDeleteGroupMaterials;
    successCallback?: (response: TDeleteGroupResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TDeleteGroupSuccess = {
  type: EDeleteGroupAction.DELETE_GROUP_SUCCESS;
  payload: { response: TDeleteGroupResponse };
};

export type TDeleteGroupFailed = { type: EDeleteGroupAction.DELETE_GROUP_FAILED };

// FUNCTION

export const deleteGroupAction = {
  request: createActionCreator(
    EDeleteGroupAction.DELETE_GROUP_REQUEST,
    (resolve) =>
      (
        materials: TDeleteGroupMaterials,
        successCallback?: (response: TDeleteGroupResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TDeleteGroupRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EDeleteGroupAction.DELETE_GROUP_SUCCESS,
    (resolve) =>
      (response: TDeleteGroupResponse): TDeleteGroupSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDeleteGroupAction.DELETE_GROUP_FAILED,
    (resolve) =>
      (error: unknown): TDeleteGroupFailed =>
        resolve({ error }),
  ),
};
