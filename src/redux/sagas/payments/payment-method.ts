import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getPaymentMethodAction } from '@/redux/actions';
import { getPaymentMethod, TGetPaymentMethodResponse } from '@/services/api';

// FUNCTION

export function* getPaymentMethodSaga(action: ActionType<typeof getPaymentMethodAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getPaymentMethod, materials);
    const getPaymentMethodResponse: TGetPaymentMethodResponse = response as TGetPaymentMethodResponse;
    yield put(getPaymentMethodAction.success(getPaymentMethodResponse));
    successCallback?.(getPaymentMethodResponse);
  } catch (err) {
    yield put(getPaymentMethodAction.failure(err));
    failedCallback?.(err);
  }
}
