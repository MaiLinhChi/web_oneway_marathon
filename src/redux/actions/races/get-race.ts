import { createActionCreator } from 'deox';

import { TGetRaceMaterials, TGetRaceResponse } from '@/services/api/races';

// CONSTANTS

export enum EGetRaceAction {
  GET_RACE = 'GET_RACE',
  GET_RACE_REQUEST = 'GET_RACE_REQUEST',
  GET_RACE_SUCCESS = 'GET_RACE_SUCCESS',
  GET_RACE_FAILED = 'GET_RACE_FAILED',
}

// TYPES

export type TGetRaceRequest = {
  type: EGetRaceAction.GET_RACE_REQUEST;
  payload: {
    materials: TGetRaceMaterials;
    successCallback?: (response: TGetRaceResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetRaceSuccess = {
  type: EGetRaceAction.GET_RACE_SUCCESS;
  payload: { response?: TGetRaceResponse };
};

export type TGetRaceFailed = { type: EGetRaceAction.GET_RACE_FAILED };

// FUNCTION

export const getRaceAction = {
  request: createActionCreator(
    EGetRaceAction.GET_RACE_REQUEST,
    (resolve) =>
      (
        materials: TGetRaceMaterials,
        successCallback?: (response: TGetRaceResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetRaceRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetRaceAction.GET_RACE_SUCCESS,
    (resolve) =>
      (response?: TGetRaceResponse): TGetRaceSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetRaceAction.GET_RACE_FAILED,
    (resolve) =>
      (error: unknown): TGetRaceFailed =>
        resolve({ error }),
  ),
};
