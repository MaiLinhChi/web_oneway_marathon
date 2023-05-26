import { createActionCreator } from 'deox';

import { TGetGroupsMaterials, TGetGroupsResponse } from '@/services/registers/register-group/get-groups';

// CONSTANTS

export enum EGetGroupsAction {
  GET_GROUPS = 'GET_GROUPS',
  GET_GROUPS_REQUEST = 'GET_GROUPS_REQUEST',
  GET_GROUPS_SUCCESS = 'GET_GROUPS_SUCCESS',
  GET_GROUPS_FAILED = 'GET_GROUPS_FAILED',
}

// TYPES

export type TGetGroupsRequest = {
  type: EGetGroupsAction.GET_GROUPS_REQUEST;
  payload: {
    materials: TGetGroupsMaterials;
    successCallback?: (response: TGetGroupsResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetGroupsSuccess = {
  type: EGetGroupsAction.GET_GROUPS_SUCCESS;
  payload: { response: TGetGroupsResponse };
};

export type TGetGroupsFailed = { type: EGetGroupsAction.GET_GROUPS_FAILED };

// FUNCTION

export const getGroupsAction = {
  request: createActionCreator(
    EGetGroupsAction.GET_GROUPS_REQUEST,
    (resolve) =>
      (
        materials: TGetGroupsMaterials,
        successCallback?: (response: TGetGroupsResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetGroupsRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetGroupsAction.GET_GROUPS_SUCCESS,
    (resolve) =>
      (response: TGetGroupsResponse): TGetGroupsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetGroupsAction.GET_GROUPS_FAILED,
    (resolve) =>
      (error: unknown): TGetGroupsFailed =>
        resolve({ error }),
  ),
};
