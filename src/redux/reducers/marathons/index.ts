import { createReducer } from 'deox';
import { getMarathonByIdAction } from '@/redux/actions';
import { TGetMarathonByIdResponse } from '@/services/api';
import { getMarathonByIdUpdateState } from '@/redux/reducers/marathons/get-marathon-by-id';

export type TMarathonsState = {
  getMarathonByIdResponse?: TGetMarathonByIdResponse;
};

const initialState: TMarathonsState = {
  getMarathonByIdResponse: undefined,
};

const MarathonsReducer = createReducer(initialState, (handleAction) => [
  handleAction(getMarathonByIdAction.success, getMarathonByIdUpdateState),
]);

export default MarathonsReducer;
