import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetPaymentSuccessParams = {
  params: {
    authorization: string;
  };
  id: string;
};

export type TGetPaymentSuccessMaterials = {
  headers?: TGetPaymentSuccessParams;
  body?: any;
};

export type TGetPaymentSuccessResponse = any;
// FUNCTION

export const getPaymentSuccess = async ({
  headers,
  body,
}: TGetPaymentSuccessMaterials): Promise<TGetPaymentSuccessResponse> => {
  const response = await ApiService.put(`bib/${headers?.id}`, body, { headers: headers?.params });
  return response.data;
};
