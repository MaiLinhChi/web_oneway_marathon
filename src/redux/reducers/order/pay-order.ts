import { TOrdersState } from '@/redux/reducers/order';
import { TPayOrderSuccess } from '@/redux/actions/order';

export const payOrderUpdateState = (state: TOrdersState, action: TPayOrderSuccess): TOrdersState => ({
  ...state,
  payOrderResponse: action.payload.response,
});
