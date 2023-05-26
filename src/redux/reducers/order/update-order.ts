import { TOrdersState } from '@/redux/reducers/order';
import { TUpdateOrderSuccess } from '@/redux/actions/order';

export const updateOrderUpdateState = (state: TOrdersState, action: TUpdateOrderSuccess): TOrdersState => ({
  ...state,
  updateOrder: action.payload.response,
});
