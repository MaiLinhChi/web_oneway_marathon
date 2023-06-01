import { createReducer } from 'deox';

import {
  TGetGroupByIdResponse,
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
  getGroupByIdAction,
} from '@/redux/actions';
import { registerGroupUpdateState } from './register-group';
import { vertifyRegisterGroupUpdateState } from '@/redux/reducers/register-group/vertify-register-group';
import { runnerRegisterGroupUpdateState } from '@/redux/reducers/register-group/runner-register-group';
import { getGroupsUpdateState } from './get-groups';
import { getGroupByIdUpdateState } from './get-group-by-id';

export type TRegisterGroupState = {
  registerGroupResponse?: TRegisterGroupResponse;
  vertifyRegisterGroupResponse?: TVertifyRegisterGroupResponse;
  runnerRegisterGroupResponse?: TRunnerRegisterGroupResponse;
  listGroupsResponse?: TGetGroupsResponse;
  groupDetailResponse?: TGetGroupByIdResponse;
};

const initialState: TRegisterGroupState = {
  registerGroupResponse: undefined,
  vertifyRegisterGroupResponse: undefined,
  runnerRegisterGroupResponse: undefined,
  listGroupsResponse: undefined,
  groupDetailResponse: undefined,
};

const RegisterGroupReducer = createReducer(initialState, (handleAction) => [
  handleAction(registerGroupAction.success, registerGroupUpdateState),
  handleAction(vertifyRegisterGroupAction.success, vertifyRegisterGroupUpdateState),
  handleAction(runnerRegisterGroupAction.success, runnerRegisterGroupUpdateState),
  handleAction(getGroupsAction.success, getGroupsUpdateState),
  handleAction(getGroupByIdAction.success, getGroupByIdUpdateState),
]);

export default RegisterGroupReducer;
