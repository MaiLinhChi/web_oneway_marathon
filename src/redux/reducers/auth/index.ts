import { createReducer } from 'deox';

import { TAuthLoginResponse } from '@/services/api/auth';
import { authLoginAction } from '@/redux/actions';
import { authLoginUpdateState } from './auth-login';

export type TAuthState = {
  authLoginResponse?: TAuthLoginResponse;
};

const initialState: TAuthState = {
  authLoginResponse: undefined,
};

const AuthReducer = createReducer(initialState, (handleAction) => [
  handleAction(authLoginAction.success, authLoginUpdateState),
]);

export default AuthReducer;
