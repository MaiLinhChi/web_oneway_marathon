import { all, takeLatest } from 'redux-saga/effects';

import { getTicketDetailAction, getTicketsAction, registerTicketAction, updateTicketAction } from '@/redux/actions';

import { getTicketsSaga } from './get-tickets';
import { registerTicketSaga } from './register-ticket';
import { updateTicketSaga } from './update-ticket';
import { getTicketDetailSaga } from './ticket-detail';

export default function* root(): Generator {
  yield all([
    takeLatest(getTicketsAction.request.type, getTicketsSaga),
    takeLatest(registerTicketAction.request.type, registerTicketSaga),
    takeLatest(updateTicketAction.request.type, updateTicketSaga),
    takeLatest(getTicketDetailAction.request.type, getTicketDetailSaga),
  ]);
}
