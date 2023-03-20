import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { uploadAction } from '@/redux/actions';
import { upload, TUploadResponse } from '@/services/api';

// FUNCTION

export function* uploadSaga(action: ActionType<typeof uploadAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(upload, materials);
    const uploadResponse: TUploadResponse = response as TUploadResponse;
    yield put(uploadAction.success(uploadResponse));
    successCallback?.(uploadResponse);
  } catch (err) {
    yield put(uploadAction.failure(err));
    failedCallback?.(err);
  }
}
