import { all, takeLatest } from 'redux-saga/effects';

import { getTicketsAction, registerTicketAction, updateTicketAction } from '@/redux/actions';

import { getTicketsSaga } from './get-tickets';
import { registerTicketSaga } from './register-ticket';
import { updateTicketSaga } from './update-ticket';

export default function* root(): Generator {
  yield all([
    takeLatest(getTicketsAction.request.type, getTicketsSaga),
    takeLatest(registerTicketAction.request.type, registerTicketSaga),
    takeLatest(updateTicketAction.request.type, updateTicketSaga),
  ]);
}
