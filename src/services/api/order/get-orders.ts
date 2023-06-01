import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

export type TGetOrdersParams = {
  email: string;
  marathonId: string;
  groupId?: string;
};

export type TGetOrdersMaterials = {
  params: TGetOrdersParams;
};

export type TGetOrdersResponse = TCommonResponse & any;

// FUNCTION

export const getOrders = async ({ params }: TGetOrdersMaterials): Promise<TGetOrdersResponse> => {
  const response = await ApiService.get(`/orders`, { params });
  return response.data;
};
