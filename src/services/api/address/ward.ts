import ApiService from '@/services/api';

// TYPES

export type TWardParams = unknown;
export type TWardBody = unknown;

export type TWardMaterials = {
  params?: TWardParams;
  body?: TWardBody;
};
export type TGetWardResponse = unknown;
export type TWardResponse = {
  data: {
    wards: TWardResponse[];
  };
  code: string;
  name: string;
  slug?: string;
};
// FUNCTION

export const ward = async ({ params, body }: TWardMaterials): Promise<TGetWardResponse> => {
  const response = await ApiService.post(`/api/wards-by-district`, body, { params });
  return response.data;
};
