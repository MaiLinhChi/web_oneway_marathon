import { all, takeLatest } from 'redux-saga/effects';

import { authLoginAction } from '@/redux/actions';

import { authLoginSaga } from './auth-login';

export default function* root(): Generator {
  yield all([takeLatest(authLoginAction.request.type, authLoginSaga)]);
}
