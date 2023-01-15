import { TProfileState } from '@/redux/reducers/profile';
import { TUpdateProfileSuccess } from '@/redux/actions/profile';

export const updateProfileUpdateState = (state: TProfileState, action: TUpdateProfileSuccess): TProfileState => ({
  ...state,
  updateProfileResponse: action.payload.response,
});
