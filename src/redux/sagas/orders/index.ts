import { all, takeLatest } from 'redux-saga/effects';

import { getOrderDetailAction, getOrdersAction, OrderEditAction } from '@/redux/actions';
import { getOrderDetailSaga } from '@/redux/sagas/orders/order-detail';
import { editOrderSaga } from '@/redux/sagas/orders/order-edit';
import { getOrdersSaga } from './get-orders';

export default function* root(): Generator {
  yield all([
    takeLatest(getOrdersAction.request.type, getOrdersSaga),
    takeLatest(getOrderDetailAction.request.type, getOrderDetailSaga),
    takeLatest(OrderEditAction.request.type, editOrderSaga),
  ]);
}
