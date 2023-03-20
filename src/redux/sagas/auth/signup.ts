import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authSignUpAction } from '@/redux/actions';
import { authSignUp, TAuthSignUpResponse } from '@/services/api';

// FUNCTION

export function* authSignUpSaga(action: ActionType<typeof authSignUpAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authSignUp, materials);
    const authSignUpResponse: TAuthSignUpResponse = response as TAuthSignUpResponse;

    yield put(authSignUpAction.success(authSignUpResponse));
    successCallback?.(authSignUpResponse);
  } catch (err) {
    yield put(authSignUpAction.failure(err));
    failedCallback?.(err);
  }
}
