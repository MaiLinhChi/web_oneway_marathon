import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES
export type TGetOrderDetailPaths = {
  id: string | number;
};

export type TGetOrderDetailParams = unknown;

export type TGetOrderDetailMaterials = {
  paths?: TGetOrderDetailPaths;
};

export type TGetOrderDetailResponse = any;

// FUNCTION

export const getOrderDetail = async ({ paths }: any): Promise<TGetOrderDetailResponse> => {
  const response = await ApiService.get(`/bib/${paths?.id}`);
  return response.data;
};
