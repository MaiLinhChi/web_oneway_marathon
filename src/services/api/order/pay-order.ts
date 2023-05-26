import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TPayOrderHeaders = {
  id: string;
};

export type TPayOrderMaterials = {
  body: TPayOrderHeaders;
};

export type TPayOrderResponse = TCommonResponse & any;

// FUNCTION

export const payOrder = async ({ body }: TPayOrderMaterials): Promise<TPayOrderResponse> => {
  const response = await ApiService.post(`/order/pay`, body);
  return response.data;
};
