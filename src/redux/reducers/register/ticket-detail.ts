import { TRegisterState } from '@/redux/reducers/register';
import { TGetTicketDetailSuccess } from '@/redux/actions/register';

export const getTicketDetaillUpdateState = (
  state: TRegisterState,
  action: TGetTicketDetailSuccess,
): TRegisterState => ({
  ...state,
  ticketDetailResponse: action.payload.response,
});
