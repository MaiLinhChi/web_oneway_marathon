import { createActionCreator } from 'deox';

import { TRegisterGroupMaterials, TRegisterGroupResponse } from '@/services/registers/register-group/register-group';

// CONSTANTS

export enum ERegisterGroupAction {
  REGISTER_GROUP = 'REGISTER_GROUP',
  REGISTER_GROUP_REQUEST = 'REGISTER_GROUP_REQUEST',
  REGISTER_GROUP_SUCCESS = 'REGISTER_GROUP_SUCCESS',
  REGISTER_GROUP_FAILED = 'REGISTER_GROUP_FAILED',
}

// TYPES

export type TRegisterGroupRequest = {
  type: ERegisterGroupAction.REGISTER_GROUP_REQUEST;
  payload: {
    materials: TRegisterGroupMaterials;
    successCallback?: (response: TRegisterGroupResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TRegisterGroupSuccess = {
  type: ERegisterGroupAction.REGISTER_GROUP_SUCCESS;
  payload: { response: TRegisterGroupResponse };
};

export type TRegisterGroupFailed = { type: ERegisterGroupAction.REGISTER_GROUP_FAILED };

// FUNCTION

export const registerGroupAction = {
  request: createActionCreator(
    ERegisterGroupAction.REGISTER_GROUP_REQUEST,
    (resolve) =>
      (
        materials: TRegisterGroupMaterials,
        successCallback?: (response: TRegisterGroupResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TRegisterGroupRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ERegisterGroupAction.REGISTER_GROUP_SUCCESS,
    (resolve) =>
      (response: TRegisterGroupResponse): TRegisterGroupSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ERegisterGroupAction.REGISTER_GROUP_FAILED,
    (resolve) =>
      (error: unknown): TRegisterGroupFailed =>
        resolve({ error }),
  ),
};
