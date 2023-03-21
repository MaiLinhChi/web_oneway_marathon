import { all, takeLatest } from 'redux-saga/effects';

import { changePasswordForgotAction, getOtpPasswordForgotAction } from '@/redux/actions';

import { changePasswordForgotSaga } from './change-password-forgot';
import { optPasswordForgotSaga } from './otp-password-forgot';

export default function* root(): Generator {
  yield all([
    takeLatest(changePasswordForgotAction.request.type, changePasswordForgotSaga),
    takeLatest(getOtpPasswordForgotAction.request.type, optPasswordForgotSaga),
  ]);
}
