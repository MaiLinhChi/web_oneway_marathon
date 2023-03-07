import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TUploadParams = unknown;
export type TUploadBody = FormData;

export type TUploadMaterials = {
  params?: TUploadParams;
  body?: TUploadBody;
};

export type TUploadResponse = TCommonResponse;
// FUNCTION

export const upload = async ({ params, body }: TUploadMaterials): Promise<TUploadResponse> => {
  const response = await ApiService.post(`/api/users/upload-avatar`, body, { params });
  return response.data;
};
