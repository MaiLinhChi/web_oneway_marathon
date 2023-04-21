import { TMarathonsState } from '@/redux/reducers/marathons';
import { TGetMarathonByIdSuccess } from '@/redux/actions/marathons';

export const getMarathonByIdUpdateState = (
  state: TMarathonsState,
  action: TGetMarathonByIdSuccess,
): TMarathonsState => ({
  ...state,
  getMarathonByIdResponse: action.payload.response,
});
