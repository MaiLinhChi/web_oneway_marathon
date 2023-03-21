import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { changePasswordForgotAction } from '@/redux/actions';
import { changePasswordForgot, TChangePasswordForgotResponse } from '@/services/api';

// FUNCTION

export function* changePasswordForgotSaga(action: ActionType<typeof changePasswordForgotAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(changePasswordForgot, materials);
    const changePassForgotResponse: TChangePasswordForgotResponse = response as TChangePasswordForgotResponse;

    yield put(changePasswordForgotAction.success(changePassForgotResponse));
    successCallback?.(changePassForgotResponse);
  } catch (err) {
    yield put(changePasswordForgotAction.failure(err));
    failedCallback?.(err);
  }
}
