import { TRegisterGroupState } from '@/redux/reducers/register-group';
import { TRegisterGroupSuccess } from '@/redux/actions/register-group';

export const registerGroupUpdateState = (
  state: TRegisterGroupState,
  action: TRegisterGroupSuccess,
): TRegisterGroupState => ({
  ...state,
  registerGroupResponse: action.payload.response,
});
