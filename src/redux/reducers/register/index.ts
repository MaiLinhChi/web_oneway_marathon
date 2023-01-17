import { createReducer } from 'deox';

import { TGetTicketsResponse, TRegisterTicketResponse } from '@/services/registers/register';
import { getTicketsAction, registerTicketAction } from '@/redux/actions';
import { getTicketsUpdateState } from './get-tickets';
import { registerTicketUpdateState } from './register-ticket';

export type TRegisterState = {
  getTicketsResponse?: TGetTicketsResponse;
  registerTicketResponse?: TRegisterTicketResponse;
};

const initialState: TRegisterState = {
  getTicketsResponse: undefined,
  registerTicketResponse: undefined,
};

const RegisterReducer = createReducer(initialState, (handleAction) => [
  handleAction(getTicketsAction.success, getTicketsUpdateState),
  handleAction(registerTicketAction.success, registerTicketUpdateState),
]);

export default RegisterReducer;
