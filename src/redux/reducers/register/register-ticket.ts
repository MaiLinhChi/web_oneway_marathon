import { TRegisterState } from '@/redux/reducers/register';
import { TRegisterTicketSuccess } from '@/redux/actions/register';

export const registerTicketUpdateState = (state: TRegisterState, action: TRegisterTicketSuccess): TRegisterState => ({
  ...state,
  registerTicketResponse: action.payload.response,
});
