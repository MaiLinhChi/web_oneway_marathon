import { all, takeLatest } from 'redux-saga/effects';

import { getMarathonByIdAction } from '@/redux/actions';

import { getMarathonByIdSaga } from './get-marathon-by-id';

export default function* root(): Generator {
  yield all([takeLatest(getMarathonByIdAction.request.type, getMarathonByIdSaga)]);
}
