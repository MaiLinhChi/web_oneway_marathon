import { all, takeLatest } from 'redux-saga/effects';

import { uploadAction } from '@/redux/actions';
import { uploadSaga } from './upload';

export default function* root(): Generator {
  yield all([takeLatest(uploadAction.request.type, uploadSaga)]);
}
