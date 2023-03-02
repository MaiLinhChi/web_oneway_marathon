import { all, takeLatest } from 'redux-saga/effects';

import { getPaymentMethodAction, getPaymentSuccessAction } from '@/redux/actions';
import { getPaymentMethodSaga } from '@/redux/sagas/payments/payment-method';
import { getPaymentSuccessSaga } from '@/redux/sagas/payments/payment-success';
export default function* root(): Generator {
  yield all([takeLatest(getPaymentMethodAction.request.type, getPaymentMethodSaga)]);
  yield all([takeLatest(getPaymentSuccessAction.request.type, getPaymentSuccessSaga)]);
}
