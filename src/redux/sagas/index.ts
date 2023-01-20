import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import profileSaga from './profile';
import registerSaga from './register';
import registerGroupSaga from './register-group';
import uploadSaga from './upload';
import addressSaga from './address';

const rootSaga = function* root(): Generator {
  yield all([
    fork(authSaga),
    fork(profileSaga),
    fork(registerSaga),
    fork(registerGroupSaga),
    fork(uploadSaga),
    fork(addressSaga),
  ]);
};

export default rootSaga;
