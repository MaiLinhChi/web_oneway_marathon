import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import authReducer from './auth';
import uiReducer from './ui';
import profileReducer from './profile';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  authReducer,
  uiReducer,
  profileReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
