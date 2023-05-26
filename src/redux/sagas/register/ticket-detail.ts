import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getTicketDetailAction } from '@/redux/actions';
import { getTicketDetail, TGetTicketDetailResponse } from '@/services/registers';

// FUNCTION

export function* getTicketDetailSaga(action: ActionType<typeof getTicketDetailAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getTicketDetail, materials);
    const getTicketDetailResponse: TGetTicketDetailResponse = response as TGetTicketDetailResponse;
    yield put(getTicketDetailAction.success(getTicketDetailResponse));
    successCallback?.(getTicketDetailResponse);
  } catch (err) {
    yield put(getTicketDetailAction.failure(err));
    failedCallback?.(err);
  }
}
