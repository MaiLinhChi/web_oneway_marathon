import { all, takeLatest } from 'redux-saga/effects';

import { getTicketsAction, registerTicketAction } from '@/redux/actions';

import { getTicketsSaga } from './get-tickets';
import { registerTicketSaga } from './register-ticket';

export default function* root(): Generator {
  yield all([
    takeLatest(getTicketsAction.request.type, getTicketsSaga),
    takeLatest(registerTicketAction.request.type, registerTicketSaga),
  ]);
}
