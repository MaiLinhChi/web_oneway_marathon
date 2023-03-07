import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getRaceAction } from '@/redux/actions';
import { getRace, TGetRaceResponse } from '@/services/api';

// FUNCTION

export function* getRaceSaga(action: ActionType<typeof getRaceAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getRace, materials);
    const getRaceResponse: TGetRaceResponse = response as TGetRaceResponse;
    yield put(getRaceAction.success(getRaceResponse));
    successCallback?.(getRaceResponse);
  } catch (err) {
    yield put(getRaceAction.failure(err));
    failedCallback?.(err);
  }
}
