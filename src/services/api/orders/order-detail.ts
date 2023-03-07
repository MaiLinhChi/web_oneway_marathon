import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES
export type TGetOrderDetailPaths = {
  id: string | number;
};

export type TGetOrderDetailParams = unknown;

export type TGetOrderDetailMaterials = {
  params?: TGetOrderDetailParams;
  paths?: TGetOrderDetailPaths;
};

export type TGetOrderDetailResponse = any;

// FUNCTION

export const getOrderDetail = async ({ paths, params }: any): Promise<TGetOrderDetailResponse> => {
  const response = await ApiService.get(`/api/orders/${paths?.id}`, { params });
  return response.data;
};
