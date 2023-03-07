import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetPaymentSuccessParams = unknown;

export type TGetPaymentSuccessMaterials = {
  params?: TGetPaymentSuccessParams;
  body?: any;
};
export type TGetPaymentSuccessResponse = any;
// FUNCTION

export const getPaymentSuccess = async ({
  params,
  body,
}: TGetPaymentSuccessMaterials): Promise<TGetPaymentSuccessResponse> => {
  const response = await ApiService.post(`api/payment/detail`, body, { params });
  return response.data.data;
};
