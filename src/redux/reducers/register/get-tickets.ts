import { TRegisterState } from '@/redux/reducers/register';
import { TGetTicketsSuccess } from '@/redux/actions/register';

export const getTicketsUpdateState = (state: TRegisterState, action: TGetTicketsSuccess): TRegisterState => ({
  ...state,
  getTicketsResponse: action.payload.response,
});
