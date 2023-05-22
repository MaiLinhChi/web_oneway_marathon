import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getOrdersAction } from '@/redux/actions';
import { getOrders, TGetOrdersResponse } from '@/services/api/orders';

// FUNCTION

export function* getOrdersSaga(action: ActionType<typeof getOrdersAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getOrders, materials);
    const getOrdersResponse: TGetOrdersResponse = response as TGetOrdersResponse;
    yield put(getOrdersAction.success(getOrdersResponse));
    successCallback?.(getOrdersResponse);
  } catch (err) {
    yield put(getOrdersAction.failure(err));
    failedCallback?.(err);
  }
}
