import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import profileSaga from './profile';
import registerSaga from './register';
import registerGroupSaga from './register-group';

const rootSaga = function* root(): Generator {
  yield all([fork(authSaga), fork(profileSaga), fork(registerSaga), fork(registerGroupSaga)]);
};

export default rootSaga;
