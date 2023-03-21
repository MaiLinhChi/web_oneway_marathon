import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getOtpPasswordForgotAction } from '@/redux/actions';
import { getOtpPasswordForgot, TGetOtpForgotResponse } from '@/services/api';

// FUNCTION

export function* optPasswordForgotSaga(action: ActionType<typeof getOtpPasswordForgotAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getOtpPasswordForgot, materials);
    const otpResponse: TGetOtpForgotResponse = response as TGetOtpForgotResponse;

    yield put(getOtpPasswordForgotAction.success(otpResponse));
    successCallback?.(otpResponse);
  } catch (err) {
    yield put(getOtpPasswordForgotAction.failure(err));
    failedCallback?.(err);
  }
}
