import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetPaymentSuccessParams = {
  query: string;
};

export type TGetPaymentSuccessMaterials = {
  headers?: TGetPaymentSuccessParams;
};

export type TGetPaymentSuccessResponse = any;
// FUNCTION

export const getPaymentSuccess = async ({
  headers,
}: TGetPaymentSuccessMaterials): Promise<TGetPaymentSuccessResponse> => {
  const response = await ApiService.get(`ipn${headers?.query}`);
  return response.data;
};
