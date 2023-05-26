import { all, takeLatest } from 'redux-saga/effects';

import { getOrderByIdAction, updateOrderAction, addOrderAction, payOrderAction } from '@/redux/actions';

import { getOrderByIdSaga } from './get-order-by-id';
import { updateOrderSaga } from './update-order';
import { addOrderSaga } from './add-order';
import { payOrderSaga } from './pay-order';

export default function* root(): Generator {
  yield all([
    takeLatest(addOrderAction.request.type, addOrderSaga),
    takeLatest(updateOrderAction.request.type, updateOrderSaga),
    takeLatest(getOrderByIdAction.request.type, getOrderByIdSaga),
    takeLatest(payOrderAction.request.type, payOrderSaga),
  ]);
}
