import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getProfileAction } from '@/redux/actions';
import { getProfile, TGetProfileResponse } from '@/services/api';

// FUNCTION

export function* getProfileSaga(action: ActionType<typeof getProfileAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getProfile, materials);
    const getProfileResponse: TGetProfileResponse = response as TGetProfileResponse;
    yield put(getProfileAction.success(getProfileResponse));
    successCallback?.(getProfileResponse);
  } catch (err) {
    yield put(getProfileAction.failure(err));
    failedCallback?.(err);
  }
}
