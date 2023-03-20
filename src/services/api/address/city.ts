import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TCityParams = unknown;
export type TCityBody = unknown;

export type TCityMaterials = {
  params?: TCityParams;
  body?: TCityBody;
};
export type TGetCityResponse = unknown;
export type TCityResponse = {
  data: {
    cities: TCityResponse[];
  };
  code: string;
  name: string;
  slug?: string;
};
// FUNCTION

export const city = async ({ params, body }: TCityMaterials): Promise<TGetCityResponse> => {
  const response = await ApiService.post(`/api/cities-by-country`, body, { params });
  return response.data;
};
