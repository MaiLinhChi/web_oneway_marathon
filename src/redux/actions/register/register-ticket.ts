import { createActionCreator } from 'deox';

import { TRegisterTicketMaterials, TRegisterTicketResponse } from '@/services/registers/register/register-ticket';

// CONSTANTS

export enum ERegisterTicketAction {
  REGISTER_TICKET = 'REGISTER_TICKET',
  REGISTER_TICKET_REQUEST = 'REGISTER_TICKET_REQUEST',
  REGISTER_TICKET_SUCCESS = 'REGISTER_TICKET_SUCCESS',
  REGISTER_TICKET_FAILED = 'REGISTER_TICKET_FAILED',
}

// TYPES

export type TRegisterTicketRequest = {
  type: ERegisterTicketAction.REGISTER_TICKET_REQUEST;
  payload: {
    materials: TRegisterTicketMaterials;
    successCallback?: (response: TRegisterTicketResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TRegisterTicketSuccess = {
  type: ERegisterTicketAction.REGISTER_TICKET_SUCCESS;
  payload: { response: TRegisterTicketResponse };
};

export type TRegisterTicketFailed = { type: ERegisterTicketAction.REGISTER_TICKET_FAILED };

// FUNCTION

export const registerTicketAction = {
  request: createActionCreator(
    ERegisterTicketAction.REGISTER_TICKET_REQUEST,
    (resolve) =>
      (
        materials: TRegisterTicketMaterials,
        successCallback?: (response: TRegisterTicketResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TRegisterTicketRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ERegisterTicketAction.REGISTER_TICKET_SUCCESS,
    (resolve) =>
      (response: TRegisterTicketResponse): TRegisterTicketSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ERegisterTicketAction.REGISTER_TICKET_FAILED,
    (resolve) =>
      (error: unknown): TRegisterTicketFailed =>
        resolve({ error }),
  ),
};
