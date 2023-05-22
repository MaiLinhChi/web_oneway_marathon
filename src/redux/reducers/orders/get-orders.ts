import { TOrdersState } from '@/redux/reducers/orders';
import { TGetOrdersSuccess } from '@/redux/actions/orders';

export const getOrderslUpdateState = (state: TOrdersState, action: TGetOrdersSuccess): TOrdersState => ({
  ...state,
  getOrdersResponse: action.payload.response,
});
