import { createReducer } from 'deox';

import { TUploadResponse } from '@/services/api/upload';
import { uploadAction } from '@/redux/actions';
import { uploadUpdateState } from './upload';

export type TUploadState = {
  uploadResponse?: TUploadResponse;
};

const initialState: TUploadState = {
  uploadResponse: undefined,
};

const UploadReducer = createReducer(initialState, (handleAction) => [
  handleAction(uploadAction.success, uploadUpdateState),
]);

export default UploadReducer;
