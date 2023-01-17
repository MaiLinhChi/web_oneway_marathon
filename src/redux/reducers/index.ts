import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import authReducer from './auth';
import profileReducer from './profile';
import registerReducer from './register';
import registerGroupReducer from './register-group';
import uiReducer from './ui';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  authReducer,
  profileReducer,
  registerReducer,
  registerGroupReducer,
  uiReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
