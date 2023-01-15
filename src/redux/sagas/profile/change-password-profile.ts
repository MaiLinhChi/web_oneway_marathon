import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { changePasswordProfileAction } from '@/redux/actions';
import { changePasswordProfile, TChangePasswordProfileResponse } from '@/services/api';

// FUNCTION

export function* changePasswordProfileSaga(action: ActionType<typeof changePasswordProfileAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(changePasswordProfile, materials);
    const changePasswordProfileResponse: TChangePasswordProfileResponse = response as TChangePasswordProfileResponse;
    yield put(changePasswordProfileAction.success(changePasswordProfileResponse));
    successCallback?.(changePasswordProfileResponse);
  } catch (err) {
    yield put(changePasswordProfileAction.failure(err));
    failedCallback?.(err);
  }
}
