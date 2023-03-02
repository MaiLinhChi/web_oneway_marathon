import { createReducer } from 'deox';
import { getPaymentMethodAction, getPaymentSuccessAction } from '@/redux/actions';
import { getPaymentMethodUpdateState } from '@/redux/reducers/payments/payment-method';
import { getPaymentSuccessUpdateState } from '@/redux/reducers/payments/payment-success';
import { TGetPaymentMethodResponse, TGetPaymentSuccessResponse } from '@/services/api';

export type TPaymentMethodState = {
  getPaymentMethodResponse?: TGetPaymentMethodResponse;
  getPaymentSuccessResponse?: TGetPaymentSuccessResponse;
};

const initialState: TPaymentMethodState = {
  getPaymentMethodResponse: undefined,
  getPaymentSuccessResponse: undefined,
};

const PaymentMethodReducer = createReducer(initialState, (handleAction) => [
  handleAction(getPaymentMethodAction.success, getPaymentMethodUpdateState),
  handleAction(getPaymentSuccessAction.success, getPaymentSuccessUpdateState),
]);

export default PaymentMethodReducer;
