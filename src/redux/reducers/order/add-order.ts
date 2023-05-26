import { TOrdersState } from '@/redux/reducers/order';
import { TAddOrderSuccess } from '@/redux/actions/order';

export const addOrderUpdateState = (state: TOrdersState, action: TAddOrderSuccess): TOrdersState => ({
  ...state,
  addOrder: action.payload.response,
});
