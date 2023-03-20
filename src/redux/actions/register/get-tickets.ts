import { createActionCreator } from 'deox';

import { TGetTicketsMaterials, TGetTicketsResponse } from '@/services/registers/register/get-tickets';

// CONSTANTS

export enum EGetTicketsAction {
  GET_TICKETS = 'GET_TICKETS',
  GET_TICKETS_REQUEST = 'GET_TICKETS_REQUEST',
  GET_TICKETS_SUCCESS = 'GET_TICKETS_SUCCESS',
  GET_TICKETS_FAILED = 'GET_TICKETS_FAILED',
}

// TYPES

export type TGetTicketsRequest = {
  type: EGetTicketsAction.GET_TICKETS_REQUEST;
  payload: {
    materials: TGetTicketsMaterials;
    successCallback?: (response: TGetTicketsResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetTicketsSuccess = {
  type: EGetTicketsAction.GET_TICKETS_SUCCESS;
  payload: { response: TGetTicketsResponse };
};

export type TGetTicketsFailed = { type: EGetTicketsAction.GET_TICKETS_FAILED };

// FUNCTION

export const getTicketsAction = {
  request: createActionCreator(
    EGetTicketsAction.GET_TICKETS_REQUEST,
    (resolve) =>
      (
        materials: TGetTicketsMaterials,
        successCallback?: (response: TGetTicketsResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetTicketsRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetTicketsAction.GET_TICKETS_SUCCESS,
    (resolve) =>
      (response: TGetTicketsResponse): TGetTicketsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetTicketsAction.GET_TICKETS_FAILED,
    (resolve) =>
      (error: unknown): TGetTicketsFailed =>
        resolve({ error }),
  ),
};
