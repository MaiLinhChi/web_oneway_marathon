import { TRaceState } from '@/redux/reducers/races';
import { TGetRaceSuccess } from '@/redux/actions/races';

export const getRaceUpdateState = (state: TRaceState, action: TGetRaceSuccess): TRaceState => ({
  ...state,
  getRaceResponse: action.payload.response,
});
