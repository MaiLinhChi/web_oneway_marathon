import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { updateTicketAction } from '@/redux/actions';
import { updateTicket, TUpdateTicketResponse } from '@/services/registers';

// FUNCTION

export function* updateTicketSaga(action: ActionType<typeof updateTicketAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(updateTicket, materials);
    const updateTicketResponse: TUpdateTicketResponse = response as TUpdateTicketResponse;
    yield put(updateTicketAction.success(updateTicketResponse));
    successCallback?.(updateTicketResponse);
  } catch (err) {
    yield put(updateTicketAction.failure(err));
    failedCallback?.(err);
  }
}
