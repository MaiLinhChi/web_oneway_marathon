import { TOrderDetailState } from '@/redux/reducers/orders';
import { TGetOrderDetailSuccess } from '@/redux/actions/orders';

export const getPaymentSuccessUpdateState = (
  state: TOrderDetailState,
  action: TGetOrderDetailSuccess,
): TOrderDetailState => ({
  ...state,
  getOrderDetailResponse: action.payload.response,
});
