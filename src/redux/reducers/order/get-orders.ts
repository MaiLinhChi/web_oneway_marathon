import { TOrdersState } from '@/redux/reducers/order';
import { TGetOrdersSuccess } from '@/redux/actions/order';

export const getOrdersUpdateState = (state: TOrdersState, action: TGetOrdersSuccess): TOrdersState => ({
  ...state,
  getOrdersResponse: action.payload.response,
});
