import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { runnerRegisterGroupAction } from '@/redux/actions';
import { runnerRegisterGroup, TRunnerRegisterGroupResponse } from '@/services/registers';

// FUNCTION

export function* runnerRegisterGroupSaga(action: ActionType<typeof runnerRegisterGroupAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(runnerRegisterGroup, materials);
    const runnerRegisterGroupResponse: TRunnerRegisterGroupResponse = response as TRunnerRegisterGroupResponse;
    yield put(runnerRegisterGroupAction.success(runnerRegisterGroupResponse?.data));
    successCallback?.(runnerRegisterGroupResponse);
  } catch (err) {
    yield put(runnerRegisterGroupAction.failure(err));
    failedCallback?.(err);
  }
}
