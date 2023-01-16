import { createReducer } from 'deox';

import { TRegisterGroupResponse } from '@/services/registers/register-group';
import { registerGroupAction } from '@/redux/actions';
import { registerGroupUpdateState } from './register-group';

export type TRegisterGroupState = {
  registerGroupResponse?: TRegisterGroupResponse;
};

const initialState: TRegisterGroupState = {
  registerGroupResponse: undefined,
};

const RegisterGroupReducer = createReducer(initialState, (handleAction) => [
  handleAction(registerGroupAction.success, registerGroupUpdateState),
]);

export default RegisterGroupReducer;
