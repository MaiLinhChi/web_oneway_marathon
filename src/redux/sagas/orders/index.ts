import { all, takeLatest } from 'redux-saga/effects';

import { getOrderDetailAction, OrderEditAction } from '@/redux/actions';
import { getOrderDetailSaga } from '@/redux/sagas/orders/order-detail';
import { editOrderSaga } from '@/redux/sagas/orders/order-edit';

export default function* root(): Generator {
  yield all([
    takeLatest(getOrderDetailAction.request.type, getOrderDetailSaga),
    takeLatest(OrderEditAction.request.type, editOrderSaga),
  ]);
}
