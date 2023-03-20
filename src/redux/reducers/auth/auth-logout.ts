import { TAuthState } from '@/redux/reducers/auth';
import { TAuthLogoutSuccess } from '@/redux/actions/auth';

export const authLogoutUpdateState = (state: TAuthState, action: TAuthLogoutSuccess): TAuthState => ({
  ...state,
  authLogoutResponse: action.payload.response,
});
