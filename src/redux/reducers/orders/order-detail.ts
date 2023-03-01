import { TOrderDetailState } from '@/redux/reducers/orders';
import { TGetOrderDetailSuccess } from '@/redux/actions/orders';

export const getOrderDetailUpdateState = (
  state: TOrderDetailState,
  action: TGetOrderDetailSuccess,
): TOrderDetailState => ({
  ...state,
  getOrderDetailResponse: action.payload.response,
});
