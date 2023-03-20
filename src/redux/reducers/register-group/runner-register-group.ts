import { TRegisterGroupState } from '@/redux/reducers/register-group';
import { TRegisterGroupSuccess } from '@/redux/actions/register-group';

export const runnerRegisterGroupUpdateState = (
  state: TRegisterGroupState,
  action: TRegisterGroupSuccess,
): TRegisterGroupState => ({
  ...state,
  runnerRegisterGroupResponse: action.payload.response,
});
