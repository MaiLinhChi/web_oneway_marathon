import { createReducer } from 'deox';

import {
  TGetTicketsResponse,
  TRegisterTicketResponse,
  TGetTicketDetailResponse,
  TUpdateTicketResponse,
} from '@/services/registers/register';
import { getTicketsAction, registerTicketAction, getTicketDetailAction, updateTicketAction } from '@/redux/actions';
import { getTicketsUpdateState } from './get-tickets';
import { registerTicketUpdateState } from './register-ticket';
import { updateTicketUpdateState } from './update-ticket';

export type TRegisterState = {
  getTicketsResponse?: TGetTicketsResponse;
  registerTicketResponse?: TRegisterTicketResponse;
  ticketDetailResponse?: TGetTicketDetailResponse;
  saveTicket?: any;
};

const initialState: TRegisterState = {
  getTicketsResponse: undefined,
  registerTicketResponse: undefined,
  ticketDetailResponse: undefined,
  saveTicket: undefined,
};

const RegisterReducer = createReducer(initialState, (handleAction) => [
  handleAction(getTicketsAction.success, getTicketsUpdateState),
  handleAction(registerTicketAction.success, registerTicketUpdateState),
  handleAction(getTicketDetailAction.success, getTicketsUpdateState),
  handleAction(updateTicketAction.success, updateTicketUpdateState),
  handleAction(registerTicketAction.save, (state, { payload }) => ({
    ...state,
    saveTicket: payload.response,
  })),
]);

export default RegisterReducer;
