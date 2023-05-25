import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getBibDetailAction } from '@/redux/actions';
import { getBibDetail, TGetBibDetailResponse } from '@/services/api/bib';

// FUNCTION

export function* getBibDetailSaga(action: ActionType<typeof getBibDetailAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getBibDetail, materials);
    const getBibDetailResponse: TGetBibDetailResponse = response as TGetBibDetailResponse;
    yield put(getBibDetailAction.success(getBibDetailResponse));
    successCallback?.(getBibDetailResponse);
  } catch (err) {
    yield put(getBibDetailAction.failure(err));
    failedCallback?.(err);
  }
}
