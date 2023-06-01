import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { deleteRunnerGroupAction } from '@/redux/actions';
import { deleteRunnerGroup, TDeleteRunnerGroupResponse } from '@/services/registers';

// FUNCTION

export function* deleteRunnerGroupSaga(action: ActionType<typeof deleteRunnerGroupAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(deleteRunnerGroup, materials);
    const deleteRunnerGroupResponse: TDeleteRunnerGroupResponse = response as TDeleteRunnerGroupResponse;
    yield put(deleteRunnerGroupAction.success(deleteRunnerGroupResponse?.data));
    successCallback?.(deleteRunnerGroupResponse);
  } catch (err) {
    yield put(deleteRunnerGroupAction.failure(err));
    failedCallback?.(err);
  }
}
