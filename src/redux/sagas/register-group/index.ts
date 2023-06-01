import { all, takeLatest } from 'redux-saga/effects';

import {
  registerGroupAction,
  vertifyRegisterGroupAction,
  runnerRegisterGroupAction,
  getGroupsAction,
  deleteRunnerGroupAction,
  getGroupByIdAction,
} from '@/redux/actions';

import { registerGroupSaga } from './register-group';
import { vertifyRegisterGroupSaga } from '@/redux/sagas/register-group/vertify-register-group';
import { runnerRegisterGroupSaga } from '@/redux/sagas/register-group/runner-register-group';
import { getGroupsSaga } from './get-groups';
import { deleteRunnerGroupSaga } from './delete-runner-group';
import { getGroupByIdSaga } from './get-group-by-id';

export default function* root(): Generator {
  yield all([
    takeLatest(registerGroupAction.request.type, registerGroupSaga),
    takeLatest(vertifyRegisterGroupAction.request.type, vertifyRegisterGroupSaga),
    takeLatest(runnerRegisterGroupAction.request.type, runnerRegisterGroupSaga),
    takeLatest(getGroupsAction.request.type, getGroupsSaga),
    takeLatest(deleteRunnerGroupAction.request.type, deleteRunnerGroupSaga),
    takeLatest(getGroupByIdAction.request.type, getGroupByIdSaga),
  ]);
}
