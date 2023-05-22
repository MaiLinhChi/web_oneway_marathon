import { createReducer } from 'deox';

import {
  TGetGroupsResponse,
  TRegisterGroupResponse,
  TRunnerRegisterGroupResponse,
  TVertifyRegisterGroupResponse,
} from '@/services/registers/register-group';
import {
  registerGroupAction,
  vertifyRegisterGroupAction,
  runnerRegisterGroupAction,
  getGroupsAction,
} from '@/redux/actions';
import { registerGroupUpdateState } from './register-group';
import { vertifyRegisterGroupUpdateState } from '@/redux/reducers/register-group/vertify-register-group';
import { runnerRegisterGroupUpdateState } from '@/redux/reducers/register-group/runner-register-group';
import { getGroupsUpdateState } from './get-groups';

export type TRegisterGroupState = {
  registerGroupResponse?: TRegisterGroupResponse;
  vertifyRegisterGroupResponse?: TVertifyRegisterGroupResponse;
  runnerRegisterGroupResponse?: TRunnerRegisterGroupResponse;
  listGroupsResponse?: TGetGroupsResponse;
};

const initialState: TRegisterGroupState = {
  registerGroupResponse: undefined,
  vertifyRegisterGroupResponse: undefined,
  runnerRegisterGroupResponse: undefined,
  listGroupsResponse: undefined,
};

const RegisterGroupReducer = createReducer(initialState, (handleAction) => [
  handleAction(registerGroupAction.success, registerGroupUpdateState),
  handleAction(vertifyRegisterGroupAction.success, vertifyRegisterGroupUpdateState),
  handleAction(runnerRegisterGroupAction.success, runnerRegisterGroupUpdateState),
  handleAction(getGroupsAction.success, getGroupsUpdateState),
]);

export default RegisterGroupReducer;
