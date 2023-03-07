import { all, takeLatest } from 'redux-saga/effects';

import { getRaceAction, detailRaceAction } from '@/redux/actions';
import { getRaceSaga } from './get-race';
import { detailRaceSaga } from './detail';
export default function* root(): Generator {
  yield all([
    takeLatest(getRaceAction.request.type, getRaceSaga),
    takeLatest(detailRaceAction.request.type, detailRaceSaga),
  ]);
}
