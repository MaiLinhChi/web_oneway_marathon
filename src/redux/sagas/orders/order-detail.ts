import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getOrderDetailAction } from '@/redux/actions';
import { getOrderDetail, TGetOrderDetailResponse } from '@/services/api/orders';

// FUNCTION

export function* getOrderDetailSaga(action: ActionType<typeof getOrderDetailAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getOrderDetail, materials);
    const getOrderDetailResponse: TGetOrderDetailResponse = response as TGetOrderDetailResponse;
    yield put(getOrderDetailAction.success(getOrderDetailResponse));
    successCallback?.(getOrderDetailResponse);
  } catch (err) {
    yield put(getOrderDetailAction.failure(err));
    failedCallback?.(err);
  }
}
