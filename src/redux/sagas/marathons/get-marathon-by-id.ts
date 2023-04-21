import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';
import { getMarathonByIdAction } from '@/redux/actions';
import { getMarathonById, TGetMarathonByIdResponse } from '@/services/api';

// FUNCTION

export function* getMarathonByIdSaga(action: ActionType<typeof getMarathonByIdAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMarathonById, materials);
    const getMarathonByIdResponse: TGetMarathonByIdResponse = response as TGetMarathonByIdResponse;
    yield put(getMarathonByIdAction.success(getMarathonByIdResponse));
    successCallback?.(getMarathonByIdResponse);
  } catch (err) {
    yield put(getMarathonByIdAction.failure(err));
    failedCallback?.(err);
  }
}
