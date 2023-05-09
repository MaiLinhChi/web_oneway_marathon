import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TDistrictParams = unknown;
export type TDistrictBody = unknown;

export type TDistrictMaterials = {
  params?: TDistrictParams;
};
export type TGetDistrictResponse = TCommonResponse & any;
// FUNCTION

export const district = async ({ params }: TDistrictMaterials): Promise<TGetDistrictResponse> => {
  const response = await ApiService.get(`/district`, { params });
  return response.data;
};
