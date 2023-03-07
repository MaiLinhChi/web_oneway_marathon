import { TPaymentMethodState } from '@/redux/reducers/payments';
import { TGetPaymentMethodSuccess } from '@/redux/actions/payments';

export const getPaymentMethodUpdateState = (
  state: TPaymentMethodState,
  action: TGetPaymentMethodSuccess,
): TPaymentMethodState => ({
  ...state,
  getPaymentMethodResponse: action.payload.response,
});
