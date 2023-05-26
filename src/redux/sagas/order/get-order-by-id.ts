import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';
import { getOrderByIdAction } from '@/redux/actions';
import { getOrderById, TGetOrderByIdResponse } from '@/services/api';

// FUNCTION

export function* getOrderByIdSaga(action: ActionType<typeof getOrderByIdAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getOrderById, materials);
    const getOrderByIdResponse: TGetOrderByIdResponse = response as TGetOrderByIdResponse;
    yield put(getOrderByIdAction.success(getOrderByIdResponse));
    successCallback?.(getOrderByIdResponse);
  } catch (err) {
    yield put(getOrderByIdAction.failure(err));
    failedCallback?.(err);
  }
}
