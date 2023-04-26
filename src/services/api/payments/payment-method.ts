import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetPaymentMethodParams = unknown;

export type TGetPaymentMethodMaterials = {
  params?: TGetPaymentMethodParams;
  body?: any;
};
export type TGetPaymentMethodResponse = any;
// FUNCTION

export const getPaymentMethod = async (): Promise<TGetPaymentMethodResponse> => {
  const response = await ApiService.get(`/payment-method`);
  return response.data;
};
