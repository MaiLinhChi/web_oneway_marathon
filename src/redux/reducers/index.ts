import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import authReducer from './auth';
import profileReducer from './profile';
import registerReducer from './register';
import registerGroupReducer from './register-group';
import uiReducer from './ui';
import uploadReducer from './upload';
import addressReducer from './address/address';
import raceReducer from './races';
import promotionReducer from './promotion';
import paymentMethodReducer from './payments';
import ordersReducer from './order';
import clubsReducer from './club/club';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  authReducer,
  paymentMethodReducer,
  profileReducer,
  registerReducer,
  registerGroupReducer,
  uiReducer,
  uploadReducer,
  addressReducer,
  raceReducer,
  promotionReducer,
  ordersReducer,
  clubsReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
