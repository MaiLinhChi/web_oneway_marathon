import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import profileSaga from './profile';
const rootSaga = function* root(): Generator {
  yield all([fork(authSaga), fork(profileSaga)]);
};

export default rootSaga;
