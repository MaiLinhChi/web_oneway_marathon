import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { addOrderAction } from '@/redux/actions';
import { addOrder, TAddOrderResponse } from '@/services/api';

// FUNCTION

export function* addOrderSaga(action: ActionType<typeof addOrderAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(addOrder, materials);
    const addOrderResponse: TAddOrderResponse = response as TAddOrderResponse;
    yield put(addOrderAction.success(addOrderResponse));
    successCallback?.(addOrderResponse);
  } catch (err) {
    yield put(addOrderAction.failure(err));
    failedCallback?.(err);
  }
}
