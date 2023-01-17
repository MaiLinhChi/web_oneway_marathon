import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getTicketsAction } from '@/redux/actions';
import { getTickets, TGetTicketsResponse } from '@/services/registers';

// FUNCTION

export function* getTicketsSaga(action: ActionType<typeof getTicketsAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getTickets, materials);
    const getTicketsResponse: TGetTicketsResponse = response as TGetTicketsResponse;
    yield put(getTicketsAction.success(getTicketsResponse));
    successCallback?.(getTicketsResponse);
  } catch (err) {
    yield put(getTicketsAction.failure(err));
    failedCallback?.(err);
  }
}
