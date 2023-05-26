import { createActionCreator } from 'deox';

import { TGetTicketDetailMaterials, TGetTicketDetailResponse } from '@/services/registers/register';

// CONSTANTS

export enum EGetTicketDetailAction {
  GET_TICKET_DETAIL = 'GET_TICKET_DETAIL',
  GET_TICKET_DETAIL_REQUEST = 'GET_TICKET_DETAIL_REQUEST',
  GET_TICKET_DETAIL_SUCCESS = 'GET_TICKET_DETAIL_SUCCESS',
  GET_TICKET_DETAIL_FAILED = 'GET_TICKET_DETAIL_FAILED',
}

// TYPES

export type TGetTicketDetailRequest = {
  type: EGetTicketDetailAction.GET_TICKET_DETAIL_REQUEST;
  payload: {
    materials: TGetTicketDetailMaterials;
    successCallback?: (response: TGetTicketDetailResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetTicketDetailSuccess = {
  type: EGetTicketDetailAction.GET_TICKET_DETAIL_SUCCESS;
  payload: { response: TGetTicketDetailResponse };
};

export type TGetTicketDetailFailed = { type: EGetTicketDetailAction.GET_TICKET_DETAIL_FAILED };

// FUNCTION

export const getTicketDetailAction = {
  request: createActionCreator(
    EGetTicketDetailAction.GET_TICKET_DETAIL_REQUEST,
    (resolve) =>
      (
        materials: TGetTicketDetailMaterials,
        successCallback?: (response: TGetTicketDetailResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetTicketDetailRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetTicketDetailAction.GET_TICKET_DETAIL_SUCCESS,
    (resolve) =>
      (response: TGetTicketDetailResponse): TGetTicketDetailSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetTicketDetailAction.GET_TICKET_DETAIL_FAILED,
    (resolve) =>
      (error: unknown): TGetTicketDetailFailed =>
        resolve({ error }),
  ),
};
