import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getGroupByIdAction } from '@/redux/actions';
import { getGroupById, TGetGroupByIdResponse } from '@/services/registers';

// FUNCTION

export function* getGroupByIdSaga(action: ActionType<typeof getGroupByIdAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getGroupById, materials);
    const getGroupByIdResponse: TGetGroupByIdResponse = response as TGetGroupByIdResponse;
    yield put(getGroupByIdAction.success(getGroupByIdResponse?.data));
    successCallback?.(getGroupByIdResponse);
  } catch (err: any) {
    yield put(getGroupByIdAction.failure(err));
    failedCallback?.(err.response);
  }
}
