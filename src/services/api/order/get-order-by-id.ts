import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

export type TGetOrderByIdMaterials = string;

export type TGetOrderByIdResponse = TCommonResponse & any;

// FUNCTION

export const getOrderById = async (id: TGetOrderByIdMaterials): Promise<TGetOrderByIdResponse> => {
  const response = await ApiService.get(`/order/${id}`);
  return response.data;
};
