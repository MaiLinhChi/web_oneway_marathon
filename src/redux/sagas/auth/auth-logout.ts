import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authLogoutAction } from '@/redux/actions';
import { authLogout, TAuthLogoutResponse } from '@/services/api';

// FUNCTION

export function* authLogoutSaga(action: ActionType<typeof authLogoutAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authLogout, materials);
    const authLogoutResponse: TAuthLogoutResponse = response as TAuthLogoutResponse;
    yield put(authLogoutAction.success(authLogoutResponse));
    successCallback?.(authLogoutResponse);
  } catch (err) {
    yield put(authLogoutAction.failure(err));
    failedCallback?.(err);
  }
}
