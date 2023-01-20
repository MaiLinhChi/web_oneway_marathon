import { TUploadState } from '@/redux/reducers/upload';
import { TUploadSuccess } from '@/redux/actions/upload';

export const uploadUpdateState = (state: TUploadState, action: TUploadSuccess): TUploadState => ({
  ...state,
  uploadResponse: action.payload.response,
});
