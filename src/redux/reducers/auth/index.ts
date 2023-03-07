import { createReducer } from 'deox';

import { TAuthLoginResponse, TAuthLogoutResponse } from '@/services/api/auth';
import { authLoginAction, authLogoutAction } from '@/redux/actions';
import { authLoginUpdateState } from './auth-login';
import { authLogoutUpdateState } from './auth-logout';

export type TAuthState = {
  authLoginResponse?: TAuthLoginResponse;
  authLogoutResponse?: TAuthLogoutResponse;
};

const initialState: TAuthState = {
  authLoginResponse: undefined,
  authLogoutResponse: undefined,
};

const AuthReducer = createReducer(initialState, (handleAction) => [
  handleAction(authLoginAction.success, authLoginUpdateState),
  handleAction(authLogoutAction.success, authLogoutUpdateState),
]);

export default AuthReducer;
