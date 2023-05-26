import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { payOrderAction } from '@/redux/actions';
import { payOrder, TPayOrderResponse } from '@/services/api';

// FUNCTION

export function* payOrderSaga(action: ActionType<typeof payOrderAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(payOrder, materials);
    const payOrderResponse: TPayOrderResponse = response as TPayOrderResponse;
    yield put(payOrderAction.success(payOrderResponse));
    successCallback?.(payOrderResponse);
  } catch (err) {
    yield put(payOrderAction.failure(err));
    failedCallback?.(err);
  }
}
