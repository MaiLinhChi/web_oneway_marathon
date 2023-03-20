import { createReducer } from 'deox';

import { TGetRaceResponse, TDetailRaceResponse } from '@/services/api/races';
import { detailRaceAction, getRaceAction } from '@/redux/actions';
import { getRaceUpdateState } from './get-race';
import { detailRaceUpdateState } from './detail';

export type TRaceState = {
  getRaceResponse?: TGetRaceResponse;
  detailRaceResponse?: TDetailRaceResponse;
};

const initialState: TRaceState = {
  getRaceResponse: undefined,
  detailRaceResponse: undefined,
};

const RaceReducer = createReducer(initialState, (handleAction) => [
  handleAction(getRaceAction.success, getRaceUpdateState),
  handleAction(detailRaceAction.success, detailRaceUpdateState),
]);

export default RaceReducer;
