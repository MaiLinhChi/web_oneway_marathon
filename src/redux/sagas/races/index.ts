import { all, takeLatest } from 'redux-saga/effects';

import { getRaceAction } from '@/redux/actions';
import { getRaceSaga } from './get-race';
export default function* root(): Generator {
  yield all([takeLatest(getRaceAction.request.type, getRaceSaga)]);
}
