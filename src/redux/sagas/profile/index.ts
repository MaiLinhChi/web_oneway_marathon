import { all, takeLatest } from 'redux-saga/effects';

import { getProfileAction, changePasswordProfileAction, updateProfileAction } from '@/redux/actions';
import { getProfileSaga } from './get-profile';
import { changePasswordProfileSaga } from './change-password-profile';
import { updateProfileSaga } from '@/redux/sagas/profile/update-profile';
export default function* root(): Generator {
  yield all([
    takeLatest(getProfileAction.request.type, getProfileSaga),
    takeLatest(changePasswordProfileAction.request.type, changePasswordProfileSaga),
    takeLatest(updateProfileAction.request.type, updateProfileSaga),
  ]);
}
