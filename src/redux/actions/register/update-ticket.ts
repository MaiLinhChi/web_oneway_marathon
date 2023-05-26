import { createActionCreator } from 'deox';

import { TUpdateTicketMaterials, TUpdateTicketResponse } from '@/services/registers';

// CONSTANTS

export enum EUpdateTicketAction {
  UPDATE_TICKET = 'UPDATE_TICKET',
  UPDATE_TICKET_REQUEST = 'UPDATE_TICKET_REQUEST',
  UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS',
  UPDATE_TICKET_FAILED = 'UPDATE_TICKET_FAILED',
}

// TYPES

export type TUpdateTicketRequest = {
  type: EUpdateTicketAction.UPDATE_TICKET_REQUEST;
  payload: {
    materials: TUpdateTicketMaterials;
    successCallback?: (response: TUpdateTicketResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TUpdateTicketSuccess = {
  type: EUpdateTicketAction.UPDATE_TICKET_SUCCESS;
  payload: { response?: TUpdateTicketResponse };
};

export type TUpdateTicketFailed = { type: EUpdateTicketAction.UPDATE_TICKET_FAILED };

// FUNCTION

export const updateTicketAction = {
  request: createActionCreator(
    EUpdateTicketAction.UPDATE_TICKET_REQUEST,
    (resolve) =>
      (
        materials: TUpdateTicketMaterials,
        successCallback?: (response: TUpdateTicketResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TUpdateTicketRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EUpdateTicketAction.UPDATE_TICKET_SUCCESS,
    (resolve) =>
      (response?: TUpdateTicketResponse): TUpdateTicketSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUpdateTicketAction.UPDATE_TICKET_FAILED,
    (resolve) =>
      (error: unknown): TUpdateTicketFailed =>
        resolve({ error }),
  ),
};
