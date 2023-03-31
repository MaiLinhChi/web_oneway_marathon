import { all, takeLatest } from 'redux-saga/effects';

import { getMarathonsAction } from '@/redux/actions';

import { getMarathonsSaga } from './get-marathons';

export default function* root(): Generator {
  yield all([takeLatest(getMarathonsAction.request.type, getMarathonsSaga)]);
}
