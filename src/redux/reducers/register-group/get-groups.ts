import { TRegisterGroupState } from '@/redux/reducers/register-group';
import { TRegisterGroupSuccess } from '@/redux/actions/register-group';

export const getGroupsUpdateState = (
  state: TRegisterGroupState,
  action: TRegisterGroupSuccess,
): TRegisterGroupState => ({
  ...state,
  listGroupsResponse: action.payload.response,
});
