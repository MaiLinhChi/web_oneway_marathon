import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getClubsAction } from '@/redux/actions';
import { getClubs, TGetClubsResponse } from '@/services/api';

// FUNCTION

export function* clubsSaga(action: ActionType<typeof getClubsAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getClubs, materials);
    const clubsResponse: TGetClubsResponse = response as TGetClubsResponse;
    yield put(getClubsAction.success(clubsResponse));
    successCallback?.(clubsResponse);
  } catch (err) {
    yield put(getClubsAction.failure(err));
    failedCallback?.(err);
  }
}
