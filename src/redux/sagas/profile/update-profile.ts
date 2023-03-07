import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { updateProfileAction } from '@/redux/actions';
import { updateProfile, TUpdateProfileResponse } from '@/services/api';

// FUNCTION

export function* updateProfileSaga(action: ActionType<typeof updateProfileAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(updateProfile, materials);
    const updateProfileResponse: TUpdateProfileResponse = response as TUpdateProfileResponse;
    yield put(updateProfileAction.success(updateProfileResponse));
    successCallback?.(updateProfileResponse);
  } catch (err) {
    yield put(updateProfileAction.failure(err));
    failedCallback?.(err);
  }
}
