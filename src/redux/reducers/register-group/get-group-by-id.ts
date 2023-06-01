import { TRegisterGroupState } from '@/redux/reducers/register-group';
import { TGetGroupByIdSuccess } from '@/redux/actions/register-group';

export const getGroupByIdUpdateState = (
  state: TRegisterGroupState,
  action: TGetGroupByIdSuccess,
): TRegisterGroupState => ({
  ...state,
  groupDetailResponse: action.payload.response,
});
