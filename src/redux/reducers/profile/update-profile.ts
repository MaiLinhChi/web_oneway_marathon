import { TProfileState } from '@/redux/reducers/profile';
import { TUpdateProfileSuccess } from '@/redux/actions/profile';

export const updateProfileUpdateState = (state: TProfileState, action: TUpdateProfileSuccess): any => ({
  ...state,
  updateProfileResponse: action.payload.response,
});
