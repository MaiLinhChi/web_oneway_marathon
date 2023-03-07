import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { detailRaceAction } from '@/redux/actions';
import { detailRace, TDetailRaceResponse } from '@/services/api';

// FUNCTION

export function* detailRaceSaga(action: ActionType<typeof detailRaceAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(detailRace, materials);
    const detailRaceResponse: TDetailRaceResponse = response as TDetailRaceResponse;
    yield put(detailRaceAction.success(detailRaceResponse));
    successCallback?.(detailRaceResponse);
  } catch (err) {
    yield put(detailRaceAction.failure(err));
    failedCallback?.(err);
  }
}
