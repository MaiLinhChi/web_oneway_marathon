import ApiService from '@/services/api';

// TYPES

export type TDistrictParams = unknown;
export type TDistrictBody = unknown;

export type TDistrictMaterials = {
  params?: TDistrictParams;
  body?: TDistrictBody;
};
export type TGetDistrictResponse = unknown;
export type TDistrictResponse = {
  data: {
    districts: TDistrictResponse[];
  };
  code: string;
  name: string;
  slug?: string;
};
// FUNCTION

export const district = async ({ params, body }: TDistrictMaterials): Promise<TGetDistrictResponse> => {
  const response = await ApiService.post(`/api/districts-by-city`, body, { params });
  return response.data;
};
