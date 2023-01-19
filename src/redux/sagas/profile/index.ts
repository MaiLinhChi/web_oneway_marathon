import { all, takeLatest } from 'redux-saga/effects';

import { getProfileAction, changePasswordProfileAction } from '@/redux/actions';
import { getProfileSaga } from './get-profile';
import { changePasswordProfileSaga } from './change-password-profile';
export default function* root(): Generator {
  yield all([
    takeLatest(getProfileAction.request.type, getProfileSaga),
    takeLatest(changePasswordProfileAction.request.type, changePasswordProfileSaga),
  ]);
}
