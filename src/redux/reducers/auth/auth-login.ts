import { TAuthState } from '@/redux/reducers/auth';
import { TAuthLoginSuccess } from '@/redux/actions/auth';

export const authLoginUpdateState = (state: TAuthState, action: TAuthLoginSuccess): TAuthState => ({
  ...state,
  authLoginResponse: action.payload.response,
});
