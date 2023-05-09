import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TWardParams = unknown;
export type TWardBody = unknown;

export type TWardMaterials = {
  params?: TWardParams;
};
export type TGetWardResponse = TCommonResponse & any;
// FUNCTION

export const ward = async ({ params }: TWardMaterials): Promise<TGetWardResponse> => {
  const response = await ApiService.get(`/ward`, { params });
  return response.data;
};
