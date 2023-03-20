import { all, takeLatest } from 'redux-saga/effects';

import { updatePromotionAction } from '@/redux/actions';
import { updatePromotionSaga } from '@/redux/sagas/promotion/promotion';
export default function* root(): Generator {
  yield all([takeLatest(updatePromotionAction.request.type, updatePromotionSaga)]);
}
