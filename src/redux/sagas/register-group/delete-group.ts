import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { deleteGroupAction } from '@/redux/actions';
import { deleteGroup, TDeleteGroupResponse } from '@/services/registers';

// FUNCTION

export function* deleteGroupSaga(action: ActionType<typeof deleteGroupAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(deleteGroup, materials);
    const deleteGroupResponse: TDeleteGroupResponse = response as TDeleteGroupResponse;
    yield put(deleteGroupAction.success(deleteGroupResponse?.data));
    successCallback?.(deleteGroupResponse);
  } catch (err) {
    yield put(deleteGroupAction.failure(err));
    failedCallback?.(err);
  }
}
