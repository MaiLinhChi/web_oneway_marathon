import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import profileSaga from './profile';
import registerSaga from './register';
import registerGroupSaga from './register-group';
import uploadSaga from './upload';
import addressSaga from './address';
import getRaceSaga from './races';
import getOrderDetailSaga from '@/redux/sagas/orders';
import updatePromotionSaga from '@/redux/sagas/promotion';
import getPaymentMethodSaga from '@/redux/sagas/payments';
import forgotPassword from '@/redux/sagas/forgot-password';

const rootSaga = function* root(): Generator {
  yield all([
    fork(authSaga),
    fork(profileSaga),
    fork(registerSaga),
    fork(registerGroupSaga),
    fork(uploadSaga),
    fork(addressSaga),
    fork(getRaceSaga),
    fork(getOrderDetailSaga),
    fork(updatePromotionSaga),
    fork(getPaymentMethodSaga),
    fork(forgotPassword),
  ]);
};

export default rootSaga;
