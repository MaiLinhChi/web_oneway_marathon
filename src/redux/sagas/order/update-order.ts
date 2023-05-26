import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { updateOrderAction } from '@/redux/actions';
import { updateOrder, TUpdateOrderResponse } from '@/services/api';

// FUNCTION

export function* updateOrderSaga(action: ActionType<typeof updateOrderAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(updateOrder, materials);
    const updateOrderResponse: TUpdateOrderResponse = response as TUpdateOrderResponse;
    yield put(updateOrderAction.success(updateOrderResponse));
    successCallback?.(updateOrderResponse);
  } catch (err) {
    yield put(updateOrderAction.failure(err));
    failedCallback?.(err);
  }
}
