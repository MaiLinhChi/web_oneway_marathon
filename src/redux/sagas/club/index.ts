import { all, takeLatest } from 'redux-saga/effects';

import { getClubsAction } from '@/redux/actions';
import { clubsSaga } from './club';

export default function* root(): Generator {
  yield all([takeLatest(getClubsAction.request.type, clubsSaga)]);
}
