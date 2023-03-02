import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getPaymentSuccessAction } from '@/redux/actions';
import { getPaymentSuccess, TGetPaymentSuccessResponse } from '@/services/api';

// FUNCTION

export function* getPaymentSuccessSaga(action: ActionType<typeof getPaymentSuccessAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getPaymentSuccess, materials);
    const getPaymentSuccessResponse: TGetPaymentSuccessResponse = response as TGetPaymentSuccessResponse;
    yield put(getPaymentSuccessAction.success(getPaymentSuccessResponse));
    successCallback?.(getPaymentSuccessResponse);
  } catch (err) {
    yield put(getPaymentSuccessAction.failure(err));
    failedCallback?.(err);
  }
}
