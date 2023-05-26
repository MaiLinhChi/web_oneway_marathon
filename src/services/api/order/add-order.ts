import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TAddOrderHeaders = {
  groupId?: string;
  products: any;
  email: string;
};

export type TAddOrderMaterials = {
  body?: TAddOrderHeaders;
};

export type TAddOrderResponse = TCommonResponse & any;

// FUNCTION

export const addOrder = async ({ body }: TAddOrderMaterials): Promise<TAddOrderResponse> => {
  const response = await ApiService.post(`/order`, body);
  return response.data;
};
