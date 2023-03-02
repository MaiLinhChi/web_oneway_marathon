import { TPaymentMethodState } from '@/redux/reducers/payments';
import { TGetPaymentSuccessSuccess } from '@/redux/actions/payments';

export const getPaymentSuccessUpdateState = (
  state: TPaymentMethodState,
  action: TGetPaymentSuccessSuccess,
): TPaymentMethodState => ({
  ...state,
  getPaymentSuccessResponse: action.payload.response,
});
