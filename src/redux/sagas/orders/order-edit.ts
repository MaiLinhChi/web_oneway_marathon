import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { OrderEditAction } from '@/redux/actions';
import { OrderEdit, TOrderEditResponse } from '@/services/api';

// FUNCTION

export function* editOrderSaga(action: ActionType<typeof OrderEditAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(OrderEdit, materials);
    const orderEditResponse: TOrderEditResponse = response as TOrderEditResponse;
    yield put(OrderEditAction.success(orderEditResponse));
    successCallback?.(orderEditResponse);
  } catch (err) {
    yield put(OrderEditAction.failure(err));
    failedCallback?.(err);
  }
}
