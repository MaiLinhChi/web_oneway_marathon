import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { vertifyRegisterGroupAction } from '@/redux/actions';
import { vertifyRegisterGroup, TVertifyRegisterGroupResponse } from '@/services/registers';

// FUNCTION

export function* vertifyRegisterGroupSaga(action: ActionType<typeof vertifyRegisterGroupAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(vertifyRegisterGroup, materials);
    const vertifyRegisterGroupResponse: TVertifyRegisterGroupResponse = response as TVertifyRegisterGroupResponse;
    yield put(vertifyRegisterGroupAction.success(vertifyRegisterGroupResponse?.data));
    successCallback?.(vertifyRegisterGroupResponse);
  } catch (err) {
    yield put(vertifyRegisterGroupAction.failure(err));
    failedCallback?.(err);
  }
}
