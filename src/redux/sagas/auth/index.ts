import { all, takeLatest } from 'redux-saga/effects';

import { authLoginAction, authLogoutAction, authSignUpAction } from '@/redux/actions';

import { authLoginSaga } from './auth-login';
import { authSignUpSaga } from './signup';
import { authLogoutSaga } from './auth-logout';

export default function* root(): Generator {
  yield all([
    takeLatest(authLoginAction.request.type, authLoginSaga),
    takeLatest(authSignUpAction.request.type, authSignUpSaga),
    takeLatest(authLogoutAction.request.type, authLogoutSaga),
  ]);
}
