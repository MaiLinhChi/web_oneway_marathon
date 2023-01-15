import { all, takeLatest } from 'redux-saga/effects';

import { getProfileAction } from '@/redux/actions';
import { getProfileSaga } from './get-profile';
export default function* root(): Generator {
  yield all([takeLatest(getProfileAction.request.type, getProfileSaga)]);
}
