import { all, takeLatest } from 'redux-saga/effects';

import { addressAction, cityAction, districtAction, wardAction } from '@/redux/actions';
import { addressSaga, citySaga, districtSaga, wardSaga } from './address';

export default function* root(): Generator {
  yield all([
    takeLatest(addressAction.request.type, addressSaga),
    takeLatest(cityAction.request.type, citySaga),
    takeLatest(districtAction.request.type, districtSaga),
    takeLatest(wardAction.request.type, wardSaga),
  ]);
}
