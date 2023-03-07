import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { updatePromotionAction } from '@/redux/actions';
import { updatePromotion, TUpdatePromotionResponse } from '@/services/api';

// FUNCTION

export function* updatePromotionSaga(action: ActionType<typeof updatePromotionAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(updatePromotion, materials);
    const updatePromotionResponse: TUpdatePromotionResponse = response as TUpdatePromotionResponse;
    yield put(updatePromotionAction.success(updatePromotionResponse));
    successCallback?.(updatePromotionResponse);
  } catch (err) {
    yield put(updatePromotionAction.failure(err));
    failedCallback?.(err);
  }
}
