import { createActionCreator } from 'deox';

import { TDetailRaceMaterials, TDetailRaceResponse } from '@/services/api/races';

// CONSTANTS

export enum EDetailRaceAction {
  DETAIL_RACE = 'DETAIL_RACE',
  DETAIL_RACE_REQUEST = 'DETAIL_RACE_REQUEST',
  DETAIL_RACE_SUCCESS = 'DETAIL_RACE_SUCCESS',
  DETAIL_RACE_FAILED = 'DETAIL_RACE_FAILED',
}

// TYPES

export type TDetailRaceRequest = {
  type: EDetailRaceAction.DETAIL_RACE_REQUEST;
  payload: {
    materials: any;
    successCallback?: (response: TDetailRaceResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TDetailRaceSuccess = {
  type: EDetailRaceAction.DETAIL_RACE_SUCCESS;
  payload: { response?: TDetailRaceResponse };
};

export type TDetailRaceFailed = { type: EDetailRaceAction.DETAIL_RACE_FAILED };

// FUNCTION

export const detailRaceAction = {
  request: createActionCreator(
    EDetailRaceAction.DETAIL_RACE_REQUEST,
    (resolve) =>
      (
        materials: TDetailRaceMaterials,
        successCallback?: (response: TDetailRaceResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TDetailRaceRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EDetailRaceAction.DETAIL_RACE_SUCCESS,
    (resolve) =>
      (response?: TDetailRaceResponse): TDetailRaceSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDetailRaceAction.DETAIL_RACE_FAILED,
    (resolve) =>
      (error: unknown): TDetailRaceFailed =>
        resolve({ error }),
  ),
};
