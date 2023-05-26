import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getGroupsAction } from '@/redux/actions';
import { getGroups, TGetGroupsResponse } from '@/services/registers';

// FUNCTION

export function* getGroupsSaga(action: ActionType<typeof getGroupsAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getGroups, materials);
    const getGroupsResponse: TGetGroupsResponse = response as TGetGroupsResponse;
    yield put(getGroupsAction.success(getGroupsResponse?.data));
    successCallback?.(getGroupsResponse);
  } catch (err) {
    yield put(getGroupsAction.failure(err));
    failedCallback?.(err);
  }
}
