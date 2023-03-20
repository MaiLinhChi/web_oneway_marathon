import { all, takeLatest } from 'redux-saga/effects';

import { registerGroupAction, vertifyRegisterGroupAction, runnerRegisterGroupAction } from '@/redux/actions';

import { registerGroupSaga } from './register-group';
import { vertifyRegisterGroupSaga } from '@/redux/sagas/register-group/vertify-register-group';
import { runnerRegisterGroupSaga } from '@/redux/sagas/register-group/runner-register-group';

export default function* root(): Generator {
  yield all([
    takeLatest(registerGroupAction.request.type, registerGroupSaga),
    takeLatest(vertifyRegisterGroupAction.request.type, vertifyRegisterGroupSaga),
    takeLatest(runnerRegisterGroupAction.request.type, runnerRegisterGroupSaga),
  ]);
}
