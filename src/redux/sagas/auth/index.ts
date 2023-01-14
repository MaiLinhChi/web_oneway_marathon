import { all, takeLatest } from 'redux-saga/effects';

import { authLoginAction, authSignUpAction } from '@/redux/actions';

import { authLoginSaga } from './auth-login';
import { authSignUpSaga } from './signup';

export default function* root(): Generator {
  yield all([
    takeLatest(authLoginAction.request.type, authLoginSaga),
    takeLatest(authSignUpAction.request.type, authSignUpSaga),
  ]);
}
