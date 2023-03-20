import { createReducer } from 'deox';

import { TGetProfileResponse } from '@/services/api/profile';
import { changePasswordProfileAction, getProfileAction, updateProfileAction } from '@/redux/actions';
import { changePasswordProfileUpdateState } from './change-password-profile';
import { getProfileUpdateState } from './get-profile';
import { updateProfileUpdateState } from './update-profile';

export type TProfileState = {
  getProfileResponse?: TGetProfileResponse;
};

const initialState: TProfileState = {
  getProfileResponse: undefined,
};

const ProfileReducer = createReducer(initialState, (handleAction) => [
  handleAction(changePasswordProfileAction.success, changePasswordProfileUpdateState),
  handleAction(getProfileAction.success, getProfileUpdateState),
  handleAction(updateProfileAction.success, updateProfileUpdateState),
]);

export default ProfileReducer;
