import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TAddressParams = unknown;
export type TAddressBody = FormData;

export type TAddressMaterials = {
  params?: TAddressParams;
  body?: TAddressBody;
};
export type TGetAddressResponse = TAddressResponse[];
export type TAddressResponse = {
  data: TAddressResponse[];
  code: string;
  name: string;
  slug?: string;
};
// FUNCTION

export const address = async ({ params }: TAddressMaterials): Promise<TGetAddressResponse> => {
  const response = await ApiService.get(`/api/countries`, { params });
  return response.data;
};
