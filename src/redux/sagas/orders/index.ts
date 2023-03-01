import { all, takeLatest } from 'redux-saga/effects';

import { getOrderDetailAction } from '@/redux/actions';
import { getOrderDetailSaga } from '@/redux/sagas/orders/order-detail';

export default function* root(): Generator {
  yield all([takeLatest(getOrderDetailAction.request.type, getOrderDetailSaga)]);
}
