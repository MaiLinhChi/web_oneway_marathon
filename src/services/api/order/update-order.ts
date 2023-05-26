import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TUpdateOrderId = string;
export type TUpdateOrderBody = any;

export type TUpdateOrderMaterials = {
  id: TUpdateOrderId;
  body: TUpdateOrderBody;
};

export type TUpdateOrderResponse = TCommonResponse & any;

// FUNCTION

export const updateOrder = async ({ id, body }: TUpdateOrderMaterials): Promise<TUpdateOrderResponse> => {
  const response = await ApiService.put(`/order/${id}`, body);
  return response.data;
};
