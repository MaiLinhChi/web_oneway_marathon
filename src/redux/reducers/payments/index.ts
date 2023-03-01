import { createReducer } from 'deox';
import { getPaymentMethodAction } from '@/redux/actions';
import { getPaymentMethodUpdateState } from '@/redux/reducers/payments/payment-method';
import { TGetPaymentMethodResponse } from '@/services/api';

export type TPaymentMethodState = {
  getPaymentMethodResponse?: TGetPaymentMethodResponse;
};

const initialState: TPaymentMethodState = {
  getPaymentMethodResponse: undefined,
};

const PaymentMethodReducer = createReducer(initialState, (handleAction) => [
  handleAction(getPaymentMethodAction.success, getPaymentMethodUpdateState),
]);

export default PaymentMethodReducer;
