import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import profileSaga from './profile';
import registerGroupSaga from './register-group';

const rootSaga = function* root(): Generator {
  yield all([fork(authSaga), fork(profileSaga), fork(registerGroupSaga)]);
};

export default rootSaga;
