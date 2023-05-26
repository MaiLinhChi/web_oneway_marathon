import { TRaceState } from '@/redux/reducers/races';
import { TDetailRaceSuccess } from '@/redux/actions/races';

export const detailRaceUpdateState = (state: TRaceState, action: TDetailRaceSuccess): TRaceState => ({
  ...state,
  detailRaceResponse: action.payload.response?.data,
});
