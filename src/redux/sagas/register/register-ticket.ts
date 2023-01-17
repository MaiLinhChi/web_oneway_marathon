import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { registerTicketAction } from '@/redux/actions';
import { registerTicket, TRegisterTicketResponse } from '@/services/registers';

// FUNCTION

export function* registerTicketSaga(action: ActionType<typeof registerTicketAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(registerTicket, materials);
    const registerTicketResponse: TRegisterTicketResponse = response as TRegisterTicketResponse;
    yield put(registerTicketAction.success(registerTicketResponse));
    successCallback?.(registerTicketResponse);
  } catch (err) {
    yield put(registerTicketAction.failure(err));
    failedCallback?.(err);
  }
}
