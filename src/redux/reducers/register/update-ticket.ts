import { TRegisterState } from '@/redux/reducers/register';
import { TUpdateTicketSuccess } from '@/redux/actions/register';

export const updateTicketUpdateState = (state: TRegisterState, action: TUpdateTicketSuccess): TRegisterState => ({
  ...state,
  registerTicketResponse: action.payload.response?.data,
});
