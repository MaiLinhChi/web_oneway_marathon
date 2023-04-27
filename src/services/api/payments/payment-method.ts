import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetPaymentMethodParams = {
  status: string;
};

export type TGetPaymentMethodMaterials = {
  params?: TGetPaymentMethodParams;
};
export type TGetPaymentMethodResponse = any;
// FUNCTION

export const getPaymentMethod = async (params: TGetPaymentMethodMaterials): Promise<TGetPaymentMethodResponse> => {
  const response = await ApiService.get(`/payment-method`, params);
  return response.data;
};
