import { createReducer } from 'deox';

import {
  TRegisterGroupResponse,
  TRunnerRegisterGroupResponse,
  TVertifyRegisterGroupResponse,
} from '@/services/registers/register-group';
import { registerGroupAction, vertifyRegisterGroupAction, runnerRegisterGroupAction } from '@/redux/actions';
import { registerGroupUpdateState } from './register-group';
import { vertifyRegisterGroupUpdateState } from '@/redux/reducers/register-group/vertify-register-group';
import { runnerRegisterGroupUpdateState } from '@/redux/reducers/register-group/runner-register-group';

export type TRegisterGroupState = {
  registerGroupResponse?: TRegisterGroupResponse;
  vertifyRegisterGroupResponse?: TVertifyRegisterGroupResponse;
  runnerRegisterGroupResponse?: TRunnerRegisterGroupResponse;
};

const initialState: TRegisterGroupState = {
  registerGroupResponse: undefined,
  vertifyRegisterGroupResponse: undefined,
  runnerRegisterGroupResponse: undefined,
};

const RegisterGroupReducer = createReducer(initialState, (handleAction) => [
  handleAction(registerGroupAction.success, registerGroupUpdateState),
  handleAction(vertifyRegisterGroupAction.success, vertifyRegisterGroupUpdateState),
  handleAction(runnerRegisterGroupAction.success, runnerRegisterGroupUpdateState),
]);

export default RegisterGroupReducer;
