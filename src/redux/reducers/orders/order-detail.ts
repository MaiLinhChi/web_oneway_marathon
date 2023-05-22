import { TOrdersState } from '@/redux/reducers/orders';
import { TGetOrderDetailSuccess } from '@/redux/actions/orders';

export const getOrderDetailUpdateState = (state: TOrdersState, action: TGetOrderDetailSuccess): TOrdersState => ({
  ...state,
  getOrderDetailResponse: action.payload.response,
});
