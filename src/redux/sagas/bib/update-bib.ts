import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { UpdateBibAction } from '@/redux/actions';
import { UpdateBib, TUpdateBibResponse } from '@/services/api';

// FUNCTION

export function* updateBibSaga(action: ActionType<typeof UpdateBibAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(UpdateBib, materials);
    const updateBibResponse: TUpdateBibResponse = response as TUpdateBibResponse;
    yield put(UpdateBibAction.success(updateBibResponse));
    successCallback?.(updateBibResponse);
  } catch (err) {
    yield put(UpdateBibAction.failure(err));
    failedCallback?.(err);
  }
}
