import { TOrdersState } from '@/redux/reducers/orders';
import { TGetOrderDetailSuccess } from '@/redux/actions/orders';

export const getPaymentSuccessUpdateState = (
  state: TOrdersState,
  action: TGetOrderDetailSuccess,
): TOrdersState => ({
  ...state,
  getOrderDetailResponse: action.payload.response,
});
