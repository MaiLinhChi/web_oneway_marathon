import { TProfileState } from '@/redux/reducers/profile';
import { TChangePasswordProfileSuccess } from '@/redux/actions/profile';

export const changePasswordProfileUpdateState = (
  state: TProfileState,
  action: TChangePasswordProfileSuccess,
): TProfileState => ({
  ...state,
  changePasswordProfileResponse: action.payload.response,
});
