import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { registerGroupAction } from '@/redux/actions';
import { registerGroup, TRegisterGroupResponse } from '@/services/registers';

// FUNCTION

export function* registerGroupSaga(action: ActionType<typeof registerGroupAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(registerGroup, materials);
    const registerGroupResponse: TRegisterGroupResponse = response as TRegisterGroupResponse;
    yield put(registerGroupAction.success(registerGroupResponse?.data));
    successCallback?.(registerGroupResponse);
  } catch (err) {
    yield put(registerGroupAction.failure(err));
    failedCallback?.(err);
  }
}
