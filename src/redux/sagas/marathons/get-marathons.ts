import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMarathonsAction } from '@/redux/actions';
import { getMarathons, TGetMarathonResponse } from '@/services/api';

// FUNCTION

export function* getMarathonsSaga(action: ActionType<typeof getMarathonsAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMarathons, materials);
    const getMarathonsResponse: TGetMarathonResponse = response as TGetMarathonResponse;
    yield put(getMarathonsAction.success(getMarathonsResponse));
    successCallback?.(getMarathonsResponse);
  } catch (err) {
    yield put(getMarathonsAction.failure(err));
    failedCallback?.(err);
  }
}
