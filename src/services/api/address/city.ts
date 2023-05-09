import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TCityParams = unknown;
export type TCityBody = unknown;

export type TCityMaterials = {
  params?: TCityParams;
};
export type TGetCityResponse = TCommonResponse & any;
// FUNCTION

export const city = async ({ params }: TCityMaterials): Promise<TGetCityResponse> => {
  const response = await ApiService.get(`/province`, { params });
  return response.data;
};
