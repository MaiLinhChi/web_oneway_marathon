import { all, takeLatest } from 'redux-saga/effects';

import { getPaymentMethodAction } from '@/redux/actions';
import { getPaymentMethodSaga } from '@/redux/sagas/payments/payment-method';
export default function* root(): Generator {
  yield all([takeLatest(getPaymentMethodAction.request.type, getPaymentMethodSaga)]);
}
