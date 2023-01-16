import { all, takeLatest } from 'redux-saga/effects';

import { registerGroupAction } from '@/redux/actions';

import { registerGroupSaga } from './register-group';

export default function* root(): Generator {
  yield all([takeLatest(registerGroupAction.request.type, registerGroupSaga)]);
}
