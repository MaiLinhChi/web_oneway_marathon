import { TProfileState } from '@/redux/reducers/profile';
import { TGetProfileSuccess } from '@/redux/actions/profile';

export const getProfileUpdateState = (state: TProfileState, action: TGetProfileSuccess): TProfileState => ({
  ...state,
  getProfileResponse: action.payload.response,
});
