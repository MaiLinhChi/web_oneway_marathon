import { createReducer } from 'deox';

import { TGetRaceResponse } from '@/services/api/races';
import { getRaceAction } from '@/redux/actions';
import { getRaceUpdateState } from './get-race';

export type TRaceState = {
  getRaceResponse?: TGetRaceResponse;
};

const initialState: TRaceState = {
  getRaceResponse: undefined,
};

const RaceReducer = createReducer(initialState, (handleAction) => [
  handleAction(getRaceAction.success, getRaceUpdateState),
]);

export default RaceReducer;
