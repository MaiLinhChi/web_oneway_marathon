import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import authReducer from './auth';
import uiReducer from './ui';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  authReducer,
  uiReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
