import { TRegisterGroupState } from '@/redux/reducers/register-group';
import { TRegisterGroupSuccess } from '@/redux/actions/register-group';

export const vertifyRegisterGroupUpdateState = (
  state: TRegisterGroupState,
  action: TRegisterGroupSuccess,
): TRegisterGroupState => ({
  ...state,
  vertifyRegisterGroupResponse: action.payload.response,
});
