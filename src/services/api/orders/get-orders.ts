import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES
export type TGetOrdersParams = {
  email: string;
  marathon: string;
};

export type TGetOrdersHeaders = {
  authorization: string;
};

export type TGetOrdersMaterials = {
  headers?: TGetOrdersHeaders;
  params: TGetOrdersParams;
};

export type TGetOrdersResponse = any | TCommonResponse;

// FUNCTION

export const getOrders = async (materials: TGetOrdersMaterials): Promise<TGetOrdersResponse> => {
  const response = await ApiService.get(`/bib`, materials);
  return response.data;
};
